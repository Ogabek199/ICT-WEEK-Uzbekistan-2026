<template>
  <div class="app-root">
    <!-- Full-page Background: Figma Matrix Aurora Background (1013x4096) -->
    <div class="bg-full-page" aria-hidden="true"></div>

    <!-- Header Navigation -->
    <Header />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Save Spot Section (118:6649) -->
      <SaveSpotSection />

      <!-- Past Attendees (118:6654) -->
      <PastAttendees />

      <!-- Summit Tracks (118:7058) -->
      <SummitTracks />

      <!-- Digital Startups Program & IT Park (130:19073) -->
      <BentoFeatures />

      <!-- Partners (130:21837) -->
      <PartnersSection />

      <!-- Registration Form (214:77) -->
      <RegistrationSection />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import SaveSpotSection from './components/SaveSpotSection.vue'
import PastAttendees from './components/PastAttendees.vue'
import SummitTracks from './components/SummitTracks.vue'
import BentoFeatures from './components/BentoFeatures.vue'
import PartnersSection from './components/PartnersSection.vue'
import RegistrationSection from './components/RegistrationSection.vue'
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  position: relative;
  background-color: #05080e;
  overflow-x: hidden;
}

/* Full-length Matrix + Northern Lights Background (1013x4096) */
.bg-full-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/full-page-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 1;
}

/*
  Section Spacing:
  - Navbar height: 80px + 16px top = 96px bottom edge
  - Desktop: 96px + 74px = 170px padding-top (exact 74px gap from navbar to Hero)
*/
main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding-top: 170px; /* Exact 74px below floating navbar */
  padding-bottom: 120px;
}

@media (max-width: 1024px) {
  main {
    gap: 52px;
    padding-top: 140px;
    padding-bottom: 96px;
  }
}

@media (max-width: 768px) {
  main {
    gap: 36px;
    padding-top: 120px;
    padding-bottom: 80px;
  }
}
</style>
