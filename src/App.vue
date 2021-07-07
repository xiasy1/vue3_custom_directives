<template>
  <h2>vue3_custom_directives(Vue3 自定义指令案例总结)</h2>
  <ul>
    <li v-copy>文本内容复制指令 v-copy</li>
    <li v-screenfull>元素全屏指令 v-screenfull</li>
    <li >文字超出省略指令 v-ellipsis</li>
    <li v-empty="emptyValue">空状态指令 v-empty</li>
    <li v-drag>拖拽指令 v-drag</li>
    <li v-resize="resize" style="resize: both;overflow:auto;">响应缩放指令 v-resize</li>
    <li v-backtop>回到顶部指令 v-backtop</li>
    <li>...</li>
  </ul>
</template>

<script setup>
import { reactive } from "vue";

const emptyValue = reactive({
  content: '暂无列表',
  img: 'import "../assets/empty.png"',
  visible: true,
})

const resize = () => {
  console.log('element is resize');
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
  height: 120vh;
  list-style: none;
}
ul li {
  border: 0;
  width: 20vw;
  margin: 20px auto;
  /* text-transform: uppercase; */
  font-size: 20px;
  font-weight: bold;
  padding: 15px 50px;
  border-radius: 50px;
  color: white;
  outline: none;
  position: relative;
  background-image: linear-gradient(to right, #25aae1, #40e495);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

ul li:before {
  content: "";
  display: block;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.4) 50%
  );
  background-size: 210% 100%;
  background-position: right bottom;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50px;
  transition: all 1s;
  -webkit-transition: all 1s;
}

ul li:hover:before {
  background-position: left bottom;
}
</style>
