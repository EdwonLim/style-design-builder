import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';

const { PanelTitle, Panel } = styles;
const BodyText = styles.BodyText.extend`
  marginTop: 24px;
  marginBottom: 24px;
`;
const colorList = VARIABLE.colorList;

const RowView = styled.View`
  height: 164px;
  justifyContent: space-between;
`;
const getBgColor = (type, state) => {
  // 幽灵按钮 有背景色
  if (type === 'goast') {
    if (state === 'active') {
      return colorList.primaryColor;
    }
    return 'transparent';
  }
  // 扁平按钮的背景色随状态变化
  if (type === 'flat') {
    if (state === 'active') {
      return colorList.lightActiveBgColor;
    }
    return 'transparent';
  }
  if (!type || type === 'primary') {
    if (state === 'active') {
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
  // 幽灵按钮 字体颜色为主色
  if (type === 'goast') {
    if (!state || state === 'ripple' ) {
      return colorList.primaryColor;
    }
  }
  // 扁平按钮的背景色随状态变化
  if (type === 'flat') {
    return colorList.descLightTextColor;
  }
  // 默认为白色
  return '#fff';
};
const getBorderColor = (type, state) => {
  if (type === 'goast') {
    if (!state || state === 'ripple') {
      return colorList.primaryColor;
    }
  }
  if (!state) return colorList.lightHoverBgColor;
  return getTextColor(type, state);
}
const Base = styled.View`
  width: ${props => props.size === 'sm' ? '' : '343px'};
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${props => getBgColor(props.type, props.state)};
  borderRadius: ${variables.borderRadius};
  borderWidth: ${props => props.type === 'goast' ? 1 : 0};
  borderStyle: solid;
  borderColor: ${props => getBorderColor(props.type, props.state)};
`;
const Ripple = styled.View`
  width: 120px;
  height: 120px;
  backgroundColor: ${props => props.type === 'dark' ? props.color || colorList.lightHoverBgColor : colorList.deepActiveBgolor };
  position: absolute;
  left: 111px;
  top: -38px;
  borderRadius: 60px;
`
const ButtonText = fonts.subhead.extend`
  textAlign: center;
  color: ${props => getTextColor(props.type, props.state)};
`;

// Symbols:
// 大型按钮的四种状态
const Symbol_Primary_lg_default = makeSymbol(() =>
  <Base>
    <ButtonText name="Text">大型按钮</ButtonText>
  </Base>
  , 'mobile/button/primary/lg/default');
const Symbol_Primary_lg_active = makeSymbol(() =>
  <Base state="active">
    <ButtonText name="Text">大型按钮: active</ButtonText>
  </Base>
  , 'mobile/button/primary/lg/active');
const Symbol_Primary_lg_active_ripple = makeSymbol(() =>
  <Base state="active">
    <Ripple />
    <ButtonText name="Text">大型按钮: ripple</ButtonText>
  </Base>
  , 'mobile/button/primary/lg/active/ripple');
// 幽灵按钮的三种状态
const Symbol_Goast_lg_default = makeSymbol(() =>
  <Base type="goast">
    <ButtonText type="goast" name="Text">幽灵按钮</ButtonText>
  </Base>
  , 'mobile/button/goast/lg/default');
const Symbol_Goast_lg_active = makeSymbol(() =>
  <Base type="goast" state="active">
    <ButtonText type="goast" state="active" name="Text">幽灵按钮: active</ButtonText>
  </Base>
  , 'mobile/button/goast/lg/active');
const Symbol_Goast_lg_active_ripple = makeSymbol(() =>
  <Base type="goast" state="ripple">
    <Ripple type="dark" color="rgba(46, 197,216, .2)" />
    <ButtonText type="goast" state="ripple" name="Text">幽灵按钮: ripple</ButtonText>
  </Base>
  , 'mobile/button/goast/lg/active/ripple');
// 扁平按钮的四种状态
const Symbol_Flat_lg_default = makeSymbol(() =>
  <Base type="flat">
    <ButtonText type="flat" name="Text">扁平按钮</ButtonText>
  </Base>
  , 'mobile/button/flat/lg/default');
const Symbol_Flat_lg_active = makeSymbol(() =>
  <Base type="flat" state="active">
    <ButtonText type="flat" name="Text">扁平按钮: active</ButtonText>
  </Base>
  , 'mobile/button/flat/lg/active');
const Symbol_Flat_lg_active_ripple = makeSymbol(() =>
  <Base type="flat" state="ripple">
    <Ripple type="dark" />
    <ButtonText type="flat" name="Text">扁平按钮: ripple</ButtonText>
  </Base>
  , 'mobile/button/flat/lg/active/ripple');

// 小型按钮
const Symbol_Primary_sm_default = makeSymbol(() =>
  <Base size="sm">
    <ButtonText name="Text">小型按钮</ButtonText>
  </Base>
  , 'mobile/button/primary/sm/default');
// disabled 状态
const Symbol_lg_disabled = makeSymbol(() =>
  <Base state="disabled">
    <ButtonText name="Text">禁止点击</ButtonText>
  </Base>
  , 'mobile/button/lg/disabled');


const Button = () => (
  <View>
    <PanelTitle textType="desc">Button</PanelTitle>
    <Panel platform="mobile">
      <BodyText>按钮尺寸</BodyText>
      <RowView style={{ height: '96px' }}>
        <Symbol_Primary_lg_default overrides={{ 'Text': '大型按钮' }} />
        <Symbol_Primary_sm_default overrides={{ 'Text': '大型按钮' }} />
      </RowView>
      <BodyText>大型按钮</BodyText>
      <RowView>
        <Symbol_Primary_lg_default overrides={{ 'Text': '大型按钮: default' }} />
        <Symbol_Primary_lg_active overrides={{ 'Text': '大型按钮: active' }} />
        <Symbol_Primary_lg_active_ripple overrides={{ 'Text': '大型按钮: ripple' }} />
      </RowView>
      <BodyText>幽灵按钮</BodyText>
      <RowView>
        <Symbol_Goast_lg_default overrides={{ 'Text': '幽灵按钮' }} />
        <Symbol_Goast_lg_active overrides={{ 'Text': '幽灵按钮' }} />
        <Symbol_Goast_lg_active_ripple overrides={{ 'Text': '大型按钮: ripple' }} />
      </RowView>
      <BodyText>扁平按钮</BodyText>
      <RowView>
        <Symbol_Flat_lg_default overrides={{ 'Text': '扁平按钮' }} />
        <Symbol_Flat_lg_active overrides={{ 'Text': '扁平按钮' }} />
        <Symbol_Flat_lg_active_ripple overrides={{ 'Text': '大型按钮: ripple' }} />
      </RowView>
      <BodyText>禁止点击</BodyText>
      <RowView style={{ height: '44px' }}>
        <Symbol_lg_disabled overrides={{ 'Text': '禁止点击' }} />
      </RowView>
    </Panel>
  </View>
)

export default Button;

