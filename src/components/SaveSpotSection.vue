<template>
  <!--
    Figma: Blog (259:3796)
    w=1280 h=408 radius=24 fill=rgba(0,6,14,0.40) pad=T36 R36 B36 L42 gap=32 dir=HORIZONTAL
  -->
  <section id="save-spot" class="save-spot-section">
    <div class="page-container">
      <div class="save-spot-card">
        <!-- Left: Headline (603px) -->
        <div class="headline-col">
          <!-- Title: Manrope 48 w700 rgba(237,237,242,1) -->
          <h2 class="section-title">{{ t('savespot.title') }}</h2>

          <!-- Description paragraphs -->
          <div class="section-text-content">
            <p class="text-paragraph">
              Every unicorn starts as a single star.<br />
              Together they become the Northern Lights.
            </p>
            <p class="text-paragraph">
              Welcome to Uzbekistan, where visionary government support and a thriving innovation ecosystem help founders turn bold ideas into global ventures.
            </p>
            <p class="text-paragraph">
              Here, startups and tech companies don’t just become part of the Northern Lights—they discover their North Star and follow it all the way to international success.
            </p>
          </div>

          <!-- Button: radius=12 fill=#83FFC1 pad=T12 R20 B12 L20 -->
          <button class="btn-register-spot" @click="scrollToRegister" id="save-spot-register-btn">
            <span>{{ t('savespot.btn') }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-arrow">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#121B26" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Right: Image (df913f5c9c35c1cfec5ab9bd170fd28c942bf917.png) radius=12 -->
        <div class="image-col">
          <img
            src="@/assets/images/df913f5c9c35c1cfec5ab9bd170fd28c942bf917.png"
            alt="ICT Week Uzbekistan Main Stage"
            class="spot-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

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

/*
  Figma: Blog (259:3796)
  w=1280 h=408 radius=24 fill=rgba(0,6,14,0.40) pad=T36 R36 B36 L42 gap=32 dir=HORIZONTAL
*/
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

/* Left: Headline col (603px) */
.headline-col {
  flex: 0 0 580px;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Title: Manrope 48 w700 rgba(237,237,242,1) */
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
}

/* Button matching screenshot */
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

/* Right: Image col */
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

@media (max-width: 1024px) {
  .save-spot-card {
    flex-direction: column;
    padding: 28px 24px;
  }
  .headline-col {
    flex: none;
    max-width: 100%;
  }
  .image-col {
    width: 100%;
    height: 260px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 32px;
  }
}
</style>
