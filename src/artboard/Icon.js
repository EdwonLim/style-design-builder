import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles, Svg } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../component/Header';
import { colorPalette } from '../common/util';
import styled from 'styled-components/primitives';
import iconfont from '../common/iconfont.json';

const colorList = VARIABLE.colorList;
const Panel = styled.View`
  width: 1240px;
  padding: 40px 0;
  flexDirection: row;
  flexWrap: wrap;
  transform: scaleY(-1);
`;
const BodyText = fonts.title.extend``;

const Icons = props => (
  <Artboard name='Icons' style={{ position: 'absolute', width: 1440, left: 4800 }} >
    <Header>Youth Design 图标库</Header>
    <styles.Body name='body'>
      <styles.Title>图标库</styles.Title>
      <BodyText textType="desc">http://iconfont.corp.qunar.com/repositories/15 （Qunar 内网）{JSON.stringify(props.data, null, 2)}</BodyText>
      <Panel>
        {iconfont.data.icons.map((item, index) => {
          return <Svg key={index} style={{ marginRight: 12, marginBottom: 12, transform: [{ skewX: '45deg' }] }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Svg.Path d={item.path} fill={colorList.baseLightTextColor} class="transform-group" />
          </Svg>
        })}
      </Panel>
    </styles.Body>
  </Artboard>
);
export default Icons;