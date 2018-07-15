![](./tblogo.jpg)

[click me to preview this App](https://yo1995.github.io/Daily_Web_Tasks/threebody)

## Description

*Trisolarans, may the force be with you*

According to the novel *The Three-Body Problem* written by Liu, one of the major problems that besets the civilians on the colonized planet is that there exists 3 stars in their star-system. Proposed by David Hilbert in 1900s, the n-bodies problem is always a spectre that haunted human beings for decades. People finally acknowledged that the three-body problem inevitably leads to chaotic outcome. Therefore, the ultimate fate that confronts the Trisolarans is perpetual perishment.

In order to help their worships, the ETO began to try to figure out analytical solutions with great efforts. They tried so hard to solve a theoretically insoluble problem. Therefore, it could only lead to desperation and suspicion.

The author glued snippets of code together to memorize the bygone history of one of the parallel universes. Always keep in mind - 

*WE ARE ALL BUGS*

## Versions

### 201807

- added first version. YEEEHAAALL!!!

## Usage

0. check your web browser performance. generally works fine on Safari, Chrome, Firefox. does not support Edge and IE.

1. open the link and watch. by default a random tri-star system will be generated on the canvas of universe.

2. use the sliders and buttons to adjust settings.

3. toggles to switch star trails. rocket to copy the parameters of current universe. (copied link need some jimmy to work ;-)

4. click presets to enable specific bestowed n-body systems. discover more with your own settings!

## Development

0. install React App environment 

1. npm start from root dir to preview

2. npm build to obtain publish-version

note there is a specific path setting in App.js, remove or modify before deploy.

## MATLAB

repo里附带一个简单验证“8”字型和等边三角形三体问题的程序，通过手动计算得出其初始笛卡尔坐标与速度。这两种三体问题都是不稳定的。

## Previews

![](./progress_notes/20180713181022.png)

## Known bugs and improvements

- “8”字型和等边三角形三体问题在本程序中运行一定时间后积累误差会导致轨道偏移。后续版本可能改进。

- when collide (positions are equal between bodies), the gravitational forces become infinity. hence they just fly away in opposite direction, which cause a ugly paradigm. might add a not-so-physics method to solve it :-/

## Refs

### Resources

[ThreeBody](https://github.com/dnass/threebody)

[现代设计切换开关](https://www.html5tricks.com/pure-css3-checkbox-switch.html)

[stars background](https://github.com/NiklasKnaack/jquery-warpdrive-plugin)

[Three Bodies on a Figure Eight](http://www.artcompsci.org/msa/web/vol_1/v1_web/node45.html)

### Instruction

[js array 方法总结](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)

[元素居中](https://www.w3cplus.com/css/elements-horizontally-center-with-css.html)

[RGB 转换](http://www.atool.org/colorpicker.php)

~~[三体组织ETO](https://zh.moegirl.org/%E5%9C%B0%E7%90%83%E4%B8%89%E4%BD%93%E7%BB%84%E7%BB%87)~~

[CSS 相邻兄弟选择器](http://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp)

[star-of-david](https://www.toptal.com/designers/htmlarrows/symbols/star-of-david/)

[threejs](https://threejs.org/docs/#api/materials/LineBasicMaterial)

[How does Lagrangian Point L4 look like](https://www.youtube.com/watch?v=2-kR7VaHyMg)

[Three Bodies in Gravitation](http://astro.u-strasbg.fr/~koppen/body/ThreeBodyHelp.html)

[Rhett Allain](https://www.wired.com/2016/06/way-solve-three-body-problem/)

### Example

[Example](https://yo1995.github.io/Daily_Web_Tasks/threebody/25/0.69/5/1/1/1/50/0.91/1.54/0.75/-0.35/0.25/-0.42/-0.39/0.82/-0.99/0.13/0.07/0.07/0.07/-0.06/0.75/1.53/-0.39/-0.3/-0.38/0.45/0.17)
- to run the example, you need to visit the home page first

## Keywords

threebody | three-body | 三体 | n-body | three.js | visualization | 