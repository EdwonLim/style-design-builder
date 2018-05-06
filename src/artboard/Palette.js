import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import Header from '../component/Header';
import { colorPalette } from '../common/util';
import { styles, fonts } from '../common/style';
const BodyText = fonts.title.extend``;
import styled from 'styled-components/primitives';

const PaletteContainer = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: space-between;
  paddingTop: 80px;
`;
const Palette = styled.View`
  flexBasis: 23%;
  marginBottom: 64px;
  borderRadius: 4px;
`;
const Title = fonts.headline2.extend`
  marginBottom: 32px;
  textAlign: center;
  marginBottom: 24px;
`;
const PaletteItem = styled.View`
  backgroundColor: ${props => props.bgColor};
  display: flex;
  flexDirection: row;
  padding: 16px;
`;
const PaletteItemName = styled.Text`
  color: ${props => props.index > 4 ? '#fff' : 'rgba(0, 0, 0, .87)'};
  flex: 1;
  fontFamily: Ayuthaya;
`;
const PaletteItemValue = styled.Text`
  color: ${props => props.index > 4 ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .65)'};
  flex: 1;
  fontFamily: Ayuthaya;
  textAlign: right;
`;

const ArtboardColor = () => (
  <Artboard name="Color" style={{ width: 1440 }}>
    <Header>Youth Design - 调色板</Header>
    <styles.Body name="body">
      <styles.Title>调色板概述</styles.Title>
      <BodyText>调色板本来是混合各种颜色颜料使用的板，在 Youth Design 中，调色板指的是一份颜色表（如下图），颜色表由一系列具有一定代表性的基本色彩及它们的渐变色组成，我们可以在调色板中寻找需要的颜色并获取颜色值。</BodyText>
      <PaletteContainer>
        { /* Loop for palette */
          VARIABLE.colorValue.map((item, index) => {
            return <Palette key={index}>
              <Title>{item.name}</Title>
              {
                Array.apply(null, Array(10)).map(function (_, i) {
                const bgColor = colorPalette(item.value, i + 1);
                  return (<PaletteItem bgColor={bgColor} key={i}>
                    <PaletteItemName index={i}>{item.name + '-' + (i + 1)}</PaletteItemName>
                    <PaletteItemValue index={i}>{bgColor}</PaletteItemValue>
                  </PaletteItem>);
                })
              }
            </Palette>
          })
        }
      </PaletteContainer>
    </styles.Body>
  </Artboard>
);
export default ArtboardColor;