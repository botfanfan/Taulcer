<template>
  <div class="content">
    <h1>range组件</h1>
    <hr>
    <range name="fanfan" ref="range"></range>
    <button @click="getval()" class="am-btn am-btn-secondary">getValue</button>
    <button @click="setval(50)" class="am-btn am-btn-secondary">setValue</button>
    <blockquote>
      范围拉动条，表单元素。
    </blockquote>
    <hr>
    <pre>
template:
  &lt;range name="fanfan" ref="range"&gt;&lt;/range&gt;<!--范围拉条组件-->
  &lt;button @click="getval()" class="am-btn am-btn-secondary"&gt;getValue&lt;/button&gt;<!--点击获取输入的值-->
  &lt;button @click="setval(50)" class="am-btn am-btn-secondary"&gt;setValue&lt;/button&gt;<!--点击设置拉条输入的值-->

script:
  import range from '../../components/common/range'//引入组件
    export default {
      components: { // register component
          range
      },
      methods: {
        getval () {
          var val = this.$refs.range.getValue();//调用组件js API获取拉条当前值
         alert(val);
        },
        setval (val) {
          this.$refs.range.setValue(val);//调用组件js API设置拉条值
        }
      }
    };
    </pre>
    <h2>组件属性</h2>
    <table class="am-table">
      <thead>
        <tr>
          <th>属性名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>是否必须</th>
          <th>是否使用数据绑定(v-bind)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>-</td>
          <td>T</td>
          <td>F</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>range</td>
          <td>F</td>
          <td>F</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Number</td>
          <td>0</td>
          <td>F</td>
          <td>T</td>
        </tr>
        <tr>
          <td>max</td>
          <td>Number</td>
          <td>100</td>
          <td>F</td>
          <td>T</td>
        </tr>
        <tr>
          <td>min</td>
          <td>Number</td>
          <td>0</td>
          <td>F</td>
          <td>T</td>
        </tr>
      </tbody>
    </table>
    <h2>javascript API</h2>
    <table class="am-table">
      <thead>
        <th>名称</th>
        <th>入参</th>
        <th>出参</th>
      </thead>
      <tbody>
        <tr>
          <td>getValue()</td>
          <td>-</td>
          <td>Number:(当前组件的value值)</td>
        </tr>
        <tr>
          <td>setValue(val)</td>
          <td>Number: val</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <code>使用方法见示例demo</code>
  </div>
</template>

<script>
  import range from '../../components/common/range'
    export default {
      components: { // register component
          range
      },
      methods: {
        getval () {
          var val = this.$refs.range.getValue();
         alert(val);
        },
        setval (val) {
          this.$refs.range.setValue(val);
        }
      }
    };
</script>

<style scoped>
  .content{
    width: 80%;
    margin: 10px auto;
  }
</style>
