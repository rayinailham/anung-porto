<template>
  <div class="scroll-rail" aria-hidden="true">
    <div ref="thumb" class="scroll-thumb" :style="{ height: thumbHeight + 'px', transform: `translate3d(0, ${thumbY}px, 0)` }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const thumb = ref(null)
const thumbHeight = ref(64)
const thumbY = ref(0)

let rafId = null
let railHeight = 0
const PADDING = 16

function recompute() {
  const doc = document.documentElement
  const winH = window.innerHeight
  const docH = doc.scrollHeight
  railHeight = winH - PADDING * 2
  const ratio = winH / Math.max(docH, 1)
  thumbHeight.value = Math.max(48, Math.round(railHeight * ratio))
}

function tick() {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const max = Math.max(1, doc.scrollHeight - window.innerHeight)
  const progress = Math.min(1, Math.max(0, scrollTop / max))
  const travel = railHeight - thumbHeight.value
  thumbY.value = progress * travel
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  recompute()
  window.addEventListener('resize', recompute, { passive: true })
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', recompute)
})
</script>
