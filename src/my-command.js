import React from 'react';
import PropTypes from 'prop-types';
import { render, Text, Page, Document, Artboard } from 'react-sketchapp';
import styled from 'styled-components/primitives';
import chroma from 'chroma-js';
import VARIABLE from './common/variables';

import ArtboardPalette from './artboard/Palette';
import ArtboardText from './artboard/Text';
import ArtboardColor from './artboard/Color';

const textColor = (hex) => {
	const vsWhite = chroma.contrast(hex, 'white');
	if (vsWhite > 4) {
		return '#FFF';
	}
	return chroma(hex)
		.darken(3)
		.hex();
};

const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 4px;
  margin: 4px;
  background-color: ${props => props.hex};
  justify-content: center;
  align-items: center;
`;
const SwatchName = styled.Text`
  color: ${props => textColor(props.hex)};
  font-weight: bold;
`;
const Ampersand = styled.Text`
  color: #f3f3f3;
  font-size: 120px;
  font-family: Himalaya;
  line-height: 144px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-family: "GT America";
  font-weight: bold;
  padding: 4px;
`;

const Swatch = ({ name, hex }) => (
	<SwatchTile name={`Swatch ${name}`} hex={hex}>
		<SwatchName name="Swatch Name" hex={hex}>
			{name}
		</SwatchName>
		<Ampersand hex={hex}>&</Ampersand>
	</SwatchTile>
);

const Color = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Doc = ({colors}) => {
	return (
		<Document>
			<Page name="Style">
				{/* <Artboard>
					<Title>Max’s Sweaters</Title>
					{Object.keys(colors).map(color => (
						<Swatch name={color} hex={colors[color]} key={color} />
					))}
				</Artboard> */}
				<ArtboardPalette />
				<ArtboardText />
				<ArtboardColor />
			</Page>
		</Document>);
}
Doc.propTypes = {
	colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default (context) => {
	const colorList = {
		Classic: '#96324E',
		Neue: '#21304E',
		Test: '#cdf'
	};
	render(<Doc colors={colorList}/>, context.document.currentPage());
}