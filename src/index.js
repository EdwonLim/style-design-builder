import React from 'react';
import PropTypes from 'prop-types';
import { render, Text, Page, Document, Artboard } from 'react-sketchapp';
import VARIABLE from './common/variables';
import ArtboardPalette from './artboard/Palette';
import ArtboardText from './artboard/Text';
import ArtboardColor from './artboard/Color';

const Doc = () => {
	return (
		<Document>
			<Page name="Style">
        <ArtboardPalette />
        <ArtboardColor />
				<ArtboardText />
			</Page>
		</Document>);
};

export default (context) => {
	render(<Doc />, context.document.currentPage());
}