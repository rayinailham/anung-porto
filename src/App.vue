<template>
  <div class="grain">
    <IntroScreen />
    <NavBar />
    <ScrollProgress />

    <main>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Bento />
      <Skills />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import IntroScreen from './components/IntroScreen.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Bento from './components/Bento.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

import { useLenis } from './composables/useLenis.js'
import { useReveal } from './composables/useReveal.js'

useLenis()
useReveal()
</script>
