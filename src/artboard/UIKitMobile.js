import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../common/Header';
import ButtonBlock from './component/mobile/button';
import HeaderBlock from './component/mobile/header';
import InputBlock from './component/mobile/input';
import LabelBlock from './component/mobile/label';
import TextareaBlock from './component/mobile/textarea';
import RadioBlock from './component/cross-platform/radio';
import SliderBlock from './component/cross-platform/slider';
import SwiperBlock from './component/cross-platform/swiper';
import CheckboxBlock from './component/cross-platform/checkbox';
import styled from 'styled-components/primitives';

const Col = styled.View`
  width: 439px;
  marginRight: 160px;
`;
const Item = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  padding: 12px 16px;
  backgroundColor: ${props => props.bgColor};
`;
const Body = styles.Body.extend`
  backgroundColor: #F0F3F5;
  flexDirection: row;
`;
const BodyText = fonts.title.extend``;

const colorList = VARIABLE.colorList;

const UIKitMobile = () => (
  <Artboard name="UIKitMobile" style={{ width: 2880, backgroundColor: '#F0F3F5' }} >
    <Header>Youth Design UI Kit (Mobile)</Header>
    <Body name="body">
      {/* <Col>
        <styles.Title>Base</styles.Title>
        <ButtonBlock />
      </Col> */}
      <Col>
        <styles.Title>Layout</styles.Title>
        <HeaderBlock />
        <SwiperBlock platform="mobile" />
      </Col>
      <Col>
        <styles.Title>Form</styles.Title>
        <InputBlock />
        <LabelBlock />
        <TextareaBlock />
      </Col>
      {/* <InputBlock />
      <RadioBlock ></RadioBlock>
      <SliderBlock></SliderBlock> */}
      <CheckboxBlock platform="mobile" />
      {CheckboxBlock('mobile')}
    </Body>
  </Artboard>
);
export default UIKitMobile;