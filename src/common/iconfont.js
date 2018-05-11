import React from 'react';
import { View, Text, Svg } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import styled from 'styled-components/primitives';
import iconfontSource from './iconfont.json';

const colorList = VARIABLE.colorList;
const iconfont = {};
const Container = styled.View`
  width: 120px;
  height: 100px;
  mariginRight: 16px;
  verticalAlign: center;
  alignItems: center;
`;
const Name = fonts.PCBody.extend`
  textAlign: center;
`;
iconfontSource.data.icons.forEach((item, index) => {
  iconfont[item.name] = (
    <Container key={index}>
      <Svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
        <Svg.Path d={item.path} fill={colorList.baseLightTextColor} class="transform-group"  />
      </Svg>
      <Name>{item.name}</Name>
    </Container>
  )
})

export default iconfont;