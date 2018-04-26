import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import Header from '../component/Header';
import { colorPalette } from '../common/util';
import { styles, fonts } from '../common/style';
const BodyText = fonts.title.extend``;

const ArtboardText = () => (
	<Artboard
		name="Text"
		style={{ position: 'absolute', width: 1440, left: 1600}}
	>
		<Header>Youth Design - 文字</Header>
		<styles.Body name="body">
			<styles.Title>字体</styles.Title>
			<View style={styles.fontBoxContainerRow}>
				<View style={styles.fontBoxContainer}>
          <BodyText>中文</BodyText>
					<View style={styles.fontBox}>
						<Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Pingfang SC' }])}>移</Text>
						<View style={styles.fontLine}></View>
						<Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Pingfang SC' }])}>Pingfang SC</Text>
					</View>
				</View>
				<View style={styles.fontBoxContainer}>
          <BodyText>英文</BodyText>
					<View style={styles.fontBox}>
						<Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>Aa</Text>
						<View style={styles.fontLine}></View>
						<Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
					</View>
				</View>
				<View style={styles.fontBoxContainer}>
          <BodyText>数字</BodyText>
					<View style={styles.fontBox}>
						<Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>123</Text>
						<View style={styles.fontLine}></View>
						<Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
					</View>
				</View>
			</View>
      <BodyText>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;</BodyText>

			<styles.Title>文字排版</styles.Title>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{/* <Text style={{ width: 160 }}>1</Text> */}
				{
					VARIABLE.font.map((item, index) => {
						return <View style={{ width: '100%', flexDirection: 'row', marginBottom: 16 }} key={index}>
						<Text style={{ width: 160, lineHeight: item.lineHeight}}>{item.name}</Text>
						<Text style={StyleSheet.flatten([TextStyles.get(item.name), { width: 300 }])}>Regular {new Number(item.fontSize).toString()}px/{new Number(item.lineHeight).toString()}px</Text>
						<Text style={StyleSheet.flatten([TextStyles.get(item.name), { flex: 1 }])}>我是字体 ABCDEFGH 0123456789</Text>
						</View>
					})
				}
			</View>
		</styles.Body>
	</Artboard>
);
export default ArtboardText;