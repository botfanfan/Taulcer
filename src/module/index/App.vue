<template>
  <div>
    <btn :text="obj2"></btn>
    <div id="echarts"></div>
    <button @click="getCookie('data')">getcookie</button>
    <button @click="setCookie('data',obj)">setcookie</button>
    <button @click="setCookie('data',obj2)">updatecookie</button>
    <button @click="deleteCookie('data')">deletecookie</button>
    <hr>
    <button @click="getls('data')">getls</button>
    <button @click="setls('data',obj)">setls</button>
    <button @click="setls('data',obj2)">updatels</button>
    <button @click="deletels('data')">deletels</button>
    <button @click="isArray(arr)">test lodash</button>
  </div>
</template>

<script>
import btn from '../../components/common/Btn'
import Echarts from 'echarts'
import utils from '../../components/utils'
import 'lodash'
export default {
	components: {
      btn
  },
  data (){
    return {
      obj: {name: 'fanfan'},
      obj2: {name: 'fanfanlalala'},
      arr: [1, 2, 3],
      alertobj: {age:23}
    }
  },
  mounted: function () {
    var myCharts=Echarts.init(document.getElementById("echarts"));
    myCharts.setOption({
      title: {
        text: 'hello echarts'
      },
      tooltip: {},
      xAxis: {
        data: ['x1', 'x2', 'x3']
      },
      legend: {
        data:['销量']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36]
      }]
    })
  },
  methods: {
    getCookie (data) {
      var obj=utils.cookieHelper.getCookie(data);
      console.log(obj);
    },
    setCookie (key, obj) {
      utils.cookieHelper.setCookie(key, obj);
    },
    deleteCookie (key) {
      utils.cookieHelper.deleteCookie('data');
    },
    getls (key) {
      var obj = utils.lsHelper.getLs(key);
      console.log(obj);
    },
    setls (key, value) {
      utils.lsHelper.setLs(key, value);
    },
    deletels (key) {
      utils.lsHelper.deleteLs(key);
    },
    isArray (arr) {
      var res = _.isArray(arr);
      alert(res);
    },
    logobj () {
      console.log(this.alertobj);
    }
  }
}
</script>

<style>
  #echarts{
    width: 1000px;
    height: 500px;
  }
</style>
