import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

const ToastText = fonts.mobileBody.extend`
	color: ${() => '#fff'}
`;
const ToastTextPc = fonts.PCBody.extend`
  color: ${() => '#fff'}
`;
const ToastView = styled.View`
	paddingVertical: 6px;
	paddingHorizontal: 16px;
	backgroundColor: rgba(0, 0, 0, .8);
	borderRadius: ${variables.borderRadius};
`;
// 移动端
const Toast_Default = () => (
	<ToastView>
		<ToastText>Toast</ToastText>
	</ToastView>
);
const Symbol_Toast = makeSymbol(() => (
	<Toast_Default />
), 'toast/mobile');
// pc 
const Toast_Default_Pc = () => (
	<ToastView>
		<ToastTextPc>Toast</ToastTextPc>
	</ToastView>
)
const Symbol_Toast_Pc = makeSymbol(() => {
	return <Toast_Default_Pc />	
}, 'toast/pc');

const Toast = (props) => {
	if(props.platform === 'pc') {
		return 	<View>
			<PanelTitle>Toast</PanelTitle>
			<Panel>
				<Symbol_Toast />
			</Panel>
		</View>
	} 
	return 	<View>
		<PanelTitle>Toast</PanelTitle>
		<Symbol_Toast_Pc />
	</View>
};
export default Toast;