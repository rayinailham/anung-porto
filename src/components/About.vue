<template>
  <section id="about" class="relative px-5 md:px-10 py-28 md:py-40">
    <div class="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-10">
      <!-- Left rail -->
      <div class="lg:col-span-3">
        <div class="sticky top-32 flex flex-col gap-4">
          <div class="text-[11px] font-mono uppercase tracking-eyebrow text-espresso-700/55" data-reveal>
            <span class="inline-flex items-center gap-2">
              <span class="w-6 h-px bg-espresso-700/40"></span>
              Section · 01
            </span>
          </div>
          <h2 class="font-display text-[42px] leading-[0.95] tracking-editorial" data-reveal data-reveal-delay="1">
            About,<br/>
            <span class="italic text-espresso-700/55">briefly.</span>
          </h2>
        </div>
      </div>

      <!-- Right body -->
      <div class="lg:col-span-9 lg:pl-8">
        <p
          class="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-editorial text-balance text-espresso-700"
          data-reveal
        >
          I work between briefs and creators —
          <span class="italic text-espresso-700/55">turning campaign goals into shipped collaborations</span>
          across Shopee, TikTok, and KOL networks.
        </p>

        <div class="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl">
          <p class="text-[15px] leading-relaxed text-espresso-700/75" data-reveal data-reveal-delay="1">
            At PT Sutan Vet Medika I now coordinate marketing operations — managing 200+ KOL deals,
            100 Shopee affiliates, and 50 TikTok affiliates across rolling campaigns. Before that, I
            handled content production, B2B webinar logistics, and creator recruitment as their
            Digital Marketing Intern.
          </p>
          <p class="text-[15px] leading-relaxed text-espresso-700/75" data-reveal data-reveal-delay="2">
            In parallel, I run affiliate marketing experiments at AnyMind Group in Jakarta. I'm
            wrapping a BBA at IPB University in July 2026 — certified in AI, Enterprise Architecture
            for Digital Transformation, and Communication Studies along the way.
          </p>
        </div>

        <!-- meta row -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-espresso-700/10" data-reveal data-reveal-delay="3">
          <div v-for="m in meta" :key="m.label" class="bg-cream-50 px-5 py-6">
            <div class="text-[10px] font-mono uppercase tracking-eyebrow text-espresso-700/50">{{ m.label }}</div>
            <div class="mt-2 text-[14px] font-medium leading-snug">{{ m.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const meta = [
  { label: 'Based in', value: 'Bogor, Jawa Barat' },
  { label: 'Working', value: 'Hybrid · ID + Jakarta' },
  { label: 'Studying', value: 'BBA, IPB University' },
  { label: 'Focus', value: 'KOL · Affiliate · Content' }
]
</script>
