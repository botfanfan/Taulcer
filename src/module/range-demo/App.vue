<template>
  <div class="content">
    <range name="fanfan" :value="20" ref="range"></range>
    <button @click="getval()" class="am-btn am-btn-secondary">getValue</button>
    <button @click="setval()" class="am-btn am-btn-secondary">setValue</button>
  </div>
</template>

<script>
  import range from '../../components/common/range'
    export default {
      components: { // register component
          range
      },
      data () {
          return {
            value: 0
          };
      },
      methods: {
        getval () {
          var val = this.$refs.range.getValue();
          console.log(val);
        },
        setval () {
          this.value=50;
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
