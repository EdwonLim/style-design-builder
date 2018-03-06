const tinycolor = require('tinycolor2');

// 根据输入的颜色 获取一条渐变色板
const colorPalette = (color, index) => {
  // letiables
  const hueStep = 2;
  const saturationStep = 16;
  const saturationStep2 = 5;
  const brightnessStep1 = 5;
  const brightnessStep2 = 15;
  const lightColorCount = 5;
  const darkColorCount = 4;

  const getHue = (hsv, i, isLight) => {
    let hue;
    if (hsv.h >= 60 && hsv.h <= 240) {
      hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
    } else {
      hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  };
  const getSaturation = function (hsv, i, isLight) {
    let saturation;
    if (isLight) {
      saturation = Math.round(hsv.s * 100) - saturationStep * i;
    } else if (i == darkColorCount) {
      saturation = Math.round(hsv.s * 100) + saturationStep;
    } else {
      saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }
    if (saturation > 100) {
      saturation = 100;
    }
    if (isLight && i === lightColorCount && saturation > 10) {
      saturation = 10;
    }
    if (saturation < 6) {
      saturation = 6;
    }
    return Math.round(saturation);
  };
  const getValue = function (hsv, i, isLight) {
    if (isLight) {
      return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
  };

  const isLight = index <= 6;
  const hsv = tinycolor(color).toHsv();
  const i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
  return tinycolor({
    h: getHue(hsv, i, isLight),
    s: getSaturation(hsv, i, isLight),
    v: getValue(hsv, i, isLight)
  }).toHexString();
};

// 根据某一种色彩获取浅色背景上文本的颜色
// 由于自然界中不存在纯黑/灰色，因此使用黑灰色的文本不够美观，此函数使用其他颜色经过调和得到文本色更舒适
// @color HexString eg: #00f
// @type String eg: 'body'/'caption'/'disable'/'line'
const getTextColorOnLightBackground = (color, type) => {
  var hsl = tinycolor(color).toHsl();
  var alpha = 1;

  switch (type) {
    case 'body':
      alpha = 1;
      break;
    case 'caption':
      alpha = .65;
      break;
    case 'disable':
      alpha = .43;
      break;
    case 'line':
      alpha = .14;
      break;
    default:
      alpha = 1;
  }

  return tinycolor({
    h: hsl.h,
    s: hsl.s,
    l: .09,
    a: alpha
  }).toRgbString();
};


module.exports = {
  colorPalette,
  getTextColorOnLightBackground
};
