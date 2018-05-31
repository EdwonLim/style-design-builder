# 主色与强调色说明
## 一、色彩选择
1. 主色作为项目的品牌色，主色应用于页面中最常出现的彩色部分，因此起到强烈的强调作用。
2. 主色与强调色应使用“互补色”，即色轮中夹角度数180°位置的颜色，例如**上面**色轮中的“Yellow”与“Purple”。
3. 主色建议选色值表中任意颜色的6号色，而辅助色的色号建议选择2/3、7/8。
4. 在选择主色与强调色的同时各应选择其浅色和深色色号的颜色，用于其本身的对比。
## 二、主色的使用
1. 应用于绝大部分原色，例如header、icon、边框、按钮、背景等，确定主色之后尽可能多的元素都使用这个颜色值，体现设计的外观一致性。
2. 色彩包含多个色号，主色的不同色号可以用于内容的对比。
## 三、强调色的使用
1. 应用于需要和主色产生一定对比的元素，以便让用户明显感觉到元素的存在，例如悬浮按钮、文字按钮、选中文本、进度条、开关、滑块、链接、标题等。
2. 强调色的使用面积不宜过大，但应足够醒目。
3. 强调色可选，在没有强调色的时候，可以使用不同深度的主色作为辅助。
# 文本颜色
## 一、css中文本颜色的使用
<div class="imgblock">
    <div class="sm">
        <p class="mult-text">使用灰色文本会降低与背景颜色的相对亮度，从而导致可读性降低，因此css中应使用`rgba`代替`HEX`值。(WCAG 2.0)
        深色背景中的浅色文字与浅色背景中是深色文字比，需要更高的对比度才能达到相同的辨识度。</p>
    </div>
    <div class="sm">
        <img class="img" src="https://ws1.sinaimg.cn/large/b0b365f5ly1frsghscmjyj20k408cjrv.jpg" alt="文本使用"/>
    </div>
</div>

## 二、深色背景上的文本

<div class="imgblock">
    <div class="sm">
        <p class="mult-text">深色背景中使用 100%、70%、50%透明度的纯白色文本。</p>
    </div>
    <div class="sm">
        <img class="img" src="https://ws1.sinaimg.cn/large/b0b365f5ly1frsgiqe7m1j20jy05kdg4.jpg" alt="文本使用"/>
    </div>
</div>

## 三、浅色背景上的文本
<div class="imgblock">
    <div class="sm">
        <p class="mult-text">浅色背景中使用87%、54%、38%透明度的深色文本。</p>
    </div>
    <div class="sm">
        <img class="img" src="https://ws1.sinaimg.cn/large/b0b365f5ly1frsgjdk1r1j20jw08gdg6.jpg" alt="文本使用" />
    </div>
</div>


