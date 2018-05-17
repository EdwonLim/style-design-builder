import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

const getIconFont = (type, size='', state) => {
 let color = colorList.descLightTextColor;
 if(state === 'disabled') {
     color = colorList.disableLightTextColor;
 } else if(state === 'active') {
     color = colorList.primaryColor;
 }
 return iconfont[type](size, color)
};

const  RowView = styled.View`
  flexDirection: row;
  justifyContent: flex-start;
`;
const RadioText = fonts.PCBody.extend`
  color: ${props => props.disabled ? colorList.disableLightTextColor : colorList.descLightTextColor};
  flexDirection: column;
  justifyContent: center;
`;
const MobileRadioText = fonts.title.extend`
  color: ${props => props.disabled ? colorList.disableLightTextColor : colorList.descLightTextColor};
`;
const IconView = styled.View`
  marginRight: 16px;
  flexDirection: column;
  justifyContent: center;
`;
const Empty = styled.View`
  height: 16px;
`;
const SmallEmpty = styled.View`
  height: 8px;
`;

// pc 端
const Unselect_lg_Default = () => (
    <RowView>
        <IconView>{getIconFont('square', 'md')}</IconView>
        <RadioText>unselect</RadioText>
    </RowView>
);
const Unselect_lg_Disabled = () => (
    <RowView>
        <IconView>{getIconFont('square_fill', 'md', 'disabled')}</IconView>
        <RadioText disabled>unselect & disabled</RadioText>
    </RowView>
);
const Select_lg_Default = () => (
    <RowView>
        <IconView>{getIconFont('check_square_fill', 'md', 'active')}</IconView>
        <RadioText>selected</RadioText>
    </RowView>
);
const Select_lg_Disabled = () => (
    <RowView>
        <IconView>{getIconFont('check_square_fill', 'md', 'disabled')}</IconView>
        <RadioText disabled>selected & disabled</RadioText>
    </RowView>
);

const Symbol_Unselect_lg_Default = makeSymbol(() => (
    <Unselect_lg_Default />
), 'checkbox_unselect_lg_default');
const Symbol_Unselect_lg_Disabled = makeSymbol(() => (
    <Unselect_lg_Disabled />
), 'checkbox_unselect_lg_disabled');
const Symbol_Select_lg_Default = makeSymbol(() => (
    <Select_lg_Default />
), 'checkbox_select_lg_default');
const Symbol_Select_lg_Disabled = makeSymbol(() => (
    <Select_lg_Disabled />
), 'checkbox_select_lg_Disabled ');

// 移动端
const Mobile_Unselect_Default = () => (
    <RowView>
        <IconView>{getIconFont('square', 'lg', 'default')}</IconView>
        <MobileRadioText>unselect</MobileRadioText>
    </RowView>
);
const Mobile_Unselect_Disabled = () => (
    <RowView>
        <IconView>{getIconFont('square_fill', 'lg', 'disabled', 'mobile')}</IconView>
        <MobileRadioText disabled>unselect & disabled</MobileRadioText>
    </RowView>
);
const Mobile_Select_Default = () => (
    <RowView>
        <IconView>{getIconFont('check_square_fill', 'lg', 'active', 'mobile')}</IconView>
        <MobileRadioText>selected</MobileRadioText>
    </RowView>
);
const Mobile_Select_Disabled = () => (
    <RowView>
        <IconView>{getIconFont('check_square_fill', 'lg', 'disabled', 'mobile')}</IconView>
        <MobileRadioText disabled>selected & disabled</MobileRadioText>
    </RowView>
);

const Symbol_Mobile_Unselect_Default = makeSymbol(() => (
    <Mobile_Unselect_Default />
), 'checkbox/mobile/unselect/default');
const Symbol_Mobile_Unselect_Disabled = makeSymbol(() => (
    <Mobile_Unselect_Disabled />
), 'checkbox/mobile/unselect/disabled');
const Symbol_Mobile_Select_Default = makeSymbol(() => (
    <Mobile_Select_Default />
), 'checkbox/mobile/select/default');
const Symbol_Mobile_Select_Disabled = makeSymbol(() => (
    <Mobile_Select_Disabled />
), 'checkbox/mobile/select/Disabled');

const Checkbox = (props) => {
    if (props.platform === 'mobile') {
        return  <View>
            <PanelTitle>Checkbox</PanelTitle>
            <Panel>
                <Symbol_Mobile_Unselect_Default />
                <Empty />
                <Symbol_Mobile_Select_Default />
                <Empty />
                <Symbol_Mobile_Unselect_Disabled />
                <Empty />
                <Symbol_Mobile_Select_Disabled />
            </Panel>
        </View>
    }
    return  <View>
            <PanelTitle>Checkbox</PanelTitle>
            <Panel>
                <Symbol_Unselect_lg_Default />
                <SmallEmpty />
                <Symbol_Select_lg_Default />
                <SmallEmpty />
                <Symbol_Unselect_lg_Disabled />
                <SmallEmpty />
                <Symbol_Select_lg_Disabled />
            </Panel>
        </View>
};
export default Checkbox;



