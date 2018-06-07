---
banner:
  name: '多平台的设计语言'
  desc: 'Youth Design 以青春、未来、科学为设计理念，服务于 YMFE 的众多移动端、PC 端框架'
  btns: 
    - { name: '开 始', href: './design/index.html', primary: true }
  caption: '当前版本: v0.0.1'
features: 
  - { name: '青春', desc: '以勇敢，激进，活泼，创新为设计风格，从配色、文本、排版等方面体现这些风格' }
  - { name: '未来', desc: '不断探索拥有良好体验的交互形式，敢于尝试新形式，吸收前沿的设计理念' }
  - { name: '科学', desc: '对自然科学时刻保持着敬畏的态度，用程序辅助视觉体系的建立，让视觉设计的变化有迹可循，减少人为偏差，同时便于UI组件的程序实现' }

footer:
  copyRight:
    name: 'YMFE Team'
    href: 'https://ymfe.org/'
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/YMFE/ydoc' }
      - { name: 'Github Issue', href: 'https://github.com/YMFE/ydoc/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />