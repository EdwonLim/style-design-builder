import React from 'react';
import { makeSymbol, render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import { styles } from '../style/commonStyle';
import Header from '../component/Header';
import { colorPalette } from '../util';

const ownerStyles = {
    listWarp: {
        padding: '32px'
    },
    card: {
        width: '360px',
        marginRight: '64px',
        marginBottom: '64px'
    },
    cardWarp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '8px'
    },
    innerCardWarp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '8px'
    },
    abilityCardWarp: {
        width: '120px',
        height: '120px',
        marginRight: '16px'
    },
    abilityCardContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    textCenter: {
        position: 'relative',
        top: '40%',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 20, 
        color: 'rgba(0, 0, 0, .7)', 
        lineHeight: 30,
        marginBottom: '8px'
    }
};

const colorList = {
    primaryColor: '#1E2634',
    lightPrimaryColor: 4,
    deepPrimaryColor: 8,
    secondaryColor: '#ff3b71',
    lightSecondaryColor: 4,
    deepSecondaryColor: 8,
    htmlBackGroundColor: 'rgba(0, 0, 0, .06)',
    baseDeepTextColor: 'rgba(255, 255, 255, 1)',
    captionDeepTextColor: 'rgba(255, 255, 255, .7)',
    disableDeepTextColor: 'rgba(255, 255, 255, .5)',
    lineDeepTextColor: 'rgba(255, 255, 255, .18)',
    baseLightTextColor: 'rgba(0, 0, 0, .87)',
    captionLightTextColor: 'rgba(0, 0, 0, .54)',
    disableLightTextColor: 'rgba(0, 0, 0, .3)',
    lineLightTextColor: 'rgba(0, 0, 0, .12)',
    // 功能色 错误成功链接 警告
    errorColor: '#ff4f5f',
    successColor: '#73d13d',
    linkColor: '#40a9ff',
    warnColor: '#fac200'
};

const DevelopColor = () => (
    <Artboard name='developColor'
        style={{ position: 'absolute', width: 1440, left: 3200}}
    >
        <Header>项目色彩规范</Header>
        <view name='body'
            style={ styles.body }
        >
            <Text style={styles.titleTextOnLightBG}>定义</Text>
            <Text style={styles.bodyTextOnLightBG}>YMFE Design的通用色彩规范规定了色彩风格与使用注意事项。</Text>
            <Text style={styles.bodyTextOnLightBG}>各项目在UI设计阶段应确定各自的色彩规范，项目色彩继承自通用色彩规范，主要包含以下内容:</Text>
            <View style={ ownerStyles.listWarp}>
                <Text style={ styles.bodyTextOnLightBG}>1. 主色: 应用于绝大部分元素，例如header、icon、边框、按钮、背景等，确定主色之后尽可能多的元素都是用这个颜色值，体现设计的外观一致性。</Text>
                <Text style={ styles.bodyTextOnLightBG}>2. 强调色(可选): 因用于需要和主色产生一定的对比的元素，以便让用户明显感到元素的存在，例如悬浮按钮、文字按钮、选中文本、进度条、开关、滑块、链接、标题等。</Text>
                <Text style={ styles.bodyTextOnLightBG}>3. 功能色: 有些元素的颜色不适合用主色和强调色来表示，在色彩规范中也应有所规定，例如错误警告一般使用红色，通常状态一般用绿色。</Text>
                <Text style={ styles.bodyTextOnLightBG}>4. 文本色: 暗色背景中主文本色、辅助文本色。 亮色背景的主文本色、辅助文本色。</Text>
            </View>
            <Text style={styles.titleTextOnLightBG}>开发者平台-项目色彩规范</Text>
            <View style={ownerStyles.cardWarp}>
                <View name='primary'
                     style={ownerStyles.card}
                >
                    <Text style={ownerStyles.subTitle}>主色</Text>
                    <View>
                        <View 
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorList.primaryColor})}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>6(主色)</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorList.primaryColor}</Text>
                        </View>
                        <View 
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorPalette(colorList.primaryColor, colorList.lightSecondaryColor)})}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>4</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorPalette(colorList.primaryColor, colorList.lightPrimaryColor)}</Text>
                        </View>
                        <View
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorPalette(colorList.primaryColor, colorList.deepPrimaryColor)} )}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>8</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorPalette(colorList.primaryColor, colorList.deepPrimaryColor)}</Text>
                        </View>
                    </View>
                </View>
                <View name='secondaryColor' style={ownerStyles.card}>
                    <Text style={ownerStyles.subTitle}>强调色</Text>
                    <View>
                        <View 
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorList.secondaryColor})}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>6(强调色)</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorList.secondaryColor}</Text>
                        </View>
                        <View 
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorPalette(colorList.secondaryColor, colorList.lightSecondaryColor)})}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>4</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorPalette(colorList.secondaryColor, colorList.lightSecondaryColor)}</Text>
                        </View>
                        <View
                            style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorPalette(colorList.secondaryColor, colorList.deepSecondaryColor)} )}
                        >
                            <Text style={styles.bodyTextOnDeepBG}>8</Text>
                            <Text style={styles.bodyTextOnDeepBG}>{colorPalette(colorList.secondaryColor, colorList.deepSecondaryColor)}</Text>
                        </View>
                    </View>
                </View>
                <View name='background'  style={ownerStyles.card}>
                    <Text style={ownerStyles.subTitle}>背景色</Text>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: colorList.htmlBackGroundColor})}>
                        <Text style={styles.bodyTextOnLightBG}>浅灰色背景色</Text>
                        <Text style={styles.bodyTextOnLightBG}>{colorList.htmlBackGroundColor}</Text>
                    </View>
                </View>
            </View>
            <View style={ownerStyles.cardWarp}>
                <View name='deep-text'  style={ownerStyles.card}>
                    <Text style={ownerStyles.subTitle}>文本色-深色背景上的文本</Text>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#000'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.baseDeepTextColor}}>正文</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.baseDeepTextColor}}>{colorList.baseDeepTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#000'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.captionDeepTextColor}}>描述文本</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.captionDeepTextColor}}>{colorList.captionDeepTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#000'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.disableDeepTextColor}}>禁用/补充</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.disableDeepTextColor}}>{colorList.disableDeepTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#000'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.lineDeepTextColor}}>分割线/边框</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.lineDeepTextColor}}>{colorList.lineDeepTextColor}</Text>
                    </View>
                </View>
                <View name='light-text'  style={ownerStyles.card}>
                    <Text style={ownerStyles.subTitle}>文本色-浅色色背景上的文本</Text>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#fff'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.baseLightTextColor}}>正文</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.baseLightTextColor}}>{colorList.baseLightTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#fff'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.captionLightTextColor}}>描述文本</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.captionLightTextColor}}>{colorList.captionLightTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#fff'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.disableLightTextColor}}>禁用/补充</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.disableLightTextColor}}>{colorList.disableLightTextColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.innerCardWarp, {backgroundColor: '#fff'})}>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.lineLightTextColor}}>分割线/边框</Text>
                        <Text style={{...styles.bodyTextOnDeepBG, color: colorList.lineLightTextColor}}>{colorList.lineLightTextColor}</Text>
                    </View>
                </View>
            </View>
            <View name='ability' >
                <Text style={ownerStyles.subTitle}>功能色-错误/成功/链接/警告</Text>
                <View style={ownerStyles.abilityCardContainer}>
                    <View style={Object.assign({}, ownerStyles.abilityCardWarp, {backgroundColor: colorList.errorColor})}>
                        <Text style={{...styles.bodyTextOnDeepBG, ...ownerStyles.textCenter}}>{colorList.errorColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.abilityCardWarp, {backgroundColor: colorList.successColor})}>
                        <Text style={{...styles.bodyTextOnDeepBG, ...ownerStyles.textCenter}}>{colorList.successColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.abilityCardWarp, {backgroundColor: colorList.linkColor})}>
                        <Text style={{...styles.bodyTextOnDeepBG, ...ownerStyles.textCenter}}>{colorList.linkColor}</Text>
                    </View>
                    <View style={Object.assign({}, ownerStyles.abilityCardWarp, {backgroundColor: colorList.warnColor})}>
                        <Text style={{...styles.bodyTextOnDeepBG, ...ownerStyles.textCenter}}>{colorList.warnColor}</Text>
                    </View>
                </View>
            </View>
        </view>
    </Artboard>
);
export default DevelopColor;