module.exports = {
  title: "Youth Design",
  description: "多平台的设计语言，Youth Design 以青春、未来、科学为设计理念，服务于 YMFE 的众多移动端、PC 端框架",
  author: "ymfe",
  plugins: ["copy", "edit-page"],
  pluginsConfig: {
    'import-asset': {
      css: 'custom.css'
    },
    "edit-page": {
      prefix: 'http://gitlab.corp.qunar.com/mfe/ydoc/tree/master/docs'
    }
  },
  markdownIt: function (md) {

  },
  dist: '_site',
  version: require('./package.json').version
}