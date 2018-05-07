import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../common/variables';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;
const BodyText = styles.BodyText.extend`
  textAlign: center;
  color: ${colorList.descLightTextColor};
  marginBottom: 24px;
`;

const Base = styled.View`
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: red;
  borderRadius: ${variables.borderRadius};
  borderWidth: ${props => props.type === 'goast' ? 1 : 0};
  borderStyle: solid;
  borderColor: blue;
`;
const InputItem = styled.View`
  flexDirection: row;
`;
const InputText = fonts.body.extend`
  color: #cdf;
`;
const InputLabel = fonts.body.extend`
  color: ${colorList.descLightTextColor};
`;


// Symbols:
// 默认文本的四种状态
const Symbol_bg_lg_default = makeSymbol(() =>
  <Base>
    <InputText name="Text">默认文本</InputText>
  </Base>
  , 'input/bg/lg/default');
// const Symbol_Primary_lg_hover = makeSymbol(() =>
//   <Base state="hover">
//     <ButtonText name="Text">默认文本</ButtonText>
//   </Base>
//   , 'button/primary/lg/hover');
// const Symbol_Primary_lg_active = makeSymbol(() =>
//   <Base state="active">
//     <ButtonText name="Text">默认文本</ButtonText>
//   </Base>
//   , 'button/primary/lg/active');

// 小型按钮
// const Symbol_Primary_sm_default = makeSymbol(() =>
//   <Base size="sm">
//     <ButtonText name="Text">小型按钮</ButtonText>
//   </Base>
//   , 'button/primary/sm/default');
// // disabled 状态
// const Symbol_lg_disabled = makeSymbol(() =>
//   <Base state="disabled">
//     <ButtonText name="Text">默认文本</ButtonText>
//   </Base>
//   , 'button/lg/disabled');


const Input = () => (
  <View>
    <PanelTitle textType="desc">Input</PanelTitle>
    <Panel>
      <BodyText>带背景的输入框：更强调<Text style={{fontWeight: 'bold'}}>输入</Text></BodyText>
      <InputItem>
        <InputLabel>Normal</InputLabel>
        <Symbol_bg_lg_default overrides={{ 'Text': '默认状态' }} />
      </InputItem>
      <BodyText>透明背景的输入框：更强调<Text style={{ fontWeight: 'bold' }}>浏览</Text></BodyText>
    </Panel>
  </View>
)

export default Input;

