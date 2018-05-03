import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../component/Header';
import { colorPalette } from '../common/util';
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
const FuncItem = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 120px;
  height: 120px;
  marginRight: 16px;
  backgroundColor: ${props => props.bgColor};
`;
const Panel = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;
  paddingVertical: 8px;
`;
const ListWrap = styled.View`
  paddingTop: 32px;
  paddingLeft: 32px;
`;
const FuncView = styled.View`
  flexDirection: row;
`;
const FuncText = fonts.title.extend`
  textAlign: center;
`;
const SubTitle = fonts.headline3.extend`
  marginBottom: 8px;
`;
const BodyText = fonts.title.extend``;
const colorList = VARIABLE.colorList;

const DevelopColor = () => (
  <Artboard name='developColor' style={{ position: 'absolute', width: 1440, left: 1600 }} >
    <Header>项目色彩规范</Header>
    <styles.Body name='body'>
      <styles.Title>定义</styles.Title>
      <BodyText textType="desc">YMFE Design的通用色彩规范规定了色彩风格与使用注意事项。</BodyText>
      <BodyText textType="desc">各项目在UI设计阶段应确定各自的色彩规范，项目色彩继承自通用色彩规范，主要包含以下内容:</BodyText>
      <ListWrap>
        <BodyText textType="desc">1. 主色: 应用于绝大部分元素，例如header、icon、边框、按钮、背景等，确定主色之后尽可能多的元素都是用这个颜色值，体现设计的外观一致性。</BodyText>
        <BodyText textType="desc">2. 强调色(可选): 因用于需要和主色产生一定的对比的元素，以便让用户明显感到元素的存在，例如悬浮按钮、文字按钮、选中文本、进度条、开关、滑块、链接、标题等。</BodyText>
        <BodyText textType="desc">3. 功能色: 有些元素的颜色不适合用主色和强调色来表示，在色彩规范中也应有所规定，例如错误警告一般使用红色，通常状态一般用绿色。</BodyText>
        <BodyText textType="desc">4. 文本色: 暗色背景中主文本色、辅助文本色。 亮色背景的主文本色、辅助文本色。</BodyText>
      </ListWrap>
      <styles.Title>开发者平台-项目色彩规范</styles.Title>
      <Panel>
        <Card name="primary">
          <SubTitle textType="desc">主色</SubTitle>
          <View>
            <Item bgColor={colorList.primaryColor}>
              <BodyText bgColor={colorList.primaryColor}>6(主色)</BodyText>
              <BodyText bgColor={colorList.primaryColor}>{colorList.primaryColor}</BodyText>
            </Item>
            <Item bgColor={colorPalette(colorList.primaryColor, colorList.lightSecondaryColorNumber)}>
              <BodyText bgColor={colorPalette(colorList.primaryColor, colorList.lightSecondaryColorNumber)}>4</BodyText>
              <BodyText bgColor={colorPalette(colorList.primaryColor, colorList.lightSecondaryColorNumber)}>{colorPalette(colorList.primaryColor, colorList.lightPrimaryColorNumber)}</BodyText>
            </Item>
            <Item bgColor={colorPalette(colorList.primaryColor, colorList.deepPrimaryColorNumber)}>
              <BodyText bgColor={colorPalette(colorList.primaryColor, colorList.deepPrimaryColorNumber)}>8</BodyText>
              <BodyText bgColor={colorPalette(colorList.primaryColor, colorList.deepPrimaryColorNumber)}>{colorPalette(colorList.primaryColor, colorList.deepPrimaryColorNumber)}</BodyText>
            </Item>
          </View>
        </Card>
        <Card name="secondaryColor">
          <SubTitle textType="desc">强调色</SubTitle>
          <View>
            <Item bgColor={colorList.secondaryColor}>
              <BodyText bgColor="#000">6(强调色)</BodyText>
              <BodyText bgColor="#000">{colorList.secondaryColor}</BodyText>
            </Item>
            <Item bgColor={colorPalette(colorList.secondaryColor, colorList.lightSecondaryColorNumber)}>
              <BodyText bgColor="#000">4</BodyText>
              <BodyText bgColor="#000">{colorPalette(colorList.secondaryColor, colorList.lightSecondaryColorNumber)}</BodyText>
            </Item>
            <Item bgColor={colorPalette(colorList.secondaryColor, colorList.deepSecondaryColorNumber)}>
              <BodyText bgColor="#000">8</BodyText>
              <BodyText bgColor="#000">{colorPalette(colorList.secondaryColor, colorList.deepSecondaryColorNumber)}</BodyText>
            </Item>
          </View>
        </Card>
        <Card name="background">
          <SubTitle textType="desc">背景色</SubTitle>
          <Item bgColor={colorList.htmlBackGroundColor}>
            <BodyText textType="desc">浅灰色背景色</BodyText>
            <BodyText textType="desc">{colorList.htmlBackGroundColor}</BodyText>
          </Item>
        </Card>
      </Panel>
      <Panel>
        <Card name="deep-text">
          <SubTitle textType="desc">文本色-深色背景上的文本</SubTitle>
          <Item bgColor="#000">
            <BodyText bgColor="#000">正文</BodyText>
            <BodyText bgColor="#000">{colorList.baseDeepTextColor}</BodyText>
          </Item>
          <Item bgColor="#000">
            <BodyText bgColor="#000" textType="desc">描述文本</BodyText>
            <BodyText bgColor="#000" textType="desc">{colorList.descDeepTextColor}</BodyText>
          </Item>
          <Item bgColor="#000">
            <BodyText bgColor="#000" textType="disabled">禁用/补充</BodyText>
            <BodyText bgColor="#000" textType="disabled">{colorList.disableDeepTextColor}</BodyText>
          </Item>
          <Item bgColor="#000">
            <BodyText bgColor="#000" textType="segment">分割线/边框</BodyText>
            <BodyText bgColor="#000" textType="segment">{colorList.segmentDeepTextColor}</BodyText>
          </Item>
        </Card>
        <Card name="light-text">
          <SubTitle textType="desc">文本色-浅色色背景上的文本</SubTitle>
          <Item bgColor="#fff">
            <BodyText bgColor="#fff">正文</BodyText>
            <BodyText bgColor="#fff">{colorList.baseLightTextColor}</BodyText>
          </Item>
          <Item bgColor="#fff">
            <BodyText bgColor="#fff" textType="desc">描述文本</BodyText>
            <BodyText bgColor="#fff" textType="desc">{colorList.descLightTextColor}</BodyText>
          </Item>
          <Item bgColor="#fff">
            <BodyText bgColor="#fff" textType="disabled">禁用/补充</BodyText>
            <BodyText bgColor="#fff" textType="disabled">{colorList.disableLightTextColor}</BodyText>
          </Item>
          <Item bgColor="#fff">
            <BodyText bgColor="#fff" textType="segment">分割线/边框</BodyText>
            <BodyText bgColor="#fff" textType="segment">{colorList.segmentLightTextColor}</BodyText>
          </Item>
        </Card>
      </Panel>
      <View name="func" style={{ marginTop: 72 }}>
        <SubTitle textType="desc">功能色 - 错误/成功/链接/警告</SubTitle>
        <FuncView>
          {colorList.func.map((item, index) => {
            return <FuncItem key={index} bgColor={item.color}>
              <FuncText bgColor="#000">{item.color}</FuncText>
              <FuncText bgColor="#000">{item.name}</FuncText>
            </FuncItem>
          })}
        </FuncView>
      </View>
      <View name="BU" style={{ marginTop: 72 }}>
        <SubTitle textType="desc">四大业务线识别色</SubTitle>
        <FuncView>
          {colorList.BU.map((item, index) => {
            return <FuncItem key={index} bgColor={item.color}>
              <FuncText bgColor="#000">{item.color}</FuncText>
              <FuncText bgColor="#000">{item.name}</FuncText>
            </FuncItem>
          })}
        </FuncView>
      </View>
    </styles.Body>
  </Artboard>
);
export default DevelopColor;