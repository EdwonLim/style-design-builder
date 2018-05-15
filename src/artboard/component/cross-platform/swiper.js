import React from 'react';
import { Text, View, StyleSheet, makeSymbol, Image } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;
const BodyText = styles.BodyText.extend`
  textAlign: center;
  color: ${colorList.descLightTextColor};
  marginTop: 24px;
  marginBottom: 24px;
`;

const Container = styled.View`
`;
const Bar = styled.View`
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 375px;
  flexDirection: row;
  justifyContent: center;
`;
const Item = styled.View`
  width: 9px;
  height: 3px;
  marginRight: 4px;
  backgroundColor: ${props => props.state === 'active' ? colorList.primaryColor : colorList.lightActiveBgColor};
`;

const SwiperImage = styled.Image`
  height: 180px;
  width: 375px;
`;

const Symbol_sm = makeSymbol(() =>
  <Container>
    <SwiperImage source="https://ws1.sinaimg.cn/large/006oPFLAly1frc6ru0z9hj30ku0a0diz.jpg" />
    <Bar>
      <Item state="active" />
      <Item />
      <Item />
    </Bar>
  </Container>
  , 'swiper/sm');



const Swiper = (props) => (
  <View>
    <PanelTitle textType="desc">Swiper(Carousel)</PanelTitle>
    <Panel platform={props.platform}>
      <Symbol_sm />
    </Panel>
  </View>
)

export default Swiper;