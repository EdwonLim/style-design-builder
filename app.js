const fs = require('fs');
const tinycolor = require("tinycolor2");
const config = require('./src/common/config').CONFIG;

let res = '';
const mixColor = (front, back) => {
  var rgbFront = tinycolor(front).toRgb();
  var rgbBack = tinycolor(back).toRgb();
  var alphaFront = rgbFront.a;
  var mixR = alphaFront * rgbFront.r + (1 - alphaFront) * rgbBack.r;
  var mixG = alphaFront * rgbFront.g + (1 - alphaFront) * rgbBack.g;
  var mixB = alphaFront * rgbFront.b + (1 - alphaFront) * rgbBack.b;
  var res = tinycolor({ r: mixR, g: mixG, b: mixB }).toHexString();
  return res;
};

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

// 文本色板 浅色前景色与白色混合，得出非半透明颜色，用于 bootstrap 计算文本黑白色的使用
res += '\n';
res += `$sgb-htmlBgColor: ${mixColor(config.colorList.htmlBgColor, '#fff')};\n`; // 6%
res += `$sgb-lightHoverBgColor: ${mixColor(config.colorList.lightHoverBgColor, '#fff')};\n`; // 10%
res += `$sgb-segmentLightTextColor: ${mixColor(config.colorList.segmentLightTextColor, '#fff')};\n`; // 12%
res += `$sgb-lightActiveBgColor: ${mixColor(config.colorList.lightActiveBgColor, '#fff')};\n`; // 20%
res += `$sgb-disableLightTextColor: ${mixColor(config.colorList.disableLightTextColor, '#fff')};\n`; // 38%
res += `$sgb-descLightTextColor: ${config.colorList.descLightTextColor};\n`; // 54%
res += `$sgb-baseLightTextColor: ${config.colorList.baseLightTextColor};\n`; // 87%

fs.writeFile('bootstrap/_sgb-variables.scss', res, (err) => {
  if (err) throw err;
  console.log('导出成功');
});