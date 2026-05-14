# 摸鱼 / MoYu

> 专业摸鱼二十年，工资照拿活不干。

一个 Claude Code 摸鱼助手 skill。当你无聊、不想动、不知道怎么混过这一天时，它给你一个短小精悍的摸鱼方案。

## 安装

### npm（推荐）

```bash
npm install -g moyu-skill
```

在任意 Claude Code 项目目录下跑一次 `npm install moyu-skill`，skill 会自动装到 `.claude/commands/` 里。

装完在 Claude Code 里说"摸鱼"就行。

### 手动

```bash
cp moyu.md ~/your-project/.claude/commands/moyu.md
```

## 使用

在 Claude Code 里随便说一句：

"摸鱼" | "无聊" | "不想工作" | "好困" | "怎么混" | "摸一会" | "没意思"

它回你一句话，不超过 30 字，但能乐半天。不问"还要吗"，不催工作。

### CLI 模式

装完后也能直接在终端跑：

```bash
npx moyu    # 随机一条摸鱼方案
```

## 触发词速查

| 关键词 | 效果 |
|--------|------|
| 摸鱼 / moyu / 划水 | 随机方案 |
| 无聊 / 好困 / 不想动 | 养生系方案 |
| 怎么混 / 如何假装 | 假装很忙系方案 |
| 摸一会 / 有什么好玩的 | 终端或浏览器玩具 |
| 没意思 / 活着好累 | 哲学系方案 |

## 摸鱼方案分类

- **假装很忙系** — 开 Excel 切 Sheet、对终端皱眉、敲键盘但要确保不产出
- **养生系** — 接水绕远路、上厕所蹲到腿麻、伸懒腰发出"啊——"
- **浏览器系** — eelslap.com、pointerpointer.com、看别人窗外
- **终端系** — sl、cmatrix、telnet ASCII 星战
- **哲学系** — 对着窗外发呆叫"架构思考"、算退休倒计时

## 原则

1. 有趣
2. 一句话，不超过 30 字
3. 绝不建议去工作
4. 不连续两次给同类方案

## 为什么要有这个 skill

上班已经很累了，有时候你的大脑只需要一个理由慢下来。这个 skill 就是那个理由。

---

Made with 🦥 by professional slackers.

## License

WTFPL — Do What The Fuck You Want To Public License
