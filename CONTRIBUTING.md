# 贡献指南

欢迎来加点位、补打法、修坐标。这个项目的**数据就是普通的 JS 文件**，所以标准的 GitHub 协作流程（fork → 改文件 → 提 PR）就是最好的"一起用"方式：合并后 GitHub Pages 会自动更新，所有人刷新即见。

## 三种参与方式，挑最省事的

### 1. 只想加几个点位：用网页的编辑模式（不用碰代码）

打开线上站点 → 右上角 **编辑模式** → 点空白处新增点位、拖动改坐标、调色板选特工和道具 → 最后 **导出 JSON**，把文件贴到 [Issues](../../issues) 里就行。

### 2. 想改源数据：直接改 `data/tactics/<slug>.js`

先读 [`data/SCHEMA.md`](data/SCHEMA.md)，那是数据规范。然后：

```powershell
node tools/validate.js ascent     # 校验数据规范
node tools/voidcheck.js ascent    # 校验点位有没有落进墙里
node tools/serve.js               # 本地开服务器看效果
```

两个校验器都必须 **全绿** 才能提 PR。坐标写不准时对着 `_grid/<slug>_grid.png`（叠加了 10% 网格的小地图）看，**橄榄色方块就是下包区**，是最好的方位锚点。

### 3. 只改界面 / 工具：`app.js`、`styles.css`、`tools/`

改完前请跑一次无头验证，确认没把页面搞崩：

```powershell
node tools/shoot.js _shot/check.png --w 1680 --h 1050
```

它会打印 `ERRORS n`，**必须是 0**。

## 提 PR 前请自查

- [ ] `node tools/validate.js` 全部通过
- [ ] `node tools/voidcheck.js` 全部通过（点位不落在墙体/虚空里）
- [ ] 改过前端的话，`node tools/shoot.js` 输出 `ERRORS 0`
- [ ] 新增点位用了真实存在的特工 slug，**不要用 `miks` / `veto`**（这两个是数据来源里没有的技能图标，会导致图标 404）
- [ ] 新增打法如果配了 `comp`，必须是 5 个真实特工 slug

## 写坐标的小抄

- 坐标是小地图百分比，**左上角为原点**，范围 0–100。
- 每个点位要写清 **站哪 → 看哪 → 怎么投**，这是这个项目最有价值的部分，比坐标本身还重要。
- `from`（站位）和 `x/y`（落点）都要落在可走地面上，别写进墙里。
- 点位写在哪个房间，用 `_grid` 图上的网格刻度估；不确定就多开几次 `voidcheck` 看建议值。

## 数据从哪来

地图小地图、特工头像、技能图标来自公开 API <https://valorant-api.com>；地名坐标换算自官方 Wiki 交互地图；点位与打法由本项目逐图核对到可走地面上。请只提交你有把握的、符合游戏实际的内容。
