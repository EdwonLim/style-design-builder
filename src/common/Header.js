import React from 'react';
import { fonts } from './style';
import styled from 'styled-components/primitives';
import VARIABLE from './variables';
import moment from 'moment';

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
		<Title bgColor={BG_COLOR}>{children} <Subtitle bgColor={BG_COLOR} textType="desc">v{VARIABLE.version} ( {moment().format('YYYY-MM-DD')} ) </Subtitle></Title>
    	<Subtitle bgColor={BG_COLOR} textType="desc">{VARIABLE.description}</Subtitle>
	</Container>
)

export default Header;

