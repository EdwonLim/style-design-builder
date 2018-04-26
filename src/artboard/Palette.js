import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import Header from '../component/Header';
import { colorPalette } from '../util';
import { styles, styleFunc } from '../common/style';

const ArtboardColor = () => (
  <Artboard name="Color" style={{ width: 1440 }}>
    <Header>Youth Design - 调色板</Header>
    <styles.Body name="body">
      <styles.Title>调色板概述</styles.Title>
      <Text style={styles.bodyTextOnLightBG}>调色板本来是混合各种颜色颜料使用的板，在 Ant Design 中，调色板指的是一份颜色表（如下图），颜色表由一系列具有一定代表性的基本色彩及它们的渐变色组成，我们可以在调色板中寻找需要的颜色并获取颜色值。</Text>
      <View style={styles.paletteContainer}>
        { /* Loop for palette */
          VARIABLE.colorValue.map((item, index) => {
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
    </styles.Body>
  </Artboard>
);
export default ArtboardColor;