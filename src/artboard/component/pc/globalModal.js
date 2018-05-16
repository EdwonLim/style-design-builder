import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const { PanelTitle } = styles;
const colorList = VARIABLE.colorList;

const Container = styled.View`
  width: 1440px;
  height: 360px;
  padding: 24px;
  backgroundColor: #fff;
`;
const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;
const IconBox = styled.View`
  width: 24px;
  height: 24px;
`;
const Title = fonts.headline1.extend`
  textAlign: center;
  fontWeight: 200;
`;
const Desc = fonts.PCBody.extend`
  textAlign: center;
  fontWeight: 200;
  color: ${colorList.disableLightTextColor};
`;
const IconText = fonts.PCBody.extend`
  color: ${props => props.state === 'active' ? colorList.baseLightTextColor : colorList.disableLightTextColor};
`;
const Left = styled.View`
  width: 64px;
  height: 64px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.state === 'active' ? '#d9d9d9' : 'transparent'};
  borderRadius: 32px;
`;
const Right = styled.View`
  width: 64px;
  height: 64px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.state === 'active' ? '#d9d9d9' : 'transparent'};
  borderRadius: 32px;
`;
const Empty = styled.View`
  height: 24px;
`;

const Symbol_pc_globalModal_normal = makeSymbol(() =>
  <Container>
    <Header>
      <Left>
        <IconBox>{iconfont.left('md', colorList.disableLightTextColor)}</IconBox>
        <IconText>BACK</IconText>
      </Left>
      <Right>
        <IconBox>{iconfont.close('md', colorList.disableLightTextColor)}</IconBox>
        <IconText>ESC</IconText>
      </Right>
    </Header>
    <Title>全局遮罩层标题</Title>
    <Desc>描述信息</Desc>
  </Container>
  , 'pc/globalModal/normal');
const Symbol_pc_globalModal_active = makeSymbol(() =>
  <Container>
    <Header>
      <Left state="active">
        <IconBox>{iconfont.left('md', colorList.baseLightTextColor)}</IconBox>
        <IconText state="active">BACK</IconText>
      </Left>
      <Right state="active">
        <IconBox>{iconfont.close('md', colorList.baseLightTextColor)}</IconBox>
        <IconText state="active">ESC</IconText>
      </Right>
    </Header>
    <Title>全局遮罩层标题</Title>
    <Desc>描述信息</Desc>
  </Container>
  , 'pc/globalModal/active');

const GlobalModal = () => (
  <View>
    <PanelTitle textType="desc">GlobalModal</PanelTitle>
    <Symbol_pc_globalModal_normal />
    <Empty />
    <Symbol_pc_globalModal_active />
  </View>
)

export default GlobalModal;

