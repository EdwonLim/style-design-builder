import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../common/variables';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

const Rail = styled.View`
  position: absolute;
  width: 100%;
  height: 4px;
  backgroundColor: ${props => props.state === 'hover' ? colorList.lightHoverBgColor : colorList.htmlBgolor};
  borderRadius: 2px;
`;
const Track = styled.View`
  width: ${props => props.value};
  height: 4px;
  position: absolute;
  left: ${props => props.start || 0}
  backgroundColor: ${props => props.state === 'hover' ? colorList.deepPrimaryColor : colorList.lightPrimaryColor};
  borderRadius: 4px;
`;
const SliderHandler = styled.View`
  width: 14px;
  height: 14px;
  position: absolute;
  left: ${props => props.value};
  marginTop: -5px;
  marginLeft: -7px;
  borderRadius: 50%;
  borderWidth: 2px;
  borderStyle: solid;
  borderColor: ${props => props.state === 'hover' ? colorList.deepPrimaryColor : colorList.lightPrimaryColor};
  backgroundColor: #fff;
`;
const SliderWarp = styled.View`
  position: relative;
  width: 442px;
  height: 12px;
  marginTop: 14px;
  marginRight: 6px;
  marginBottom: 10px;
  marginLeft: 6px;
  paddingTop: 4px;
  paddingBottom: 4px;
`;

// Label
const RowView = styled.View`
  flexDirection: row;
`;
const LabelText = fonts.PCBody.extend`
  color: ${colorList.descLightTextColor};
  textAlign: right;
`;
const Label = styled.View`
  width: 130px;
  height: 40px;
  marginRight: 16px;
  justifyContent: center;
`;

const BaseSlider = () => (
  <SliderWarp>
    <Rail></Rail>
    <Track value="50%"></Track>
    <SliderHandler value="50%"></SliderHandler>
  </SliderWarp>
);
const BaseSliderHover = () => (
  <SliderWarp>
    <Rail state="hover"></Rail>
    <Track value="50%" state="hover"></Track>
    <SliderHandler value="50%" state="hover"></SliderHandler>
  </SliderWarp>
);

const RangeSlider = () => (
  <SliderWarp>
    <Rail></Rail>
    <Track value="22%" start="20%"></Track>
    <SliderHandler value="20%"></SliderHandler>
    <SliderHandler value="42%"></SliderHandler>
  </SliderWarp>
);
const RangeSliderHover = () => (
  <SliderWarp>
    <Rail state="hover"></Rail>
    <Track value="22%" start="20%" state="hover"></Track>
    <SliderHandler value="20%" state="hover"></SliderHandler>
    <SliderHandler value="42%" state="hover"></SliderHandler>
  </SliderWarp>
);

const Symbol_Slider_Default = makeSymbol(() => {
  return <BaseSlider></BaseSlider>
}, 'slider/default/normal');
const Symbol_Slider_Default_Hover = makeSymbol(() => {
  return <BaseSliderHover></BaseSliderHover>
}, 'slider/default/hover');
const Symbol_Slider_Range = makeSymbol(() => {
  return <RangeSlider></RangeSlider>
}, 'slider/range/normal');
const Symbol_Slider_Range_Hover = makeSymbol(() => {
  return <RangeSliderHover></RangeSliderHover>
}, 'slider/range/hover');

const Slider = () => (
  <View>
    <PanelTitle textType="desc">Slider</PanelTitle>
    <Panel>
      <RowView>
        <Label><LabelText>Default:</LabelText></Label>
        <Symbol_Slider_Default></Symbol_Slider_Default>
      </RowView>
      <RowView>
        <Label><LabelText>Default & Hover:</LabelText></Label>
        <Symbol_Slider_Default_Hover></Symbol_Slider_Default_Hover>
      </RowView>
      <RowView>
        <Label><LabelText>Range:</LabelText></Label>
        <Symbol_Slider_Range></Symbol_Slider_Range>
      </RowView>
      <RowView>
        <Label><LabelText>Range & Hover:</LabelText></Label>
        <Symbol_Slider_Range_Hover></Symbol_Slider_Range_Hover>
      </RowView>
    </Panel>
  </View>
);
 export default Slider;