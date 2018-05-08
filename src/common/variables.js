import { colorPalette } from './util';

export default VARIABLE = {
  colorList: {
    primaryColor: '#00bcd4',
    lightPrimaryColorNumber: 5,
    lightPrimaryColor: () => { return colorPalette(VARIABLE.colorList.primaryColor, VARIABLE.colorList.lightPrimaryColorNumber) },
    deepPrimaryColorNumber: 8,
    deepPrimaryColor: () => { return colorPalette(VARIABLE.colorList.primaryColor, VARIABLE.colorList.deepPrimaryColorNumber) },
    secondaryColor: '#ff9800',
    lightSecondaryColorNumber: 4,
    lightSecondaryColor: () => { return colorPalette(VARIABLE.colorList.secondaryColor, VARIABLE.colorList.lightSecondaryColorNumber) },
    deepSecondaryColorNumber: 8,
    deepSecondaryColor: () => { return colorPalette(VARIABLE.colorList.secondaryColor, VARIABLE.colorList.deepSecondaryColorNumber) },
    htmlBgolor: 'rgba(0, 0, 0, .06)',
    lightHoverBgColor: 'rgba(0, 0, 0, .1)',
    lightActiveBgColor: 'rgba(0, 0, 0, .2)',
    deepHoverBgolor: 'rgba(255, 255, 255, .1)',
    deepActiveBgolor: 'rgba(255, 255, 255, .2)',
    baseDeepTextColor: 'rgba(255, 255, 255, 1)',
    descDeepTextColor: 'rgba(255, 255, 255, .7)',
    disableDeepTextColor: 'rgba(255, 255, 255, .5)',
    segmentDeepTextColor: 'rgba(255, 255, 255, .18)',
    baseLightTextColor: 'rgba(0, 0, 0, .87)',
    descLightTextColor: 'rgba(0, 0, 0, .54)',
    disableLightTextColor: 'rgba(0, 0, 0, .38)',
    segmentLightTextColor: 'rgba(0, 0, 0, .12)',
    // 功能色 错误成功链接 警告
    func: [
      {
        name: '错误',
        color: '#ff4f5f'
      }, {
        name: '链接',
        color: '#40a9ff'
      }, {
        name: '成功',
        color: '#73d13d'
      }, {
        name: '警告',
        color: '#fac200'
      }
    ],
    // 事业部
    BU: [
      {
        name: '住宿',
        color: '#FF5555',
        range: '酒店，公寓，客栈，会所...'
      }, {
        name: '交通',
        color: '#03A9F4',
        range: '机票，汽车票，火车票，船票...'
      }, {
        name: '旅游',
        color: '#7EB63D',
        range: '旅游度假，景点门票，周边，签证...'
      }, {
        name: '金融',
        color: '#FF9800',
        range: '金融理财，保险商城，全球购...'
      }
    ]
  },
  colorValue: [{
    name: 'Red',
    value: '#f5222d'
  }, {
    name: 'Valcano',
    value: '#fa541c'
  }, {
    name: 'Orange',
    value: '#fa8c16'
  }, {
    name: 'Gold',
    value: '#faad14'
  }, {
    name: 'Yellow',
    value: '#fadb14'
  }, {
    name: 'Lime',
    value: '#a0d911'
  }, {
    name: 'Green',
    value: '#52c41a'
  }, {
    name: 'Cyan',
    value: '#13c2c2'
  }, {
    name: 'Blue',
    value: '#1890ff'
  }, {
    name: 'GeekBlue',
    value: '#2f54eb'
  }, {
    name: 'Purple',
    value: '#722ed1'
  }, {
    name: 'Pink',
    value: '#eb2f96'
  }],
  font: [
    {
      name: 'display1',
      desc: '展示类大标题',
      fontSize: 56,
      lineHeight: 84
    }, {
      name: 'display2',
      desc: '展示类标题',
      fontSize: 48,
      lineHeight: 64
    }, {
      name: 'headline1',
      desc: '导航标题、重要标题',
      fontSize: 32,
      lineHeight: 32 * 1.5
    }, {
      name: 'headline2',
      desc: '标题、列表名称',
      fontSize: 24,
      lineHeight: 24 * 1.5
    }, {
      name: 'headline3',
      desc: '次级标题',
      fontSize: 20,
      lineHeight: 20 * 1.5
    }, {
      name: 'title',
      desc: '正文标题',
      fontSize: 18,
      lineHeight: 18 * 1.5
    }, {
      name: 'body',
      secondName: 'subhead',
      desc: '正文',
      secondDesc: 'PC端的副标题',
      fontSize: 16,
      lineHeight: 16 * 1.5
    }, {
      name: 'footNote',
      secondName: 'body',
      desc: '脚注',
      secondDesc: 'PC端的正文',
      fontSize: 14,
      lineHeight: 14 * 1.5
    }, {
      name: 'caption1',
      desc: '描述信息',
      fontSize: 12,
      lineHeight: 12 * 1.5
    }, {
      name: 'caption2',
      desc: '更小的描述信息',
      fontSize: 10,
      lineHeight: 10 * 1.5
    }
  ],
  borderRadius: 4,
};