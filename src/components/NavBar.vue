<template>
  <header
    class="fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-silk"
    :class="scrolled ? 'translate-y-0' : 'translate-y-0'"
  >
    <nav
      class="bezel flex items-center gap-1 backdrop-blur-xl"
      :class="scrolled ? 'bg-cream-50/85' : 'bg-cream-50/65'"
      style="padding: 6px"
    >
      <a
        href="#top"
        class="bezel-core px-4 py-2 text-[12px] font-medium tracking-tight inline-flex items-center gap-2 group"
        @click.prevent="goto('#top')"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-ember-500 nudge-up"></span>
        <span class="font-mono uppercase tracking-eyebrow text-[10px]">A.H.R</span>
      </a>

      <ul class="hidden md:flex items-center px-2">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            @click.prevent="goto(`#${item.id}`)"
            class="px-3 py-2 text-[12px] tracking-tight text-espresso-700/70 hover:text-espresso-700 transition-colors duration-300"
          >{{ item.label }}</a>
        </li>
      </ul>

      <a
        href="#contact"
        @click.prevent="goto('#contact')"
        class="bezel-core pl-4 pr-1.5 py-1.5 text-[12px] font-medium tracking-tight inline-flex items-center gap-2 group transition-all duration-500 ease-silk active:scale-[0.98]"
      >
        <span>Get in touch</span>
        <span
          class="w-7 h-7 rounded-full bg-espresso-700 text-cream-50 inline-flex items-center justify-center transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
        >
          <svg viewBox="0 0 16 16" class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M4 12 L12 4 M6 4 H12 V10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getLenis } from '../composables/useLenis.js'

const scrolled = ref(false)

const items = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'craft', label: 'Craft' }
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function goto(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
