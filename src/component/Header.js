import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp';
import { styles, fonts } from '../common/style';
import styled from 'styled-components/primitives';

	// color: ${props => textColor(props.hex)};

const BG_COLOR = '#04182B';
const Container = styled.View`
	width: 100%;
	height: 400;
	backgroundColor: ${props => props.bgColor};
	padding: 120px 100px;
`;
const Title = fonts.display1.extend`
	marginBottom: 16;
`;
const Subtitle = fonts.headline3.extend``;

const Header = ({ title, children }) => (
	<Container name="header" bgColor={BG_COLOR}>
		<Title bgColor={BG_COLOR}>{children} <Subtitle bgColor={BG_COLOR} textType="desc">v0.1.0 2018-03-05</Subtitle></Title>
		<Subtitle bgColor={BG_COLOR} textType="desc">移动端组件库模板，秉承 Youth Design 青春、未来、科学的设计理念，服务于 QRN、Hy、YIS 等移动端框架</Subtitle>
		<Subtitle bgColor={BG_COLOR} textType="desc">设计语言网址：http://ued.qunar.com/style-guide/</Subtitle>
	</Container>
)

export default Header;

