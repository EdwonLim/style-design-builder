/* @flow */
import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp';
import { styles } from '../common/style';

type Props = {
    title?: string,
    children?: any
};

const Header = ({ title, children }: Props) => (
    <View name="header" style={styles.headerTitle}>
        <Text style={styles.titleTextOnDarkBG}>{children} <Text style={styles.bodyTextOnDarkBG}>v0.1.0 2018-03-05</Text>
        </Text>
        <Text style={styles.bodyTextOnDarkBG}>移动端组件库模板，秉承 Youth Design 青春、未来、科学的设计理念，服务于 QRN、Hy、YIS 等移动端框架</Text>
        <Text style={styles.bodyTextOnDarkBG}>设计语言网址：http://ued.qunar.com/style-guide/</Text>
    </View>
)

export default Header;

