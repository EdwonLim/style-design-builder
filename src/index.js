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
<<<<<<< HEAD
        <ArtboardText /> */}
        {/* <ArtboardIcon /> */}
        <ArtboardPC></ArtboardPC>
      </Page>
      {/* <Page name="UI Kit of PC">
        <ArtboardPC />
=======
        <ArtboardText />
        <ArtboardIcon />
>>>>>>> 33328c600be46117eb24b6e04f3bf7e1570fbc20
      </Page> */}
      <Page name="UI Kit of PC">
        <ArtboardPC />
      </Page>
      <Page name="UI Kit of Mobile">
        <ArtboardMobile />
      </Page>
		</Document>);
};

export default (context) => {
	render(<Doc />);
}