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

const getIconFont = (type) => (
    iconfont[type]
);

const IndexItem = styled.View`
width: ${ props => props.size === 'sm' ? smallSize : normalSize};
height: ${props => props.size === 'sm' ? smallSize : normalSize};
borderStyle: solid;
borderColor: ${colorList.normalSelectBorderColor};
borderWidth: 1px;
borderRadius: ${BorderRadius};
backgroundColor: ${props => props.state === 'hover' ? colorList.primaryColor : '#fff'};
textAlign: center;
`;

const IndexItemText = fonts.PCBody.extend`
  color: ${props => props.state === 'hover' ? colorList.baseDeepTextColor : colorList.baseLightTextColor};

`;

const Pagination_lg = () => (
 <IndexItem>
  <IndexItemText>1</IndexItemText>
 </IndexItem>
);

const Symbol_Pagination_lg =  makeSymbol( () => {
    return <Pagination_lg></Pagination_lg>
}, 'pagination/lg');

const Pagination = () => (
    <View>
        <PanelTitle textType="desc"Pagination />>
        <Panel>
            <Symbol_Pagination_lg />
        </Panel>
    </View>
);
export default Pagination;