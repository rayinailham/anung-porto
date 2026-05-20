<template>
  <section
    id="top"
    class="relative min-h-svh w-full pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-5 md:px-10 overflow-hidden"
  >
    <!-- Background mesh blob -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-40 -right-32 w-[42rem] h-[42rem] rounded-full opacity-[0.55]"
        style="background: radial-gradient(closest-side, rgba(194,65,12,0.16), transparent 70%);"
      ></div>
      <div
        class="absolute -bottom-48 -left-32 w-[38rem] h-[38rem] rounded-full opacity-[0.5]"
        style="background: radial-gradient(closest-side, rgba(125,139,106,0.18), transparent 70%);"
      ></div>
    </div>

    <!-- Eyebrow strip -->
    <div class="max-w-[1480px] mx-auto flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 gap-3">
      <span data-reveal>Portfolio · 2026</span>
      <span class="hidden md:inline-flex items-center gap-2" data-reveal data-reveal-delay="1">
        <span class="w-1 h-1 rounded-full bg-ember-500"></span>
        Available · Apr 2026
      </span>
      <span data-reveal data-reveal-delay="2" class="text-right">Bogor, ID — UTC+7</span>
    </div>

    <!-- Editorial split -->
    <div class="max-w-[1480px] mx-auto mt-10 sm:mt-14 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-8">
      <!-- LEFT: massive type -->
      <div class="lg:col-span-8">
        <h1
          class="font-display tracking-editorial text-[18vw] sm:text-[15vw] md:text-[10.5vw] lg:text-[9.2vw] leading-[0.92] text-espresso-700"
        >
          <span class="block" data-reveal>Anung</span>
          <span class="block italic font-display text-espresso-100" data-reveal data-reveal-delay="1">
            Hanindhita
          </span>
          <span
            class="block relative"
            data-reveal
            data-reveal-delay="2"
          >
            Ramadhan<span class="text-ember-500">.</span>
          </span>
        </h1>

        <div class="mt-7 sm:mt-8 md:mt-10 max-w-xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-espresso-700/75" data-reveal data-reveal-delay="3">
          Marketing coordinator working between briefs and creators —
          <span class="italic font-display text-espresso-700">currently steering 200+ KOL deals</span>
          across Shopee &amp; TikTok at PT Sutan Vet Medika, while moonlighting on affiliate campaigns at AnyMind Group.
        </div>

        <!-- CTA cluster -->
        <div class="mt-8 md:mt-10 flex items-center gap-3 flex-wrap" data-reveal data-reveal-delay="4">
          <a
            href="#experience"
            @click.prevent="scrollTo('#experience')"
            class="group inline-flex items-center gap-2 pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-espresso-700 text-cream-50 text-[12px] sm:text-[13px] font-medium tracking-tight transition-all duration-500 ease-silk active:scale-[0.98] hover:bg-espresso-100"
          >
            See the work
            <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream-50/15 inline-flex items-center justify-center transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
              <svg viewBox="0 0 16 16" class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="1.4">
                <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            @click.prevent="scrollTo('#contact')"
            class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-espresso-700/15 text-[12px] sm:text-[13px] font-medium tracking-tight transition-all duration-500 ease-silk hover:border-espresso-700/40 hover:-translate-y-[1px]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
            Hire / collaborate
          </a>
        </div>
      </div>

      <!-- RIGHT: data ticker / portrait card -->
      <aside class="lg:col-span-4 flex flex-col gap-5 md:gap-6">
        <div class="bezel" data-reveal data-reveal-delay="2">
          <div class="bezel-core p-5 sm:p-6 relative overflow-hidden">
            <!-- Portrait -->
            <div class="relative -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-5 sm:mb-6 aspect-[4/3] overflow-hidden bg-cream-100">
              <img
                src="/image.jpg"
                alt="Anung Hanindhita Ramadhan"
                loading="eager"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0"
                style="background: linear-gradient(180deg, rgba(28,22,18,0) 55%, rgba(28,22,18,0.18) 100%);"
              ></div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">// Now</span>
              <span class="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-eyebrow text-sage-700">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inset-0 rounded-full bg-sage-500/50 animate-ping"></span>
                  <span class="relative w-2 h-2 rounded-full bg-sage-500"></span>
                </span>
                Active
              </span>
            </div>

            <div class="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              <div>
                <div class="text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-espresso-700/45">Role</div>
                <div class="mt-1 text-[14px] sm:text-[15px] font-medium leading-snug">Marketing Intern Coordinator</div>
                <div class="text-[11px] sm:text-[12px] text-espresso-700/55">PT Sutan Vet Medika · Hybrid</div>
              </div>
              <div class="divider-rule"></div>
              <div>
                <div class="text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-espresso-700/45">Side</div>
                <div class="mt-1 text-[14px] sm:text-[15px] font-medium leading-snug">Affiliate Marketing Intern</div>
                <div class="text-[11px] sm:text-[12px] text-espresso-700/55">AnyMind Group · Jakarta</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stat row -->
        <div class="grid grid-cols-3 gap-2.5 sm:gap-3" data-reveal data-reveal-delay="3">
          <div v-for="(stat, i) in stats" :key="i" class="bezel-core p-3 sm:p-4">
            <div class="font-display text-[26px] sm:text-[30px] md:text-[34px] leading-none tracking-tight">{{ stat.value }}</div>
            <div class="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">{{ stat.label }}</div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Bottom rail -->
    <div class="max-w-[1480px] mx-auto mt-14 sm:mt-20 md:mt-28 flex items-end justify-between gap-4">
      <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 flex items-center gap-3" data-reveal>
        <span class="block w-8 sm:w-10 h-px bg-espresso-700/25"></span>
        Scroll · slowly
      </div>
      <div class="text-right text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55" data-reveal data-reveal-delay="1">
        IPB Univ. · BBA · '26
      </div>
    </div>
  </section>
</template>

<script setup>
import { getLenis } from '../composables/useLenis.js'

const stats = [
  { value: '200+', label: 'KOL Deals' },
  { value: '150', label: 'Affiliates' },
  { value: '08mo', label: 'Tenure' }
]

function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(el, { offset: -64, duration: 1.4 })
  else el.scrollIntoView({ behavior: 'smooth' })
}
</script>
