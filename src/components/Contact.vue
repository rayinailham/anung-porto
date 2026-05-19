<template>
  <footer
    id="contact"
    class="relative px-5 md:px-10 pt-32 pb-10 md:pt-44 md:pb-12 bg-espresso-700 text-cream-50 overflow-hidden"
  >
    <!-- Mesh background -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute -top-40 -right-32 w-[44rem] h-[44rem] rounded-full opacity-[0.45]"
        style="background: radial-gradient(closest-side, rgba(194,65,12,0.35), transparent 70%);"
      ></div>
      <div
        class="absolute -bottom-48 -left-32 w-[42rem] h-[42rem] rounded-full opacity-[0.35]"
        style="background: radial-gradient(closest-side, rgba(125,139,106,0.4), transparent 70%);"
      ></div>
    </div>

    <div class="max-w-[1480px] mx-auto relative">
      <!-- Eyebrow -->
      <div class="text-[11px] font-mono uppercase tracking-eyebrow text-cream-50/55 inline-flex items-center gap-2" data-reveal>
        <span class="w-6 h-px bg-cream-50/30"></span>
        Section · 05 · Contact
      </div>

      <!-- Big invitation -->
      <h2
        class="mt-6 font-display text-[14vw] md:text-[10vw] lg:text-[8.4vw] leading-[0.92] tracking-editorial"
        data-reveal
        data-reveal-delay="1"
      >
        Got a campaign<br/>
        <span class="italic text-cream-50/55">that needs a coordinator?</span>
      </h2>

      <!-- CTA pill -->
      <div class="mt-12 flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="2">
        <a
          href="mailto:hello@anung.work"
          class="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-cream-50 text-espresso-700 text-[14px] font-medium tracking-tight transition-all duration-500 ease-silk active:scale-[0.98] hover:-translate-y-[1px]"
        >
          Start a brief
          <span class="w-9 h-9 rounded-full bg-espresso-700 text-cream-50 inline-flex items-center justify-center transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
            <svg viewBox="0 0 16 16" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M4 12 L12 4 M6 4 H12 V10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream-50/20 text-[13px] font-medium tracking-tight transition-all duration-500 ease-silk hover:border-cream-50/40 hover:-translate-y-[1px]"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-ember-500"></span>
          Download CV
        </a>
      </div>

      <!-- Info grid -->
      <div class="mt-24 grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8 border-t border-cream-50/10 pt-12">
        <div class="md:col-span-4">
          <div class="text-[10px] font-mono uppercase tracking-eyebrow text-cream-50/45">Email</div>
          <a href="mailto:hello@anung.work" class="mt-2 inline-block text-[18px] font-medium hover:text-ember-500 transition-colors duration-300">hello@anung.work</a>
        </div>
        <div class="md:col-span-4">
          <div class="text-[10px] font-mono uppercase tracking-eyebrow text-cream-50/45">Based in</div>
          <div class="mt-2 text-[18px] font-medium">Kota Bogor · Jakarta</div>
        </div>
        <div class="md:col-span-4">
          <div class="text-[10px] font-mono uppercase tracking-eyebrow text-cream-50/45">Elsewhere</div>
          <div class="mt-2 flex flex-col gap-1">
            <a href="#" class="text-[15px] hover:text-ember-500 transition-colors duration-300 inline-flex items-center gap-2 group">
              LinkedIn
              <span class="w-3 h-px bg-cream-50/40 group-hover:bg-ember-500 group-hover:w-5 transition-all duration-300"></span>
            </a>
            <a href="#" class="text-[15px] hover:text-ember-500 transition-colors duration-300 inline-flex items-center gap-2 group">
              Instagram
              <span class="w-3 h-px bg-cream-50/40 group-hover:bg-ember-500 group-hover:w-5 transition-all duration-300"></span>
            </a>
            <a href="#" class="text-[15px] hover:text-ember-500 transition-colors duration-300 inline-flex items-center gap-2 group">
              TikTok
              <span class="w-3 h-px bg-cream-50/40 group-hover:bg-ember-500 group-hover:w-5 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer rule -->
      <div class="mt-20 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-eyebrow text-cream-50/45">
        <span>© 2026 · Anung H. Ramadhan</span>
        <span class="hidden md:inline">Crafted with Vue · Vite · Lenis</span>
        <span>{{ time }} · Bogor</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const time = ref('')
let timer = null

function tick() {
  const now = new Date()
  // Bogor is UTC+7
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const bogor = new Date(utc + 7 * 3600 * 1000)
  const hh = String(bogor.getHours()).padStart(2, '0')
  const mm = String(bogor.getMinutes()).padStart(2, '0')
  const ss = String(bogor.getSeconds()).padStart(2, '0')
  time.value = `${hh}:${mm}:${ss}`
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>
