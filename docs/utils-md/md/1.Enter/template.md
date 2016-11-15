# Template

> Webstorm 编辑器建议代码模板

> IDE 模板配置路径: Preferences -> Editor -> File and Code Templates


#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="biz-code" content="rm">
  <title>Title</title>
  <link href="/assets/img/favicon.ico" rel="icon" type="image/x-icon">
  <!--<link href="/assets/css/main.css" rel="stylesheet">-->
  <link href="/rm/assets/css/rm.css" rel="stylesheet">
</head>
<body>
  <div id="container-box"></div>
</body>
</html>
```

#### index.js

```javascript
import 'aii-taurus';
import Enter from './main';

new Vue({
  el: '#container-box',
  template: '<Enter/>',
  components: {
    Enter
  }
});
```

#### main.vue

```vue
<template>
  
</template>

<script>
  import {TDataTable} from 'aii-taurus';
  import {constant} from 'rmpub';

  export default {
    components: { // register component
      TDataTable
    },
    data () {
      return {
        table: {
          pageSize: constant.PAGESIZE,
          pagination: constant.PAGINATION
        }
      };
    },
    methods: {
      testFunction (value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped>
  
</style>
```
