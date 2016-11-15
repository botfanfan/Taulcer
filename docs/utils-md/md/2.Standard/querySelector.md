# querySelector

> 返回该元素后代元素中, 第一个匹配选择器参数的后代元素.
> 如果没有找到匹配元素, 则返回 null, 否则找到多个匹配元素, 则返回第一个匹配到的元素.
> 如果指定的选择器不合法, 则抛出 SYNTAX_ERR 异常.
> CSS 伪类不会返回任何元素.

#### 语法

```javascript
element = document.querySelector(selectors);
```

> ##### - element: 一个 element 对象(DOM 元素);
> ##### - selectors: 遵循CSS选择器规范的字符串;

#### 例子

> 返回指定div标签中的指定input标签.

```javascript
<div class="user-panel main">
    <input name="login" value="这个标签将被返回"/>
</div>

<script>
    var el = document.querySelector("div.user-panel.main input[name=login]");
</script>
```


## querySelectorAll

> 返回当前文档中匹配一个特定选择器的所有的元素.
> 返回的对象类型是 NodeList.
> 如果 selectors参数中包含 CSS伪类 ,则返回一个空的elementList.
> 如果指定的选择器不合法,则抛出一个SYNTAX_ERR 异常.

#### 语法

```javascript
elementList = document.querySelectorAll(selectors);
```

> ##### - elementList: 一个non-live的 NodeList 类型的对象;
> ##### - selectors: 遵循CSS选择器规范的字符串;

#### 例子

> 返回一个文档中所有的class为"note"或者 "alert"的div元素.

```javascript
var matches = document.querySelectorAll("div.note, div.alert");
```


#### 扩展
> ##### 更多querySelector, 详见外网文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector" target="_blank">querySelector</a>
> ##### 更多querySelectorAll, 详见外网文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll" target="_blank">querySelectorAll</a>
> ##### CSS选择器, 详见外网文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_Started/Selectors" target="_blank">CSS选择器</a>
> ##### CSS伪类, 详见外网文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements" target="_blank">CSS伪类</a>
> ##### NodeList, 详见外网文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList" target="_blank">NodeList</a>


