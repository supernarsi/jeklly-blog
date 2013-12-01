---
layout: post
title: 禅意的编程——Emmet
category: tech
description: 写前端时我喜欢用 Notepad++，因为它的轻便，但也正是因为轻便，比起其他的编辑器，就显得功能太简单甚至简陋，最为诟病的应该就是代码补全的功能。Notepad++ 自带的代码补全功能十分鸡肋，甚至于连默认都没有开启该功能，需要自己在「设置」-「首选项」-「Auto-Completion」······
---
##介绍

写前端时我喜欢用 Notepad++，因为它的轻便，但也正是因为轻便，比起其他的编辑器，就显得功能太简单甚至简陋，最为诟病的应该就是代码补全的功能。Notepad++ 自带的代码补全功能十分鸡肋，甚至于连默认都没有开启该功能，需要自己在「设置」-「首选项」-「Auto-Completion」中去手动勾选。好在 Notepad++ 可以安装丰富的插件，通过第三方的方法来弥补这先天不足。

Emmet 其实就是鼎鼎大名的神器 Zen Coding，不知为什么开发者要换个名字，在我看来反倒比之前的名字少了些韵味。但其实内在没变，只是又增加了些新功能使这款插件更加强大。

写前端本就是个体力活，若是没有代码补全，那更是要做大量重复的工作，Emmet就是为解决这样的问题而开发的。但如果只是单纯的补全，那也实在没什么特别的，Emmet的过人之处，在于最大可能的减小前端开发者除逻辑以外的负担，甚至跟一些后端的架构模式有同工之妙，都将人从繁琐的表现中抽身出来。

举个例子，一个带链接的无序列表通常写法大约如下：

	<ul id="city_choice">
		<li class="city" id="city1"><a href=""></a></li>
		<li class="city" id="city2"><a href=""></a></li>
		<li class="city" id="city3"><a href=""></a></li>
		<li class="city" id="city4"><a href=""></a></li>
	</ul>

但是如果用Emmet的方式来书写，就可以精简为这样一行代码：

	ul#city_choice>li#city$.city*4>a

如此便写前端的话，效率将得到很大提升。说穿了，Emmet 其实是一个代码生成器，由缩写扩展和标签匹配两部分组成。缩写扩展部分像是对 css 选择器的一个扩展，还有点 JQuery 中元素选择器的感觉。，标签匹配则是完成的代码补全这一部分的功能。

##安装

Emmet 的安装有两种方式。

一种是通过 Notepad++ 中的 Plug Manager，直接在「插件」-「Plug Manager」-「Show Plug Manager」中找到 Emmet，勾选后点击 Install 便可安装。由于 GFW 的原因也许会遇到无法下载安装的情况，可以在 setting 中设置代理再进行下载安装。这样的安装方式比较简单方便。

此种方式安装过程中可能出现提示 `EmmetNPP.dll` 文件不受信任，询问是否允许复制文件的情况，然而即使允许后完成安装也无法使用插件，因为 `EmmetNPP.dll` 文件还是无法成功添加到 `plugins` 文件夹。暂时没有发现解决该问题的方法，因此要么选择在 Plug Manager 中安装较旧的版本 Zen Coding，或者选择另外的安装方式。

另一种安装方式是直接通过官方下载 <a href="http://download.emmet.io/npp/emmet-npp.zip" target="_blank">EmmetNPP</a> 压缩包，将其解压到 Notepad++ 安装目录下的 `./plugins/` 目录，重启 Notepad++ 后便可以在「插件」下找到 Emmet。

安装完成后需要在「设置」-「管理快捷键」-「Plugin commands」中修改 Emmet 的 Expand 快捷键，否则默认的「Ctrl」+「Alt」+「Enter」会与 Notepad++ 的内置快捷键冲突。

##使用

###一、缩写规则

使用 Emmet 主要是要了解它的缩写规则，简单列出部分常用的规则：

+	**子元素：>**

例：`div>p>span` 等于

	<div>
		<p>
			<span></span>
		</p>
	</div>
	
+	**兄弟元素：**+

例：`div+p` 等于

	<div></div>
	<p></p>

+	**聚合：**()

例：`div>(header>ul>li*2>a)+footer>p` 等于

	<div>
		<header>
			<ul>
				<li><a href=""></a></li>
				<li><a href=""></a></li>
			</ul>
		</header>
		<footer>
			<p></p>
		</footer>
	</div>

+	**元素倍增：**\*

例：`ul>li*3` 等于

	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>

+	**条目编号：**$

例：`ul>li.item$*3` 等于

	<ul>
		<li class="item1"></li>
		<li class="item2"></li>
		<li class="item3"></li>
	</ul>

例：`ul>li.item$@-*3` 等于

	<ul>
	    <li class="item3"></li>
	    <li class="item2"></li>
	    <li class="item1"></li>
	</ul>

+	**id/class选择：**#/.

例：`div.item1.item2#title` 等于

	<div class="item1 item2" id="title"></div>

+	**文字内容：**{}

例：`a{链接}` 等于

	<a href="">链接</a>

更多复杂的规则参考 <a href="http://docs.emmet.io/cheat-sheet/" target="_blank">官方手册</a>。

###二、缩写展开

输入缩写规则后，按下扩展快捷键，就自动扩写为完整的 HTML 代码。

快捷键的设置可以在「设置」-「管理快捷键」-「Plugin commands」中进行修改，Expand abbreviation 一项就是设置展开缩写，我自定义为了 Tab 键。

如果使用的是之前的 Zen Coding，且是安装的 JS 版，那么可以在`plugins\NppScripting\includes\Zen Coding.js`文件中自行修改缩写规则。

###三、缩写包裹

这是 Emmet 很实用的一个功能，在已编辑好一部分代码后如果需要在源代码外再嵌套其他标签，这时就可以使用缩写包裹的功能。

例如已经有了如下代码：

	<p>段落一</p>
	<p>段落二</p>
	<p>段落三</p>

此时要在p的父级添加 div 标签，只需要选定这块代码，再按「Ctrl+Alt+Shift+Enter」组合键调用缩写包裹功能，在弹出的对话框中输入需要嵌套的代码 `div.wrap`，就可以自动将代码补全为：

	<div class="wrap">
		<p>段落一</p>
		<p>段落二</p>
		<p>段落三</p>
	</div>

缩写包裹功能甚至能自动判断应该为当前代码段添加多少标签，例如代码段只有如下内容：

	part1
	part2
	part3

调用缩写包裹后输入 `ul>li*`，则会将代码补全为：

	<ul>
		<li>part1</li>
		<li>part2</li>
		<li>part3</li>
	</ul>

同样，该功能快捷键可以自定义，默认的快捷键似乎也会因为和 Notepad++ 冲突而失效。

##总结##

Emmet 确实算得上前端编写神器，无论是配合 Notepad++，或是 Aptana、Sublime Text 2 等其他流行的编辑器，都能配合得很好，极大地提高工作效率。另外 Emmet 还有许多其他的使用技巧，可以在使用过程中慢慢体味。