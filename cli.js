#!/usr/bin/env node
const tips = [
  '🖥️ 眉头紧锁盯终端，嘴里念叨"这不对啊"——别人以为你在排查线上故障。',
  '🧘 接水绕远路，路过窗户站一会，这叫"分布式 hydration"。',
  '🚂 终端里跑 sl，火车开过去的那一刻你会笑的。',
  '🪟 打开 pointerpointer.com，动一下鼠标——解压神器。',
  '🐟 开 asciiquarium，养电子鱼不用换水不用喂。',
  '🏃 上厕所带上手机，蹲到腿麻再出来，没人敢催。',
  '🤔 盯着窗外发呆五分钟，此为"架构思考"，谁敢打断？',
  '☕ 泡杯茶，从烧水到喝完，没有半小时下不来。',
  '📊 开个 Excel 疯狂切 Sheet，嘴里念念有词"数据不对"。',
  '💻 cmatrix 代码雨一开，路过的同事觉得你在黑什么。',
  '🏖️ window-swap.com 看别人窗外，假装在出差考察。',
  '🎮 telnet towel.blinkenlights.nl 看 ASCII 星战，这才是正事。',
  '😴 闭眼揉太阳穴半分钟，别人以为你在思考架构，实际在放空。',
  '🐮 cowsay "work is a lie" | lolcat，让牛说出你的心声。',
  '🦥 bastet 俄罗斯方块，输了就当修了一个未知 bug。',
  '📝 把日报模板打开，打一个字删一个字，可持续摸鱼半小时。',
  '🔍 vscode 开 Linux 源码，Ctrl+Shift+F 搜索"TODO"，假装在审计代码。',
  '🪞 在便签上画小人，给每个产品经理画一个墓碑，解压又不出声。',
  '🧮 打开计算器算离退休还有多少天，然后叹口气关掉。',
  '🌐 打开 Hacker News 看评论区吵架，你不写代码但你比谁都懂。',
];

const tip = tips[Math.floor(Math.random() * tips.length)];
console.log(tip);
