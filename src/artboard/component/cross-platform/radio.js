import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

const normalSize = 16;
const smallSize = 14;
const innerNormalSize = 8;
const innerSmallSize = 6;

const getIconFont = (type, size='', state) => {
  let color = colorList.descLightTextColor;
  if(state === 'disabled') {
      color = colorList.disableLightTextColor;
  } else if(state === 'active') {
      color = colorList.primaryColor;
  }
  return iconfont[type](size, color)
};

const BodyText = styles.BodyText.extend`
  textAlign: center;
  color: ${colorList.descLightTextColor};
  marginBottom: 24px;
`;
const RowView = styled.View`
  justifyContent: flex-start;
  flexDirection: row;
  padding: 16px 0;
`;
const BaseOuterSelectCircle = styled.View`
  position: relative;
  width: ${props => props.size === 'sm' ? smallSize : normalSize};
  height: ${props => props.size === 'sm' ? smallSize : normalSize};
  borderWidth: ${props => props.selected ? 0 : 1};
  borderStyle: solid;
  borderColor: ${colorList.normalSelectBorderColor};
  backgroundColor: ${(props => props.disabled ? colorList.normalSelectBorderColor : 
    ( props.selected ? colorList.primaryColor : colorList.baseDeepTextColor))};
  borderRadius: 50%;
  marginRight: 16px;
`;

const BaseInnerCircle = styled.View`
  position: absolute;
  width: ${props => props.size === 'sm' ? innerSmallSize : innerNormalSize};
  height: ${props => props.size === 'sm' ? innerSmallSize : innerNormalSize};
  borderWidth: 0;
  borderStyle: solid;
  backgroundColor: ${(props => props.selected ? colorList.baseDeepTextColor : 
    (props.disabled ? colorList.normalSelectBorderColor : colorList.baseDeepTextColor))};
  borderRadius: 50%;
  left: ${props => props.size === 'sm' ? .5 * (smallSize - innerSmallSize) : .5 * (normalSize - innerNormalSize)};
  top: ${props => props.size === 'sm' ? .5 * (smallSize - innerSmallSize) : .5 * (normalSize - innerNormalSize)};
`;
const RadioTextPc = fonts.PCBody.extend`
  color: ${props => props.disabled ? colorList.disableLightTextColor : colorList.descLightTextColor};
`;
const RadioText = fonts.mobileBody.extend`
  color: ${props => props.disabled ? colorList.disableLightTextColor : colorList.descLightTextColor};
`;
const IconView = styled.View`
  marginRight: 16px;
  flexDirection: column;
  justifyContent: center;
`;

// mobile
const UnSelect_lg_default = () => (
  <RowView>
    <IconView>{getIconFont('round', 'lg')}</IconView>
    <RadioText>unselected</RadioText>
  </RowView>
);
const UnSelect_sm_default = () => (
  <RowView>
    {/* <BaseOuterSelectCircle size="sm" /> */}
    <IconView>{getIconFont('round', 'sm')}</IconView>
    <RadioText>unselected</RadioText>
  </RowView>
);
const UnSelect_lg_disabled = () => (
  <RowView>
    {/* <BaseOuterSelectCircle disabled /> */}
    <IconView>{getIconFont('round_fill', 'lg', 'disabled')}</IconView>
    <RadioText disabled>unselected & disabled</RadioText>
  </RowView>
);
const UnSelect_sm_disabled = () => (
  <RowView>
    {/* <BaseOuterSelectCircle size="sm" /> */}
    <IconView>{getIconFont('round_fill', 'sm', 'disabled')}</IconView>
    <RadioText>unselected & disabled</RadioText>
  </RowView>
);

const Selected_lg_default = () => (
  <RowView>
    {/* <BaseOuterSelectCircle selected>
      <BaseInnerCircle selected />
    </BaseOuterSelectCircle> */}
    <IconView>{getIconFont('radiobox_fill', 'lg', 'active')}</IconView>
    <RadioText selected>selected</RadioText>
  </RowView>
);
const Selected_sm_default = () => (
  <RowView>
    {/* <BaseOuterSelectCircle selected size="sm">
      <BaseInnerCircle selected size="sm" />
    </BaseOuterSelectCircle> */}
    <IconView>{getIconFont('radiobox_fill', 'sm', 'active')}</IconView>
    <RadioText selected>selected</RadioText>
  </RowView>
);

const Selected_lg_disabled = () => (
  <RowView>
    {/* <BaseOuterSelectCircle selected disabled>
      <BaseInnerCircle selected disabled />
    </BaseOuterSelectCircle> */}
    <IconView>{getIconFont('radiobox_fill', 'lg', 'disabled')}</IconView>
    <RadioText selected disabled>selected & disabled</RadioText>
  </RowView>
);
const Selected_sm_disabled = () => (
  <RowView>
    {/* <BaseOuterSelectCircle selected disabled size="sm">
      <BaseInnerCircle selected disabled size="sm" />
    </BaseOuterSelectCircle> */}
    <IconView>{getIconFont('radiobox_fill', 'sm', 'disabled')}</IconView>
    <RadioText selected disabled>selected & disabled</RadioText>
  </RowView>
);
// 未选中radio symobol
const Symbol_UnSelect_lg_default = makeSymbol(() => {
  return <UnSelect_lg_default />
}, 'unselect/lg/default');

const Symbol_UnSelected_sm_default = makeSymbol(() => {
  return <UnSelect_sm_default />
}, 'unselect/sm/default');

const Symbol_UnSelect_lg_disabled = makeSymbol(() => {
  return <UnSelect_lg_disabled />  
}, 'unselect/lg/disabled');
const Symbol_UnSelect_sm_disabled = makeSymbol(() => {
  return <UnSelect_sm_disabled />
}, 'unselect/sm/disabled');
// 选中radio symbol
const Symbol_Selected_lg_default = makeSymbol(() => {
  return <Selected_lg_default />
}, 'selected/lg/default');
const Symbol_Selected_sm_default = makeSymbol(() => {
  return <Selected_sm_default />
}, 'selected/sm/default');

const Symbol_Selected_lg_disabled = makeSymbol( () => {
  return <Selected_lg_disabled />
}, 'selected/lg/disabled');
const Symbol_Selected_sm_disabled = makeSymbol( () => {
  return <Selected_sm_disabled />
}, 'selected/sm/disabled');

// pc
const UnSelect_lg_default_PC = () => (
  <RowView>
    <IconView>{getIconFont('round', 'md')}</IconView>
    <RadioText>unselected</RadioText>
  </RowView>
);
const UnSelect_sm_default_PC = () => (
  <RowView>
    <IconView>{getIconFont('round', 'sm')}</IconView>
    <RadioText>unselected</RadioText>
  </RowView>
);
const UnSelect_lg_disabled_PC = () => (
  <RowView>
    {/* <BaseOuterSelectCircle disabled /> */}
    <IconView>{getIconFont('round_fill', 'md', 'disabled')}</IconView>
    <RadioText disabled>unselected & disabled</RadioText>
  </RowView>
);
const UnSelect_sm_disabled_PC = () => (
  <RowView>
    {/* <BaseOuterSelectCircle size="sm" /> */}
    <IconView>{getIconFont('round_fill', 'sm', 'disabled')}</IconView>
    <RadioText>unselected & disabled</RadioText>
  </RowView>
);

const Selected_lg_default_PC = () => (
  <RowView>
    <IconView>{getIconFont('radiobox_fill', 'md', 'active')}</IconView>
    <RadioText selected>selected</RadioText>
  </RowView>
);
const Selected_sm_default_PC = () => (
  <RowView>
    <IconView>{getIconFont('radiobox_fill', 'sm', 'active')}</IconView>
    <RadioText selected>selected</RadioText>
  </RowView>
);

const Selected_lg_disabled_PC = () => (
  <RowView>
    <IconView>{getIconFont('radiobox_fill', 'md', 'disabled')}</IconView>
    <RadioText selected disabled>selected & disabled</RadioText>
  </RowView>
);
const Selected_sm_disabled_PC = () => (
  <RowView>
    <IconView>{getIconFont('radiobox_fill', 'sm', 'disabled')}</IconView>
    <RadioText selected disabled>selected & disabled</RadioText>
  </RowView>
);
// 未选中radio symobol
const PC_Symbol_UnSelect_lg_default = makeSymbol(() => {
  return <UnSelect_lg_default_PC />
}, 'unselect/pc/lg/default');

const PC_Symbol_UnSelected_sm_default = makeSymbol(() => {
  return <UnSelect_sm_default_PC />
}, 'unselect/pc/sm/default');

const PC_Symbol_UnSelect_lg_disabled = makeSymbol(() => {
  return <UnSelect_lg_disabled_PC />  
}, 'unselect/pc/lg/disabled');
const PC_Symbol_UnSelect_sm_disabled = makeSymbol(() => {
  return <UnSelect_sm_disabled_PC />
}, 'unselect/pc/sm/disabled');
// 选中radio symbol
const PC_Symbol_Selected_lg_default = makeSymbol(() => {
  return <Selected_lg_default_PC />
}, 'selected/pc/lg/default');
const PC_Symbol_Selected_sm_default = makeSymbol(() => {
  return <Selected_sm_default_PC />
}, 'selected/pc/sm/default');

const PC_Symbol_Selected_lg_disabled = makeSymbol( () => {
  return <Selected_lg_disabled_PC />
}, 'selected/pc/lg/disabled');
const PC_Symbol_Selected_sm_disabled = makeSymbol( () => {
  return <Selected_sm_disabled_PC />
}, 'selected/pc/sm/disabled');

const Radio = (props) => {
  if (props.platform === 'pc') {
    return <View>
      <PanelTitle textType="desc">Radio</PanelTitle>
      <Panel>
        <PC_Symbol_UnSelect_lg_default />
        <PC_Symbol_Selected_lg_default />
        <PC_Symbol_UnSelect_lg_disabled />
        <PC_Symbol_Selected_lg_disabled />
      </Panel>
    </View>
  }
  return <View>
    <PanelTitle textType="desc">Radio</PanelTitle>
    <Panel>
      <Symbol_UnSelect_lg_default />
      <Symbol_Selected_lg_default />
      <Symbol_UnSelect_lg_disabled />
      <Symbol_Selected_lg_disabled />
    </Panel>
  </View>
};
export default Radio;