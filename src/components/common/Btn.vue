<template>
  <button class="am-btn am-btn-danger am-radius" @click="popup">{{text}}</button>
</template>
<script>
  import Vue from 'vue'
  import ajax from 'vue-resource'
  Vue.use(ajax);
  export default{
    props: ['text'],
    methods: {
      popup () {
        this.$http.get('http://magic.botfanfan.com/ajax').then(function(response){
          // success callback
          console.log(response);
          console.log(this.text);
        }, function(response){
          // error callback
          console.log(123);
        });
      }
    }
  }
</script>
