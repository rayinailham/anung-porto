<template>
  <section id="craft" class="relative px-5 md:px-10 py-28 md:py-40 overflow-hidden">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] rounded-full opacity-[0.45]"
        style="background: radial-gradient(closest-side, rgba(125,139,106,0.16), transparent 70%);"
      ></div>
    </div>

    <div class="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-10">
      <!-- Left intro -->
      <div class="lg:col-span-5">
        <div class="text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 inline-flex items-center gap-2" data-reveal>
          <span class="w-6 h-px bg-espresso-700/40"></span>
          Section · 04
        </div>
        <h2 class="mt-3 font-display text-[44px] md:text-[68px] leading-[0.95] tracking-editorial" data-reveal data-reveal-delay="1">
          The toolkit,<br/>
          <span class="italic text-espresso-700/55">in plain words.</span>
        </h2>
        <p class="mt-8 max-w-md text-[15px] leading-relaxed text-espresso-700/70" data-reveal data-reveal-delay="2">
          Less buzzwords, more verbs. These are the moves I reach for when the brief lands —
          ordered roughly by how often they actually run a campaign.
        </p>

        <!-- meta panel -->
        <div class="mt-10 bezel max-w-md" data-reveal data-reveal-delay="3">
          <div class="bezel-core p-6 grid grid-cols-2 gap-5">
            <div>
              <div class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">Native</div>
              <div class="mt-2 text-[14px] font-medium">Bahasa Indonesia</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">Working</div>
              <div class="mt-2 text-[14px] font-medium">English</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">Setup</div>
              <div class="mt-2 text-[14px] font-medium">Hybrid · Remote-friendly</div>
            </div>
            <div>
              <div class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">Time zone</div>
              <div class="mt-2 text-[14px] font-medium font-mono">UTC+07:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right list -->
      <div class="lg:col-span-7 lg:pl-8">
        <ul class="divide-y divide-espresso-700/10 border-y border-espresso-700/10">
          <li
            v-for="(s, i) in skills"
            :key="s.label"
            class="py-6 md:py-7 flex items-center justify-between gap-6 group transition-colors duration-500 ease-silk hover:bg-espresso-700/[0.025] -mx-5 md:-mx-6 px-5 md:px-6"
            data-reveal
            :data-reveal-delay="Math.min(5, i)"
          >
            <div class="flex items-baseline gap-5">
              <span class="font-mono text-[11px] text-espresso-700/45 w-8 shrink-0">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="font-display text-[28px] md:text-[36px] leading-none tracking-editorial">
                {{ s.label }}
              </span>
            </div>
            <div class="flex items-center gap-4 shrink-0">
              <span class="text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 hidden md:inline">{{ s.tag }}</span>
              <span
                class="w-9 h-9 rounded-full bg-espresso-700/5 inline-flex items-center justify-center transition-all duration-500 ease-silk group-hover:bg-espresso-700 group-hover:text-cream-50 group-hover:translate-x-1"
              >
                <svg viewBox="0 0 16 16" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { label: 'KOL Management', tag: 'Daily ops' },
  { label: 'Affiliate Management', tag: 'Shopee · TikTok' },
  { label: 'Affiliate Marketing', tag: 'Campaign-side' },
  { label: 'Digital Marketing', tag: 'Strategy · Execution' },
  { label: 'Content Creation', tag: 'Reels · Posts · Video' },
  { label: 'Decision Making', tag: 'Cross-team' },
  { label: 'Adaptability', tag: 'Hybrid setups' },
  { label: 'Teamwork & Collaboration', tag: 'Field-tested' },
  { label: 'Complex Problem Solving', tag: 'Briefs to outcomes' },
  { label: 'Creativity & Innovation', tag: 'Concept-side' },
  { label: 'Social Learning', tag: 'Always on' }
]
</script>
