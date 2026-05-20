<template>
  <Transition name="intro-fade" appear>
    <div
      v-if="!introDone"
      class="intro-screen fixed inset-0 z-[200] overflow-hidden bg-cream-50"
      :class="{ 'is-exiting': introExiting }"
      role="dialog"
      aria-label="Welcome screen"
    >
      <!-- Soft warm gradient field -->
      <div aria-hidden="true" class="absolute inset-0">
        <div
          class="absolute -top-40 -right-40 w-[44rem] h-[44rem] rounded-full opacity-60"
          style="background: radial-gradient(closest-side, rgba(194,65,12,0.14), transparent 70%);"
        ></div>
        <div
          class="absolute -bottom-48 -left-32 w-[40rem] h-[40rem] rounded-full opacity-55"
          style="background: radial-gradient(closest-side, rgba(125,139,106,0.16), transparent 72%);"
        ></div>
      </div>

      <!-- Eyebrow strip -->
      <div class="absolute top-0 inset-x-0 px-5 sm:px-8 md:px-10 pt-6 sm:pt-7 flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55">
        <span class="intro-eyebrow">Hello, traveler</span>
        <span class="hidden sm:inline-flex items-center gap-2 intro-eyebrow intro-eyebrow-2">
          <span class="w-1 h-1 rounded-full bg-ember-500"></span>
          Bogor · UTC+7
        </span>
        <span class="intro-eyebrow intro-eyebrow-3">2026 / 05</span>
      </div>

      <!-- Center stage -->
      <div class="relative h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <!-- Waving hand -->
        <div class="intro-wave-wrap mb-7 sm:mb-9">
          <svg
            viewBox="0 0 120 120"
            class="intro-wave w-[88px] h-[88px] sm:w-[112px] sm:h-[112px] md:w-[128px] md:h-[128px] drop-shadow-sm"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="palmGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#fcd9b8" />
                <stop offset="60%" stop-color="#e8b187" />
                <stop offset="100%" stop-color="#b87a4f" />
              </radialGradient>
            </defs>
            <!-- Palm + fingers as one stylized blob -->
            <g fill="url(#palmGrad)" stroke="#5a3a22" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
              <!-- Palm -->
              <path d="M40 58 Q38 36 50 30 Q62 27 66 38 L70 56 Q74 46 82 48 Q90 51 86 64 L84 76 Q90 70 95 75 Q98 82 90 92 Q82 104 68 104 Q48 104 40 90 Q34 78 36 68 Z" />
              <!-- Thumb fold detail -->
              <path d="M44 78 Q50 84 60 84" fill="none" stroke="#5a3a22" stroke-width="1.6" opacity="0.55" />
              <!-- Finger creases -->
              <path d="M52 38 L54 56" fill="none" stroke="#5a3a22" stroke-width="1.4" opacity="0.4" />
              <path d="M64 40 L66 58" fill="none" stroke="#5a3a22" stroke-width="1.4" opacity="0.4" />
            </g>
            <!-- Cuff -->
            <path
              d="M34 92 Q60 110 92 92 L96 104 Q60 122 30 104 Z"
              fill="#5d6b4d"
              stroke="#3f4a33"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <!-- Motion arcs -->
            <g class="intro-wave-arcs" fill="none" stroke="#c2410c" stroke-width="2" stroke-linecap="round" opacity="0.7">
              <path d="M14 38 Q18 30 24 28" />
              <path d="M8 50 Q14 40 22 38" opacity="0.5" />
            </g>
          </svg>
        </div>

        <!-- Greeting -->
        <p class="intro-line-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-espresso-700/60 mb-3 sm:mb-4">
          // welcome to my corner
        </p>

        <h1 class="intro-headline font-display tracking-editorial text-espresso-700 leading-[0.95] text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px]">
          <span class="block intro-headline-line">Hey, I'm</span>
          <span class="block italic intro-headline-line intro-headline-italic">
            Anung<span class="text-ember-500">.</span>
          </span>
        </h1>

        <p class="intro-sub mt-6 sm:mt-8 max-w-md text-[13px] sm:text-[14px] leading-relaxed text-espresso-700/70 text-balance">
          Marketing person, coffee enjoyer, occasionally a creator wrangler.
          Take a slow scroll, no rush.
        </p>

        <!-- Enter button -->
        <button
          type="button"
          class="intro-cta group mt-9 sm:mt-11 inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-espresso-700 text-cream-50 text-[12px] sm:text-[13px] font-medium tracking-tight transition-all duration-500 ease-silk hover:bg-espresso-100"
          @click="enter"
        >
          Step inside
          <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream-50/15 inline-flex items-center justify-center transition-transform duration-500 ease-silk group-hover:translate-x-0.5">
            <svg viewBox="0 0 16 16" class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>

        <!-- Auto-enter hint -->
        <p class="intro-hint mt-5 text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/40">
          or wait · auto in {{ countdown }}s
        </p>
      </div>

      <!-- Bottom rail -->
      <div class="absolute bottom-0 inset-x-0 px-5 sm:px-8 md:px-10 pb-6 sm:pb-7 flex items-end justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55">
        <span class="intro-foot flex items-center gap-3">
          <span class="block w-8 sm:w-10 h-px bg-espresso-700/25"></span>
          Portfolio · v2026
        </span>
        <span class="intro-foot intro-foot-2 hidden sm:inline">IPB Univ. · BBA '26</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useIntro } from '../composables/useIntro.js'

const { introDone, introExiting, finish, lockScroll } = useIntro()
const countdown = ref(5)
let intervalId = null
let autoTimer = null

function enter() {
  if (introExiting.value) return
  if (intervalId) clearInterval(intervalId)
  if (autoTimer) clearTimeout(autoTimer)
  finish()
}

onMounted(() => {
  lockScroll()

  intervalId = setInterval(() => {
    countdown.value = Math.max(0, countdown.value - 1)
  }, 1000)

  autoTimer = setTimeout(() => {
    enter()
  }, 5200)

  // Skip on Escape / any key (chill but respectful)
  const onKey = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      enter()
    }
  }
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey)
    if (intervalId) clearInterval(intervalId)
    if (autoTimer) clearTimeout(autoTimer)
  })
})
</script>

<style scoped>
.intro-screen {
  /* Allow children to ride a single coordinated entrance */
  contain: layout paint;
}

/* ── Entrance choreography ─────────────────────────── */
@keyframes intro-rise {
  0%   { opacity: 0; transform: translate3d(0, 18px, 0); filter: blur(8px); }
  100% { opacity: 1; transform: translate3d(0, 0, 0);    filter: blur(0); }
}
@keyframes intro-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.intro-eyebrow,
.intro-foot {
  animation: intro-fade-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 200ms;
}
.intro-eyebrow-2 { animation-delay: 320ms; }
.intro-eyebrow-3 { animation-delay: 440ms; }
.intro-foot-2    { animation-delay: 520ms; }

.intro-wave-wrap {
  animation: intro-rise 1100ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 80ms;
}
.intro-line-1 {
  animation: intro-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 380ms;
}
.intro-headline-line {
  animation: intro-rise 1100ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 460ms;
}
.intro-headline-italic { animation-delay: 600ms; }

.intro-sub {
  animation: intro-rise 1100ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 760ms;
}
.intro-cta {
  animation: intro-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 880ms;
}
.intro-hint {
  animation: intro-fade-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 1100ms;
}

/* ── Wave SVG: chill hand wave ─────────────────────── */
.intro-wave {
  transform-origin: 60% 95%;
  animation: intro-hand-wave 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) 1.0s infinite;
}
@keyframes intro-hand-wave {
  0%, 100% { transform: rotate(-6deg); }
  15%      { transform: rotate(14deg); }
  30%      { transform: rotate(-10deg); }
  45%      { transform: rotate(12deg); }
  60%      { transform: rotate(-6deg); }
  75%      { transform: rotate(0deg); }
}
.intro-wave-arcs {
  transform-origin: 60px 60px;
  animation: intro-arcs 2.4s ease-in-out 1.0s infinite;
}
@keyframes intro-arcs {
  0%, 100% { opacity: 0; transform: translateX(2px); }
  20%, 60% { opacity: 0.8; transform: translateX(-1px); }
}

/* ── Exit: clean fade out ──────────────────────────── */
.intro-screen.is-exiting > * {
  transition: opacity 380ms ease, transform 520ms cubic-bezier(0.76, 0, 0.24, 1);
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}

/* ── Vue Transition wrapper (full screen unmount) ──── */
.intro-fade-leave-active {
  transition: opacity 420ms cubic-bezier(0.4, 0, 0.2, 1);
}
.intro-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .intro-wave,
  .intro-wave-arcs {
    animation: none;
  }
}
</style>
