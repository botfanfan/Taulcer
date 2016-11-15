# Module

> Module语法是JavaScript模块的标准写法, 模块功能主要由两个命令构成：export和import。
> export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

#### import命令 — 逐一指定要加载的方法

```javascript
// 引入模块utils中的三个方法:
import { dataFilter, getUrlParam, checkIDCardNumber } from 'utils';

// 调用dataFilter方法
dataFilter();
```

#### import命令 — 整体加载(不推荐)

```javascript
// 如引入模块utils中的所有方法(不推荐):
import * as U from 'utils';

// 调用dataFilter方法
U.dataFilter();
```

#### import命令 — 执行所加载的模块

```javascript
// 下面代码仅仅执行lodash模块，但是不输入任何值。
import 'lodash';
```

#### export命令 - 输出变量

```javascript
// profile.js 文件输出三个变量(推荐使用, 因为可以在脚本尾部，一眼看清楚输出了哪些变量)
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year }; // 花括号必不可少


// profile.js 文件输出三个变量(另一种写法, 等价于上边的写法)
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

#### export命令 - 输出方法

```javascript
// profile.js 文件输出方法multiply
export function multiply(x, y) {
  return x * y;
};


// profile.js 文件输出方法multiply(另一种写法, 等价于上边的写法)
function multiply(x, y) {
  return x * y;
};
export { multiply }
```

#### 扩展
> ##### export default命令和模块的继承请参考外网文档 <a href="http://es6.ruanyifeng.com/#docs/module" target="_blank">ES6 Module</a>

