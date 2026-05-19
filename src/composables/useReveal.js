import { onMounted, onBeforeUnmount } from 'vue'

let observer = null
let mountCount = 0

function ensureObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

export function useReveal() {
  onMounted(() => {
    mountCount++
    const obs = ensureObserver()
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        obs.observe(el)
      })
    })
  })

  onBeforeUnmount(() => {
    mountCount = Math.max(0, mountCount - 1)
    if (mountCount === 0 && observer) {
      observer.disconnect()
      observer = null
    }
  })
}

export function refreshReveal() {
  const obs = ensureObserver()
  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
    obs.observe(el)
  })
}
