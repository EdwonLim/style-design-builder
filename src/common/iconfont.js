import React from 'react';
import { View, Text, Svg } from 'react-sketchapp';
import styled from 'styled-components/primitives';
import iconfontSource from './iconfont.json';

const colorList = VARIABLE.colorList;
const iconfont = {};

const sizes = {
  sm: 8,
  md: 16,
  lg: 24
};

iconfontSource.forEach((item, index) => {
  iconfont[item.name] = (size, color) => {
    const length = sizes[size] || 16;
    return <Svg width={length} height={length} viewBox={`0 0 ${length} ${length}`} xmlns="http://www.w3.org/2000/svg" >
      <Svg.Path d={item.path} fill={color || colorList.baseLightTextColor} class="transform-group" />
    </Svg>
  }
})

export default iconfont;