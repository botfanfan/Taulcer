<template>
  <div class="content">
    <button @click="ajax()" class="am-btn am-btn-secondary">test ajax</button>
    <h3>demo</h3>
    <hr>
    <pre class="code">
template:
&lt;div&gt;
  &lt;button @click="ajax()" class="am-btn am-btn-secondary"&gt;test ajax&lt;/button&gt;
&lt;/div&gt;

script:
import vue from 'vue';
import ajax from 'vue-resource';
vue.use(ajax);
export default {
  methods: {
    ajax () {
      this.$http.get('http://magic.botfanfan.com/ajax').then(function(response){
        console.log(response);
      }, function(response){
        console.log('error');
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
        this.$http.get('http://magic.botfanfan.com/ajax').then(function(response){
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
