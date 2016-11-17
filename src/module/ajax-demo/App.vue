<template>
  <div class="content">
    <h1>ajax组件</h1>
    <hr>
    <button @click="ajax()" class="am-btn am-btn-secondary">test ajax</button>
    <blockquote>
      ajax异步请求后端返回的数据
    </blockquote>
    <hr>
    <h2>demo</h2>
    <pre class="code">
template:
&lt;div&gt;
  &lt;button @click="ajax()" class="am-btn am-btn-secondary"&gt;test ajax&lt;/button&gt;
&lt;/div&gt;

script:
import vue from 'vue';
import ajax from 'vue-resource';
vue.use(ajax);//加载ajax插件
export default {
  methods: {
    ajax () {
      var param='lalala';
      this.$http.get('http://magic.botfanfan.com/ajax/'+param).then(function(response){
        console.log(response);//成功回调
      }, function(response){
        console.log('error');//失败回调
      });
    }
  }
}
    </pre>
  </div>
</template>

<script>
  import vue from 'vue';
  import ajax from 'vue-resource';
  vue.use(ajax);
  export default {
    methods: {
      ajax () {
        var param='lalala';
        this.$http.get('http://magic.botfanfan.com/ajax/'+param).then(function(response){
          console.log(response);
        }, function(response){
          console.log('error');
        });
      }
    }
  }
</script>

<style>
  .content{
    width:80%;
    margin: 10px auto;
  }
</style>
