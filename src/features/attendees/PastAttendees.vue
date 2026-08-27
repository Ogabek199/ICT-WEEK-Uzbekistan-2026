<template>
  <!--
    Figma: Past Attendees Include (118:6654)
    w=1280 h=auto radius=24 fill=rgba(10,20,28,0.65) pad=T48 R56 B48 L56 gap=40 dir=VERTICAL
  -->
  <section id="attendees" class="attendees-section">
    <div class="page-container">
      <div class="attendees-card">
        <!-- Title: Centered Manrope 44 w800 rgba(255,255,255,1) -->
        <h2 class="section-title">{{ t('attendees.title') }}</h2>

        <!-- Logo Grid: 4 Rows matching Figma 118:6654 & user screenshot -->
        <div class="logo-grid">

          <!-- Row 1: 5 cards (Web Summit, Plug and Play, MIT, Google for Startups, AWS) -->
          <div class="logo-row row-5">
            <div class="logo-cell" v-for="logo in row1" :key="logo.name" :title="logo.name">
              <div class="logo-inner">
                <img v-if="logo.src" :src="logo.src" :alt="logo.name" class="brand-logo-img" :style="logo.style" />
                <div v-else v-html="logo.svg" class="svg-wrap"></div>
              </div>
            </div>
          </div>

          <!-- Row 2: 5 cards (Alchemist, Dealroom.co, StartupBlink, Domino Ventures, Startup Genome) -->
          <div class="logo-row row-5">
            <div class="logo-cell" v-for="logo in row2" :key="logo.name" :title="logo.name">
              <div class="logo-inner">
                <img v-if="logo.src" :src="logo.src" :alt="logo.name" class="brand-logo-img" :style="logo.style" />
                <div v-else v-html="logo.svg" class="svg-wrap"></div>
              </div>
            </div>
          </div>

          <!-- Row 3: 5 cards (Accesa, Sturgeon Capital, Salesforce.org, EY, Global Startup Awards) -->
          <div class="logo-row row-5">
            <div class="logo-cell" v-for="logo in row3" :key="logo.name" :title="logo.name">
              <div class="logo-inner">
                <img v-if="logo.src" :src="logo.src" :alt="logo.name" class="brand-logo-img" :style="logo.style" />
                <div v-else v-html="logo.svg" class="svg-wrap"></div>
              </div>
            </div>
          </div>

          <!-- Row 4: 4 cards wider (GBTP, Polyvalent, Golden Gate Ventures, SPS Commerce) -->
          <div class="logo-row row-4">
            <div class="logo-cell wide" v-for="logo in row4" :key="logo.name" :title="logo.name">
              <div class="logo-inner">
                <img v-if="logo.src" :src="logo.src" :alt="logo.name" class="brand-logo-img" :style="logo.style" />
                <div v-else v-html="logo.svg" class="svg-wrap"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import websummitImg from '@/assets/attendee-logos/websummit.png'
import plugandplayImg from '@/assets/attendee-logos/plugandplay.png'
import mitImg from '@/assets/attendee-logos/mit.png'
import googleImg from '@/assets/attendee-logos/google.png'
import awsImg from '@/assets/attendee-logos/aws.png'
import alchemistImg from '@/assets/attendee-logos/alchemist.png'
import dealroomImg from '@/assets/attendee-logos/dealroom.png'
import startupblinkImg from '@/assets/attendee-logos/startupblink.png'
import dominoImg from '@/assets/attendee-logos/domino.png'
import genomeImg from '@/assets/attendee-logos/genome.png'
import accesaImg from '@/assets/attendee-logos/accesa.png'
import sturgeonImg from '@/assets/attendee-logos/sturgeon.png'
import salesforceImg from '@/assets/attendee-logos/salesforce.png'
import eyImg from '@/assets/attendee-logos/ey.png'
import globalawardsImg from '@/assets/attendee-logos/globalawards.png'
import gbtpImg from '@/assets/attendee-logos/gbtp.png'
import polyvalentImg from '@/assets/attendee-logos/polyvalent.png'
import goldengateImg from '@/assets/attendee-logos/goldengate.png'
import spscommerceImg from '@/assets/attendee-logos/spscommerce.png'

const { t } = useI18n()

// Row 1: 5 cards (Web Summit, Plug and Play, MIT, Google for Startups, AWS)
const row1 = [
  { name: 'Web Summit', src: websummitImg, style: { maxHeight: '66px', maxWidth: '85%' } },
  { name: 'Plug and Play', src: plugandplayImg, style: { maxHeight: '38px', maxWidth: '88%' } },
  { name: 'MIT', src: mitImg, style: { maxHeight: '44px', maxWidth: '88%' } },
  { name: 'Google for Startups', src: googleImg, style: { maxHeight: '32px', maxWidth: '90%' } },
  { name: 'AWS', src: awsImg, style: { maxHeight: '62px', maxWidth: '80%' } },
]

// Row 2: 5 cards (Alchemist Accelerator, Dealroom.co, StartupBlink, Domino Ventures, Startup Genome)
const row2 = [
  { name: 'Alchemist Accelerator', src: alchemistImg, style: { maxHeight: '42px', maxWidth: '90%' } },
  { name: 'Dealroom.co', src: dealroomImg, style: { maxHeight: '46px', maxWidth: '88%' } },
  { name: 'StartupBlink', src: startupblinkImg, style: { maxHeight: '42px', maxWidth: '88%' } },
  { name: 'Domino Ventures', src: dominoImg, style: { maxHeight: '48px', maxWidth: '88%' } },
  { name: 'Startup Genome', src: genomeImg, style: { maxHeight: '48px', maxWidth: '88%' } },
]

// Row 3: 5 cards (Accesa, Sturgeon Capital, Salesforce.org, EY, Global Startup Awards)
const row3 = [
  { name: 'Accesa', src: accesaImg, style: { maxHeight: '52px', maxWidth: '85%' } },
  { name: 'Sturgeon Capital', src: sturgeonImg, style: { maxHeight: '52px', maxWidth: '88%' } },
  { name: 'Salesforce.org', src: salesforceImg, style: { maxHeight: '52px', maxWidth: '88%' } },
  { name: 'EY', src: eyImg, style: { maxHeight: '60px', maxWidth: '75%' } },
  { name: 'Global Startup Awards', src: globalawardsImg, style: { maxHeight: '56px', maxWidth: '88%' } },
]

// Row 4: 4 cards wider (GBTP, Polyvalent, Golden Gate Ventures, SPS Commerce)
const row4 = [
  { name: 'GBTP Gyeongbuk Technopark', src: gbtpImg, style: { maxHeight: '52px', maxWidth: '90%' } },
  { name: 'Polyvalent', src: polyvalentImg, style: { maxHeight: '36px', maxWidth: '90%' } },
  { name: 'Golden Gate Ventures', src: goldengateImg, style: { maxHeight: '54px', maxWidth: '90%' } },
  { name: 'SPS Commerce', src: spscommerceImg, style: { maxHeight: '48px', maxWidth: '90%' } },
]
</script>

<style scoped>
.attendees-section {
  width: 100%;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.attendees-card {
  background: rgba(10, 20, 28, 0.65);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.section-title {
  font-family: 'Manrope', sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0;
  text-align: center;
  letter-spacing: -0.02em;
}

.logo-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo-row.row-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.logo-row.row-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.logo-cell {
  position: relative;
  height: 118px;
  border-radius: 12px;
  background-color: rgba(14, 20, 27, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.logo-cell::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(21, 91, 127, 0.45) 0%, rgba(27, 219, 134, 0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: opacity 0.25s ease, background 0.25s ease;
}

.logo-cell:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(27, 219, 134, 0.2);
}

.logo-cell:hover::before {
  background: linear-gradient(135deg, rgba(36, 129, 179, 0.8) 0%, rgba(27, 219, 134, 0.8) 100%);
}

.logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.brand-logo-img {
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.25s ease;
  user-select: none;
}

.logo-cell:hover .brand-logo-img {
  transform: scale(1.06);
}

@media (max-width: 1100px) {
  .logo-row.row-5 {
    grid-template-columns: repeat(3, 1fr);
  }
  .logo-row.row-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .attendees-card {
    padding: 32px 20px;
    gap: 24px;
  }
  .section-title {
    font-size: 30px;
  }
  .logo-row.row-5,
  .logo-row.row-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .logo-cell {
    height: 96px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .logo-row.row-5,
  .logo-row.row-4 {
    grid-template-columns: 1fr;
  }
}
</style>
