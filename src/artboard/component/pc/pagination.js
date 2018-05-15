import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

const normalSize = 40;
const smallSize = 36;
const BorderRadius = 4;

const iconSize = {
    sm: 8,
    md: 16,
    lg: 24
};

const getIconFont = (type, size, color) => (
    iconfont[type](size, color)
);
const getBorderColor = (state) => {
    if(state === 'hover' || state === 'active') {
        return colorList.primaryColor;
    }
    return colorList.normalSelectBorderColor;
};
getTextColor = (state) => {
    if(state === 'hover' || state === 'active') {
        return colorList.primaryColor;
    }
    return colorList.baseLightTextColor;
};

const RowView = styled.View`
    display: flex;
    flexDirection: row;
`;
const IndexItem = styled.View`
width: ${ props => props.size === 'sm' ? smallSize : normalSize};
height: ${props => props.size === 'sm' ? smallSize : normalSize};
marginRight: 8px;
borderStyle: solid;
borderColor: ${props => getBorderColor(props.state)}
borderWidth: 1px;
borderRadius: ${BorderRadius};
verticalAlign: middle;
backgroundColor: '#fff'
`;

const IndexItemText = fonts.PCBody.extend`
  color: ${props => getTextColor(props.state)};
  textAlign: center;
`;
const IndexItemMore = styled.View`
  width: 4px;
  height: 4px;
  borderRadius: 50%;
  marginTop: ${props => props.size === 'sm' ? (smallSize - 4)/2 : (normalSize - 4) /2};
  marginBottom: ${ props => props.size === 'sm' ? (smallSize - 4)/2 : (normalSize - 4) /2};
  backgroundColor: ${colorList.lightActiveBgColor};
`;

const IndexItemTextWarp = styled.View`
  marginTop: ${ props => props.size === 'sm' ? (smallSize - 21)/2 : (normalSize - 21) /2};
`;
const IndexItemIconWarp = styled.View`
  marginTop: ${ props => props.size === 'sm' ? (smallSize - iconSize[props.iconSize])/2 : (normalSize - iconSize[props.iconSize]) /2};
  marginLeft: ${ props => props.size === 'sm' ? (smallSize - iconSize[props.iconSize])/2 : (smallSize - iconSize[props.iconSize])/2};
`;
const IndexItemMoreWarp = styled.View`
  width: ${ props => props.size === 'sm' ? smallSize : normalSize};
  height: ${props => props.size === 'sm' ? smallSize : normalSize};
  marginRight: 8px;
  display: flex;
  flexDirection: row;
  justifyContent: space-around;
`;
const PrevPageIcon = (size) => (
    getIconFont('left', size, getTextColor())
);
const NextPageIcon = (size) => (
    getIconFont('right', size, getTextColor())
);
const MoreItem = () => (
    <IndexItemMoreWarp>
        <IndexItemMore />
        <IndexItemMore />
        <IndexItemMore />
    </IndexItemMoreWarp>
)
const Pagination_lg = () => (
  <RowView>
    <IndexItem>
      <IndexItemIconWarp iconSize="md">{PrevPageIcon('md')}</IndexItemIconWarp>
    </IndexItem>
    <IndexItem>
      <IndexItemTextWarp><IndexItemText>1</IndexItemText></IndexItemTextWarp>
    </IndexItem>
    <MoreItem />
    <IndexItem>
      <IndexItemTextWarp><IndexItemText>5</IndexItemText></IndexItemTextWarp>
    </IndexItem>
    <IndexItem state="active">
      <IndexItemTextWarp><IndexItemText state="active">6</IndexItemText></IndexItemTextWarp>
    </IndexItem>
    <IndexItem>
      <IndexItemTextWarp><IndexItemText>7</IndexItemText></IndexItemTextWarp>
    </IndexItem>
    <MoreItem />
    <IndexItem>
      <IndexItemTextWarp><IndexItemText>10</IndexItemText></IndexItemTextWarp>
    </IndexItem>
    <IndexItem>
      <IndexItemIconWarp iconSize="md">{NextPageIcon('md')}</IndexItemIconWarp>
    </IndexItem>
  </RowView>
);

const Symbol_Pagination_lg =  makeSymbol( () => {
    return <Pagination_lg></Pagination_lg>
}, 'pagination/lg');

const Pagination = () => (
    <View>
        <PanelTitle textType="desc">Pagination</PanelTitle>
        <Panel>
            <Symbol_Pagination_lg />
        </Panel>
    </View>
);
export default Pagination;