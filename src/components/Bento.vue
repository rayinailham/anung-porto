<template>
  <section id="work" class="relative px-4 sm:px-5 md:px-10 py-20 sm:py-24 md:py-40">
    <!-- Header -->
    <div class="max-w-[1480px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-20">
      <div>
        <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55 inline-flex items-center gap-2" data-reveal>
          <span class="w-5 sm:w-6 h-px bg-espresso-700/40"></span>
          Section · 03
        </div>
        <h2 class="mt-3 font-display text-[34px] sm:text-[44px] md:text-[68px] leading-[0.95] tracking-editorial max-w-[14ch]" data-reveal data-reveal-delay="1">
          Schools, papers,<br/>
          <span class="italic text-espresso-700/55">side trips.</span>
        </h2>
      </div>
      <p class="max-w-sm text-[13px] sm:text-[14px] leading-relaxed text-espresso-700/65" data-reveal data-reveal-delay="2">
        A bento of the credentials, projects, and certifications that quietly shape how the work above gets shipped.
      </p>
    </div>

    <!-- Bento -->
    <div class="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-px bg-espresso-700/10">
      <!-- Education (large) -->
      <article class="md:col-span-4 bg-cream-50 p-6 sm:p-8 md:p-12 relative overflow-hidden group" data-reveal>
        <div class="flex items-center justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">
          <span>// Education</span>
          <span>2022 — 2026</span>
        </div>
        <h3 class="mt-6 sm:mt-8 font-display text-[28px] sm:text-[36px] md:text-[52px] leading-[1.0] tracking-editorial">
          Institut Pertanian<br/>
          <span class="italic text-espresso-700/55">Bogor</span> &nbsp;·&nbsp; IPB
        </h3>
        <div class="mt-5 sm:mt-6 max-w-md text-[13px] sm:text-[14px] leading-relaxed text-espresso-700/70">
          Bachelor of Business Administration (BBA) — Business Administration &amp; Management, General.
          Expected graduation, July 2026.
        </div>
        <div class="mt-8 sm:mt-10 flex flex-wrap gap-2">
          <span v-for="t in eduTags" :key="t" class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow px-2 sm:px-2.5 py-1 rounded-full border border-espresso-700/15 text-espresso-700/65">
            {{ t }}
          </span>
        </div>
        <div class="pointer-events-none absolute -right-6 -bottom-12 font-display italic text-[140px] sm:text-[180px] md:text-[200px] leading-none tracking-tighter text-espresso-700/[0.04] select-none">SB</div>
      </article>

      <!-- Projects column -->
      <article class="md:col-span-2 bg-cream-50 p-6 sm:p-8 md:p-10 flex flex-col" data-reveal data-reveal-delay="1">
        <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">// Project · 01</div>
        <h3 class="mt-5 sm:mt-6 font-display text-[24px] sm:text-[28px] leading-[1.05] tracking-editorial">IDEANATION</h3>
        <div class="mt-1 text-[11px] sm:text-[12px] text-espresso-700/55">National business plan competition · BEM SB IPB</div>
        <div class="mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">Sep — Nov 2024</div>
        <p class="mt-4 sm:mt-5 text-[12px] sm:text-[13px] leading-relaxed text-espresso-700/70">
          Pre-event, opening ceremony, mentoring sessions, company visits, gala dinner — all run end to end with the
          school of business student exec.
        </p>
        <div class="mt-auto pt-5 sm:pt-6 flex flex-wrap gap-2">
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow px-2 sm:px-2.5 py-1 rounded-full bg-espresso-700/[0.04] text-espresso-700/65">Problem solving</span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow px-2 sm:px-2.5 py-1 rounded-full bg-espresso-700/[0.04] text-espresso-700/65">Teamwork</span>
        </div>
      </article>

      <!-- Cert grid -->
      <article class="md:col-span-2 bg-cream-50 p-6 sm:p-8 md:p-10" data-reveal data-reveal-delay="2">
        <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55 mb-5 sm:mb-6">// Certifications</div>
        <ul class="divide-y divide-espresso-700/10">
          <li v-for="c in certs" :key="c.title" class="py-3 sm:py-4 flex items-start justify-between gap-3 sm:gap-4">
            <div>
              <div class="text-[13px] sm:text-[14px] font-medium leading-snug">{{ c.title }}</div>
              <div class="text-[11px] sm:text-[12px] text-espresso-700/55">{{ c.issuer }}</div>
            </div>
            <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50 shrink-0 pt-1">{{ c.date }}</div>
          </li>
        </ul>
      </article>

      <!-- Project 02 -->
      <article class="md:col-span-2 bg-cream-50 p-6 sm:p-8 md:p-10 flex flex-col" data-reveal data-reveal-delay="3">
        <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">// Project · 02</div>
        <h3 class="mt-5 sm:mt-6 font-display text-[24px] sm:text-[28px] leading-[1.05] tracking-editorial">ADDVENTURES 8.0</h3>
        <div class="mt-1 text-[11px] sm:text-[12px] text-espresso-700/55">SB IPB · 60th batch orientation</div>
        <div class="mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">Aug — Sep 2024</div>
        <p class="mt-4 sm:mt-5 text-[12px] sm:text-[13px] leading-relaxed text-espresso-700/70">
          Official orientation program covering academic environment, learning systems, campus ethics,
          and student responsibilities for incoming students.
        </p>
        <div class="mt-auto pt-5 sm:pt-6 flex flex-wrap gap-2">
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow px-2 sm:px-2.5 py-1 rounded-full bg-espresso-700/[0.04] text-espresso-700/65">Adaptability</span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow px-2 sm:px-2.5 py-1 rounded-full bg-espresso-700/[0.04] text-espresso-700/65">Decision making</span>
        </div>
      </article>

      <!-- Org row (wide) -->
      <article class="md:col-span-2 bg-cream-50 p-6 sm:p-8 md:p-10 relative overflow-hidden" data-reveal data-reveal-delay="4">
        <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">// Organisation</div>
        <h3 class="mt-5 sm:mt-6 font-display text-[22px] sm:text-[26px] leading-[1.05] tracking-editorial">BEM SB IPB</h3>
        <div class="mt-1 text-[11px] sm:text-[12px] text-espresso-700/55">Treasurer · Social &amp; Political Affairs</div>
        <div class="mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">Mar — Nov 2024</div>
      </article>

      <article class="md:col-span-2 bg-cream-50 p-6 sm:p-8 md:p-10 relative overflow-hidden" data-reveal data-reveal-delay="5">
        <div class="text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">// Organisation</div>
        <h3 class="mt-5 sm:mt-6 font-display text-[22px] sm:text-[26px] leading-[1.05] tracking-editorial">ABEST</h3>
        <div class="mt-1 text-[11px] sm:text-[12px] text-espresso-700/55">Event Division Intern · IPB University</div>
        <div class="mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/55">Sep — Nov 2023</div>
      </article>
    </div>
  </section>
</template>

<script setup>
const eduTags = ['Business Admin.', 'Management', 'School of Business', 'Class of \'26']

const certs = [
  { title: 'Artificial Intelligence', issuer: 'ICE Institute', date: 'Dec 2024' },
  { title: 'Enterprise Architecture for Digital Transformation', issuer: 'ICE Institute', date: 'Dec 2024' },
  { title: 'Communication Studies', issuer: 'ICE Institute', date: '—' }
]
</script>
