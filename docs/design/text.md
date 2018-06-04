<!-- # 目标
创造一个面向未来的跨平台设计语言，统一团队项目的前端UI设计。   
探寻前言的交互形式，力求为用户提供卓越的使用体验。  
# 文字颜色
## 背景中的文本
文本应该在其背景中清晰可见，建议:
* 深灰色文本用于浅色背景
* 浅灰色文本用于深色背景
如果你的应用同时含有亮色和暗色主题，文本颜色应该要和每个主题都有足够的对比度。    
  
通过改变文字不透明度，而不是直接改变文字颜色，来强调不同部分文字的重要性。这样当背景色、文字色确定，我们可以通过改变文字颜色不透明度很容易得到辅助性文本的颜色。  
![](https://ws1.sinaimg.cn/large/b0b365f5ly1fryy9j72lhj20ra0beq41.jpg)  
  
考虑到无障碍设计的需求，帮助那些弱视和色盲的用户也能轻松识别和阅读屏幕上的文字，我们参考了WACG2.0 的标准，文本和背景色之间至少保持最小4:5:1的对比度（AA级），正文内容都保持了7:1以上的AAA级对比度。  
  
关于其它背景色下如何选择文字色，可以使用[Google Color Tool](https://material.io/collections/color/) 测试颜色的可访问性。   -->
# 字体
<div class="imgblock">
  <div class="sm">
    <img src="https://ws1.sinaimg.cn/large/b0b365f5ly1frzcrc5c1zj20rc0a20tb.jpg">
  </div>
</div>
  
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;
# 文字排版
![](https://ws1.sinaimg.cn/large/b0b365f5ly1frzcvc8xxdj21vy15owp5.jpg)  