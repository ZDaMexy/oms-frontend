import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const pages = new Map([
  ["/", "index.html"], ["/community/", "community/index.html"],
  ["/community/new/", "community/new/index.html"],
  ["/community/posts/1/", "community/topic.html"],
  ["/download/", "download/index.html"], ["/help/", "help/index.html"],
  ["/account/", "account/index.html"], ["/ir/", "ir/index.html"],
]);
// These assets are generated from committed Backend inputs by the release
// exporter. Its exact whitelist and checksums are verified before deployment.
const generatedAssets = new Set([
  "/ir/adapters/omsir-beatoraja-0.8.8-0.1.0.jar",
  "/ir/adapters/omsir-lr2oraja-build11611350155-0.1.0.jar",
  "/ir/adapters/omsir-ed-v0.4.0-0.1.0.jar",
  "/ir/adapters/OmsIR-v260915.x64.dll", "/ir/adapters/OmsIR-v260915.x86.dll",
  "/ir/adapters/nlohmann-json-LICENSE.MIT.txt", "/ir/adapters/zlib-LICENSE.txt", "/ir/adapters/versions.json",
]);

// Check authored navigation, assets and CSP constraints. Runtime behavior and
// layout are verified separately in a real browser against an isolated API.
function startTags(html) {
  return [...html.matchAll(/<([a-z][\w-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map((match) => ({
    name: match[1].toLowerCase(),
    attrs: Object.fromEntries([...match[2].matchAll(/([^\s=/'">]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)]
      .map((attr) => [attr[1], attr[2] ?? attr[3] ?? attr[4] ?? ""])),
  }));
}

export function verifyPortal(directory) {
  const records = new Map([...pages].map(([url, file]) => {
    const html = readFileSync(resolve(directory, file), "utf8");
    const tags = startTags(html);
    const ids = tags.filter(({ attrs }) => Object.hasOwn(attrs, "id")).map(({ attrs }) => attrs.id);
    assert.equal(new Set(ids).size, ids.length, `${file}: duplicate HTML ID`);
    return [url, { file, html, tags, ids }];
  }));
  const scripts = new Set();
  const css = new Set();
  let references = 0;

  function checkReference(value, ownerUrl, ownerFile) {
    if (/^(?:[a-z][\w+.-]*:|\/\/)/i.test(value)) return;
    const url = new URL(value, "https://oms.invalid" + ownerUrl);
    if (generatedAssets.has(url.pathname)) {
      assert(!url.hash && !url.search, `${ownerFile}: generated download cannot have an unverified variant`);
      references += 1;
      return url.pathname.slice(1);
    }
    const page = records.get(url.pathname);
    const file = page?.file ?? decodeURIComponent(url.pathname.slice(1));
    const target = resolve(directory, file);
    const local = relative(directory, target);
    assert(!local.startsWith(".." + sep) && !local.startsWith(sep), `${ownerFile}: reference escapes website`);
    assert(existsSync(target) && statSync(target).isFile(), `${ownerFile}: missing route or asset ${value}`);
    if (url.hash && page) {
      const anchor = decodeURIComponent(url.hash.slice(1));
      assert(page.ids.includes(anchor) || (url.pathname === "/ir/" && anchor === "history"), `${ownerFile}: unknown anchor ${value}`);
    }
    references += 1;
    return file;
  }

  for (const [url, { file, html, tags, ids }] of records) {
    assert(/<html\s+lang="zh-CN"/.test(html), `${file}: page language is required`);
    assert(tags.some(({ name, attrs }) => name === "meta" && attrs.name === "viewport"), `${file}: missing viewport`);
    assert.equal(ids.filter(id => id === "site-account").length, 1, `${file}: shared account entry is required`);
    const nav = html.match(/<nav\b[^>]*class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert(nav, `${file}: missing shared navigation`);
    assert.deepEqual(startTags(nav).filter(({ name }) => name === "a").map(({ attrs }) => attrs.href),
      ["/", "/community/", "/download/", "/ir/", "/help/"], `${file}: navigation differs`);
    const loaded = [];
    for (const { name, attrs } of tags) {
      assert(!Object.keys(attrs).some(key => key === "style" || /^on/i.test(key)), `${file}: inline CSS or event handler violates CSP`);
      for (const attribute of ["src", "href"]) if (attrs[attribute]) checkReference(attrs[attribute], url, file);
      if (name === "label" && attrs.for) assert(ids.includes(attrs.for), `${file}: label has no field ${attrs.for}`);
      if (name === "script") {
        assert(attrs.src && !/^(?:[a-z][\w+.-]*:|\/\/)/i.test(attrs.src), `${file}: scripts must be self-hosted`);
        assert(Object.hasOwn(attrs, "defer") && !Object.hasOwn(attrs, "async"), `${file}: preserve deferred script order`);
        const source = checkReference(attrs.src, url, file);
        scripts.add(source);
        loaded.push(source);
      }
      if (name === "link" && attrs.rel === "stylesheet") {
        assert(!/^(?:[a-z][\w+.-]*:|\/\/)/i.test(attrs.href), `${file}: CSS must be self-hosted`);
        css.add(checkReference(attrs.href, url, file));
      }
    }
    assert.equal(loaded[0], "portal/site.js", `${file}: load the shared account before page behavior`);
    if (["/", "/community/", "/community/new/", "/community/posts/1/"].includes(url)) {
      assert.deepEqual(loaded, ["portal/site.js", "portal/community.js"], `${file}: community scripts differ`);
    }
  }
  for (const file of css) {
    for (const match of readFileSync(resolve(directory, file), "utf8").matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
      checkReference(match[1].trim(), "/" + file, file);
    }
  }
  for (const file of scripts) execFileSync(process.execPath, ["--check", resolve(directory, file)], { stdio: "pipe" });
  return { pages: pages.size, references, scripts: scripts.size, stylesheets: css.size };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.equal(process.argv.length, 2, "Usage: node scripts/verify.mjs");
  console.log(`PASS ${JSON.stringify(verifyPortal(root))}`);
  console.log("Scope: static routes, navigation, anchors, labels, assets, script syntax and CSP. The eight fixed generated adapter assets require exporter/provenance and deployed HTTP verification; browser/API checks are separate.");
}
