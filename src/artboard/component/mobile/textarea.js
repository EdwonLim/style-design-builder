import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const { PanelTitle } = styles;
const colorList = VARIABLE.colorList;

const getTextColor = (type) => {
  if (type === 'input') return colorList.baseLightTextColor;
  if (type === 'error') return '#ff4f5f';
  return colorList.disableLightTextColor;
};

const Container = styled.View`
  width: 375px;
  height: 128px;
  backgroundColor: #fff;
  flexDirection: row;
  padding: 16px;
`;
const BodyText = fonts.subhead.extend`
  color: ${props => props.type === 'placeholder' ? colorList.disableLightTextColor : colorList.baseLightTextColor};
`;
const InputText = fonts.subhead.extend`
  color: ${props => getTextColor(props.type)};
`;
const TotalText = fonts.subhead.extend`
  color: ${colorList.disableLightTextColor};
`;
const Counter = styled.View`
  position: absolute;
  right: 16px;
  bottom: 16px;
  flexDirection: row;
`;
const Empty = styled.View`
  height: 24px;
`;

const Symbol_mobile_textarea_placeholder = makeSymbol(() =>
  <Container>
    <BodyText type="placeholder">标签标题</BodyText>
    <Counter>
      <InputText>0</InputText>
      <TotalText> / 100</TotalText>
    </Counter>
  </Container>
  , 'mobile/textarea/placeholder');
const Symbol_mobile_textarea_input = makeSymbol(() =>
  <Container>
    <BodyText type="input">输入文本</BodyText>
    <Counter>
      <InputText type="input">4</InputText>
      <TotalText> / 100</TotalText>
    </Counter>
  </Container>
  , 'mobile/textarea/input');
const Symbol_mobile_textarea_error = makeSymbol(() =>
  <Container>
    <BodyText type="error">输入的文本字数超过限制</BodyText>
    <Counter>
      <InputText type="error">110</InputText>
      <TotalText> / 100</TotalText>
    </Counter>
  </Container>
  , 'mobile/textarea/error');

const Textarea = () => (
  <View>
    <PanelTitle textType="desc">Placeholder</PanelTitle>
    <Symbol_mobile_textarea_placeholder />
    <Empty />
    <Symbol_mobile_textarea_input />
    <Empty />
    <Symbol_mobile_textarea_error />
  </View>
)

export default Textarea;