# LabKit 工具扩展示例（本地副本）

对应社区仓库 `Funvvell/labkit-plugin-template`。演示**只注册工具**的包：
`manifest.kind = "tool"`，`main.js` 只调用 `LabKit.registerTool()`。

- `manifest.json`：`kind` 必须是 `tool`；
- `main.js`：一个示例工具（classic script）；
- `styles.css`：带 `x-starter-` 前缀的专属样式；
- `.github/workflows/release.yml`：打 tag 自动创建 Release 并上传三个资产。

卡片扩展见同级的 `labkit-plugin-template-widget/`（`kind = "widget"`，只调 `registerWidget`）。

> P5 起一个包只能属于一类：工具装到「工具库 → 获取更多工具」，卡片装到
> 「首页 → + 添加卡片 → 获取卡片」。旧式 `kind: "both"` 仍可安装，但扩展管理页会
> 标「旧式合并包」，且两侧注册都会被记录以便排查。

## 调试

1. 把本目录复制到任意位置，改 `manifest.json` 的 `id` / `name`。
2. LabKit →「扩展管理」→ 载入为「工具扩展」→ 选该目录。
3. 改完 `main.js` 后重新载入即可（相同版本会原子替换）。

## 发布

```bash
git tag v1.1.0 && git push origin v1.1.0
```

Release 生成后，到索引仓库 `Funvvell/labkit-plugins` 的 `tools.json` 追加条目并发 PR。
详见主仓库 `docs/PLUGIN_DEV.md`。
