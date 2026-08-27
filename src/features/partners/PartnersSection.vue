<template>
  <!--
    Figma: Our Partners Section (130:21837)
    Exact 1:1 Match with Figma Design:
    - Title: "Our Partners"
    - Row 1: 4 cards (AWS, StartupBlink, Startup World Cup, DIFC Innovation Hub)
    - Row 2: 3 cards (Pegasus Tech Ventures, JETRO, IGNYTE)
    - Card height: 140px, Radius: 12px
    - Subtle 1px gradient border (#155B7F to #1BDB86)
  -->
  <section id="partners" class="partners-section">
    <div class="page-container">
      <div class="partners-card">

        <!-- Title: Centered bold "Our Partners" -->
        <h2 class="section-title">{{ t('partners.title') }}</h2>

        <!-- Partner Logos Grid -->
        <div class="partners-grid">
          <!-- Row 1: 4 partner logo cards -->
          <div class="partners-row row-4">
            <!-- 1. AWS -->
            <div class="partner-cell" title="AWS">
              <div class="partner-logo-inner">
                <svg viewBox="0 0 110 65" fill="none" class="partner-svg partner-svg-aws" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(5, 4)">
                    <path d="M26.2 24.3c0-2.3-1-3.4-3.3-3.4-1.6 0-3.4.6-5.3 1.9l-1.7-3.3c2.5-1.7 5.3-2.6 8.4-2.6 5.1 0 7.8 2.5 7.8 7.4v12.6H26.8v-2.6c-1.9 1.9-4.4 3-7.4 3-4.4 0-7.4-2.7-7.4-6.7 0-4.6 3.5-7 10.2-7l4.3-.2v.9zm-3.9 9.5c2.4 0 3.9-1.2 3.9-3.3v-1.6l-3.3.2c-3.5.2-5.2 1.5-5.2 3.5 0 2 1.7 3.2 4.6 3.2z" fill="#FFFFFF"/>
                    <path d="M36.8 17.4h5.8l3.7 14.1 4-14.1h5.2l4 14.1 3.7-14.1h5.8l-6.3 22.4h-5.6l-4.1-13.9-4.1 13.9h-5.6l-6.5-22.4z" fill="#FFFFFF"/>
                    <path d="M87.7 25.2c-2.9-1.1-4.6-1.8-4.6-3.3 0-1.2 1.2-2.1 3.3-2.1 1.9 0 4.2.8 6.5 2.3l2.4-3.8c-2.7-1.9-5.6-2.8-9-2.8-5.6 0-9 3-9 7.6 0 3.7 2.6 5.7 6.7 7.2 3.3 1.2 4.6 2 4.6 3.5 0 1.4-1.4 2.3-3.8 2.3-2.5 0-5.4-1-8.1-3l-2.6 3.9c3.2 2.6 6.7 3.7 10.7 3.7 6 0 9.6-3 9.6-7.7 0-3.9-2.6-6-6.7-7.4z" fill="#FFFFFF"/>
                    <path d="M11 37.2C25.5 46 54 48 81.5 37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round"/>
                    <path d="M76 34l10 3.2-6.5 8" fill="#FFFFFF"/>
                  </g>
                </svg>
              </div>
            </div>

            <!-- 2. StartupBlink -->
            <div class="partner-cell" title="StartupBlink">
              <div class="partner-logo-inner">
                <svg viewBox="0 0 230 52" fill="none" class="partner-svg partner-svg-sb" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(6, 6)">
                    <path d="M18 3.5C10.5 3.5 4.5 9.5 4.5 17c0 10.5 13.5 22.5 13.5 22.5s13.5-12 13.5-22.5C31.5 9.5 25.5 3.5 18 3.5z" fill="#FFFFFF"/>
                    <circle cx="18" cy="16.5" r="4.6" fill="#0E1419"/>
                    <path d="M9.5 8.5A12 12 0 0 0 4.5 17" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
                    <path d="M26.5 8.5a12 12 0 0 1 5 8.5" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
                    <path d="M12.5 4.5A17.5 17.5 0 0 0 1.5 17" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
                    <path d="M23.5 4.5a17.5 17.5 0 0 1 11 12.5" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
                  </g>
                  <text x="60" y="34" font-family="'Manrope', sans-serif" font-size="26" font-weight="800" fill="#FFFFFF" letter-spacing="-0.4">StartupBlink</text>
                </svg>
              </div>
            </div>

            <!-- 3. Startup World Cup (From Figma image 14383505) -->
            <div class="partner-cell" title="Startup World Cup">
              <div class="partner-logo-inner">
                <img
                  src="@/assets/images/partner-startup-worldcup.png"
                  alt="Startup World Cup"
                  class="partner-logo-img partner-swc-img"
                />
              </div>
            </div>

            <!-- 4. DIFC Innovation Hub (From Figma image 14383508) -->
            <div class="partner-cell" title="DIFC Innovation Hub">
              <div class="partner-logo-inner">
                <img
                  src="@/assets/images/partner-difc.png"
                  alt="DIFC Innovation Hub"
                  class="partner-logo-img partner-difc-img"
                />
              </div>
            </div>
          </div>

          <!-- Row 2: 3 partner logo cards (Wider) -->
          <div class="partners-row row-3">
            <!-- 5. Pegasus Tech Ventures (From Figma image 14383502) -->
            <div class="partner-cell wide" title="Pegasus Tech Ventures">
              <div class="partner-logo-inner">
                <img
                  src="@/assets/images/partner-pegasus.png"
                  alt="Pegasus Tech Ventures"
                  class="partner-logo-img partner-pegasus-img"
                />
              </div>
            </div>

            <!-- 6. JETRO (From Figma image 14383506) -->
            <div class="partner-cell wide" title="JETRO">
              <div class="partner-logo-inner">
                <img
                  src="@/assets/images/partner-jetro.png"
                  alt="JETRO"
                  class="partner-logo-img partner-jetro-img"
                />
              </div>
            </div>

            <!-- 7. IGNYTE (From Figma vector) -->
            <div class="partner-cell wide" title="IGNYTE">
              <div class="partner-logo-inner">
                <div class="ignyte-logo">
                  <span>Í</span>
                  <span>G</span>
                  <span>N</span>
                  <span>Y</span>
                  <span>T</span>
                  <span>E</span>
                </div>
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

const { t } = useI18n()
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
  w=1280 radius=24 fill=rgba(14, 20, 27, 0.65) pad=48px gap=36px
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

/* Title: Manrope 40px w800 Centered #FFFFFF matching Figma */
.section-title {
  font-family: 'Manrope', sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  letter-spacing: -0.02em;
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
  - Width: Fill (268px in row 1, 368px in row 2)
  - Height: Fixed (140px)
  - Radius: 12px
  - Border: 1px subtle Linear Gradient (#155B7F to #1BDB86 at 35% opacity)
  - Padding: 12px 24px
*/
.partner-cell {
  height: 140px;
  border-radius: 12px;
  padding: 12px 24px;
  background: 
    linear-gradient(180deg, rgba(14, 20, 27, 0.95) 0%, rgba(10, 16, 22, 0.95) 100%) padding-box,
    linear-gradient(135deg, rgba(21, 91, 127, 0.4) 0%, rgba(27, 219, 134, 0.4) 100%) border-box;
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
    linear-gradient(180deg, rgba(18, 26, 35, 0.98) 0%, rgba(13, 21, 28, 0.98) 100%) padding-box,
    linear-gradient(135deg, rgba(36, 129, 179, 0.75) 0%, rgba(27, 219, 134, 0.75) 100%) border-box;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45), 0 0 16px rgba(27, 219, 134, 0.12);
}

.partner-logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Image Logos from Figma with crisp pure white display */
.partner-logo-img {
  display: block;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  transition: transform 0.25s ease, opacity 0.25s ease;
  user-select: none;
}

.partner-swc-img {
  max-height: 84px;
  max-width: 85%;
}

.partner-difc-img {
  max-height: 48px;
  max-width: 85%;
}

.partner-pegasus-img {
  max-height: 58px;
  max-width: 86%;
}

.partner-jetro-img {
  max-height: 52px;
  max-width: 80%;
}

/* Vector SVG Logos */
.partner-svg {
  display: block;
  width: auto;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.partner-svg-aws {
  max-height: 72px;
  width: 145px;
  max-width: 85%;
}

.partner-svg-sb {
  max-height: 48px;
  width: 220px;
  max-width: 90%;
}

/* IGNYTE Typography Logo */
.ignyte-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.08em;
  user-select: none;
  transition: transform 0.25s ease;
}

.partner-cell:hover .partner-logo-img,
.partner-cell:hover .partner-svg,
.partner-cell:hover .ignyte-logo {
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
  .partner-swc-img {
    max-height: 74px;
  }
  .partner-difc-img {
    max-height: 44px;
  }
  .partner-pegasus-img {
    max-height: 54px;
  }
  .partner-jetro-img {
    max-height: 50px;
  }
  .partner-svg-aws {
    max-height: 60px;
    width: 125px;
  }
  .partner-svg-sb {
    max-height: 40px;
    width: 185px;
  }
  .ignyte-logo {
    font-size: 24px;
    gap: 18px;
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
  .partner-swc-img {
    max-height: 66px;
  }
  .partner-difc-img {
    max-height: 38px;
  }
  .partner-pegasus-img {
    max-height: 46px;
  }
  .partner-jetro-img {
    max-height: 44px;
  }
  .partner-svg-aws {
    max-height: 52px;
    width: 110px;
  }
  .partner-svg-sb {
    max-height: 36px;
    width: 165px;
  }
  .ignyte-logo {
    font-size: 22px;
    gap: 14px;
  }
}
</style>
