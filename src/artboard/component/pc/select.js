import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;
const BodyText = styles.BodyText.extend`
  textAlign: center;
  color: ${colorList.descLightTextColor};
  marginTop: 24px;
  marginBottom: 24px;
`;

const getBgColor = (type, state) => {

  if (type === 'withoutBg') {
    if (state === 'placeholder' || state === 'default') {
      return 'transparent';
    }
  }
  // 默认为主按钮 && 主色
  return colorList.htmlBgolor;
};
const getTextColor = (type, state) => {
  if (!state || state === 'placeholder') {
    return colorList.disableLightTextColor;
  }
  return colorList.descLightTextColor;
}

const Base = styled.View`
  marginBottom: 24px;
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${props => getBgColor(props.type, props.state)};
  borderRadius: ${variables.borderRadius};
  height: 40px;
  flexDirection: row;
  alignItems: center;
`;
const SelectItem = styled.View`
  flexDirection: row;
`;
const SelectText = fonts.PCBody.extend`
  color: ${props => getTextColor(props.type, props.state)};
  marginRight: 8px;
`;
const SelectLabel = styled.View`
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
//     <SelectText name="Text">默认文本</SelectText>
//   </Base>
//   , 'select/bg/lg/default');
// Symbols:
// 默认文本的四种状态
const Symbol_bg_lg_placeholder = makeSymbol(() =>
  <Base state="placeholder">
    <SelectText state="placeholder" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor())}
  </Base>
  , 'select/bg/lg/placeholder');
const Symbol_bg_lg_default = makeSymbol(() =>
  <Base state="default">
    <SelectText state="default" name="Text">已选中项</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('', 'default'))}
  </Base>
  , 'select/bg/lg/default');
const Symbol_bg_lg_focus = makeSymbol(() =>
  <Base state="focus">
    <SelectText state="focus" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('', 'focus'))}
  </Base>
  , 'select/bg/lg/focus');
const Symbol_bg_lg_error = makeSymbol(() =>
  <Base state="error">
    <SelectText state="error" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('', 'error'))}
  </Base>
  , 'select/bg/lg/error');

const Symbol_withoutBg_lg_placeholder = makeSymbol(() =>
  <Base type="withoutBg" state="placeholder">
    <SelectText state="placeholder" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('withoutBg'))}
  </Base>
  , 'select/withoutBg/lg/placeholder');
const Symbol_withoutBg_lg_default = makeSymbol(() =>
  <Base type="withoutBg" state="default">
    <SelectText state="default" name="Text">已选中项</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('withoutBg', 'default'))}
  </Base>
  , 'select/withoutBg/lg/default');
const Symbol_withoutBg_lg_focus = makeSymbol(() =>
  <Base type="withoutBg" state="focus">
    <SelectText state="focus" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('withoutBg', 'focus'))}
  </Base>
  , 'select/withoutBg/lg/focus');
const Symbol_withoutBg_lg_error = makeSymbol(() =>
  <Base type="withoutBg" state="error">
    <SelectText state="error" name="Text">默认文本</SelectText>
    {iconfont.up_triangle_fill('sm', getTextColor('withoutBg', 'error'))}
  </Base>
  , 'select/withoutBg/lg/error');

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


const Select = () => (
  <View>
    <PanelTitle textType="desc">Select</PanelTitle>
    <Panel>

      <BodyText>带背景的选择器：更强调<Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,.87)' }}>选择行为</Text></BodyText>

      <SelectItem>
        <SelectLabel><LabelText>无默认选项:</LabelText></SelectLabel>
        <Symbol_bg_lg_placeholder overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>有默认选项:</LabelText></SelectLabel>
        <Symbol_bg_lg_default overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>selected:</LabelText></SelectLabel>
        <Symbol_bg_lg_focus overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>error:</LabelText></SelectLabel>
        <Symbol_bg_lg_error overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <BodyText>透明背景的选择器：更强调<Text style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, .87)' }}>浏览</Text></BodyText>

      <SelectItem>
        <SelectLabel><LabelText>无默认选项:</LabelText></SelectLabel>
        <Symbol_withoutBg_lg_placeholder overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>有默认选项:</LabelText></SelectLabel>
        <Symbol_withoutBg_lg_default overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>selected:</LabelText></SelectLabel>
        <Symbol_withoutBg_lg_focus overrides={{ 'Text': '请选择' }} />
      </SelectItem>
      <SelectItem>
        <SelectLabel><LabelText>error:</LabelText></SelectLabel>
        <Symbol_withoutBg_lg_error overrides={{ 'Text': '请选择' }} />
      </SelectItem>

    </Panel>
  </View>
)

export default Select;