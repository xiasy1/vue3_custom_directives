export default {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
}