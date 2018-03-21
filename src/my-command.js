import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { colorPalette } from './util';
import Header from './component/Header';
import { styles , styleFunc, colorValue, fonts, typeStyles } from './style/commonStyle';
import ArtboardColor from './artboard/Color';
import ArtboardText from './artboard/Text';
import DevelopColor from './artboard/developColor';

const Doc = props => {
    return (
        <Document>
            <Page name="Style">
                <DevelopColor></DevelopColor>
                <ArtboardColor></ArtboardColor>
                <ArtboardText></ArtboardText>
            </Page>
        </Document>);
}

export default (context) => {
  render(<Doc />, context.document.currentPage());
}