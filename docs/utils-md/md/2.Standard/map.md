# Map

> ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
> 也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。
> 如果你需要“键值对”的数据结构，Map比Object更合适。

#### 实例的属性和操作方法

> ##### - size; 属性, 返回Map结构的成员总数.
> ##### - set(key, value); 方法, 设置key所对应的键值, 然后返回整个Map结构; 如果key已经有值, 则键值会被更新, 否则就新生成该键.
> ##### - has(key); 方法, 返回一个布尔值, 表示某个键是否在Map数据结构中.
> ##### - get(key); 方法, 读取key对应的键值, 如果找不到key, 返回undefined.
> ##### - delete(key); 方法, 删除某个键, 返回true; 如果删除失败, 返回false.
> ##### - clear(); 方法, 清除所有成员, 没有返回值.

```javascript
/**
 * @name size
 * @desc 返回Map结构的成员总数
 */
var map = new Map();  // 声明一个Map对象
map.set('foo', true);
map.set('bar', false);

map.size // 2


/**
 * @name set(key, value)
 * @desc 设置key所对应的键值, 然后返回整个Map结构; 如果key已经有值, 则键值会被更新, 否则就新生成该键.
 * @params 参数支持任意形式
 */
var m = new Map();

m.set("edition", 6)        // 键是字符串
m.set(262, "standard")     // 键是数值
m.set(undefined, "nah")    // 键是undefined

// set方法返回的是Map本身，因此可以采用链式写法。
var map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');


/**
 * @name has(key)
 * @desc 返回一个布尔值, 表示某个键是否在Map数据结构中.
 * @params 参数为set方法设置的key
 */
var m = new Map();

m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");

m.has("edition")     // true
m.has("years")       // false
m.has(262)           // true
m.has('262')           // false, Number类型的262和String类型的'262'是两个不同的键.
m.has(undefined)     // true


/**
 * @name get(key)
 * @desc 读取key对应的键值, 如果找不到key, 返回undefined.
 * @params 参数为set方法设置的key
 */
var map = new Map();
// 对同一个键多次赋值, 后面的值将覆盖前面的值.
map.set(1, 'aaa').set(1, 'bbb');
map.get(1) // "bbb"

// 作为构造函数，Map也可以接受一个数组作为参数; 该数组的成员是一个个表示键值对的数组(数组转为Map).
var m = new Map([
  ['name', '张三'],
  ['title', 'Author'],
  ['true', 'foo'],
  [true, 'bar']
]);

m.size // 4
m.has('name') // true
m.get('name') // "张三"
m.has('title') // true
m.get('title') // "Author"
// 字符串true和布尔值true是两个不同的键.
m.get(true) // 'foo'
m.get('true') // 'bar'
// 如果读取一个未知的键, 则返回undefined.
m.get('age')  // undefined


/**
 * @name delete(key)
 * @desc 删除某个键, 返回true; 如果删除失败, 返回false.
 * @params 参数为set方法设置的key
 */
var m = new Map();
m.set(undefined, "nah");
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false


/**
 * @name clear()
 * @desc 清除所有成员, 没有返回值.
 */
var map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
```

#### 遍历方法

> ##### Map原生提供三个遍历器生成函数和一个遍历方法(Map的遍历顺序就是插入顺序).
> ##### keys()：返回键名的遍历器.
> ##### values()：返回键值的遍历器.
> ##### entries()：返回所有成员的遍历器.
> ##### forEach()：遍历Map的所有成员.

```javascript
var map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);
// let声明的变量只在它所在的代码块有效
// for...of 迭代循环
for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// 等同于使用map.entries().
for (let [key, value] of map) {
  console.log(key, value);
}
// 实际上, Map结构的默认遍历器接口(Symbol.iterator属性),就是entries方法.
map[Symbol.iterator] === map.entries
// true


// Map的forEach方法, 与数组的forEach方法类似, 也可以实现遍历.
map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});

// Key: F, Value: no
// Key: T, Value: yes

// forEach方法还可以接受第二个参数, 用来绑定this.
var reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map) {
  // forEach方法的回调函数的this，就指向reporter
  this.report(key, value);
}, reporter);

// Key: F, Value: no
// Key: T, Value: yes


// 结合数组的map方法、filter方法, 可以实现Map的遍历和过滤(Map本身没有map和filter方法).
let map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

// [...map0], 扩展运算符实现Map转数组
// filter() 方法使用指定的函数测试所有元素, 并创建一个包含所有通过测试的元素的新数组
let map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生Map结构 {1 => 'a', 2 => 'b'}

// map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
// array.map(currentValue,index,arr)
// array.map([k, v])
let map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
);
// 产生Map结构 {2 => '_a', 4 => '_b', 6 => '_c'}

// 箭头函数()就是个简写形式的函数表达式
// [...map0].map(([k, v]) => [k * 2, '_' + v]) 等价于
[...map0].map(function ([k, v]) {

})
```

#### 与其他数据结构的互相转换

```javascript
/*
 * 1. Map转为数组
 * 比较快速的方法是结合使用扩展运算符（...）
 */
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]


let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]


/*
 * 2. 数组转为Map
 * 将数组转入Map构造函数, 就可以转为Map.
 */
new Map([[true, 7], [{foo: 3}, ['abc']]])
// Map {true => 7, Object {foo: 3} => ['abc']}


/*
 * 3. Map转为对象
 * 如果所有Map的键都是字符串, 它可以转为对象.
 */
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }


/*
 * 4. 对象转为Map
 * 如果所有Map的键都是字符串, 它可以转为对象.
 */
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// [ [ 'yes', true ], [ 'no', false ] ]


/*
 * 5. Map转为JSON
 * Map转为JSON要区分两种情况:
 *  (1) Map的键名都是字符串, 这时可以选择转为对象JSON.
 *  (2) Map的键名有非字符串, 这时可以选择转为数组JSON.
 */
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'


/*
 * 6. JSON转为Map
 */
// JSON转为Map, 正常情况下, 所有键名都是字符串.
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes":true,"no":false}')
// Map {'yes' => true, 'no' => false}

// 特殊情况: 整个JSON就是一个数组, 且每个数组成员本身, 又是一个有两个成员的数组.
// 这时, 它可以一一对应地转为Map. 这往往是数组转为JSON的逆操作.
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
```

#### 扩展

> ##### Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
> ##### 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。
> ##### 具体说明请参考文档 <a href="http://es6.ruanyifeng.com/#docs/set-map" target="_blank">ES6 Map</a>
> ##### 迭代循环(for...of)详见文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">迭代循环</a>
> ##### 扩展运算符(...)详见文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">扩展运算符</a>
> ##### 数组过滤(array.filter())详见文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">array.filter()</a>
> ##### 数组map(array.map())详见文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">array.map()</a>
> ##### 箭头函数(=>)详见文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank">箭头函数</a>

