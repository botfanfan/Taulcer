<template>
  <div :class="settings">
    <div :class="color"  :style="percent">{{showPercent?percent.width:''}}</div>
  </div>
</template>
<script>
  export default{
    props: {
      settings: {
        type: Array,
        default: function(){return [
          'am-progress'
        ]}
      },
      color: {
        type: Array,
        default: function(){return [
          'am-progress-bar'
        ]}
      },
      showPercent: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        proint: undefined,
        percent: {width: '0%'}
      }
    },
    methods: {
      getProcess () {
        return this.percent.width;
      },
      setProcess (percent) {
        if(this.proint){
          clearInterval(this.proint);
        }
        this.percent = {width: percent+'%'};
        this.$forceUpdate();
      },
      startPro (step, pin) {
        var onstart = this.$parent.onStart;
        if(onstart)onstart();
        var onend = this.$parent.onEnd;
        var onpro = this.$parent.onPro;
        var num = parseInt(this.percent.width);
        var vue = this;
        this.proint = setInterval(function () {
          if(onpro)onpro();
          num += step;
          if(num>100){
            num=100;
            clearInterval(vue.proint);
            if(onend)onend();
          }
          vue.percent = {width: num+'%'};
          vue.$forceUpdate();
        },pin);
      },
      stop () {
        clearInterval(this.proint);
        var onstop = this.$parent.onStop;
        if(onstop)onstop();
      },
      toEnd () {
        if(this.proint){
          clearInterval(this.proint);
        }
        this.setProcess(100);
        var onend = this.$parent.onEnd;
        if(onend)onend();
      }
    }
  }
</script>
<style>
  .am-progress-sm .am-progress-bar{
    line-height: 100%;
    vertical-align: middle;
  }
  .am-progress-xs .am-progress-bar{
    line-height: 100%;
    vertical-align: middle;
  }
</style>
