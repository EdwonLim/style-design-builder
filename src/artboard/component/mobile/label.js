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
const Right = styled.View`
  position: absolute;
  right: 16px;
  height: 44px;
  alignItems: center;
  justifyContent: center;
`;

const Symbol_mobile_label = makeSymbol(() =>
  <Container>
    <BodyText>标签标题</BodyText>
    <Right>{iconfont.right('md', colorList.descLightTextColor)}</Right>
  </Container>
  , 'mobile/label');

const Label = () => (
  <View>
    <PanelTitle textType="desc">Label</PanelTitle>
    <Symbol_mobile_label />
  </View>
)

export default Label;

