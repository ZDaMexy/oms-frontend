import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Maintenance check against the published public portal. No login or writes.
// It deliberately does not share or clear any player's browser cache.
const origin = "https://oms.zdamexy.work";
const routes = new Map([
  ["/", "index.html"], ["/download/", "download/index.html"],
  ["/help/", "help/index.html"], ["/account/", "account/index.html"],
  ["/community/", "community/index.html"], ["/community/new/", "community/new/index.html"],
]);
// Follow the versions actually referenced by the authored pages; a later
// asset revision must not leave this check exercising only a retired URL.
for (const file of [...routes.values()]) {
  const html = readFileSync(new URL("../" + file, import.meta.url), "utf8");
  for (const [, asset] of html.matchAll(/(?:href|src)="(\/portal\/[^\"]+)"/g)) {
    const url = new URL(asset, origin);
    routes.set(url.pathname + url.search, url.pathname.slice(1));
  }
}
const report = { started_at: new Date().toISOString(), origin, status: "running", requests: [], checks: [] };
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");

async function request(route, headers = {}) {
  const response = await fetch(origin + route, { headers, redirect: "error", signal: AbortSignal.timeout(20000) });
  const bytes = Buffer.from(await response.arrayBuffer());
  const record = {
    route, request_headers: headers, status: response.status, bytes: bytes.length, sha256: sha256(bytes),
    headers: Object.fromEntries(["cache-control", "etag", "last-modified", "expires", "age"]
      .map(name => [name, response.headers.get(name)])),
  };
  report.requests.push(record);
  return record;
}

function check(condition, name) {
  report.checks.push({ name, passed: Boolean(condition) });
  assert(condition, name);
}

function revalidates(record) {
  const directives = (record.headers["cache-control"] ?? "").toLowerCase().split(",").map(value => value.trim());
  // Public files may be retained, but every subsequent use must be validated.
  return directives.includes("no-cache") && !directives.some(value => /^(?:s-maxage|max-age)=[1-9]\d*$/.test(value));
}

try {
  assert.equal(process.argv.length, 2, "Usage: node scripts/verify-public-cache.mjs");
  for (const [route, file] of routes) {
    const current = await request(route);
    check(current.status === 200, `${route}: public GET succeeds`);
    check(current.sha256 === sha256(readFileSync(new URL("../" + file, import.meta.url))), `${route}: published bytes match local source`);
    check(revalidates(current), `${route}: every use requires revalidation`);
    check(Boolean(current.headers.etag), `${route}: published validator is present`);
    const unchanged = await request(route, { "If-None-Match": current.headers.etag });
    check(unchanged.status === 304 && unchanged.bytes === 0, `${route}: current validator can reuse unchanged bytes`);
    check(revalidates(unchanged), `${route}: 304 retains the revalidation policy`);
  }
  // The retired physical single-page file was last modified at this time,
  // as observed read-only on 2026-10-05. Its old date must not retain old HTML.
  const oldDate = await request("/", { "If-Modified-Since": "Wed, 03 Jun 2026 05:24:20 GMT" });
  check(oldDate.status === 200 && oldDate.sha256 === report.requests[0].sha256, "retired homepage date returns current HTML");
  // This is an explicitly synthetic unmatched HTTP validator, not a claim
  // that we recovered the user's former cached ETag after their hard reload.
  const unmatched = await request("/", { "If-None-Match": '"oms-unmatched-cache-check"' });
  check(unmatched.status === 200 && unmatched.sha256 === report.requests[0].sha256, "unmatched validator returns current HTML");
  report.status = "passed";
} catch (error) {
  report.status = "failed";
  report.error = error.stack;
  process.exitCode = 1;
}
report.finished_at = new Date().toISOString();
report.limitations = [
  "HTTP validation does not reproduce the player's pre-reload browser cache.",
  "Already fresh older cache entries cannot receive new headers without contacting the server.",
  "Browser refresh/navigation and human feedback are recorded separately.",
];
console.log(JSON.stringify(report, null, 2));
