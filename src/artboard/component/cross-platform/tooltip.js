import React from 'react';
import { Text, View, StyleSheet, makeSymbol } from 'react-sketchapp';
import { styles, fonts } from '../../../common/style';
import styled from 'styled-components/primitives';
import variables from '../../../common/variables';
import iconfont from '../../../common/iconfont';

const colorList = VARIABLE.colorList;
const { PanelTitle, Panel } = styles;

getTextColor = (type, state) => {
	if(type === 'prompt') {
		return '#fff'
	}
  if(state === 'hover') {
     return colorList.primaryColor;
  }
  return colorList.baseLightTextColor;
};
getBorderColor = (state) => {
	if (!state || state === 'normal') return colorList.lightHoverBgColor;
	if(state === 'hover') return colorList.primaryColor;
	return colorList.baseLightTextColor;
};

getIconFont = (type, size, color) => (
	iconfont[type](size, color)
);

const RowCenterView = styled.View`
	flexDirection: row;
	justifyContent: center;
`;
const TooltipBtn = styled.View`
	width: 70px;
  paddingVertical: ${props => props.size === 'sm' ? '4px' : '6px'};
  paddingHorizontal: 16px;
  backgroundColor: ${colorList.deepHoverBgolor};
  borderRadius: ${variables.borderRadius};
  borderWidth: 1;
  borderStyle: solid;
	borderColor: ${props => getBorderColor(props.state)};
`;

const ButtonText = fonts.PCBody.extend`
  color: ${props => getTextColor(props.type, props.state)};
`;
const ButtonTextPc = fonts.PCBody.extend`
  color: ${props => getTextColor(props.type, props.state)};
`;

const PromptBtn = styled.View`
	backgroundColor: rgba(0, 0, 0, .8);
	borderRadius: ${variables.borderRadius};
	paddingVertical: 6px;
	paddingHorizontal: 16px;
`;

const PromptView = styled.View`
  marginBottom: 8px;
`
const PromptCornerView = styled.View`
  marginTop: -4px;
`
// 移动端 symbol
// 移动端 default symbol
const Mobile_Default = () => (
	<RowCenterView>
		<TooltipBtn>
			<RowCenterView><ButtonText>Top</ButtonText></RowCenterView>
		</TooltipBtn>
	</RowCenterView>
);
const Symbol_Mobile_Default = makeSymbol(() => {
  return <Mobile_Default />
}, 'tooltip/mobile/default');

// 移动端 Hover symbol
const Mobile_Hover = () => (
	<View>
		<PromptView>
			<RowCenterView>
				<PromptBtn><ButtonText type="prompt">Prompt Text</ButtonText></PromptBtn>
			</RowCenterView>
			<RowCenterView>
				<PromptCornerView>{getIconFont('down_triangle_fill', 'md', colorList.baseLightTextColor)}</PromptCornerView>
			</RowCenterView>
		</PromptView>
		<RowCenterView>
			<TooltipBtn state="hover">
				<RowCenterView><ButtonText state="hover">Top</ButtonText></RowCenterView>
			</TooltipBtn>
		</RowCenterView>
	</View>
);
const Symbol_Mobile_Hover = makeSymbol(() => {
	return <Mobile_Hover />
}, 'tooltip/mobile/hover');

// pc 端 default symbol
const PC_Default = () => (
	<RowCenterView>
		<TooltipBtn>
			<RowCenterView><ButtonTextPc>Top</ButtonTextPc></RowCenterView>
		</TooltipBtn>
	</RowCenterView>
);
const Symbol_PC_Default = makeSymbol(() => {
  return <PC_Default />
}, 'tooltip/pc/default');

// pc 端 hover symbol
const PC_Hover = () => (
	<View>
		<PromptView>
			<RowCenterView>
				<PromptBtn><ButtonTextPc type="prompt">Prompt Text</ButtonTextPc></PromptBtn>
			</RowCenterView>
			<RowCenterView>
				<PromptCornerView>{getIconFont('down_triangle_fill', 'md', colorList.baseLightTextColor)}</PromptCornerView>
			</RowCenterView>
		</PromptView>
		<RowCenterView>
			<TooltipBtn state="hover">
				<RowCenterView><ButtonTextPc state="hover">Top</ButtonTextPc></RowCenterView>
			</TooltipBtn>
		</RowCenterView>
	</View>
);
const Symbol_PC_Hover = makeSymbol(() => {
	return <PC_Hover />
}, 'tooltip/pc/hover');

const RowView = styled.View`
	flexDirection: row;
	justifyContent: flex-start;
`
const DescTextView = styled.View`
	marginRight: 16px;
	flexDirection: column;
	justifyContent: center;
`;
const EmptyView = styled.View`
	height: 16px;
	width: 100%;
`
const Tooltip = (props) => {
	if(props.platform === 'pc') {
		return <View>
			<PanelTitle>Tooltip</PanelTitle>
			<Panel>
				<RowView>
					<DescTextView><ButtonTextPc>Normal:</ButtonTextPc></DescTextView>
					<Symbol_PC_Default />
				</RowView>
				<EmptyView />
				<RowView>
					<DescTextView><ButtonTextPc>Hover:</ButtonTextPc></DescTextView>
					<Symbol_PC_Hover />
				</RowView>
			</Panel>
		</View>
	} 
	return <View>
		<PanelTitle>Tooltip</PanelTitle>
		<Panel>
			<RowView>
				<DescTextView><ButtonTextPc>Normal:</ButtonTextPc></DescTextView>
				<Symbol_Mobile_Default />
			</RowView>
			<EmptyView />
			<RowView>
				<DescTextView><ButtonTextPc>Hover:</ButtonTextPc></DescTextView>
				<Symbol_Mobile_Hover />
			</RowView>
		</Panel>
	</View>
};
export default Tooltip;