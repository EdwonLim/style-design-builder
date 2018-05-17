import React from 'react';
import PropTypes from 'prop-types';
import { render, Text, Page, Document, Artboard } from 'react-sketchapp';
import VARIABLE from './common/variables';
import ArtboardPalette from './artboard/Palette';
import ArtboardText from './artboard/Text';
import ArtboardColor from './artboard/Color';
import ArtboardIcon from './artboard/Icon';
import ArtboardPC from './artboard/UIKitPC';
import ArtboardMobile from './artboard/UIKitMobile';

const Doc = () => {
	return (
		<Document>
			{/* <Page name="Style">
        <ArtboardPalette />
        <ArtboardColor />
        <ArtboardText />
        <ArtboardIcon />
      </Page> */}
      {/* <Page name="UI Kit of PC">
        <ArtboardPC />
<<<<<<< HEAD
      </Page>
=======
      </Page> */}
>>>>>>> b08677136fa89ba27a2e0723fc2ee756ef2fa883
      <Page name="UI Kit of Mobile">
        <ArtboardMobile />
      </Page>
		</Document>);
};

export default (context) => {
	render(<Doc />);
}