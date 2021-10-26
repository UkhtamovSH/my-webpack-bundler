function createAnalytics() {
  let counter = 0
  let destroy = false

  const listener = () => counter++

  document.addEventListener('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener)
      destroy = true
    },

    getClicks() {
      if (destroy) {
        return `Analytics is destroyed. Total clicks ${counter}`
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()