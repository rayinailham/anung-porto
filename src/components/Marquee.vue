<template>
  <section class="relative py-7 sm:py-10 md:py-14 border-y border-espresso-700/8 overflow-hidden">
    <div class="marquee-track flex gap-8 sm:gap-10 md:gap-12 whitespace-nowrap will-change-transform">
      <div v-for="copy in 2" :key="copy" class="flex items-center gap-8 sm:gap-10 md:gap-12 shrink-0">
        <span
          v-for="(word, i) in words"
          :key="`${copy}-${i}`"
          class="inline-flex items-center gap-8 sm:gap-10 md:gap-12 shrink-0"
        >
          <span
            class="font-display tracking-editorial text-[14vw] sm:text-[11vw] md:text-[7.5vw] leading-none"
            :class="word.italic ? 'italic text-espresso-700/35' : 'text-espresso-700'"
          >{{ word.text }}</span>
          <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-ember-500 shrink-0"></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const words = [
  { text: 'Affiliate', italic: false },
  { text: 'Coordination', italic: true },
  { text: 'KOL', italic: false },
  { text: 'Campaigns', italic: true },
  { text: 'Creators', italic: false },
  { text: 'Conversion', italic: true }
]
</script>
