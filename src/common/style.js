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

// font style
const typeBaseStyles = {
  color: 'rgba(0, 0, 0, .87)',
  fontFamily: 'Pingfang SC'
};

const typeStyles = {};
VARIABLE.font.forEach(item => {
  fonts[item.name] = styled.Text`
		fontSize: ${item.fontSize};
		lineHeight: ${item.lineHeight};
		color: ${props => textColor(props.bgColor, props.textType)};
	`;
  typeStyles[item.name] = {
    ...typeBaseStyles,
    fontSize: item.fontSize,
    lineHeight: item.lineHeight
  };
});

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
  bodyTextOnDeepBG: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, .7)',
    lineHeight: 24
  },
  bodyTextOnLightBG: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .65)',
    lineHeight: 24
  },
  paletteContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: '80px'
  },
  palette: {
    flexBasis: '23%',
    marginBottom: 64,
    borderRadius: 4
  },
  paletteTitleTextOnLightBG: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, .87)',
    lineHeight: 32,
    marginBottom: 32,
    textAlign: 'center',
    marginBottom: 24
  },
  fontBoxContainerRow: {
    flexDirection: 'row',
    marginBottom: 24
  },
  fontBoxContainer: {
    flexBasis: 140,
    marginRight: 32
  },
  fontBox: {
    marginTop: 8,
    borderWidth: 1,
    height: 140,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingBottom: 12,
    justifyContent: 'flex-end'
  },
  fontDemoName: {
    textAlign: 'center',
    fontSize: 46,
    color: 'rgba(0, 0, 0, .87)',
    lineHeight: 55,
    marginBottom: 12
  },
  fontDemoFamily: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(0, 0, 0, .65)',
    borderWidth: 1,
    borderColor: '#f33'
  },
  fontLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 8
  },
  composeRow: {
    flex: 1,
    flexBasis: 200
  }
};
const styleFunc = {
  paletteItem(bgColor) {
    return { backgroundColor: bgColor, display: 'flex', flexDirection: 'row', padding: 16 };
  },
  paletteItemName(index) {
    return { flex: 1, color: index > 4 ? '#fff' : 'rgba(0, 0, 0, .87)', fontFamily: 'Ayuthaya' };
  },
  paletteItemValue(index) {
    return { flex: 1, textAlign: 'right', color: index > 4 ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .65)', fontFamily: 'Ayuthaya' };
  }
};

export { fonts, styles, styleFunc, typeStyles };