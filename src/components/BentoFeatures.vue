<template>
  <!--
    Figma: Frame 2085665247 (259:4039)
    w=1280 h=auto fill=rgba(18,27,38,0.40) radius=24 pad=T48 R60 B40 L60
  -->
  <section id="incentives" class="bento-section">
    <div class="page-container">
      <div class="bento-card">

        <div class="bento-inner">

          <!-- Carousel / Mode Header -->
          <div class="carousel-nav">
            <button class="nav-arrow" @click="prevSlide" aria-label="Previous slide" id="bento-prev-btn">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M20 8l-8 8 8 8" stroke="#83FFC1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Mode Selector Tabs in the Center -->
            <div class="nav-title-group">
              <button
                v-for="(slide, idx) in slides"
                :key="idx"
                class="slide-tab-pill"
                :class="{ active: currentSlide === idx }"
                @click="currentSlide = idx"
              >
                {{ slide.title }}
              </button>
            </div>

            <button class="nav-arrow" @click="nextSlide" aria-label="Next slide" id="bento-next-btn">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M12 8l8 8-8 8" stroke="#83FFC1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Slide Content Area -->
          <transition name="fade-slide" mode="out-in">

            <!-- SLIDE 0: DIGITAL STARTUPS PROGRAM (8 Feature Cards) -->
            <div v-if="currentSlide === 0" key="slide-0" class="slide-content-wrap">
              <div class="slide-header-text">
                <p class="program-desc">
                  Digital Startups Program — a $50 million initiative launched to fast-track, fund, and scale promising Uzbek and global technology startups.
                </p>
              </div>

              <!-- Feature Grid matching Figma 130:19957 -->
              <div class="features-inner-grid">
                <div class="feature-row" v-for="(row, ri) in featureRows" :key="ri">
                  <div class="feature-card" v-for="(feat, fi) in row" :key="fi">
                    <div class="feat-metric" :class="{ 'icon-metric': feat.isIcon }">
                      {{ feat.metric }}
                    </div>
                    <p class="feat-desc">{{ feat.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- SLIDE 1: KEY INDICATORS & EXPORT ANALYTICS (Charts & Metrics) -->
            <div v-else-if="currentSlide === 1" key="slide-1" class="slide-content-wrap">
              <div class="analytics-grid">

                <!-- Left Column: Export Geography & Export Types -->
                <div class="analytics-col">
                  <!-- Export Geography Card -->
                  <div class="analytics-card">
                    <div class="card-head-row">
                      <span class="card-kpi-badge">GLOBAL REACH</span>
                      <h4 class="card-sub-title">Export Geography</h4>
                    </div>

                    <div class="geo-bars-list">
                      <div class="geo-bar-item" v-for="g in geoData" :key="g.region">
                        <div class="geo-bar-header">
                          <span class="geo-name">{{ g.region }}</span>
                          <span class="geo-percent">{{ g.percent }}%</span>
                        </div>
                        <div class="progress-track">
                          <div class="progress-fill" :style="{ width: g.percent + '%', backgroundColor: g.color }"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Types of Export Card -->
                  <div class="analytics-card">
                    <div class="card-head-row">
                      <span class="card-kpi-badge">SECTOR BREAKDOWN</span>
                      <h4 class="card-sub-title">Types of Export</h4>
                    </div>

                    <div class="export-types-row">
                      <div class="type-pill" v-for="t in exportTypes" :key="t.label">
                        <span class="type-percent" :style="{ color: t.color }">{{ t.percent }}%</span>
                        <span class="type-name">{{ t.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right Column: Revenue Growth & Global Indicators -->
                <div class="analytics-col">
                  <!-- ICT Export Revenue Card -->
                  <div class="analytics-card highlight-card">
                    <div class="kpi-main-header">
                      <div>
                        <span class="card-kpi-badge">TARGET $1 BILLION</span>
                        <h4 class="kpi-stat-val">$461M <span class="val-unit">USD</span></h4>
                        <span class="kpi-stat-desc">ICT Export Revenue</span>
                      </div>
                      <div class="growth-pill">
                        <span class="growth-multiplier">7.2x</span>
                        <span class="growth-sub">increase</span>
                      </div>
                    </div>

                    <div class="kpi-mini-grid">
                      <div class="kpi-mini-box">
                        <span class="mini-val">22x</span>
                        <span class="mini-label">Members Growth</span>
                      </div>
                      <div class="kpi-mini-box">
                        <span class="mini-val">3.5x</span>
                        <span class="mini-label">Foreign Capital</span>
                      </div>
                      <div class="kpi-mini-box">
                        <span class="mini-val">127x</span>
                        <span class="mini-label">Total Revenue</span>
                      </div>
                    </div>
                  </div>

                  <!-- Representative Offices Abroad -->
                  <div class="analytics-card">
                    <div class="card-head-row">
                      <span class="card-kpi-badge">GLOBAL FOOTPRINT</span>
                      <h4 class="card-sub-title">6 Representative Offices Abroad</h4>
                    </div>

                    <div class="offices-grid">
                      <div class="office-tag" v-for="off in offices" :key="off.country">
                        <span class="office-flag">{{ off.flag }}</span>
                        <span class="office-name">{{ off.country }}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- SLIDE 2: ZERO-RISK INCENTIVES & 0% TAXES -->
            <div v-else key="slide-2" class="slide-content-wrap">
              <div class="incentives-dashboard-grid">

                <!-- 0% Taxes Card -->
                <div class="incentive-box glass-panel">
                  <div class="card-head-row">
                    <span class="card-kpi-badge">SPECIAL REGIME</span>
                    <h4 class="card-sub-title">Benefits for IT Park Member Companies</h4>
                  </div>

                  <div class="tax-benefits-grid">
                    <div class="tax-item" v-for="tax in taxRates" :key="tax.title">
                      <span class="tax-rate-val">{{ tax.rate }}</span>
                      <span class="tax-rate-desc">{{ tax.title }}</span>
                    </div>
                  </div>
                </div>

                <!-- Softlanding & Infrastructure -->
                <div class="incentive-box glass-panel">
                  <div class="card-head-row">
                    <span class="card-kpi-badge">ZERO-RISK SUPPORT</span>
                    <h4 class="card-sub-title">Softlanding & Workspace Program</h4>
                  </div>

                  <div class="perks-checklist">
                    <div class="perk-row" v-for="perk in softlandingPerks" :key="perk.title">
                      <div class="check-icon">✓</div>
                      <div>
                        <strong class="perk-title">{{ perk.title }}</strong>
                        <p class="perk-desc">{{ perk.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </transition>

          <!-- Slide dots -->
          <div class="slide-dots">
            <button
              v-for="(_, i) in slides.length"
              :key="i"
              class="dot-btn"
              :class="{ active: currentSlide === i }"
              @click="currentSlide = i"
              :aria-label="`Slide ${i + 1}`"
            ></button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const currentSlide = ref(0)

const slides = [
  { title: 'Digital Startups Program' },
  { title: 'IT Park Key Indicators & Export Analytics' },
  { title: '0% Tax & Zero-Risk Incentives' },
]

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

// 8 Feature cards matching Figma (130:19957)
const featureRows = [
  [
    { metric: '100%', desc: 'Reimbursement for patenting and trademark registration' },
    { metric: '🛡️', desc: 'Special legal regime "Regulatory Sandbox" for rapid piloting', isIcon: true },
  ],
  [
    { metric: '$50K', desc: 'Reimbursement for mentor/trainer costs in acceleration programs' },
    { metric: '1+1', desc: 'Co-funding mechanism matching foreign investment dollar-for-dollar' },
  ],
  [
    { metric: '$20K', desc: 'Reimbursement of international acceleration program costs' },
    { metric: '1 YEAR', desc: 'Free access to the massive Digital Data Platform for Startups' },
  ],
  [
    { metric: '1 YEAR', desc: 'Free dedicated legal and financial consultations with top experts' },
    { metric: '$10K', desc: 'Awarding grants directly to winners of national hackathons and ideathons' },
  ],
]

// Export geography data from Figma
const geoData = [
  { region: 'North America', percent: 46, color: '#83FFC1' },
  { region: 'Europe', percent: 27, color: '#44c986' },
  { region: 'Silk Road / CIS', percent: 21, color: '#2ecc71' },
  { region: 'Other Markets', percent: 6, color: 'rgba(255,255,255,0.4)' },
]

// Types of export
const exportTypes = [
  { label: 'IT Services', percent: 53, color: '#83FFC1' },
  { label: 'Software & IP', percent: 28, color: '#44c986' },
  { label: 'BPO & Other', percent: 19, color: '#68d391' },
]

// Representative offices abroad
const offices = [
  { country: 'Turkey', flag: '🇹🇷' },
  { country: 'Germany', flag: '🇩🇪' },
  { country: 'Saudi Arabia', flag: '🇸🇦' },
  { country: 'UAE', flag: '🇦🇪' },
  { country: 'Japan', flag: '🇯🇵' },
  { country: 'South Korea', flag: '🇰🇷' },
]

// 0% Tax rates
const taxRates = [
  { rate: '0%', title: 'Social Tax (vs 12-25%)' },
  { rate: '0%', title: 'Corporate & Land Tax' },
  { rate: '0%', title: 'VAT on Imported Services' },
  { rate: '5%', title: 'Tax on Dividends' },
  { rate: '7.5%', title: 'Personal Income Tax' },
  { rate: '0%', title: 'Customs Duties on Hardware' },
]

// Softlanding perks
const softlandingPerks = [
  { title: 'Free Office Space & Tech Equipment', desc: 'Fully furnished workspaces in IT Park branches for up to 1 full year.' },
  { title: 'IT Visa & Foreign Currency Operations', desc: 'Fast-track 3-year IT Visa for founders, staff, and family; multi-currency banking.' },
  { title: 'Fast-Track State Registration', desc: 'Zero-bureaucracy company incorporation and accounting support.' },
]
</script>

<style scoped>
.bento-section {
  width: 100%;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/*
  Figma: Frame 2085665247 (259:4039)
  w=1280 h=auto fill=rgba(18,27,38,0.40) radius=24
*/
.bento-card {
  background: rgba(18, 27, 38, 0.40);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  position: relative;
}

.bento-inner {
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Carousel Nav */
.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-arrow {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.nav-arrow:hover {
  background: rgba(131, 255, 193, 0.12);
  border-color: rgba(131, 255, 193, 0.4);
  transform: scale(1.06);
}

.nav-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.slide-tab-pill {
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: all 0.2s ease;
}

.slide-tab-pill.active {
  background: rgba(131, 255, 193, 0.15);
  border-color: #83FFC1;
  color: #83FFC1;
}

.slide-content-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.program-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0;
  max-width: 960px;
}

/* Features Grid */
.features-inner-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 24px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 16px 24px;
  min-height: 76px;
  transition: all 0.2s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(131, 255, 193, 0.2);
  transform: translateY(-1px);
}

.feat-metric {
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #83FFC1;
  min-width: 105px;
  flex-shrink: 0;
  line-height: 1;
}

.feat-metric.icon-metric {
  font-size: 28px;
}

.feat-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
  margin: 0;
}

/* Analytics Grid (Slide 1) */
.analytics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.analytics-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.analytics-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.analytics-card.highlight-card {
  background: linear-gradient(135deg, rgba(131, 255, 193, 0.06) 0%, rgba(18, 27, 38, 0.8) 100%);
  border-color: rgba(131, 255, 193, 0.25);
}

.card-head-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-kpi-badge {
  font-family: 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 800;
  color: #83FFC1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.card-sub-title {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

/* Geo Progress Bars */
.geo-bars-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.geo-bar-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.geo-bar-header {
  display: flex;
  justify-content: space-between;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

.geo-percent {
  color: #83FFC1;
  font-weight: 700;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 0.6s ease;
}

/* Export Types */
.export-types-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.type-pill {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
}

.type-percent {
  font-family: 'Manrope', sans-serif;
  font-size: 22px;
  font-weight: 800;
}

.type-name {
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

/* KPI Main Header */
.kpi-main-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.kpi-stat-val {
  font-family: 'Manrope', sans-serif;
  font-size: 44px;
  font-weight: 800;
  color: #ffffff;
  margin: 4px 0;
  line-height: 1;
}

.val-unit {
  font-size: 20px;
  font-weight: 600;
  color: #83FFC1;
}

.kpi-stat-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
}

.growth-pill {
  background: rgba(131, 255, 193, 0.15);
  border: 1px solid #83FFC1;
  border-radius: 14px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.growth-multiplier {
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 900;
  color: #83FFC1;
  line-height: 1;
}

.growth-sub {
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.kpi-mini-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 8px;
}

.kpi-mini-box {
  background: rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.mini-val {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #83FFC1;
}

.mini-label {
  font-family: 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
}

/* Offices Grid */
.offices-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.office-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 8px 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

.office-flag {
  font-size: 16px;
}

/* Incentives Dashboard (Slide 2) */
.incentives-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.incentive-box {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tax-benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tax-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tax-rate-val {
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: #83FFC1;
}

.tax-rate-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.perks-checklist {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.perk-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.check-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #83FFC1;
  color: #121B26;
  font-size: 12px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.perk-title {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: block;
}

.perk-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin: 2px 0 0 0;
}

/* Dots */
.slide-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.dot-btn {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  padding: 0;
  transition: all 0.2s ease;
}

.dot-btn.active {
  background: #83FFC1;
  transform: scale(1.3);
}

/* Transitions */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}

@media (max-width: 900px) {
  .bento-inner {
    padding: 28px 20px;
  }
  .feature-row {
    grid-template-columns: 1fr;
  }
  .analytics-grid,
  .incentives-dashboard-grid {
    grid-template-columns: 1fr;
  }
  .offices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
