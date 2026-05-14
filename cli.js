#!/usr/bin/env node
const args = process.argv.slice(2);
const hour = new Date().getHours();

const tips = {
  busy: [
    '🖥️ 眉头紧锁盯终端，嘴里念叨"这不对啊"——别人以为你在排查线上故障。',
    '📊 开个 Excel 疯狂切 Sheet，嘴里念念有词"数据不对"。',
    '⌨️ 把代码注释抄一遍，敲键盘声响彻办公室。',
    '🔍 vscode 开 Linux 源码，Ctrl+Shift+F 搜索"TODO"，假装审计代码。',
    '📝 把日报模板打开，打一个字删一个字，可持续摸鱼半小时。',
    '📄 拿着一页打印纸边走边看，去哪儿不知道但你看起来很忙。',
    '📖 对着 confluence 页面发呆，偶尔滚一下鼠标，没人怀疑。',
    '📟 打开终端跑 htop，盯着看两分钟，表情做困惑状。',
    '📋 把上周的周报改个日期重新打开，研究员式重读。',
    '📬 打开 postman，随便发几个 get 请求，看 json 返回点头。',
  ],
  health: [
    '🏃 接水绕远路，路过窗户站一会，这叫"分布式 hydration"。',
    '🚽 上厕所带上手机，蹲到腿麻再出来，没人敢催。',
    '🙆 站起来伸懒腰，发出"啊——"的声音，同事以为你写了一天代码。',
    '🧘 闭眼揉太阳穴半分钟，别人以为你在思考架构，实际在放空。',
    '☕ 泡杯茶，从烧水到喝完，没有半小时下不来。',
    '💬 站起来去问同事一个"技术问题"，聊着聊着变成闲聊。',
    '🧹 擦屏幕擦键盘擦鼠标，保洁阿姐看了都竖大拇指。',
    '📁 整理桌面文件，把图标从一个角拖到另一个角。',
    '🖥️ 调整显示器角度三次，终于找到"最佳工学姿势"。',
    '🚶 下楼买瓶水，绕写字楼走一圈，天气真好。',
  ],
  browser: [
    '🪟 打开 pointerpointer.com，动一下鼠标——解压神器。',
    '🐟 eelslap.com 扇鳗鱼耳光，我也不知道为什么好玩。',
    '🏖️ window-swap.com 看别人窗外，假装在出差考察。',
    '🧻 papertoilet.com 模拟上厕所，声效过于真实慎用。',
    '🗣️ hackernews 看评论区吵架，你不写代码但你很懂。',
    '😤 reddit r/programming 看别人吐槽工作，原来大家都一样。',
    '🆕 producthunt 逛新品，看完觉得世界在进步你在摸鱼。',
    '👤 thispersondoesnotexist.com 看 AI 生成的假人，每个都像你未来同事。',
    '📻 radio.garden 听全球电台，假装在做国际化调研。',
    '🎲 打开维基百科随机文章，学一件完全没用的知识。',
  ],
  terminal: [
    '🚂 终端里跑 sl，蒸汽火车开过去那一刻你会笑的。',
    '💚 cmatrix 代码雨一开，路过的同事觉得你在黑什么。',
    '⭐ telnet towel.blinkenlights.nl 看 ASCII 星战，这才是正事。',
    '🐠 asciiquarium 养电子鱼，不用换水不用喂。',
    '🧱 bastet 俄罗斯方块，输了就当修了一个未知 bug。',
    '🐮 cowsay "work is a lie" | lolcat，让牛说出你的心声。',
    '👾 ninvaders 打飞机，回到 80 年代。',
    '🌤️ curl wttr.in 看天气，终端极客的天气预报。',
    '🔮 fortune | cowsay 让牛给你算命。',
    '💨 yes "I love my job" 看看它跑多快，CPU 风扇在抗议。',
  ],
  philosophy: [
    '🪟 盯着窗外发呆五分钟，此为"架构思考"，谁敢打断？',
    '💩 翻旧代码看自己半年前写的屎山，感慨"我当时在想什么"。',
    '🧮 打开计算器算离退休还有多少天，然后叹口气关掉。',
    '💰 看工资条叹气，然后打开招聘软件看一眼又关掉。',
    '🪦 在便签上画小人，给每个产品经理画一个墓碑。',
    '🍜 思考午饭吃什么——比写代码重要多了，这是一天的核心决策。',
    '✍️ 写一份离职信存草稿，然后勇敢地... 不发送。',
    '🎤 打开 TED 看一个演讲，看完觉得自己很上进其实在摸鱼。',
    '😮 刷脉脉看别人工资，然后更郁闷了。',
    '⬛ 对着空白 terminal 发呆，这叫"技术选型前的深思"。',
  ],
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTimePhrase(h) {
  if (h < 9) return '还没上班你就摸？优秀。\n';
  if (h < 12) return '上午适合低调摸鱼，稳住。\n';
  if (h < 14) return '午饭后困得要命，摸得理直气壮。\n';
  if (h < 17) return '下午漫长，坚持摸下去。\n';
  return '快下班了，最后的狂欢。\n';
}

function timeAware(h) {
  if (h < 12) return [...tips.health, ...tips.busy];
  if (h < 17) return [...tips.browser, ...tips.terminal, ...tips.philosophy];
  const prefix = '还有不到一小时下班——';
  return tips.philosophy.map(t => prefix + t.replace(/^[^\s]+\s/, ''));
}

function combo() {
  const a = pick(tips.busy).replace(/^[^\s]+\s/, '');
  const b = pick([...tips.terminal, ...tips.browser]).replace(/^[^\s]+\s/, '');
  const c = pick(tips.health).replace(/^[^\s]+\s/, '');
  return `🎭 假装：${a}\n🎮 放松：${b}\n🧘 养生：${c}`;
}

function dailyPlan(h) {
  const m = pick(tips.health).replace(/^[^\s]+\s/, '');
  const a = pick([...tips.busy, ...tips.browser, ...tips.terminal]).replace(/^[^\s]+\s/, '');
  const e = pick([...tips.philosophy, ...tips.terminal]).replace(/^[^\s]+\s/, '');
  return `🌅 上午：${m}\n☀️ 下午：${a}\n🌇 快下班：${e}`;
}

// Main
if (args.includes('--plan') || args.includes('-p')) {
  console.log(dailyPlan(hour));
} else if (args.includes('--combo') || args.includes('-c')) {
  console.log(combo());
} else {
  console.log(getTimePhrase(hour) + pick(timeAware(hour)));
}
