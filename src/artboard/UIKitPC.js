import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../common/Header';
import ButtonBlock from './component/pc/button';
import InputBlock from './component/pc/input';
import SelectBlock from './component/pc/select';
import RadioBlock from './component/cross-platform/radio';
import SliderBlock from './component/cross-platform/slider';
import SwiperBlock from './component/cross-platform/swiper';
import PaginationBlock from './component/pc/pagination';
import ModalBlock from './component/pc/modal';
import GlobalModalBlock from './component/pc/globalModal';
import CheckboxBlock from './component/cross-platform/checkbox';
import TooltipBlock from './component/cross-platform/tooltip';
import ToastBlock from './component/cross-platform/toast';
import styled from 'styled-components/primitives';
import variables from '../common/variables';

const Col = styled.View`
  width: ${props => props.size === 'lg' ? '1440px': '800px'};
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

const UIKitPC = () => (
  <Artboard name="UIKitPC" style={{ width: 4800, backgroundColor: '#F0F3F5' }} >
    <Header>Youth Design UI Kit (PC)</Header>
    <Body name="body">
      <Col>
        <styles.Title>Base</styles.Title>
        <ButtonBlock />
        <InputBlock />
        <RadioBlock platform="pc" />
      </Col>
      <Col>
        <styles.Title>Layout</styles.Title>
        <SliderBlock />
        <PaginationBlock />
        <SelectBlock />
      </Col>
      <Col>
        <styles.Title>Form</styles.Title>
        <CheckboxBlock platform="pc" />
        <ModalBlock />
        <TooltipBlock platform="pc" />
        <ToastBlock platform="pc" />
      </Col>
      <GlobalModalBlock />
    </Body>
  </Artboard>
);
export default UIKitPC;