import React from 'react';
import { render, Artboard, Text, View, Page, Document, StyleSheet, TextStyles } from 'react-sketchapp';
import Header from '../common/Header';
import { colorPalette } from '../common/util';
import { styles, fonts } from '../common/style';
import styled from 'styled-components/primitives';
import VARIABLE from '../common/variables';

const BodyText = fonts.title.extend``;
const Row = styled.View`
  flexDirection: row;
  marginBottom: 24px;
`;
const Container = styled.View`
  flexBasis: 140px;
  marginRight: 32px;
`;
const Box = styled.View`
  marginTop: 8px;
  borderWidth: 1px;
  height: 140px;
  borderColor: #ddd;
  borderRadius: 4px;
  paddingHorizontal: 20px;
  paddingBottom: 12px;
  justifyContent: flex-end;
`;
const DemoName = fonts.display2.extend`
  textAlign: center;
  fontSize: 46;
  color: 'rgba(0, 0, 0, .87)';
  lineHeight: 55;
  marginBottom: 12;
  fontFamily: ${props => props.type === 'Helvetica' ? 'Helvetica' : 'Pingfang SC'}
`;
const DemoNameFamily = fonts.title.extend`
  textAlign: center;
  fontSize: 16px;
  color: rgba(0, 0, 0, .65);
`;
const FontLine = styled.View`
  width: 100%;
  height: 1px;
  backgroundColor: #ddd;
  marginBottom: 8px;
`;
const guideName = VARIABLE.guideName;



const ArtboardText = () => (
  <Artboard name="Text" style={{ position: 'absolute', width: 1440, left: 3200 }}>
		<Header>{guideName} - 文字</Header>
		<styles.Body name="body">
			<styles.Title>字体</styles.Title>
      <Row>
				<Container>
          <BodyText>中文</BodyText>
					<Box>
            <DemoName>移</DemoName>
						<FontLine />
            <DemoNameFamily>Pingfang SC</DemoNameFamily>
          </Box>
        </Container>
				<Container>
          <BodyText>英文</BodyText>
					<Box>
            <DemoName type="Helvetica">Aa</DemoName>
						<FontLine />
            <DemoNameFamily>Helvetica</DemoNameFamily>
          </Box>
        </Container> type="Helvetica"
				<Container>
          <BodyText>数字</BodyText>
					<Box>
            <DemoName type="Helvetica">123</DemoName>
						<FontLine />
            <DemoNameFamily>Helvetica</DemoNameFamily>
          </Box>
        </Container>
      </Row>
      <BodyText>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;</BodyText>
			<styles.Title>文字排版</styles.Title>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{
					VARIABLE.font.map((item, index) => {
						return <View style={{ width: '100%', flexDirection: 'row', marginBottom: 16 }} key={index}>
              <Text style={{ width: 140, lineHeight: item.lineHeight }}>{item.name}{item.secondName ? ' (' + item.secondName + ')': ''}</Text>
              <Text style={{ width: 180, lineHeight: item.lineHeight }}>{item.desc}{item.secondDesc ? ' (' + item.secondDesc + ')' : ''}</Text>
              <Text style={StyleSheet.flatten([TextStyles.get(item.name), { width: 300, marginRight: 32 }])}>Regular {new Number(item.fontSize).toString()}px/{new Number(item.lineHeight).toString()}px</Text>
              <Text style={StyleSheet.flatten([TextStyles.get(item.name), { flex: 1 }])}>我是字体 ABCDEFGH 0123456789</Text>
						</View>
					})
				}
			</View>
		</styles.Body>
	</Artboard>
);
export default ArtboardText;