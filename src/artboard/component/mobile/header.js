import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const { PanelTitle, Panel } = styles;
const colorList = VARIABLE.colorList;

const TitleText = fonts.subhead.extend`
  lineHeight: 44px;
  width: 375px;
  textAlign: center;
  position: absolute;
  bottom: 0;
`;
const OparationText = fonts.subhead.extend`
  lineHeight: 44px;
  color: ${colorList.primaryColor};
`;
const Left = styled.View`
  height: 44px;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
`;
const Right = styled.View`
  height: 44px;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
`;
const Container = styled.View`
  width: 375px;
  height: 64px;
  backgroundColor: #eee;
`;
const StatusBar = styled.View`
  width: 375px;
  height: 20px;
`;
const Oparation = styled.View`
  width: 375px;
  paddingHorizontal: 16px;
  flexDirection: row;
  justifyContent: space-between;
`;
const Empty = styled.View`
  height: 24px;
`;

const Symbol_header_text = makeSymbol(() =>
  <Container>
    <StatusBar />
    <TitleText type="middle">标题</TitleText>
    <Oparation>
      <OparationText>返回</OparationText>
      <OparationText>确定</OparationText>
    </Oparation>
  </Container>
  , 'header/text');
const Symbol_header_icon = makeSymbol(() =>
  <Container>
    <StatusBar />
    <TitleText type="middle">标题</TitleText>
    <Oparation>
      <Left>{iconfont.left('md', colorList.primaryColor)}</Left>
      <Right>{iconfont.heart('md', colorList.primaryColor)}</Right>
    </Oparation>
  </Container>
  , 'header/icon');
const Symbol_header_icontext = makeSymbol(() =>
  <Container>
    <StatusBar />
    <TitleText type="middle">标题</TitleText>
    <Oparation>
      <Left>{iconfont.left('md', colorList.primaryColor)} <OparationText>返回</OparationText></Left>
      <Right>{iconfont.heart('md', colorList.primaryColor)} <OparationText>喜欢</OparationText></Right>
    </Oparation>
  </Container>
  , 'header/icontext');

const Header = () => (
  <View>
    <PanelTitle textType="desc">Header</PanelTitle>
    <Panel platform="mobile">
      <Symbol_header_text />
      <Empty />
      <Symbol_header_icon />
      <Empty />
      <Symbol_header_icontext />
    </Panel>
  </View>
)

export default Header;

