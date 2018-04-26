import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import Header from '../component/Header';
import Body from '../component/Body';
import { colorPalette } from '../util';
import { styles, fonts, colorValue, styleFunc } from '../common/style';

const ArtboardText = () => (
    <Artboard
        name="Text"
        style={{ position: 'absolute', width: 1440, left: 1600}}
    >
        <Header>Youth Design - 文字</Header>
        <Body name="body">
            <Text style={styles.titleTextOnLightBG}>字体</Text>
            <View style={styles.fontBoxContainerRow}>
                <View style={styles.fontBoxContainer}>
                    <Text style={styles.bodyTextOnLightBG}>中文</Text>
                    <View style={styles.fontBox}>
                        <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Pingfang SC' }])}>移</Text>
                        <View style={styles.fontLine}></View>
                        <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Pingfang SC' }])}>Pingfang SC</Text>
                    </View>
                </View>
                <View style={styles.fontBoxContainer}>
                    <Text style={styles.bodyTextOnLightBG}>英文</Text>
                    <View style={styles.fontBox}>
                        <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>Aa</Text>
                        <View style={styles.fontLine}></View>
                        <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
                    </View>
                </View>
                <View style={styles.fontBoxContainer}>
                    <Text style={styles.bodyTextOnLightBG}>数字</Text>
                    <View style={styles.fontBox}>
                        <Text style={StyleSheet.flatten([styles.fontDemoName, { fontFamily: 'Helvetica' }])}>123</Text>
                        <View style={styles.fontLine}></View>
                        <Text style={StyleSheet.flatten([styles.fontDemoFamily, { fontFamily: 'Helvetica' }])}>Helvetica</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.bodyTextOnLightBG}>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;</Text>

            <Text style={StyleSheet.flatten([styles.titleTextOnLightBG, { marginTop: 100 }])}>文字排版</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* <Text style={{ width: 160 }}>1</Text> */}
                {
                fonts.map((item, index) => {
                    return <View style={{ width: '100%', flexDirection: 'row', marginBottom: 16 }} key={index}>
                    <Text style={{ width: 160, lineHeight: item.lineHeight}}>{item.name}</Text>
                    <Text style={StyleSheet.flatten([TextStyles.get(item.name), { width: 300 }])}>Regular {new Number(item.fontSize).toString()}px/{new Number(item.lineHeight).toString()}px</Text>
                    <Text style={StyleSheet.flatten([TextStyles.get(item.name), { flex: 1 }])}>我是字体 ABCDEFGH 0123456789</Text>
                    </View>
                })
                }
                
            </View>
        </Body>
    </Artboard>
);
export default ArtboardText;