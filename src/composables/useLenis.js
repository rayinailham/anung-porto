import { onMounted, onBeforeUnmount } from 'vue'
import Lenis from 'lenis'

let lenisInstance = null
let rafId = null

export function useLenis() {
  onMounted(() => {
    if (lenisInstance) return

    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      lerp: 0.085
    })

    const raf = (time) => {
      lenisInstance?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
    lenisInstance?.destroy()
    lenisInstance = null
    rafId = null
  })

  return {
    scrollTo: (target, opts = {}) => lenisInstance?.scrollTo(target, opts),
    getInstance: () => lenisInstance
  }
}

export function getLenis() {
  return lenisInstance
}
