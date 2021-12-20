export default (el, binding, vnode) => {
  //  Check is the format is correct

  if (typeof binding.value === 'object') {
    if (!binding.value.large || !binding.value.medium || !binding.value.small) {
      console.error('v-background requires 3 images (large, medium and small)')
    } else {
      createEvent(binding.value)
    }
  } else {
    console.error('v-background property has to be an object')
  }

  function createEvent (values) {
    checkImage(window, el, values)

    window.addEventListener('resize', (e) => {
      checkImage(window, el, values)
    })
  }

  function checkImage (window, el, values) {
    const windowWidth = window.innerWidth

    let setValue = 'url('

    if (windowWidth < 750) {
      setValue += values.small
    } else if (windowWidth < 1000) {
      setValue += values.medium
    } else {
      setValue += values.large
    }

    el.style.backgroundImage = setValue + ')'
  }
}
