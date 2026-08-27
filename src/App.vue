<template>
  <div class="app-root">
    <!-- Full-page Background -->
    <div class="bg-full-page" aria-hidden="true"></div>

    <!-- Header Navigation (visible on main page) -->
    <AppHeader v-if="!isSubmitted" />

    <!-- Main Content -->
    <main v-if="!isSubmitted">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Below-the-fold content -->
      <template v-if="showRest">
        <!-- Save Spot Section -->
        <SaveSpotSection />

        <!-- Past Attendees -->
        <PastAttendees />

        <!-- Summit Tracks -->
        <SummitTracks />

        <!-- Digital Startups Program & IT Park -->
        <BentoFeatures />

        <!-- Partners -->
        <PartnersSection />

        <!-- Registration Form -->
        <RegistrationSection @submitted="onRegistrationSubmitted" />
      </template>
    </main>

    <!-- Full-Page Thank You View -->
    <div class="thank-you-fullscreen" v-else>
      <div class="thank-you-inner">
        <!-- 3D Avatar with checkmark -->
        <div class="thank-avatar-wrap">
          <img src="@/assets/images/thank-you-avatar.webp" alt="Success" class="thank-avatar-img" width="84" height="84" loading="lazy" decoding="async" />
        </div>

        <!-- Main Title -->
        <h1 class="thank-title">{{ t('thankYou.titleLine1') }}<br class="desktop-br" /> {{ t('thankYou.titleLine2') }}</h1>

        <!-- Subtitle -->
        <p class="thank-subtitle">
          {{ t('thankYou.subtitle') }}
        </p>

        <!-- Back to Homepage Button -->
        <button class="btn-back-home" @click="onBackHome" id="thank-back-home-btn" aria-label="Back to Homepage">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#84FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 21V12H15V21" stroke="#84FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ t('thankYou.backHome') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { useI18n } from '@/composables/useI18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/features/hero/HeroSection.vue'

const SaveSpotSection = defineAsyncComponent(() => import('@/features/save-spot/SaveSpotSection.vue'))
const PastAttendees = defineAsyncComponent(() => import('@/features/attendees/PastAttendees.vue'))
const SummitTracks = defineAsyncComponent(() => import('@/features/tracks/SummitTracks.vue'))
const BentoFeatures = defineAsyncComponent(() => import('@/features/bento/BentoFeatures.vue'))
const PartnersSection = defineAsyncComponent(() => import('@/features/partners/PartnersSection.vue'))
const RegistrationSection = defineAsyncComponent(() => import('@/features/registration/RegistrationSection.vue'))

const { t } = useI18n()
const isSubmitted = ref(false)
const showRest = ref(false)

onMounted(() => {
  const loadRest = () => {
    if (!showRest.value) {
      showRest.value = true
      window.removeEventListener('scroll', loadRest)
      window.removeEventListener('touchstart', loadRest)
      window.removeEventListener('mousemove', loadRest)
    }
  }

  window.addEventListener('scroll', loadRest, { passive: true, once: true })
  window.addEventListener('touchstart', loadRest, { passive: true, once: true })
  window.addEventListener('mousemove', loadRest, { passive: true, once: true })

  setTimeout(loadRest, 1200)
})

function onRegistrationSubmitted() {
  isSubmitted.value = true
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function onBackHome() {
  isSubmitted.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
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
  background-image: url('@/assets/images/full-page-bg.webp');
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

@media (max-width: 1024px) and (min-width: 768px) {
  main {
    gap: 48px;
    padding-top: 130px;
    padding-bottom: 96px;
  }
}

@media (max-width: 767px) {
  main {
    gap: 32px;
    padding-top: 96px;
    padding-bottom: 64px;
  }
}

/* Full-Screen Thank You Page */
.thank-you-fullscreen {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
  animation: fadeIn 0.4s ease-out;
}

.thank-you-inner {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.thank-avatar-wrap {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: rgba(10, 18, 26, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.15);
}

.thank-avatar-img {
  width: 84px;
  height: 84px;
  object-fit: contain;
}

.thank-title {
  font-family: 'Manrope', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 20px 0;
  text-align: center;
}

.thank-subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.5;
  max-width: 780px;
  margin: 0 0 40px 0;
  text-align: center;
}

.btn-back-home {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  padding: 0 26px;
  border-radius: 12px;
  background: rgba(1, 20, 26, 0.65);
  border: 1px solid #84FFC1;
  color: #84FFC1;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.btn-back-home:hover {
  background: rgba(132, 255, 193, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5), 0 0 20px rgba(132, 255, 193, 0.25);
}

.btn-back-home:active {
  transform: translateY(0);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 960px) {
  .thank-title {
    font-size: 40px;
  }
  .thank-subtitle {
    font-size: 17px;
    margin-bottom: 32px;
  }
  .thank-avatar-wrap {
    width: 110px;
    height: 110px;
    margin-bottom: 24px;
  }
}

@media (max-width: 640px) {
  .thank-title {
    font-size: 28px;
  }
  .thank-subtitle {
    font-size: 15px;
  }
  .thank-avatar-wrap {
    width: 90px;
    height: 90px;
  }
  .desktop-br {
    display: none;
  }
  .btn-back-home {
    width: 100%;
  }
}
</style>
