import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../common/Header';
import ButtonBlock from './component/mobile/button';
import InputBlock from './component/pc/input';
import RadioBlock from './component/cross-platform/radio';
import SliderBlock from './component/cross-platform/slider';
import styled from 'styled-components/primitives';

const Card = styled.View`
  width: 360px;
  marginRight: 64px;
  marginBottom: 64px;
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
`;
const BodyText = fonts.title.extend``;

const colorList = VARIABLE.colorList;

const UIKitMobile = () => (
  <Artboard name="UIKitMobile" style={{ width: 2880, backgroundColor: '#F0F3F5' }} >
    <Header>Youth Design UI Kit (Mobile)</Header>
    <Body name="body">
      <styles.Title>定义</styles.Title>
      <ButtonBlock />
      {/* <InputBlock />
      <RadioBlock ></RadioBlock>
      <SliderBlock></SliderBlock> */}
    </Body>
  </Artboard>
);
export default UIKitMobile;