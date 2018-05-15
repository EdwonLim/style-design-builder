import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';

const { PanelTitle, Panel } = styles;
const BodyText = styles.BodyText.extend`
  width: 136px;
`;
const colorList = VARIABLE.colorList;

const RowView = styled.View`
  width: 494px;
  justifyContent: space-between;
  flexDirection: row;
  alignItems: flex-end;
  padding: 16px 0;
`;
const TitleRowView = styled.View`
  flexDirection: row;
  marginTop: 24px;
`;
const getBgColor = (type, state) => {
  // 幽灵按钮 无背景色
  if (type === 'goast') {
    return 'transparent';
  }
  // 扁平按钮的背景色随状态变化
  if (type === 'flat') {
    if (state === 'hover') {
      return colorList.lightHoverBgColor;
    } else if (state === 'active') {
      return colorList.lightActiveBgColor;
    }
    return 'transparent';
  }
  if (!type || type === 'primary') {
    if (state === 'hover') {
      return colorList.lightPrimaryColor;
    } else if (state === 'active') {
      return colorList.deepPrimaryColor;
    }
  }
  // disabled 状态比较特殊，在各种类型下均保持一致即可
  if (state === 'disabled') {
    return colorList.disableLightTextColor;
  }
  // 默认为主按钮 && 主色
  return colorList.primaryColor;
};
const getTextColor = (type, state) => {
  // 幽灵按钮 无背景色
  if (type === 'goast') {
    if (state === 'hover') {
      return colorList.lightPrimaryColor;
    } else if (state === 'active') {
      return colorList.deepPrimaryColor;
    }
    return colorList.descLightTextColor;
  }
  // 扁平按钮的背景色随状态变化
  if (type === 'flat') {
    return colorList.descLightTextColor;
  }
  // 默认为白色
  return '#fff';
};
const getBorderColor = (type, state) => {
  if (!state || state === 'normal') return colorList.lightHoverBgColor;
  return getTextColor(type, state);
}
const Base = styled.View`
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${props => getBgColor(props.type, props.state)};
  borderRadius: ${variables.borderRadius};
  borderWidth: ${props => props.type === 'goast' ? 1 : 0};
  borderStyle: solid;
  borderColor: ${props => getBorderColor(props.type, props.state)};
`;
const ButtonText = fonts.PCBody.extend`
  color: ${props => getTextColor(props.type, props.state)};
`;

// Symbols:
// 主要按钮的四种状态
const Symbol_Primary_lg_default = makeSymbol(() => {
  return <Base>
    <ButtonText name="Text">主要按钮</ButtonText>
  </Base>
}
  , 'button/primary/lg/default');
const Symbol_Primary_lg_hover = makeSymbol(() =>
  <Base state="hover">
    <ButtonText name="Text">主要按钮</ButtonText>
  </Base>
  , 'button/primary/lg/hover');
const Symbol_Primary_lg_active = makeSymbol(() =>
  <Base state="active">
    <ButtonText name="Text">主要按钮</ButtonText>
  </Base>
  , 'button/primary/lg/active');
// 幽灵按钮的三种状态
const Symbol_Goast_lg_default = makeSymbol(() =>
  <Base type="goast">
    <ButtonText type="goast" name="Text">幽灵按钮</ButtonText>
  </Base>
  , 'button/goast/lg/default');
const Symbol_Goast_lg_hover = makeSymbol(() =>
  <Base type="goast" state="hover">
    <ButtonText type="goast" state="hover" name="Text">幽灵按钮</ButtonText>
  </Base>
  , 'button/goast/lg/hover');
const Symbol_Goast_lg_active = makeSymbol(() =>
  <Base type="goast" state="active">
    <ButtonText type="goast" state="active" name="Text">幽灵按钮</ButtonText>
  </Base>
  , 'button/goast/lg/active');
// 扁平按钮的四种状态
const Symbol_Flat_lg_default = makeSymbol(() =>
  <Base type="flat">
    <ButtonText type="flat" name="Text">扁平按钮</ButtonText>
  </Base>
  , 'button/flat/lg/default');
const Symbol_Flat_lg_hover = makeSymbol(() =>
  <Base type="flat" state="hover">
    <ButtonText type="flat" name="Text">扁平按钮</ButtonText>
  </Base>
  , 'button/flat/lg/hover');
const Symbol_Flat_lg_active = makeSymbol(() =>
  <Base type="flat" state="active">
    <ButtonText type="flat" name="Text">扁平按钮</ButtonText>
  </Base>
  , 'button/flat/lg/active');

// 小型按钮
const Symbol_Primary_sm_default = makeSymbol(() =>
  <Base size="sm">
    <ButtonText name="Text">小型按钮</ButtonText>
  </Base>
  , 'button/primary/sm/default');
// disabled 状态
const Symbol_lg_disabled = makeSymbol(() =>
  <Base state="disabled">
    <ButtonText name="Text">禁止点击</ButtonText>
  </Base>
  , 'button/lg/disabled');


const Button = () => (
  <View>
    <PanelTitle textType="desc">Button</PanelTitle>
    <Panel>
      <BodyText>按钮尺寸</BodyText>
      <RowView style={{ width: '222px' }}>
        <Symbol_Primary_lg_default overrides={{ 'Text': '主要按钮' }} />
        <Symbol_Primary_sm_default overrides={{ 'Text': '主要按钮' }} />
      </RowView>
      <TitleRowView>
        <BodyText>normal</BodyText>
        <BodyText>hover / focus</BodyText>
        <BodyText>active</BodyText>
        <BodyText>disabled</BodyText>
      </TitleRowView>
      <RowView>
        <Symbol_Primary_lg_default overrides={{ 'Text': '主要按钮' }} />
        <Symbol_Primary_lg_hover overrides={{ 'Text': '主要按钮' }} />
        <Symbol_Primary_lg_active overrides={{ 'Text': '主要按钮' }} />
        <Symbol_lg_disabled overrides={{ 'Text': '主要按钮' }} />
      </RowView>
      <RowView>
        <Symbol_Goast_lg_default overrides={{ 'Text': '幽灵按钮' }} />
        <Symbol_Goast_lg_hover overrides={{ 'Text': '幽灵按钮' }} />
        <Symbol_Goast_lg_active overrides={{ 'Text': '幽灵按钮' }} />
        <Symbol_lg_disabled overrides={{ 'Text': '幽灵按钮' }} />
      </RowView>
      <RowView>
        <Symbol_Flat_lg_default overrides={{ 'Text': '扁平按钮' }} />
        <Symbol_Flat_lg_hover overrides={{ 'Text': '扁平按钮' }} />
        <Symbol_Flat_lg_active overrides={{ 'Text': '扁平按钮' }} />
        <Symbol_lg_disabled overrides={{ 'Text': '扁平按钮' }} />
      </RowView>
    </Panel>
  </View>
)

export default Button;
