#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const cwd = process.env.INIT_CWD || process.cwd();
const cmdsDir = path.join(cwd, '.claude', 'commands');
const src = path.join(__dirname, 'moyu.md');
const dest = path.join(cmdsDir, 'moyu.md');

fs.mkdirSync(cmdsDir, { recursive: true });
fs.copyFileSync(src, dest);

console.log('🐟 摸鱼 skill 安装完成！');
console.log('   下次在 Claude Code 里说"摸鱼"，我就知道该干嘛了。');
console.log('');
console.log('   摸鱼方案已就绪，工资照拿，活不干。');
