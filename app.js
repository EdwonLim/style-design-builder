const fs = require('fs');
const config = require('./src/common/config').CONFIG;

let res = '';

// 色轮
config.colorValue.forEach(item => {
  res += `$sgb-${item.name.toLocaleLowerCase()}: ${item.value};\n`
});

res += '\n';

// 功能色
config.colorList.func.forEach(item => {
  res += `$sgb-${item.name}: ${item.color};\n`
});

res += '\n';

// 主色辅助色
res += `$sgb-primary: ${config.colorList.primaryColor};\n`;
res += `$sgb-secondary: ${config.colorList.secondaryColor};\n`;

res += '\n';

// 文本
let remFontsize = '';
config.font.forEach(item => {
  if (item.name === 'PCBody') {
    remFontsize = item.fontSize;
    res += `html { font-size: ${remFontsize}px };\n`
  }
})
config.font.forEach(item => {
  res += `$sgb-${item.name.toLocaleLowerCase()}: ${(item.fontSize / remFontsize).toFixed(7)}rem;\n`
})

fs.writeFile('bootstrap/_sgb-variables.scss', res, (err) => {
  if (err) throw err;
  console.log('导出成功');
});