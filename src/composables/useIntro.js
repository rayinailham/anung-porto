import { ref } from 'vue'
import { getLenis } from './useLenis.js'

// Shared reactive state — single source of truth across components.
const introDone = ref(false)
const introExiting = ref(false)

export function useIntro() {
  return {
    introDone,
    introExiting,
    finish: () => {
      introExiting.value = true
      // Fire introDone on the next frame so Hero reveals start
      // immediately. The intro itself fades out via Vue's Transition
      // (handled in IntroScreen.vue), so the two crossfade cleanly.
      requestAnimationFrame(() => {
        introDone.value = true
        unlockScroll()
      })
    },
    lockScroll,
    unlockScroll
  }
}

export function lockScroll() {
  const lenis = getLenis()
  if (lenis) lenis.stop()
  document.documentElement.classList.add('intro-locked')
  document.body.style.overflow = 'hidden'
  // Reset scroll to top so hero is at the top once intro lifts
  window.scrollTo(0, 0)
}

export function unlockScroll() {
  const lenis = getLenis()
  if (lenis) lenis.start()
  document.documentElement.classList.remove('intro-locked')
  document.body.style.overflow = ''
}

export function isIntroDone() {
  return introDone.value
}
