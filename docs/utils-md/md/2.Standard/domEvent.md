# domEvent
> Dom事件监听

## .addEventListener(type, func)
> 为页面上的dom元素绑定事件
### 入参
* type(*)：事件类型,如click,mouseover,mouseout
* func(*):事件处理函数

### example
```js
let div = querySelector('#div');
div.addEventListener('click', function (e) {
    let event = e || window.event;     // 获取事件对象
    event.stopPropagation();           // 阻止事件冒泡
    event.preventDefault();            // 阻止事件的默认行为
    // do something
});
```
## .removeEventListener(func)
> 移除dom元素上绑定的事件
### 入参
* type(*)：事件类型,如click,mouseover,mouseout
* func(*):要移除的事件处理程序，此时func不能为匿名函数

### example
```js
let div = querySelector('#div');
// 绑定事件
div.addEventListener('click', function () {
    alert('R3 FE');        
});

//下面操作不会移除事件(若func为匿名函数，则不会移除成功)
div.removeEventListener('click', function () {
    alert('R3 FE');
});


//正确的移除方法
let div = querySelector('#div');
const func = function () {
    alert('R3 FE');
// 绑定事件
div.addEventListener('click', func);

//移除事件
div.removeEventListener('click', func);
