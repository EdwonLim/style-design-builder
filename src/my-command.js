import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet } from 'react-sketchapp';
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
                  return <View style={styles.palette}>
                    <Text style={styles.paletteTitleTextOnLightBG}>{item.name}</Text>
                    {
                      Array.apply(null, Array(10)).map(function (_, i) {
                        const bgColor = colorPalette(item.value, i + 1);
                        return (<View style={ styleFunc.paletteItem(bgColor) }>
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
        </Artboard>
      </Page>
    </Document>);
}

export default (context) => {
  render(<Color />, context.document.currentPage());
}