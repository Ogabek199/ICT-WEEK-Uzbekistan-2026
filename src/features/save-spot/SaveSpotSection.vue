<template>
  <section id="save-spot" class="save-spot-section">
    <div class="page-container">
      <div class="save-spot-card">
        <!-- Left: Headline (603px) -->
        <div class="headline-col">
          <h2 class="section-title">{{ t('savespot.title') }}</h2>

          <!-- Description paragraphs -->
          <div class="section-text-content">
            <p class="text-paragraph">
              {{ t('savespot.p1_1') }}<br />
              {{ t('savespot.p1_2') }}
            </p>
            <p class="text-paragraph">
              {{ t('savespot.p2') }}
            </p>
            <p class="text-paragraph">
              {{ t('savespot.p3') }}
            </p>
          </div>

          <!-- Button -->
          <button class="btn-register-spot" @click="scrollToRegister" id="save-spot-register-btn">
            <span>{{ t('savespot.btn') }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-arrow">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#121B26" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Right: Image (ICT Week Main Stage Conference) -->
        <div class="image-col">
          <img
            :src="saveSpotBanner"
            :srcset="`${saveSpotBannerSm} 680w, ${saveSpotBanner} 1000w`"
            sizes="(max-width: 768px) 100vw, 600px"
            alt="ICT Week Uzbekistan Main Stage Conference"
            class="spot-image"
            width="600"
            height="336"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import saveSpotBanner from '@/assets/images/save-spot-banner.webp'
import saveSpotBannerSm from '@/assets/images/save-spot-banner-sm.webp'

const { t } = useI18n()

function scrollToRegister() {
  const el = document.getElementById('register')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.save-spot-section {
  width: 100%;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.save-spot-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  background: rgba(10, 20, 28, 0.65);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 36px 36px 36px 42px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.headline-col {
  flex: 0 0 580px;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-family: 'Manrope', sans-serif;
  font-size: 44px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0;
  letter-spacing: -0.02em;
}

.section-text-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text-paragraph {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
}

.btn-register-spot {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 22px;
  border-radius: 12px;
  background: #83FFC1;
  border: none;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #121B26;
  width: fit-content;
  margin-top: 4px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(131, 255, 193, 0.35);
}

.btn-register-spot:hover {
  background: #9effce;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(131, 255, 193, 0.5);
}

.btn-register-spot:active {
  transform: translateY(0);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.btn-register-spot:hover .btn-arrow {
  transform: translate(2px, -2px);
}

.image-col {
  flex: 1;
  height: 336px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.spot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  transition: transform 0.4s ease;
}

.save-spot-card:hover .spot-image {
  transform: scale(1.02);
}

/* ==========================================================================
   Responsive Styling (Desktop >= 1025px preserved completely)
   ========================================================================== */
@media (max-width: 1024px) and (min-width: 768px) {
  .save-spot-card {
    flex-direction: column;
    padding: 28px 26px;
    gap: 20px;
  }
  .image-col {
    order: -1;
    width: 100%;
    height: 300px;
  }
  .headline-col {
    flex: none;
    max-width: 100%;
    gap: 16px;
  }
  .section-title {
    font-size: 34px;
  }
}

@media (max-width: 767px) {
  .page-container {
    padding: 0 16px;
  }
  .save-spot-card {
    flex-direction: column;
    padding: 24px 18px;
    gap: 20px;
    border-radius: 18px;
  }
  .headline-col {
    flex: none;
    max-width: 100%;
    gap: 14px;
  }
  .section-title {
    font-size: 28px;
  }
  .text-paragraph {
    font-size: 14px;
    line-height: 1.5;
  }
  .btn-register-spot {
    width: 100%;
    justify-content: center;
    height: 48px;
    font-size: 15px;
  }
  .image-col {
    width: 100%;
    height: 200px;
    border-radius: 14px;
  }
}
</style>
