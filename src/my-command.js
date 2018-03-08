import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { colorPalette } from './util';

const styles = StyleSheet.create({
  headerTitle: {
    width: '100%',
    height: 400,
    backgroundColor: '#000',
    padding: '120px 100px'
  },
  body: {
    width: '100%',
    backgroundColor: '#fff',
    padding: '100px'
  },
  titleTextOnDarkBG: { fontSize: 64, color: '#fff', marginBottom: 16, lineHeight: 96 },
  bodyTextOnDarkBG: { fontSize: 20, color: 'rgba(255, 255, 255, .7)', lineHeight: 30 },
  titleTextOnLightBG: { fontSize: 24, fontWeight: 'bold', color: 'rgba(0, 0, 0, .87)', lineHeight: 32, marginBottom: 32 },
  bodyTextOnLightBG: { fontSize: 16, color: 'rgba(0, 0, 0, .65)', lineHeight: 24 },
  paletteContainer: { width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: '80px' },
  palette: { flexBasis: '23%', marginBottom: 64, borderRadius: 4 },
  paletteTitleTextOnLightBG: { fontSize: 24, color: 'rgba(0, 0, 0, .87)', lineHeight: 32, marginBottom: 32, textAlign: 'center', marginBottom: 24 },
  fontBoxContainerRow: { flexDirection: 'row', marginBottom: 24 },
  fontBoxContainer: { flexBasis: 140, marginRight: 32 },
  fontBox: { marginTop: 8, borderWidth: 1, height: 140, borderColor: '#ddd', borderRadius: 4, paddingHorizontal: 20, paddingBottom: 12, justifyContent: 'flex-end' },
  fontDemoName: { textAlign: 'center', fontSize: 46, color: 'rgba(0, 0, 0, .87)', lineHeight: 55, marginBottom: 12},
  fontDemoFamily: { textAlign: 'center', fontSize: 16, color: 'rgba(0, 0, 0, .65)', borderWidth: 1, borderColor: '#f33'},
  fontLine: { width: '100%', height: 1, backgroundColor: '#ddd', marginBottom: 8 },
  composeRow: { flex: 1, flexBasis: 200 },
});
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

// font style
const typeBaseStyles = {
  color: 'rgba(0, 0, 0, .87)',
  fontFamily: 'Pingfang SC'
};
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
const typeStyles = {};
fonts.forEach(item => {
  typeStyles[item.name] = {
    ...typeBaseStyles,
    fontSize: item.fontSize,
    lineHeight: item.lineHeight
  }
});

TextStyles.create({
  context: context,
  clearExistingStyles: true,
}, typeStyles);


const Color = props => {
  return (
    <Document>
      <Page name="Style">
        <Artboard
          name="Color"
          style={{
            width: 1440
          }}
        >
          <View name="header"
            style={ styles.headerTitle }>
            <Text
              style={styles.titleTextOnDarkBG}>Youth Design - 调色板 <Text style={styles.bodyTextOnDarkBG}>v0.1.0 2018-03-05</Text>
            </Text>
            <Text style={styles.bodyTextOnDarkBG}>移动端组件库模板，秉承 Youth Design 青春、未来、科学的设计理念，服务于 QRN、Hy、YIS 等移动端框架</Text>
            <Text style={styles.bodyTextOnDarkBG}>设计语言网址：http://ued.qunar.com/style-guide/</Text>
          </View>
          <View name="body"
            style={ styles.body }>
            <Text style={styles.titleTextOnLightBG}>调色板概述</Text>
            <Text style={styles.bodyTextOnLightBG}>调色板本来是混合各种颜色颜料使用的板，在 Ant Design 中，调色板指的是一份颜色表（如下图），颜色表由一系列具有一定代表性的基本色彩及它们的渐变色组成，我们可以在调色板中寻找需要的颜色并获取颜色值。</Text>
            <View style={styles.paletteContainer}>
              { /* Loop for palette */
                colorValue.map((item, index) => {
                  return <View style={styles.palette} key={index}>
                    <Text style={styles.paletteTitleTextOnLightBG}>{item.name}</Text>
                    {
                      Array.apply(null, Array(10)).map(function (_, i) {
                        const bgColor = colorPalette(item.value, i + 1);
                        return (<View style={ styleFunc.paletteItem(bgColor) } key={i}>
                          <Text style={ styleFunc.paletteItemName(i) }>{item.name + '-' + (i + 1)}</Text>
                          <Text style={ styleFunc.paletteItemValue(i) }>{bgColor}</Text>
                          </View>);
                      })
                    }
                  </View>
                })
              }
            </View>
          </View>
        </Artboard>
        <Artboard
          name="Text"
          style={{ position: 'absolute', width: 1440, left: 1600}}
        >
          <View name="header"
            style={styles.headerTitle}>
            <Text
              style={styles.titleTextOnDarkBG}>Youth Design - 文字 <Text style={styles.bodyTextOnDarkBG}>v0.1.0 2018-03-05</Text>
            </Text>
            <Text style={styles.bodyTextOnDarkBG}>移动端组件库模板，秉承 Youth Design 青春、未来、科学的设计理念，服务于 QRN、Hy、YIS 等移动端框架</Text>
            <Text style={styles.bodyTextOnDarkBG}>设计语言网址：http://ued.qunar.com/style-guide/</Text>
          </View>
          <View name="body"
            style={styles.body}>
            <Text style={styles.titleTextOnLightBG}>字体</Text>
            <View style={styles.fontBoxContainerRow}>
              <View style={styles.fontBoxContainer}>
                <Text style={styles.bodyTextOnLightBG}>中文</Text>
                <View style={styles.fontBox}>
                  <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Pingfang SC' }])}>移</Text>
                  <View style={styles.fontLine}></View>
                  <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Pingfang SC' }])}>Pingfang SC</Text>
                </View>
              </View>
              <View style={styles.fontBoxContainer}>
                <Text style={styles.bodyTextOnLightBG}>英文</Text>
                <View style={styles.fontBox}>
                  <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>Aa</Text>
                  <View style={styles.fontLine}></View>
                  <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
                </View>
              </View>
              <View style={styles.fontBoxContainer}>
                <Text style={styles.bodyTextOnLightBG}>数字</Text>
                <View style={styles.fontBox}>
                  <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>123</Text>
                  <View style={styles.fontLine}></View>
                  <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
                </View>
              </View>
            </View>
            <Text style={styles.bodyTextOnLightBG}>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;</Text>

            <Text style={StyleSheet.flatten([styles.titleTextOnLightBG, { marginTop: 100 }])}>文字排版</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {/* <Text style={{ width: 160 }}>1</Text> */}
              {
                fonts.map((item, index) => {
                  return <View style={{ width: '100%', flexDirection: 'row', marginBottom: 16 }} key={index}>
                    <Text style={{ width: 160, lineHeight: item.lineHeight}}>{item.name}</Text>
                    <Text style={StyleSheet.flatten([TextStyles.get(item.name), { width: 300 }])}>Regular {new Number(item.fontSize).toString()}px/{new Number(item.lineHeight).toString()}px</Text>
                    <Text style={StyleSheet.flatten([TextStyles.get(item.name), { flex: 1 }])}>我是字体 ABCDEFGH 0123456789</Text>
                  </View>
                })
              }
              
            </View>
          </View>
        </Artboard>
      </Page>
    </Document>);
}

export default (context) => {

  render(<Color />, context.document.currentPage());
}