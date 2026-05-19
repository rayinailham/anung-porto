<template>
  <section
    id="experience"
    ref="section"
    class="relative"
    :style="{ height: pinHeight + 'px' }"
  >
    <div ref="pin" class="sticky top-0 h-svh overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="px-5 md:px-10 pt-24 pb-6 md:pt-28 md:pb-8 max-w-[1480px] w-full mx-auto">
        <div class="flex items-end justify-between gap-6">
          <div>
            <div class="text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 inline-flex items-center gap-2" data-reveal>
              <span class="w-6 h-px bg-espresso-700/40"></span>
              Section · 02
            </div>
            <h2 class="mt-3 font-display text-[44px] md:text-[64px] leading-[0.95] tracking-editorial" data-reveal data-reveal-delay="1">
              Field <span class="italic text-espresso-700/55">notes</span>.
            </h2>
          </div>

          <!-- Progress -->
          <div class="hidden md:flex items-center gap-3 text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55" data-reveal data-reveal-delay="2">
            <span>{{ activeIdx + 1 }} / {{ stations.length }}</span>
            <div class="w-32 h-px bg-espresso-700/15 relative">
              <div
                class="absolute top-0 left-0 h-px bg-espresso-700 transition-[width] duration-500 ease-silk"
                :style="{ width: progressPct + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal track -->
      <div class="relative flex-1 overflow-hidden">
        <div
          ref="track"
          class="absolute inset-y-0 left-0 flex items-center gap-6 md:gap-8 px-5 md:px-10 will-change-transform"
        >
          <article
            v-for="(s, i) in stations"
            :key="s.id"
            class="shrink-0 w-[86vw] md:w-[64vw] lg:w-[52vw] xl:w-[44vw] h-[68vh] md:h-[64vh] relative group"
            :class="{ 'is-active': activeIdx === i }"
          >
            <div class="bezel h-full">
              <div class="bezel-core h-full p-7 md:p-10 flex flex-col relative overflow-hidden">
                <!-- Index + meta -->
                <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">
                  <span>// {{ String(i + 1).padStart(2, '0') }} · {{ s.tag }}</span>
                  <span>{{ s.period }}</span>
                </div>

                <!-- Title -->
                <h3 class="mt-8 font-display text-[34px] md:text-[44px] leading-[1.0] tracking-editorial">
                  {{ s.title }}
                </h3>
                <div class="mt-2 text-[14px] text-espresso-700/65">{{ s.company }}</div>

                <!-- Bullets -->
                <ul class="mt-7 space-y-4 text-[14px] leading-relaxed text-espresso-700/80 max-w-[42ch]">
                  <li v-for="(b, j) in s.bullets" :key="j" class="flex gap-3">
                    <span class="mt-[7px] w-5 h-px bg-espresso-700/40 shrink-0"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>

                <!-- Footer chips -->
                <div class="mt-auto pt-8 flex items-center gap-2 flex-wrap">
                  <span
                    v-for="chip in s.chips"
                    :key="chip"
                    class="text-[10px] font-mono uppercase tracking-eyebrow px-2.5 py-1 rounded-full border border-espresso-700/15 text-espresso-700/65"
                  >{{ chip }}</span>
                </div>

                <!-- Decorative number -->
                <div
                  class="pointer-events-none absolute -right-4 -bottom-10 font-display text-[260px] leading-none tracking-tighter text-espresso-700/[0.04] select-none"
                >{{ String(i + 1).padStart(2, '0') }}</div>
              </div>
            </div>
          </article>

          <!-- Tail -->
          <div class="shrink-0 w-[40vw] md:w-[20vw] flex flex-col justify-end pb-12 pl-2">
            <div class="text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55">
              End of track
            </div>
            <div class="mt-2 font-display italic text-[26px] md:text-[34px] leading-tight text-espresso-700/55 max-w-[18ch]">
              More chapters in flight.
            </div>
          </div>
        </div>
      </div>

      <!-- Hint -->
      <div class="px-5 md:px-10 pb-6 max-w-[1480px] w-full mx-auto flex items-center justify-between text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/45">
        <span>Scroll to advance</span>
        <span class="hidden md:flex items-center gap-2">
          <kbd class="px-1.5 py-0.5 border border-espresso-700/20 rounded text-[9px]">scroll</kbd>
          <span>=</span>
          <kbd class="px-1.5 py-0.5 border border-espresso-700/20 rounded text-[9px]">→</kbd>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'

const stations = [
  {
    id: 's1',
    tag: 'Coordinator',
    period: 'Jan – Apr 2026',
    title: 'Marketing Internship · Coordination Role',
    company: 'PT Sutan Vet Medika · Bogor (Hybrid)',
    bullets: [
      'Steered 200+ KOL deals across affiliate marketing campaigns to lift brand visibility.',
      'Monitored 100 Shopee affiliates and 50 TikTok affiliates to drive sales velocity.'
    ],
    chips: ['KOL Ops', 'Shopee', 'TikTok', 'Affiliate']
  },
  {
    id: 's2',
    tag: 'Affiliate',
    period: 'Jan – Apr 2026',
    title: 'Affiliate Marketing Intern',
    company: 'AnyMind Group · Jakarta (Hybrid)',
    bullets: [
      'Running affiliate marketing experiments inside a regional creator-tech company.',
      'Bridging brand briefs with talent ops in parallel with the Sutan coordinator role.'
    ],
    chips: ['Affiliate', 'Creator-tech', 'Cross-team']
  },
  {
    id: 's3',
    tag: 'Foundations',
    period: 'Sep – Dec 2025',
    title: 'Digital Marketing Intern',
    company: 'PT Sutan Vet Medika · Bogor (Hybrid)',
    bullets: [
      'Collaborated with 30+ KOLs to execute end-to-end promotional campaigns.',
      'Built and managed 100+ TikTok and Shopee affiliates with recruitment + tracking.',
      'Organised a B2B webinar with 15+ participants to seed business relationships.',
      'Produced 4+ Instagram posts and 3 promotional videos to lift brand visibility.'
    ],
    chips: ['Content', 'B2B Webinar', 'KOL', 'Recruitment']
  },
  {
    id: 's4',
    tag: 'Org · Treasurer',
    period: 'Mar – Nov 2024',
    title: 'BEM SB IPB · Department of Social & Political Affairs',
    company: 'Treasurer · Bogor',
    bullets: [
      'Held the books for the Social & Political Affairs department under the student executive board.',
      'Coordinated cashflow for events alongside operational and creative leads.'
    ],
    chips: ['Finance', 'Coordination', 'Student Gov.']
  },
  {
    id: 's5',
    tag: 'Org · Intern',
    period: 'Sep – Nov 2023',
    title: 'ABEST · Event Division Intern',
    company: 'IPB University · Bogor',
    bullets: [
      'Internship simulating ABEST management roles for 59th batch SB-IPB students.',
      'Worked across division-based work programs supporting event execution.'
    ],
    chips: ['Events', 'Operations']
  }
]

const section = ref(null)
const pin = ref(null)
const track = ref(null)
const activeIdx = ref(0)
const pinHeight = ref(3000)

let trackWidth = 0
let viewportW = 0
let rafScheduled = false
let resizeObs = null

const progressPct = computed(() => {
  if (stations.length <= 1) return 100
  return ((activeIdx.value + 1) / stations.length) * 100
})

function measure() {
  if (!track.value || !section.value) return
  trackWidth = track.value.scrollWidth
  viewportW = window.innerWidth
  const horizontalDistance = Math.max(0, trackWidth - viewportW)
  // pinHeight = horizontal travel + one viewport so the section "scrolls" while pinned
  pinHeight.value = horizontalDistance + window.innerHeight
}

function update() {
  if (!section.value || !track.value) return
  const rect = section.value.getBoundingClientRect()
  const total = pinHeight.value - window.innerHeight
  // progress 0..1 across the pinned region
  let progress = (-rect.top) / total
  progress = Math.min(1, Math.max(0, progress))
  const horizontalDistance = Math.max(0, trackWidth - viewportW)
  const x = -progress * horizontalDistance
  track.value.style.transform = `translate3d(${x}px, 0, 0)`

  // Active index based on progress segments
  const segments = stations.length
  const idx = Math.min(segments - 1, Math.floor(progress * segments + 0.0001))
  if (idx !== activeIdx.value) activeIdx.value = idx
}

function onScroll() {
  if (rafScheduled) return
  rafScheduled = true
  requestAnimationFrame(() => {
    rafScheduled = false
    update()
  })
}

function onResize() {
  measure()
  update()
}

onMounted(async () => {
  await nextTick()
  measure()
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  if ('ResizeObserver' in window && track.value) {
    resizeObs = new ResizeObserver(() => {
      measure()
      update()
    })
    resizeObs.observe(track.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  resizeObs?.disconnect()
  resizeObs = null
})
</script>
