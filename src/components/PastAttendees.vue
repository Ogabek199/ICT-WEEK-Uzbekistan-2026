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
              <div class="logo-inner" v-html="logo.svg"></div>
            </div>
          </div>

          <!-- Row 2: 5 cards (Alchemist, Dealroom.co, StartupBlink, Domino Ventures, Startup Genome) -->
          <div class="logo-row row-5">
            <div class="logo-cell" v-for="logo in row2" :key="logo.name" :title="logo.name">
              <div class="logo-inner" v-html="logo.svg"></div>
            </div>
          </div>

          <!-- Row 3: 5 cards (Accesa, Sturgeon Capital, Salesforce.org, EY, Global Startup Awards) -->
          <div class="logo-row row-5">
            <div class="logo-cell" v-for="logo in row3" :key="logo.name" :title="logo.name">
              <div class="logo-inner" v-html="logo.svg"></div>
            </div>
          </div>

          <!-- Row 4: 4 cards wider (GBTP, Polyvalent, Golden Gate Ventures, SPS Commerce) -->
          <div class="logo-row row-4">
            <div class="logo-cell wide" v-for="logo in row4" :key="logo.name" :title="logo.name">
              <div class="logo-inner" v-html="logo.svg"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// SVG definitions for crisp brand logos matching the screenshot
const svgs = {
  webSummit: `
    <svg viewBox="0 0 160 48" fill="none" class="brand-svg">
      <text x="14" y="24" font-family="'Manrope', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">web</text>
      <polygon points="62,8 82,24 62,24" fill="#FFFFFF" />
      <text x="14" y="42" font-family="'Manrope', sans-serif" font-size="19" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">summit</text>
    </svg>
  `,
  plugAndPlay: `
    <svg viewBox="0 0 170 32" fill="none" class="brand-svg">
      <text x="50%" y="22" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">PLUGANDPLAY</text>
    </svg>
  `,
  mit: `
    <svg viewBox="0 0 170 40" fill="none" class="brand-svg">
      <rect x="6" y="8" width="5.5" height="24" fill="#FFFFFF" />
      <rect x="15.5" y="8" width="5.5" height="14" fill="#FFFFFF" />
      <rect x="25" y="8" width="5.5" height="24" fill="#FFFFFF" />
      <rect x="34.5" y="8" width="5.5" height="14" fill="#FFFFFF" />
      <rect x="44" y="18" width="5.5" height="14" fill="#FFFFFF" />
      <rect x="53.5" y="8" width="5.5" height="24" fill="#FFFFFF" />
      <text x="67" y="16" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="700" fill="#FFFFFF">Massachusetts</text>
      <text x="67" y="25" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="700" fill="#FFFFFF">Institute of</text>
      <text x="67" y="34" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="700" fill="#FFFFFF">Technology</text>
    </svg>
  `,
  google: `
    <svg viewBox="0 0 160 32" fill="none" class="brand-svg">
      <text x="50%" y="21" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" letter-spacing="0.2">Google <tspan font-weight="400" fill="rgba(255,255,255,0.85)" font-size="13">for Startups</tspan></text>
    </svg>
  `,
  aws: `
    <svg viewBox="0 0 120 40" fill="none" class="brand-svg">
      <text x="50%" y="22" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="1">aws</text>
      <path d="M24 27c20 8 44 8 62 0" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" />
      <path d="M83 24l5 4-3 4" fill="#FFFFFF" />
    </svg>
  `,
  alchemist: `
    <svg viewBox="0 0 180 32" fill="none" class="brand-svg">
      <path d="M12 25L20 7L28 25M14 20h12" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" />
      <path d="M7 25h26" stroke="#FFFFFF" stroke-width="1.5" />
      <text x="38" y="21" font-family="'Manrope', sans-serif" font-size="10.5" font-weight="700" fill="#FFFFFF" letter-spacing="1.2">ALCHEMIST ACCELERATOR</text>
    </svg>
  `,
  dealroom: `
    <svg viewBox="0 0 150 32" fill="none" class="brand-svg">
      <rect x="6" y="5" width="22" height="22" rx="4" fill="#FFFFFF" />
      <circle cx="12" cy="11" r="1.5" fill="#121B26" />
      <rect x="10.5" y="15" width="3" height="8" rx="1" fill="#121B26" />
      <path d="M17 11v12h4a6 6 0 0 0 0-12h-4zm3 3h1a3 3 0 0 1 0 6h-1v-6z" fill="#121B26" />
      <text x="36" y="22" font-family="'Manrope', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" letter-spacing="0.2">dealroom.co</text>
    </svg>
  `,
  startupblink: `
    <svg viewBox="0 0 150 32" fill="none" class="brand-svg">
      <path d="M14 8c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#FFFFFF"/>
      <path d="M10 5a6 6 0 0 1 8 0M7 2a10 10 0 0 1 14 0" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none" />
      <text x="28" y="22" font-family="'Manrope', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" letter-spacing="0.2">StartupBlink</text>
    </svg>
  `,
  domino: `
    <svg viewBox="0 0 150 36" fill="none" class="brand-svg">
      <rect x="4" y="4" width="142" height="28" rx="4" fill="none" stroke="#FFFFFF" stroke-width="2" />
      <text x="75" y="23" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" letter-spacing="3">DOMINO</text>
      <rect x="46" y="27" width="58" height="1" fill="#FFFFFF" />
      <text x="75" y="31" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="6" font-weight="700" fill="rgba(255,255,255,0.85)" letter-spacing="1">VENTURES</text>
    </svg>
  `,
  genome: `
    <svg viewBox="0 0 150 36" fill="none" class="brand-svg">
      <path d="M6 10l8 8-8 8M14 10l8 8-8 8M22 26l-8-8 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="32" y="17" font-family="'Manrope', sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">Startup</text>
      <text x="32" y="30" font-family="'Manrope', sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">Genome</text>
    </svg>
  `,
  accesa: `
    <svg viewBox="0 0 140 36" fill="none" class="brand-svg">
      <text x="4" y="25" font-family="'Manrope', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">a</text>
      <text x="19" y="25" font-family="'Manrope', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">c</text>
      <polygon points="34,14 43,20 34,26" fill="#FFFFFF" />
      <text x="47" y="25" font-family="'Manrope', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">esa</text>
      <circle cx="88" cy="11" r="1.5" fill="#FFFFFF" />
    </svg>
  `,
  sturgeon: `
    <svg viewBox="0 0 150 36" fill="none" class="brand-svg">
      <path d="M12 26c-4-3-4-10 2-13s10-1 8 5-7 5-5 8 7 3 9 0" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <circle cx="27" cy="27" r="1.5" fill="#FFFFFF" />
      <text x="34" y="17" font-family="'Manrope', sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Sturgeon</text>
      <text x="34" y="30" font-family="'Manrope', sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.85)">Capital</text>
    </svg>
  `,
  salesforce: `
    <svg viewBox="0 0 150 32" fill="none" class="brand-svg">
      <path d="M14 22a5.5 5.5 0 0 1 1-10.8 7 7 0 0 1 13 2.8 4.5 4.5 0 0 1 3 4.2 4.5 4.5 0 0 1-4.5 4.5H14z" fill="#FFFFFF" />
      <text x="38" y="21" font-family="'Manrope', sans-serif" font-size="13.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.2">salesforce.org</text>
    </svg>
  `,
  ey: `
    <svg viewBox="0 0 100 38" fill="none" class="brand-svg">
      <polygon points="10,4 28,4 18,22 18,32 10,32" fill="#FFE600" />
      <text x="32" y="28" font-family="'Manrope', sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="1">EY</text>
    </svg>
  `,
  globalAwards: `
    <svg viewBox="0 0 160 38" fill="none" class="brand-svg">
      <path d="M16 8l3 6 6-3-3 6 6 3-6 3 3 6-6-3-3 6-3-6-6 3 3-6-6-3 6-3-3-6 6 3 3-6z" fill="#FFFFFF" />
      <text x="34" y="15" font-family="'Manrope', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" letter-spacing="1">GLOBAL</text>
      <text x="34" y="24" font-family="'Manrope', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" letter-spacing="1">STARTUP</text>
      <text x="34" y="33" font-family="'Manrope', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" letter-spacing="1">AWARDS</text>
    </svg>
  `,
  gbtp: `
    <svg viewBox="0 0 180 40" fill="none" class="brand-svg">
      <path d="M6 30c14-16 22-16 32 0M6 23c14-16 22-16 32 0M6 16c14-16 22-16 32 0" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <text x="44" y="24" font-family="'Manrope', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="1">GBTP</text>
      <text x="44" y="34" font-family="'Manrope', sans-serif" font-size="7.5" font-weight="600" fill="rgba(255,255,255,0.7)">Gyeongbuk Technopark</text>
    </svg>
  `,
  polyvalent: `
    <svg viewBox="0 0 180 32" fill="none" class="brand-svg">
      <rect x="6" y="9" width="14" height="14" rx="2" transform="rotate(45 13 16)" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <circle cx="13" cy="16" r="2" fill="#FFFFFF" />
      <text x="32" y="22" font-family="'Manrope', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">POLYVALENT</text>
    </svg>
  `,
  goldenGate: `
    <svg viewBox="0 0 190 40" fill="none" class="brand-svg">
      <path d="M8 24l16-16 16 16M24 8v16M14 20h20M8 24h32" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
      <path d="M8 12c12 8 20 8 32 0" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" />
      <text x="46" y="24" font-family="'Manrope', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" letter-spacing="0.3">Golden Gate Ventures</text>
    </svg>
  `,
  spsCommerce: `
    <svg viewBox="0 0 180 32" fill="none" class="brand-svg">
      <circle cx="16" cy="16" r="11" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <text x="16" y="20.5" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">SPS</text>
      <text x="36" y="21" font-family="'Manrope', sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" letter-spacing="1">SPS COMMERCE</text>
    </svg>
  `,
}

// Row 1: 5 cards
const row1 = [
  { name: 'Web Summit', svg: svgs.webSummit },
  { name: 'Plug and Play', svg: svgs.plugAndPlay },
  { name: 'MIT', svg: svgs.mit },
  { name: 'Google for Startups', svg: svgs.google },
  { name: 'AWS', svg: svgs.aws },
]

// Row 2: 5 cards
const row2 = [
  { name: 'Alchemist Accelerator', svg: svgs.alchemist },
  { name: 'Dealroom.co', svg: svgs.dealroom },
  { name: 'StartupBlink', svg: svgs.startupblink },
  { name: 'Domino Ventures', svg: svgs.domino },
  { name: 'Startup Genome', svg: svgs.genome },
]

// Row 3: 5 cards
const row3 = [
  { name: 'Accesa', svg: svgs.accesa },
  { name: 'Sturgeon Capital', svg: svgs.sturgeon },
  { name: 'Salesforce.org', svg: svgs.salesforce },
  { name: 'EY', svg: svgs.ey },
  { name: 'Global Startup Awards', svg: svgs.globalAwards },
]

// Row 4: 4 cards wider
const row4 = [
  { name: 'GBTP Gyeongbuk Technopark', svg: svgs.gbtp },
  { name: 'Polyvalent', svg: svgs.polyvalent },
  { name: 'Golden Gate Ventures', svg: svgs.goldenGate },
  { name: 'SPS Commerce', svg: svgs.spsCommerce },
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

/*
  Figma: Past Attendees Include (118:6654)
  w=1280 h=auto radius=24 fill=rgba(10,20,28,0.65) pad=T48 R56 B48 L56 gap=40 dir=VERTICAL
*/
.attendees-card {
  background: rgba(10, 20, 28, 0.65);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 44px 56px 48px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Title: Centered Manrope 44 w800 rgba(255,255,255,1) */
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

/* Logo grid: 4 rows */
.logo-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Row 1, 2, 3: 5 columns (208px each) */
.logo-row.row-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

/* Row 4: 4 columns wider (268px each) */
.logo-row.row-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Logo Cell with pure solid background-color and gradient border #155B7F to #1BDB86 */
.logo-cell {
  position: relative;
  height: 110px;
  border-radius: 12px;
  background-color: rgba(0, 8, 16, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 18px;
  transition: all 0.25s ease;
  user-select: none;
}

.logo-cell::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, #155B7F 0%, #1BDB86 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.logo-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 16px rgba(27, 219, 134, 0.15);
}

.logo-cell:hover::before {
  background: linear-gradient(135deg, #1BDB86 0%, #155B7F 100%);
}

.logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

:deep(.brand-svg) {
  max-width: 90%;
  max-height: 48px;
  width: auto;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
  transition: transform 0.2s ease, filter 0.2s ease;
}

.logo-cell:hover :deep(.brand-svg) {
  transform: scale(1.03);
  filter: drop-shadow(0 4px 12px rgba(131,255,193,0.25));
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
    height: 90px;
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
