<template>
  <div class="content">
    <h1>进度条组件</h1>
    <hr>
    <process :settings="sets" :color="color" :showPercent="true" ref="testpro"></process>
    <button class="am-btn am-btn-secondary" @click="getPro">getProcess</button>
    <button class="am-btn am-btn-secondary" @click="setPro(10)">setProcess10</button>
    <button class="am-btn am-btn-secondary" @click="start(1,100)">start</button>
    <button class="am-btn am-btn-secondary" @click="stop">stop</button>
    <button class="am-btn am-btn-secondary" @click="end">end</button>
    <blockquote>
      进度条，适用于长加载等耗时操作的进度提醒
    </blockquote>
    <hr>
    <h2>demo</h2>
    <pre>
template:
  &lt;process :settings="sets" :color="color" :showPercent="true" ref="testpro"&gt;&lt;/process&gt;
  &lt;!--组件示例，属性详情见下表--&gt;
  &lt;button class="am-btn am-btn-secondary" @click="getPro"&gt;getProcess&lt;/button&gt;&lt;!--获取进度条当前百分比--&gt;
  &lt;button class="am-btn am-btn-secondary" @click="setPro(10)"&gt;setProcess10&lt;/button&gt;&lt;!--设置进度条百分比--&gt;
  &lt;button class="am-btn am-btn-secondary" @click="start(1,100)"&gt;start&lt;/button&gt;&lt;!--进度条开始滚动--&gt;
  &lt;button class="am-btn am-btn-secondary" @click="stop"&gt;stop&lt;/button&gt;&lt;!--进度条停止滚动--&gt;
  &lt;button class="am-btn am-btn-secondary" @click="end"&gt;end&lt;/button&gt;&lt;!--进度条达到100%完成--&gt;

script:
  import process from '../../components/common/processBar'//引入process组件
    export default {
      components: { // register component
        process
      },
      data () {
          return {
            //组件样式，详细说明见下表
            sets: ['am-progress','am-progress-sm','am-progress-striped','am-active'],
            //组件颜色，详细说明见下表
            color: ['am-progress-bar','am-progress-bar-danger']
          };
      },
      methods: {
        getPro () {
          var pro=this.$refs.testpro.getProcess();//获取当前进度
          console.log(pro);
        },
        setPro (val) {
          this.$refs.testpro.setProcess(val);//设置进度
        },
        start (val, pin) {
          this.$refs.testpro.startPro(val, pin);//进度条开始滚动
        },
        stop () {
          this.$refs.testpro.stop();//进度条暂停滚动
        },
        end () {
          this.$refs.testpro.toEnd();//进度条结束滚动，并停留在100%
        },
        onStart () {//开始回调
          console.log('start');
        },
        onPro () {//加载中回调
          console.log('processing');
        },
        onStop () {//暂停回调
          console.log('stop');
        },
        onEnd () {//结束回调
          console.log('end');
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
          <th>是否需要数据绑定</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>settings</td>
          <td>Array</td>
          <td>am-progress</td>
          <td>F</td>
          <td>T</td>
          <td>
            <code>所有的进度条必须添加am-progress。</code><br>
            设置进度条样式。备选样式：<br>
            高度：.am-progress-xs (细) .am-progress-sm(最细)<br>
            是否带条纹：.am-progress-striped <br>
            条纹是否有动画：.am-active(需结合条纹使用)
          </td>
        </tr>
        <tr>
          <td>colors</td>
          <td>Array</td>
          <td>am-progress-bar</td>
          <td>F</td>
          <td>T</td>
          <td>
            <code>所有的组件必须添加am-progress-bar</code><br>
            组件颜色，备选项：<br>
            成功：.am-progress-bar-success <br>
            二级：.am-progress-bar-secondary <br>
            警告：.am-progress-bar-warning <br>
            危险：.am-progress-bar-danger <br>
          </td>
        </tr>
        <tr>
          <td>showPercent</td>
          <td>Boolean</td>
          <td>true</td>
          <td>F</td>
          <td>T</td>
          <td>是否在进度条上显示当前进度</td>
        </tr>
      </tbody>
    </table>
    <h2>
      javascript API
    </h2>
    <table class="am-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>入参</th>
          <th>出参</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>getProcess</td>
          <td>-</td>
          <td>Number:(进度条当前进度)</td>
          <td>返回进度条当前进度</td>
        </tr>
        <tr>
          <td>setProcess</td>
          <td>Number:val(进度条当前百分比)</td>
          <td>-</td>
          <td>设置进度条进度</td>
        </tr>
        <tr>
          <td>startPro</td>
          <td>Number:step(每次增加的量),NUmber:pin(增加间隔)</td>
          <td>-</td>
          <td>进度条开始滚动</td>
        </tr>
        <tr>
          <td>stop</td>
          <td>-</td>
          <td>-</td>
          <td>暂停进度条</td>
        </tr>
        <tr>
          <td>toEnd</td>
          <td>-</td>
          <td>-</td>
          <td>停止进度条到100%</td>
        </tr>
      </tbody>
    </table>
    <h2>事件</h2>
    <table class="am-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>触发条件</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>onStart</td>
          <td>进度条开始滚动时触发</td>
        </tr>
        <tr>
          <td>onPro</td>
          <td>进度条滚动时周期性触发</td>
        </tr>
        <tr>
          <td>onStop</td>
          <td>进度条暂停时触发</td>
        </tr>
        <tr>
          <td>onEnd</td>
          <td>进度条结束时触发</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import process from '../../components/common/processBar'
    export default {
      components: { // register component
        process
      },
      data () {
          return {
            sets: ['am-progress','am-progress-sm','am-progress-striped','am-active'],
            color: ['am-progress-bar','am-progress-bar-success']
          };
      },
      methods: {
        getPro () {
          var pro=this.$refs.testpro.getProcess();
          console.log(pro);
        },
        setPro (val) {
          this.$refs.testpro.setProcess(val);
        },
        start (val, pin) {
          this.$refs.testpro.startPro(val, pin);
        },
        stop () {
          this.$refs.testpro.stop();
        },
        end () {
          this.$refs.testpro.toEnd();
        },
        onStart () {
          console.log('start');
        },
        onPro () {
          console.log('processing');
        },
        onStop () {
          console.log('stop');
        },
        onEnd () {
          console.log('end');
        }
      }
    };
</script>

<style scoped>
  .content{
    width:80%;
    margin: 10px auto;
  }
</style>
