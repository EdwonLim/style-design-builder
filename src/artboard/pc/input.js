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

const getBgColor = (type, state) => {

  // 扁平按钮的背景色随状态变化
  // if (state === 'flat') {
  //   if (state === 'focus') {
  //     return colorList.lightHoverBgColor;
  //   } else if (state === 'active') {
  //     return colorList.lightActiveBgColor;
  //   }
  //   return 'transparent';
  // }
  // if (!type || type === 'primary') {
  //   if (state === 'focus') {
  //     return colorList.lightPrimaryColor;
  //   } else if (state === 'active') {
  //     return colorList.deepPrimaryColor;
  //   }
  // }
  // // disabled 状态比较特殊，在各种类型下均保持一致即可
  // if (state === 'disabled') {
  //   return colorList.disableLightTextColor;
  // }
  // 默认为主按钮 && 主色
  return colorList.htmlBgolor;
};
const getTextColor = (type, state) => {
  if (!state || state === 'default') {
    return colorList.disableLightTextColor;
  }
  return colorList.descLightTextColor;
}
const getBorderColor = (state) => {
  if (state === 'focus') return colorList.func[1].color;
  if (state === 'error') return colorList.func[0].color;
  return 'transparent';
}
const Base = styled.View`
  width: 484px;
  marginBottom: 24px;
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${props => getBgColor(props.type, props.state)};
  borderRadius: ${variables.borderBottomRadius};
  borderBottomWidth: 2;
  borderBottomStyle: solid;
  borderBottomColor: ${props => getBorderColor(props.state)};
  height: 40px;
`;
const InputItem = styled.View`
  flexDirection: row;
`;
const InputText = fonts.PCBody.extend`
  color: ${props => getTextColor(props.type, props.state)};
`;
const InputLabel = styled.View`
  width: 130px;
  height: 40px;
  marginRight: 16px;
  justifyContent: center;
`;

const LabelText = fonts.PCBody.extend`
  color: ${colorList.descLightTextColor};
  textAlign: right;
`;


// const Symbol_bg_sm_default = makeSymbol(() =>
//   <Base size="sm">
//     <InputText name="Text">默认文本</InputText>
//   </Base>
//   , 'input/bg/lg/default');
// Symbols:
// 默认文本的四种状态
const Symbol_bg_lg_default = makeSymbol(() =>
  <Base state="default">
    <InputText state="default" name="Text">默认文本</InputText>
  </Base>
  , 'input/bg/lg/default');
const Symbol_bg_lg_focus = makeSymbol(() =>
  <Base state="focus">
    <InputText state="focus" name="Text">默认文本</InputText>
  </Base>
  , 'input/bg/lg/focus');
const Symbol_bg_lg_error = makeSymbol(() =>
  <Base state="error">
    <InputText state="error" name="Text">默认文本</InputText>
  </Base>
  , 'input/bg/lg/error');
const Symbol_bg_lg_complete = makeSymbol(() =>
  <Base state="complete">
    <InputText state="complete" name="Text">默认文本</InputText>
  </Base>
  , 'input/bg/lg/complete');
// const Symbol_Primary_lg_focus = makeSymbol(() =>
//   <Base state="focus">
//     <ButtonText name="Text">默认文本</ButtonText>
//   </Base>
//   , 'button/primary/lg/focus');
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
      <BodyText>带背景的输入框：更强调<Text style={{ fontWeight: 'bold' }}>输入</Text></BodyText>
      <InputItem>
        <InputLabel><LabelText>Normal:</LabelText></InputLabel>
        <Symbol_bg_lg_default overrides={{ 'Text': '请输入' }} />
      </InputItem>
      <InputItem>
        <InputLabel><LabelText>Normal:</LabelText></InputLabel>
        <Symbol_bg_lg_focus overrides={{ 'Text': '请输入' }} />
      </InputItem>
      <InputItem>
        <InputLabel><LabelText>Normal:</LabelText></InputLabel>
        <Symbol_bg_lg_error overrides={{ 'Text': '请输入' }} />
      </InputItem>
      <InputItem>
        <InputLabel><LabelText>Normal:</LabelText></InputLabel>
        <Symbol_bg_lg_complete overrides={{ 'Text': '请输入' }} />
      </InputItem>
      <BodyText>透明背景的输入框：更强调<Text style={{ fontWeight: 'bold' }}>浏览</Text></BodyText>
    </Panel>
  </View>
)

export default Input;

