# AboutDoc

> R3项目管理域前端工程文档

> 包含依赖的技术文档地址、编码规范、业务组件说明及业务API说明

## 文档环境构建
1. 安装nodejs, 版本要求: v4.x
2. 安装npm, 版本要求: v3.x
3. 安装gulp, 控制台执行: `npm install gulp -g`
4. 安装依赖(仅首次需要安装依赖): 控制台进入工程目录 `TN_Veris/docs/build/`, 执行 `npm install`
5. 执行构建命令: 控制台进入工程目录 `TN_Veris/docs/build/`, 请按严格顺序执行命令, 先执行 `gulp`，再执行 `gulp i`
6. 查看生成的文档(静态离线文档): `http://localhost:8080/docs/utils/index.html`


## 文档维护机制

### md文件
1. 文档源文件目录: `TN_Veris/docs/utils-md/md/`
2. 编译后文档路径: `TN_Veris/docs/utils/index.html`
3. 完成组件开发或者API封装后, 需在文档源文件对应目录下建立md文档文件, md文件名与组件或者API名相同, 完成编写后将md文件上传svn;
4. 执行文档编译, 将最新的文档文件(`TN_Veris/docs/utils/index.html`)上传svn;

### md文件书写规范
1. 一级目录是文档名，与文件名 `严格相同`；
2. 文档中必须指出入参、出参，及其数据类型，有特殊处要 __`强调`__ 表明；
3. 每个文档都要附上使用示例，示例中要注释详尽，如果有参考地址要附上链接。

#### example

```js

# dataFilter

## U.dataFilter (searchText, data, filterColumns, isMatched)
> 根据关键字和所需字段，过滤出符合要求的数据

### 入参
1. searchText(String)：过滤字符串,不区分大小写,__`不可为空`__
2. data(Array)：data 源数据,__`不可为空`__
3. filterColumns(Array)：指定属性,如果为空则全属性过滤
4. isMatched(Boolead)：isMatched 是否全匹配

### 出参
* （Array）：过滤后得到的数据

### example
```js
let data = {
    array: [
      {'custId': '1', 'addressType': 'home', 'address': '13', 'phone': '1', 'name': '77', 'birth': ''},
      {'custId': '1', 'addressType': 'work', 'address': '121', 'phone': '323', 'name': '77', 'birth': ''},
      {'custId': '2', 'addressType': 'home', 'address': '151', 'phone': '313', 'name': '77', 'birth': ''},
      {'custId': '1', 'addressType': 'work', 'address': '171', 'phone': '303', 'name': '77', 'birth': ''}
    ],
    searchText: '121',
    filterColumns: ['address']
  };
  let d = U.dataFilter(data.searchText, data.array, data.filterColumns);
  // => [{'custId': '1', 'addressType': 'work', 'address': '121', 'phone': '323', 'name': '77', 'birth': ''}]
```
```


