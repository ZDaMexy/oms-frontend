# 共享主机存储清理（2026-11-02）

本页在 Homepage 与 OMS Website 中同名镜像。共享主机的本轮盘账、百度网盘归档、来源释放及最后验证只取 [OMS Web 存储记录](../../../oms-web/doc_md/storage-offload-20261102.md)，工具与恢复合同只取 [Backend 冷归档](../../../../oms-server/oms-backend/doc_md/other/cold-archive.md)。

缓存及历史日志已按原生机制清理；系统 journal 预算接续为 128 MiB / 14 天，OMS namespace 为 32 MiB / 14 天。历史发布、旧运行时和维护材料已在完整云端下载校验后释放；阿里云本机客户端及旧维护工具已退役，云端计划由用户确认暂停，既有恢复点保留。当前业务数据、运行版本、固定 helper 与只读图库留主机。冷归档索引与普通完整恢复点分开，希洛在线认知资料不进入历史追加备份。

这是存储维护，不是 Homepage / OMS 应用发布或 Shiro 候选激活；Nginx、TLS、网页内容和部署 hook 没有因此变更。最终双站与调度状态沿权威记录，不把历史检查日期刷新成本轮结果。
