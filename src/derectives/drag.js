export default {
  mounted(el, binding) {
    document.onselectstart = function() {
      return false  //禁止选择网页上的文字
    }
    el.style.position = 'absolute'
    el.onmousedown = e => {
      let disX = e.clientX - el.offsetLeft //鼠标按下，计算当前元素距离可视区的距离
      let disY = e.clientY - el.offsetTop
      
      document.onmousemove = function(e){    
        console.log(disX,disY); 
        let l = e.clientX - disX
        let t = e.clientY - disY;
        el.style.left = l + "px" 
        el.style.top = t + "px"
      }
      document.onmouseup = e => {
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  },
}