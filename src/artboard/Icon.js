import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles, Svg } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import Header from '../common/Header';
import styled from 'styled-components/primitives';
import iconfont from '../common/iconfont.js';
import iconfontSource from '../common/iconfont.json';
import VARIABLE from '../common/variables';

const colorList = VARIABLE.colorList;
const guideName = VARIABLE.guideName;
const Panel = styled.View`
  width: 1240px;
  padding: 40px 0;
  flexDirection: row;
  flexWrap: wrap;
  transform: scaleY(-1);
`;
const BodyText = fonts.title.extend``;
const Container = styled.View`
  width: 120px;
  height: 100px;
  mariginRight: 16px;
  verticalAlign: center;
  alignItems: center;
`;
const Name = fonts.PCBody.extend`
  marginTop: 16px;
  textAlign: center;
`;

const Icons = props => (
  <Artboard name='Icons' style={{ position: 'absolute', width: 1440, left: 4800 }} >
    <Header>{guideName} - 图标库</Header>
    <styles.Body name='body'>
      <styles.Title>图标库</styles.Title>
      <BodyText textType="desc">{JSON.stringify(props.data, null, 2)}</BodyText>
      <Panel>
        {iconfontSource.map((item, index) => {
          return <Container key={index}>
            {iconfont[item.name]('lg')}
            <Name>{item.name}</Name>
          </Container>
        })}
      </Panel>
    </styles.Body>
  </Artboard>
);
export default Icons;