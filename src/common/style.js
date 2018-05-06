import { TextStyles } from 'react-sketchapp';
import styled from 'styled-components/primitives';
import chroma from 'chroma-js';

// get textColor by background-color && textType
// bgColor: default #fff
const textColor = (bgColor = '#fff', textType) => {
	const vsWhite = chroma.contrast(bgColor, 'white');
	let opacity = .87;
	if (textType == 'desc') opacity = .54;
	if (textType == 'disabled') opacity = .38;
	if (textType == 'segment') opacity = .12;

	if (vsWhite > 4) {
    opacity = 1;
		if (textType == 'desc') opacity = .7;
		if (textType == 'disabled') opacity = .5;
		if (textType == 'segment') opacity = .24;
		return chroma('#fff')
		.alpha(opacity).css();
	}
	return chroma('#000').alpha(opacity).css();
};

const fonts = {};

// 通用字体样式
const typeBaseStyles = {
  color: 'rgba(0, 0, 0, .87)',
  fontFamily: 'Pingfang SC'
};

const typeStyles = {};
VARIABLE.font.forEach(item => {
  // 设置 styled-component 中的字体，便于代码中继承使用
  fonts[item.name] = styled.Text`
		fontSize: ${item.fontSize};
		lineHeight: ${item.lineHeight};
		color: ${props => textColor(props.bgColor, props.textType)};
  `;
  // 将字体配置整理到 typeStyles 对象中，用于下面创建共享文本样式
  typeStyles[item.name] = {
    ...typeBaseStyles,
    fontSize: item.fontSize,
    lineHeight: item.lineHeight
  };
});

// 创建共享文本样式, sketch 里可以下拉选择字体
TextStyles.create({
  context: context,
  clearExistingStyles: true,
}, typeStyles);

const styles = {
  Body: styled.View`
		width: 100%;
		backgroundColor: #fff;
    padding: 100px;
    paddingTop: 0;
  `,
  Title: fonts.headline2.extend`
    marginTop: 100;
    marginBottom: 32;
    fontWeight: bold;
  `,
  Panel: styled.View`
    width: 800px;
    padding: 48px;
    backgroundColor: #fff;
  `,
  PanelTitle: fonts.title.extend`
    marginTop: 64px;
    marginBottom: 24px;
  `,
  BodyText: fonts.body.extend`
    opacity: .7;
  `
};

export { fonts, styles, typeStyles };