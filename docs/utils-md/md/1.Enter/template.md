# Template

>对于编辑器不做强制要求，但推荐使用Webstorm

> Webstorm 编辑器建议代码模板

> IDE 模板配置路径: Preferences -> Editor -> File and Code Templates


#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>index</title>
  <link rel="stylesheet" href="/assets/css/amazeui.min.css">
</head>
<body>
  <div id="app">
    <app></app>
  </div>
</body>
</html>
```

#### index.js

```javascript
import Vue from 'vue'
import App from './App'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    'app': App
  }
})
```

#### main.vue

```vue
<template>

</template>

<script>
  import utils from '../../components/utils';//引入组件库，视开发情况而定引入什么组件库
  import btn from '../../components/common/Btn'

  export default {
    components: { // register component
      btn
    },
    data () {
      return {

      };
    },
    methods: {

    }
  };
</script>

<style scoped>

</style>
```
