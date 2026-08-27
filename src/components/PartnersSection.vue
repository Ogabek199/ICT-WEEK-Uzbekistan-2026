<template>
  <!--
    Figma: Our Partners Section (130:21837)
    Matching user screenshot and Figma Inspect panel:
    - 2 rows of partner cards: Row 1 has 4 cards, Row 2 has 3 cards
    - Gradient border: 1px Linear Gradient (#155B7F to #1BDB86)
    - Card height: 140px, Radius: 12px
  -->
  <section id="partners" class="partners-section">
    <div class="page-container">
      <div class="partners-card">

        <!-- Title: Centered bold "Our Partners" matching Figma -->
        <h2 class="section-title">{{ t('partners.title') }}</h2>

        <!-- Partner Logos Grid -->
        <div class="partners-grid">
          <!-- Row 1: 4 partner logo cards (AWS, StartupBlink, Startup World Cup, DIFC) -->
          <div class="partners-row row-4">
            <div
              v-for="partner in row1"
              :key="partner.name"
              class="partner-cell"
              :title="partner.name"
            >
              <div class="partner-logo-inner" v-html="partner.svg"></div>
            </div>
          </div>

          <!-- Row 2: 3 partner logo cards wider (Pegasus, JETRO, IGNYTE) -->
          <div class="partners-row row-3">
            <div
              v-for="partner in row2"
              :key="partner.name"
              class="partner-cell wide"
              :title="partner.name"
            >
              <div class="partner-logo-inner" v-html="partner.svg"></div>
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

// SVG definitions for large, crisp brand logos matching the user screenshot
const partnerSvgs = {
  aws: `
    <svg viewBox="0 0 170 85" fill="none" class="partner-svg" style="max-height: 68px;">
      <g transform="translate(10, 5)">
        <path d="M41.2 38.3c0-3.6-1.8-5.3-5.2-5.3-2.5 0-5.3 1-8.3 3l-2.6-5.2c3.9-2.7 8.2-4.1 13.1-4.1 7.9 0 12.1 3.9 12.1 11.5v19.6h-8.2v-4c-3 3-6.9 4.6-11.5 4.6-6.9 0-11.6-4.2-11.6-10.5 0-7.2 5.5-11 15.9-11l6.4-.3v1.6zm-6.1 14.9c3.7 0 6.1-1.8 6.1-5.1v-2.5l-5.1.3c-5.5.3-8.1 2.3-8.1 5.4 0 3.1 2.7 5.1 7 5.1z" fill="#FFFFFF"/>
        <path d="M57.8 27.5h9l5.7 22 6.3-22h8.1l6.3 22 5.7-22h9l-9.8 35h-8.8l-6.4-21.7-6.4 21.7h-8.8l-10-35z" fill="#FFFFFF"/>
        <path d="M137.2 39.7c-4.5-1.7-7.1-2.8-7.1-5.1 0-1.9 1.9-3.2 5.2-3.2 3 0 6.5 1.2 10.1 3.6l3.8-5.9c-4.2-3-8.8-4.4-14-4.4-8.7 0-14 4.6-14 11.8 0 5.8 4 8.9 10.4 11.2 5.2 1.8 7.2 3.1 7.2 5.5 0 2.2-2.2 3.6-5.9 3.6-3.9 0-8.4-1.6-12.6-4.7l-4.1 6.1c5 4 10.5 5.8 16.7 5.8 9.4 0 14.9-4.6 14.9-12 0-6-4-9.3-11.2-11.5z" fill="#FFFFFF"/>
        <path d="M17.5 58.5C42.2 72.2 88.5 75 132.2 58" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        <path d="M123.5 53.5l16 5-10.5 12.5" fill="#FFFFFF"/>
      </g>
    </svg>
  `,
  startupBlink: `
    <svg viewBox="0 0 230 54" fill="none" class="partner-svg" style="max-height: 54px;">
      <!-- Pin Icon with radio arcs -->
      <g transform="translate(10, 9)">
        <path d="M17 3C9.5 3 3.5 9 3.5 16.5c0 10.5 13.5 22.5 13.5 22.5s13.5-12 13.5-22.5C30.5 9 24.5 3 17 3z" fill="#FFFFFF"/>
        <circle cx="17" cy="16" r="4.6" fill="#0E1419"/>
        <!-- Signal arcs -->
        <path d="M8.5 8A12 12 0 0 0 3.5 16.5" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M25.5 8a12 12 0 0 1 5 8.5" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M11.5 4A17.5 17.5 0 0 0 0.5 16.5" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M22.5 4a17.5 17.5 0 0 1 11 12.5" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      </g>
      <text x="60" y="36" font-family="'Manrope', sans-serif" font-size="25" font-weight="800" fill="#FFFFFF" letter-spacing="-0.4">StartupBlink</text>
    </svg>
  `,
  startupWorldCup: `
    <svg viewBox="0 0 150 90" fill="none" class="partner-svg" style="max-height: 78px;">
      <!-- Left Laurel Wreath -->
      <path d="M40 64c-13-6-22-19-22-32 0-9 3-17 9-24M21 21c-3 4-5 10-5 15 0 11 8 21 18 27" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M23 14c-4 3-7 9-8 14M30 29c-5 3-8 9-8 14M37 46c-5 2-9 6-10 12" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
      <!-- Right Laurel Wreath -->
      <path d="M110 64c13-6 22-19 22-32 0-9-3-17-9-24M129 21c3 4 5 10 5 15 0 11-8 21-18 27" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M127 14c4 3 7 9 8 14M120 29c5 3 8 9 8 14M113 46c5 2 9 6 10 12" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
      <!-- Center Text -->
      <text x="75" y="37" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" letter-spacing="1.2">STARTUP</text>
      <text x="75" y="49" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="8.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.9">WORLD CUP</text>
      <!-- Ribbon -->
      <path d="M49 68h52l5 11-11-4.5-20 0-20 0-11 4.5 5-11z" fill="#FFFFFF"/>
      <path d="M58 73.5h34" stroke="#0E1419" stroke-width="2"/>
    </svg>
  `,
  difc: `
    <svg viewBox="0 0 200 56" fill="none" class="partner-svg" style="max-height: 56px;">
      <text x="6" y="31" font-family="'Manrope', sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="0.6">DIFC</text>
      <!-- Overlapping diamond icons -->
      <g transform="translate(74, 15)">
        <polygon points="9,0 18,9 9,18 0,9" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <polygon points="18,0 27,9 18,18 9,9" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
      </g>
      <text x="6" y="50" font-family="'Manrope', sans-serif" font-size="16" font-weight="600" fill="#FFFFFF" letter-spacing="0.2">Innovation Hub</text>
    </svg>
  `,
  pegasus: `
    <svg viewBox="0 0 270 60" fill="none" class="partner-svg" style="max-height: 60px;">
      <!-- Winged Pegasus Circle Emblem -->
      <g transform="translate(10, 6)">
        <circle cx="24" cy="24" r="22" stroke="#FFFFFF" stroke-width="2.4" fill="none"/>
        <!-- Wing and Pegasus silhouette -->
        <path d="M13 33c3-9 10-13 18-15-2 4-2 11-6 15M20 21c3-4 9-8 14-9-2 3-3 9-6 12M12 23c-3 1-5 4-5 9 0 5 4 9 10 10l8-3c-3-2-6-5-6-11z" fill="#FFFFFF"/>
        <circle cx="30" cy="21" r="1.8" fill="#FFFFFF"/>
        <circle cx="23" cy="13" r="1.4" fill="#FFFFFF"/>
        <circle cx="17" cy="18" r="1.4" fill="#FFFFFF"/>
      </g>
      <text x="74" y="31" font-family="'Manrope', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="2.8">PEGASUS</text>
      <text x="74" y="48" font-family="'Manrope', sans-serif" font-size="10.5" font-weight="700" fill="#FFFFFF" letter-spacing="2.4">TECH VENTURES</text>
    </svg>
  `,
  jetro: `
    <svg viewBox="0 0 200 60" fill="none" class="partner-svg" style="max-height: 56px;">
      <text x="50%" y="45" text-anchor="middle" font-family="'Playfair Display', 'Times New Roman', serif" font-size="52" font-weight="700" fill="#FFFFFF" letter-spacing="3.5" font-style="italic">JETRO</text>
    </svg>
  `,
  ignyte: `
    <svg viewBox="0 0 230 56" fill="none" class="partner-svg" style="max-height: 48px;">
      <text x="50%" y="39" text-anchor="middle" font-family="'Manrope', sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" letter-spacing="16">Í G N Y T E</text>
    </svg>
  `,
}

// Row 1: 4 partner logos matching Image 1
const row1 = [
  { name: 'AWS', svg: partnerSvgs.aws },
  { name: 'StartupBlink', svg: partnerSvgs.startupBlink },
  { name: 'Startup World Cup', svg: partnerSvgs.startupWorldCup },
  { name: 'DIFC Innovation Hub', svg: partnerSvgs.difc },
]

// Row 2: 3 partner logos matching Image 1
const row2 = [
  { name: 'Pegasus Tech Ventures', svg: partnerSvgs.pegasus },
  { name: 'JETRO', svg: partnerSvgs.jetro },
  { name: 'IGNYTE', svg: partnerSvgs.ignyte },
]
</script>

<style scoped>
.partners-section {
  width: 100%;
  padding: 0;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/*
  Figma: Our Partners Container Card
  w=1280 radius=24 fill=rgba(14, 20, 27, 0.8) pad=48px gap=36px
*/
.partners-card {
  background: rgba(14, 20, 27, 0.65);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 48px 48px 56px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

/* Title: Manrope 40px w800 Centered #FFFFFF matching Image 1 */
.section-title {
  font-family: 'Manrope', sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin: 0;
  text-align: center;
}

/* Partners Grid: 2 Rows */
.partners-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

/* Row 1: 4 cards across (equal width) */
.partners-row.row-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Row 2: 3 cards across (equal width) */
.partners-row.row-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/*
  Partner Card styling matching Figma Inspect:
  - Width: Fill (268px in row 1, wider in row 2)
  - Height: Fixed (140px)
  - Radius: 12px
  - Border: 1px Linear Gradient (#155B7F to #1BDB86)
  - Padding: 12px 24px
*/
.partner-cell {
  height: 140px;
  border-radius: 12px;
  padding: 12px 24px;
  background: 
    linear-gradient(180deg, rgba(14, 20, 27, 0.96) 0%, rgba(10, 16, 22, 0.96) 100%) padding-box,
    linear-gradient(135deg, #155B7F 0%, #1BDB86 100%) border-box;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  cursor: default;
}

.partner-cell:hover {
  background: 
    linear-gradient(180deg, rgba(18, 26, 35, 0.96) 0%, rgba(13, 21, 28, 0.96) 100%) padding-box,
    linear-gradient(135deg, #2481b3 0%, #1BDB86 100%) border-box;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 20px rgba(27, 219, 134, 0.15);
}

.partner-logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

:deep(.partner-svg) {
  display: block;
  max-width: 90%;
  width: auto;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.partner-cell:hover :deep(.partner-svg) {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .partners-card {
    padding: 36px 28px 44px 28px;
    gap: 28px;
  }
  .section-title {
    font-size: 34px;
  }
  .partners-row.row-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .partners-row.row-3 {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .partner-cell.wide:last-child {
    grid-column: span 2;
  }
  .partner-cell {
    height: 120px;
    padding: 12px 18px;
  }
}

@media (max-width: 640px) {
  .partners-card {
    padding: 28px 16px 36px 16px;
    gap: 24px;
    border-radius: 18px;
  }
  .section-title {
    font-size: 28px;
  }
  .partners-row.row-4,
  .partners-row.row-3 {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .partner-cell.wide:last-child {
    grid-column: span 1;
  }
  .partner-cell {
    height: 110px;
  }
}
</style>
