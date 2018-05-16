import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

// getTextColor = (state) => {
//   if(state === 'hover') {

//   }
// };
const TooltipBtn = styled.View`
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${props => getBgColor(props.type, props.state)};
  borderRadius: ${variables.borderRadius};
  borderWidth: ${props => props.type === 'goast' ? 1 : 0};
  borderStyle: solid;
  borderColor: ${props => getBorderColor(props.type, props.state)};
`;
const ButtonText = fonts.mobileBody.extend`
  color: ${props => getTextColor(props.state)};
`;
const ButtonTextPc = fonts.PCBody.extend`
  color: ${props => getTextColor(props.state)}
`;