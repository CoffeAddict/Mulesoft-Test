export default (el, binding, vnode) => {
  //  Check is the format is correct

  if (typeof binding.value === 'object') {
    if (!binding.value.large || !binding.value.medium || !binding.value.small) {
      console.error('v-src requires 3 images (large, medium and small)')
    } else {
      createEvent(binding.value)
    }
  } else {
    console.error('v-src property has to be an object')
  }

  function createEvent (values) {
    window.addEventListener('resize', (e) => {
      const windowWidth = window.innerWidth

      if (windowWidth < 360) {
        el.src = values.small
      } else if (windowWidth < 768) {
        el.src = values.medium
      } else {
        el.src = values.large
      }
    })
  }
}
