import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont.js';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

const colorList = VARIABLE.colorList;
const { PanelTitle, PanelNoPadding } = styles;

const title1 = '确认加入 f_test_hy 项目吗？';
const title2 = '您将拥有该项目的开发权限，包括打包、发布、下载等。';

const getIconFont = (type, size='', color='') => (
    iconfont[type](size, color)
);

const RowCenterView = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;
const RowRightView = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: flex-end;
  marginBottom: 16px;
`;
const ModalMask = styled.View`
  width: 800px;
  height: 667px;
  postion: absolute;
  top: 0;
  left: 0;
  backgroundColor: rgba(67, 76, 94, .96);
  zIndex: 1000;
`;
const Headline2 = fonts.headline2.extend`
  color: ${colorList.baseLightTextColor}
`;
const Subhead = fonts.subhead.extend`
  color: ${colorList.descLightTextColor}
`;
const CloseBtnWarp = styled.View`
  width: 24px;
  height: 24px;
  padding: 4px;
`;
const TextWarp = styled.View`
  width: 586px;
  marginBottom: 16px;
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;
const ContentView = styled.View`
  width: 650px;
  backgroundColor: 'rgba(255, 255, 255, 1)';
  zIndex: 1000;
  padding: 16px;
  borderRadius:  ${variables.borderRadius};
`;
const ContentViewWarp = styled.View`
  width: 100%;
  position: absolute;
  top: 100px;
  display: flex;
  flexDirection: row;
  justifyContent: center;
  zIndex: 1000;
`;
const ConfirmBtn = styled.View`
  paddingVertical: ${props => props.size === 'sm' ? '6px' : '10px'};
  paddingHorizontal: 16px;
  backgroundColor: ${colorList.primaryColor};
  borderRadius: ${variables.borderRadius};
  marginBottom: 16px;
`;
const ButtonText = fonts.PCBody.extend`
  color: ${props => '#fff'};
`;

const PanelView = styled.View`
  width: 800px;
  height: 667px;
  position: relative;
`;
const Modal = () => (
  <View>
    <PanelTitle>Modal</PanelTitle>
    <PanelNoPadding>
      <PanelView>
        <ModalMask />
        <ContentViewWarp>
         <ContentView>
          <RowRightView><CloseBtnWarp>{getIconFont('close', 'md', colorList.descLightTextColor)}</CloseBtnWarp></RowRightView>
          <RowCenterView>
            <TextWarp><Headline2>{title1}</Headline2></TextWarp>
          </RowCenterView>
          <RowCenterView>
            <TextWarp><Subhead>{title2}</Subhead></TextWarp>
          </RowCenterView>
          <RowCenterView>
            <ConfirmBtn><ButtonText>确 定</ButtonText></ConfirmBtn>
          </RowCenterView>
         </ContentView>
        </ContentViewWarp>
      </PanelView>
    </PanelNoPadding>
  </View>
);
export default Modal;