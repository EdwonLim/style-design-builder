import { TextStyles } from 'react-sketchapp';
import styled from 'styled-components/primitives';
import chroma from 'chroma-js';

// get textColor by background-color && textType
// bgColor: default #fff
const textColor = (bgColor = '#fff', textType) => {
	const vsWhite = chroma.contrast(bgColor, 'white');
	let opacity = 1;
	if (textType == 'desc') opacity = .54;
	if (textType == 'disabled') opacity = .38;
	if (textType == 'segment') opacity = .14;

	if (vsWhite > 4) {
		if (textType == 'desc') opacity = .7;
		if (textType == 'disabled') opacity = .5;
		if (textType == 'segment') opacity = .24;
		return chroma('#fff')
		.alpha(opacity).css();
	}
	return chroma(bgColor)
		.darken(3)
		.alpha(opacity).css();
};

const styles = {
	font: {},
	Body: styled.View`
		width: 100%;
		backgroundColor: #fff;
		padding: 100px
	`,a:{
        width: '100%',
        backgroundColor: '#fff',
        padding: '100px'
    },
    titleTextOnDarkBG: { 
        fontSize: 64, 
        color: '#fff', 
        marginBottom: 16, 
        lineHeight: 96 
    },
    bodyTextOnDarkBG: { 
        fontSize: 20, 
        color: 'rgba(255, 255, 255, .7)', 
        lineHeight: 30 
    },
    titleTextOnLightBG: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: 'rgba(0, 0, 0, .87)', 
        lineHeight: 32, 
        marginBottom: 32 
    },
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

const colorValue = [{
  name: 'Red',
  value: '#f5222d'
}, {
  name: 'Valcano',
  value: '#fa541c'
}, {
  name: 'Orange',
  value: '#fa8c16'
}, {
  name: 'Gold',
  value: '#faad14'
}, {
  name: 'Yellow',
  value: '#fadb14'
}, {
  name: 'Lime',
  value: '#a0d911'
}, {
  name: 'Green',
  value: '#52c41a'
}, {
  name: 'Cyan',
  value: '#13c2c2'
}, {
  name: 'Blue',
  value: '#1890ff'
}, {
  name: 'GeekBlue',
  value: '#2f54eb'
}, {
  name: 'Purple',
  value: '#722ed1'
}, {
  name: 'Pink',
  value: '#eb2f96'
}];

const fonts = [
  {
    name: 'Headline',
    scene: '导航标题、重要标题',
    fontSize: 20,
    lineHeight: 26
  }, {
    name: 'Title',
    scene: '标题、列表名称',
    fontSize: 18,
    lineHeight: 24
  }, {
    name: 'Subtitle',
    scene: '次级标题',
    fontSize: 16,
    lineHeight: 22
  }, {
    name: 'Body',
    scene: '正文、',
    fontSize: 14,
    lineHeight: 20
  }, {
    name: 'Caption1',
    scene: '描述信息',
    fontSize: 12,
    lineHeight: 16
  }, {
    name: 'Caption2',
    scene: '更小的描述信息',
    fontSize: 10,
    lineHeight: 14
  }
];

// font style
const typeBaseStyles = {
  color: 'rgba(0, 0, 0, .87)',
  fontFamily: 'Pingfang SC'
};

const typeStyles = {};
VARIABLE.font.forEach(item => {
	styles.font[item.name] = styled.Text`
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


export { styles, styleFunc, colorValue, fonts, typeStyles };