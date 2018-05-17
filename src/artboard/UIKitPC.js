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
<<<<<<< HEAD
import PaginationBlock from './component/pc/pagination.js';
import GlobalModal from './component/pc/globalModal.js';
import ModalBlock from './component/pc/modal.js';
import CheckboxBlock from './component/cross-platform/checkbox.js';
=======
import PaginationBlock from './component/pc/pagination';
import ModalBlock from './component/pc/modal';
import CheckboxBlock from './component/cross-platform/checkbox';
import TooltipBlock from './component/cross-platform/tooltip';
import ToastBlock from './component/cross-platform/toast';
>>>>>>> b08677136fa89ba27a2e0723fc2ee756ef2fa883
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
const Hr = styled.View`
  width: 100%;
  height: 1px;
  backgroundColor: ${variables.lightHoverBgColor};
`;
const Body = styles.Body.extend`
  backgroundColor: #F0F3F5;
  flexDirection: row;
`;

const UIKitPC = () => (
  <Artboard name="UIKitPC" style={{ width: 4000, backgroundColor: '#F0F3F5' }} >
    <Header>Youth Design UI Kit (PC)</Header>
    <Body name="body">
<<<<<<< HEAD
      <Col>
        <styles.Title>Base</styles.Title>
        <ButtonBlock />
      </Col>
      <Col>
        <styles.Title>Form</styles.Title>
        <InputBlock />
        <RadioBlock />
        <SliderBlock />
        <CheckboxBlock platform="pc" />
        <PaginationBlock />
        <SelectBlock />
      </Col>
      <Col>
        <styles.Title>Mask</styles.Title>
        <ModalBlock />
      </Col>
    </Body>
    <Hr />
    <Body name="body">
      <Col size="lg">
        <styles.Title>Layout</styles.Title>
        <GlobalModal />
      </Col>
=======
      <styles.Title>定义</styles.Title>
      {/* <ButtonBlock />
      <InputBlock />
      <RadioBlock /> */}
      {/* <SliderBlock /> */}
      {/* <PaginationBlock /> */}
      {/* <SelectBlock /> */}
      {/* <CheckboxBlock platform="pc" /> */}
      {/* <ModalBlock /> */}
      <TooltipBlock  platform="pc" />
      <ToastBlock platform="pc" />
>>>>>>> b08677136fa89ba27a2e0723fc2ee756ef2fa883
    </Body>
  </Artboard>
);
export default UIKitPC;