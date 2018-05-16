import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const { PanelTitle } = styles;
const colorList = VARIABLE.colorList;

const Container = styled.View`
  width: 375px;
  height: 44px;
  backgroundColor: #fff;
  flexDirection: row;
  paddingHorizontal: 16px;
  alignItems: center;
`;
const BodyText = fonts.subhead.extend`
  lineHeight: 44px;
`;
const Cursor = styled.View`
  height: 22px;
  width: 2px;
  backgroundColor: ${colorList.primaryColor};
  marginLeft: 4px;
`;
const Right = styled.View`
  position: absolute;
  right: 16px;
  height: 44px;
  alignItems: center;
  justifyContent: center;
`;

const Symbol_mobile_input = makeSymbol(() =>
  <Container>
    <BodyText>标题</BodyText>
    <Cursor />
    <Right>{iconfont.close_round_fill('md', colorList.primaryColor)}</Right>
  </Container>
  , 'mobile/input');

const Input = () => (
  <View>
    <PanelTitle textType="desc">Input</PanelTitle>
    <Symbol_mobile_input />
  </View>
)

export default Input;

