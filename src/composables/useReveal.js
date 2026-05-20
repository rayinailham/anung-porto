import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useIntro } from './useIntro.js'

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

function observeAll() {
  const obs = ensureObserver()
  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
    obs.observe(el)
  })
}

export function useReveal() {
  const { introDone, introExiting } = useIntro()

  onMounted(() => {
    mountCount++

    // If intro already done (e.g. on remount), observe right away.
    // Otherwise wait until the curtain starts lifting so reveal animations
    // play in sync with the hero appearing — no flash, no wasted motion.
    if (introDone.value) {
      requestAnimationFrame(observeAll)
      return
    }

    // Fire reveals the moment the curtain finishes wiping (introDone flips
    // exactly when the 900ms exit animation completes). Hero section then
    // ignites its staggered motion as the user first sees it — no flash,
    // no wasted reveal under the curtain.
    const stop = watch(introDone, (done) => {
      if (done) {
        requestAnimationFrame(observeAll)
        stop()
      }
    }, { immediate: true })
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
  observeAll()
}

