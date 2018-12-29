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

// 文本字号
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

// 文本色板
res += '\n';
res += `$sgb-htmlBgColor: ${config.colorList.htmlBgColor};\n`; // 6%
res += `$sgb-lightHoverBgColor: ${config.colorList.lightHoverBgColor};\n`; // 10%
res += `$sgb-segmentLightTextColor: ${config.colorList.segmentLightTextColor};\n`; // 12%
res += `$sgb-lightActiveBgColor: ${config.colorList.lightActiveBgColor};\n`; // 20%
res += `$sgb-disableLightTextColor: ${config.colorList.disableLightTextColor};\n`; // 38%
res += `$sgb-descLightTextColor: ${config.colorList.descLightTextColor};\n`; // 54%
res += `$sgb-baseLightTextColor: ${config.colorList.baseLightTextColor};\n`; // 87%

fs.writeFile('bootstrap/_sgb-variables.scss', res, (err) => {
  if (err) throw err;
  console.log('导出成功');
});