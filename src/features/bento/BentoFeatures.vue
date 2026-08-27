<template>
  <section id="incentives" class="bento-section">
    <div class="page-container">
      <div class="bento-card-outer">

        <!-- Main Bento Slide Card with Hexagonal Background -->
        <div class="bento-main-card">
          <!-- Hexagonal Background -->
          <div class="hexagon-bg" aria-hidden="true">
            <svg class="hex-svg" viewBox="0 0 1280 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" fill="none" stroke="rgba(131,255,193,0.06)" stroke-width="1"/>
                  <polygon points="30,8 50,19 50,41 30,52 10,41 10,19" fill="none" stroke="rgba(131,255,193,0.03)" stroke-width="0.5"/>
                </pattern>
                <pattern id="hexPattern2" x="30" y="26" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" fill="none" stroke="rgba(131,255,193,0.06)" stroke-width="1"/>
                </pattern>
                <radialGradient id="hexGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stop-color="rgba(131,255,193,0.08)"/>
                  <stop offset="100%" stop-color="rgba(131,255,193,0)"/>
                </radialGradient>
              </defs>
              <rect width="1280" height="800" fill="url(#hexPattern)"/>
              <rect x="0" y="0" width="1280" height="800" fill="url(#hexPattern2)"/>
              <rect width="1280" height="800" fill="url(#hexGlow)"/>
              <!-- Accent highlighted hexagons -->
              <polygon points="220,120 246,134 246,162 220,176 194,162 194,134" fill="rgba(131,255,193,0.04)" stroke="rgba(131,255,193,0.15)" stroke-width="1.5"/>
              <polygon points="400,80 426,94 426,122 400,136 374,122 374,94" fill="rgba(131,255,193,0.03)" stroke="rgba(131,255,193,0.12)" stroke-width="1"/>
              <polygon points="640,200 666,214 666,242 640,256 614,242 614,214" fill="rgba(131,255,193,0.05)" stroke="rgba(131,255,193,0.18)" stroke-width="1.5"/>
              <polygon points="850,100 876,114 876,142 850,156 824,142 824,114" fill="rgba(131,255,193,0.03)" stroke="rgba(131,255,193,0.1)" stroke-width="1"/>
              <polygon points="1100,160 1126,174 1126,202 1100,216 1074,202 1074,174" fill="rgba(131,255,193,0.04)" stroke="rgba(131,255,193,0.14)" stroke-width="1.5"/>
              <polygon points="180,400 206,414 206,442 180,456 154,442 154,414" fill="rgba(131,255,193,0.03)" stroke="rgba(131,255,193,0.1)" stroke-width="1"/>
              <polygon points="920,350 946,364 946,392 920,406 894,392 894,364" fill="rgba(131,255,193,0.04)" stroke="rgba(131,255,193,0.13)" stroke-width="1.5"/>
            </svg>
          </div>

          <!-- Card Header Bar -->
          <div class="card-header-bar">
            <div class="header-badge-pill">
              <span class="badge-accent-line"></span>
              <h3 class="badge-title">{{ currentSlideData.title }}</h3>
            </div>

            <!-- Top Right Official Logos -->
            <div class="header-logos-group">
              <img
                src="@/assets/images/partner-gov.png"
                alt="Ministry of Digital Technologies of the Republic of Uzbekistan"
                class="gov-logo-img"
              />
              <img
                src="@/assets/images/partner-itpark.png"
                alt="IT Park Uzbekistan"
                class="itpark-logo-img"
              />
            </div>
          </div>

          <!-- SLIDE CONTENT VIEWPORT -->
          <div class="slide-viewport">
            <transition :name="transitionName" mode="out-in">

              <!-- =============================================================== -->
              <!-- SLIDE 0: DIGITAL STARTUPS PROGRAM (130:19074)                   -->
              <!-- =============================================================== -->
              <div v-if="currentSlide === 0" key="slide-0" class="slide-content slide-startups">
                <!-- 8 Feature Cards (2 cols x 4 rows) -->
                <div class="startups-grid">
                  <div class="startup-card" v-for="(feat, idx) in startupsFeatures" :key="idx">
                    <div class="startup-metric" :class="{ 'icon-metric': feat.isIcon }">
                      <template v-if="feat.isIcon">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" class="shield-icon">
                          <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9 11.5L11 13.5L15 9.5" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </template>
                      <template v-else>
                        {{ feat.metric }}
                      </template>
                    </div>
                    <p class="startup-desc">{{ feat.desc }}</p>
                  </div>
                </div>

                <!-- Bottom Row: Description Banner & Startup Base QR Card -->
                <div class="startups-bottom-row">
                  <div class="startups-cta-box">
                    <p class="cta-text">
                      {{ t('bento.startups.ctaText', { amount: t('bento.startups.ctaAmount'), platform: t('bento.startups.platformName') }) }}
                    </p>
                  </div>

                  <a href="https://startupbase.uz" target="_blank" rel="noopener noreferrer" class="startupbase-card">
                    <div class="startupbase-brand">
                      <div class="startupbase-logo-icon">
                        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                          <rect width="32" height="32" rx="8" fill="#14c784"/>
                          <path d="M9 16.5L14.5 11M14.5 11H10M14.5 11V15.5" stroke="#0b131b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M23 15.5L17.5 21M17.5 21H22M17.5 21V16.5" stroke="#0b131b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="startupbase-name">Startup Base</span>
                    </div>
                    <div class="startupbase-qr">
                      <img src="@/assets/images/startupbase-qr.svg" alt="startupbase.uz QR Code" class="qr-svg-img" />
                    </div>
                  </a>
                </div>
              </div>

              <!-- =============================================================== -->
              <!-- SLIDE 1: KEY INDICATORS OF IT PARK MEMBERS (124:10086)          -->
              <!-- =============================================================== -->
              <div v-else-if="currentSlide === 1" key="slide-1" class="slide-content slide-analytics">
                <!-- Top Row: Export Geography, Types of Export, ICT Export Revenue -->
                <div class="analytics-row-top">
                  <!-- 1. Export Geography -->
                  <div class="analytics-card geo-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title">{{ t('bento.analytics.exportGeoTitle') }}</h4>
                    </div>
                    <div class="geo-map-wrapper">
                      <div class="geo-map-visual">
                        <svg viewBox="0 0 360 160" fill="none" class="world-map-svg">
                          <g opacity="0.35" fill="#83FFC1">
                            <!-- Continents -->
                            <path d="M40 30 Q60 25 80 40 Q75 65 55 70 Q35 55 40 30 Z" opacity="0.4"/>
                            <path d="M30 45 Q45 40 50 60 Q35 75 25 55 Z" opacity="0.3"/>
                            <path d="M75 80 Q90 85 85 110 Q70 135 65 110 Q65 90 75 80 Z" opacity="0.3"/>
                            <path d="M160 25 Q180 20 190 35 Q175 50 155 45 Z" opacity="0.4"/>
                            <path d="M160 55 Q185 55 185 90 Q170 120 150 95 Q150 70 160 55 Z" opacity="0.3"/>
                            <path d="M195 20 Q240 15 270 35 Q260 70 215 60 Q190 40 195 20 Z" opacity="0.4"/>
                            <path d="M275 45 Q295 40 290 65 Q270 70 275 45 Z" opacity="0.4"/>
                            <path d="M270 100 Q295 95 300 120 Q275 130 265 115 Z" opacity="0.3"/>
                          </g>
                          <!-- Routes -->
                          <path d="M60 48 Q130 25 210 40" stroke="#83FFC1" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.85"/>
                          <path d="M175 35 Q190 38 210 40" stroke="#83FFC1" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.85"/>
                          <path d="M210 40 Q245 48 280 50" stroke="#83FFC1" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.85"/>
                          <path d="M210 40 Q195 65 175 75" stroke="#83FFC1" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.85"/>

                          <!-- Hub -->
                          <circle cx="210" cy="40" r="5" fill="#83FFC1" />
                          <circle cx="210" cy="40" r="9" stroke="#83FFC1" stroke-width="1" opacity="0.5"/>

                          <!-- Pins -->
                          <circle cx="60" cy="48" r="3.5" fill="#83FFC1" />
                          <circle cx="175" cy="35" r="3.5" fill="#83FFC1" />
                          <circle cx="280" cy="50" r="3.5" fill="#83FFC1" />
                          <circle cx="175" cy="75" r="3.5" fill="#83FFC1" />
                        </svg>

                        <!-- Geo Badges -->
                        <div class="geo-badge na-badge">
                          <span class="geo-val">46%</span>
                          <span class="geo-lbl">{{ t('bento.analytics.northAmerica') }}</span>
                        </div>
                        <div class="geo-badge cis-badge">
                          <span class="geo-lbl">{{ t('bento.analytics.cisApac') }}</span>
                          <span class="geo-val">27%</span>
                        </div>
                        <div class="geo-badge eu-badge">
                          <span class="geo-val">21%</span>
                          <span class="geo-lbl">{{ t('bento.analytics.euUk') }}</span>
                        </div>
                        <div class="geo-badge mena-badge">
                          <span class="geo-lbl">{{ t('bento.analytics.mena') }}</span>
                          <span class="geo-val">6%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 2. Types of Export (Donut Chart) -->
                  <div class="analytics-card export-types-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title">{{ t('bento.analytics.exportTypesTitle') }}</h4>
                    </div>
                    <div class="donut-chart-container">
                      <div class="donut-legend-left">
                        <div class="legend-stat">
                          <span class="stat-pct">11%</span>
                          <span class="stat-name" style="white-space: pre-line;">{{ t('bento.analytics.creativeGamedev') }}</span>
                        </div>
                        <div class="legend-stat">
                          <span class="stat-pct">28%</span>
                          <span class="stat-name">{{ t('bento.analytics.bpo') }}</span>
                        </div>
                      </div>

                      <div class="donut-center-wrap">
                        <svg viewBox="0 0 120 120" class="donut-svg">
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#83FFC1" stroke-width="14" stroke-dasharray="166.5 314.16" stroke-dashoffset="0" stroke-linecap="round"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#44C986" stroke-width="14" stroke-dasharray="87.9 314.16" stroke-dashoffset="-170" stroke-linecap="round"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#2ECC71" stroke-width="14" stroke-dasharray="34.5 314.16" stroke-dashoffset="-260" stroke-linecap="round"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#167945" stroke-width="14" stroke-dasharray="25.1 314.16" stroke-dashoffset="-297" stroke-linecap="round"/>
                        </svg>
                        <div class="donut-inner-text">
                          <span class="center-billion">$1B</span>
                        </div>
                      </div>

                      <div class="donut-legend-right">
                        <div class="legend-stat">
                          <span class="stat-pct">53%</span>
                          <span class="stat-name">{{ t('bento.analytics.itServices') }}</span>
                        </div>
                        <div class="legend-stat">
                          <span class="stat-pct">8%</span>
                          <span class="stat-name" style="white-space: pre-line;">{{ t('bento.analytics.softwareProducts') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 3. ICT Export Revenue -->
                  <div class="analytics-card revenue-chart-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title">{{ t('bento.analytics.ictRevenueTitle') }}<br/><span class="title-sub">{{ t('bento.analytics.millionUsd') }}</span></h4>
                    </div>
                    <div class="chart-content-flex">
                      <div class="growth-multiplier-badge">
                        <span class="mult-num">7.2x ↗</span>
                        <span class="mult-sub">{{ t('bento.analytics.increase') }}</span>
                      </div>
                      <div class="bar-chart-bars">
                        <div class="bar-col">
                          <span class="bar-val">151</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 18%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">181</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 24%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">540</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 52%;"></div></div>
                          <span class="bar-lbl">2023</span>
                        </div>
                        <div class="bar-col active-bar">
                          <span class="bar-val glow-val">1 110</span>
                          <div class="bar-track"><div class="bar-fill highlight-fill" style="height: 100%;"></div></div>
                          <span class="bar-lbl active-year" style="white-space: pre-line;">{{ t('bento.analytics.ytd2025') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Middle Row: 6 Representative Offices Abroad -->
                <div class="analytics-row-offices">
                  <div class="offices-bar-card">
                    <span class="offices-title">{{ t('bento.analytics.officesAbroadTitle') }}</span>
                    <div class="offices-flags-list">
                      <div class="office-flag-item">
                        <img src="@/assets/images/0b6aeb6b9391242035b9cf8413aef51d002d763b.png" alt="USA" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.usa') }}</span>
                      </div>
                      <div class="office-flag-item">
                        <img src="@/assets/images/87c9222fe6152ec4fb7ab88b467c99b06a6bf741.png" alt="Germany" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.germany') }}</span>
                      </div>
                      <div class="office-flag-item">
                        <img src="@/assets/images/d89371e4f481257aa5a9418282c091e617290b02.png" alt="Saudi Arabia" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.saudiArabia') }}</span>
                      </div>
                      <div class="office-flag-item">
                        <img src="@/assets/images/7ab717946fae6524f4795cc76f78ae7d8bf40d23.png" alt="China" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.china') }}</span>
                      </div>
                      <div class="office-flag-item">
                        <img src="@/assets/images/4b2ccd34d19d7a4bcc52c7f4e709e068d6dc2b48.png" alt="South Korea" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.southKorea') }}</span>
                      </div>
                      <div class="office-flag-item">
                        <img src="@/assets/images/b9750fcbccdf2289b072cd6473617275e5df1804.png" alt="Japan" class="flag-icon" />
                        <span class="country-name">{{ t('bento.analytics.japan') }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Row: 3 Metric Growth Bar Cards -->
                <div class="analytics-row-bottom">
                  <!-- 1. Number of Member Companies -->
                  <div class="analytics-card metric-chart-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title" style="white-space: pre-line;">{{ t('bento.analytics.membersCountTitle') }}</h4>
                    </div>
                    <div class="chart-content-flex">
                      <div class="growth-multiplier-badge">
                        <span class="mult-num">22x ↗</span>
                        <span class="mult-sub">{{ t('bento.analytics.increase') }}</span>
                      </div>
                      <div class="bar-chart-bars">
                        <div class="bar-col">
                          <span class="bar-val">147</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 15%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">523</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 25%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">1 652</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 55%;"></div></div>
                          <span class="bar-lbl">2023</span>
                        </div>
                        <div class="bar-col active-bar">
                          <span class="bar-val glow-val">3 400+</span>
                          <div class="bar-track"><div class="bar-fill highlight-fill" style="height: 100%;"></div></div>
                          <span class="bar-lbl active-year" style="white-space: pre-line;">{{ t('bento.analytics.ytd2025') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 2. Growth of Companies with Foreign Capital -->
                  <div class="analytics-card metric-chart-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title" style="white-space: pre-line;">{{ t('bento.analytics.foreignCapitalTitle') }}</h4>
                    </div>
                    <div class="chart-content-flex">
                      <div class="growth-multiplier-badge">
                        <span class="mult-num">127x ↗</span>
                        <span class="mult-sub">{{ t('bento.analytics.increase') }}</span>
                        <span class="mult-note">{{ t('bento.analytics.americanCapitalNote') }}</span>
                      </div>
                      <div class="bar-chart-bars">
                        <div class="bar-col">
                          <span class="bar-val">4</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 10%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">23</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 22%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">426<br/><span class="sub-val">31</span></span>
                          <div class="bar-track"><div class="bar-fill" style="height: 52%;"></div></div>
                          <span class="bar-lbl">2023</span>
                        </div>
                        <div class="bar-col active-bar">
                          <span class="bar-val glow-val">970+<br/><span class="sub-val">79</span></span>
                          <div class="bar-track"><div class="bar-fill highlight-fill" style="height: 100%;"></div></div>
                          <span class="bar-lbl active-year" style="white-space: pre-line;">{{ t('bento.analytics.ytd2025') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 3. Revenue of Members -->
                  <div class="analytics-card metric-chart-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title">{{ t('bento.analytics.revenueMembersTitle') }}<br/><span class="title-sub">{{ t('bento.analytics.millionUsd') }}</span></h4>
                    </div>
                    <div class="chart-content-flex">
                      <div class="growth-multiplier-badge">
                        <span class="mult-num">127x ↗</span>
                        <span class="mult-sub">{{ t('bento.analytics.increase') }}</span>
                      </div>
                      <div class="bar-chart-bars">
                        <div class="bar-col">
                          <span class="bar-val">22.0</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 12%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">234.5</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 24%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">1 000.0</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 52%;"></div></div>
                          <span class="bar-lbl">2023</span>
                        </div>
                        <div class="bar-col active-bar">
                          <span class="bar-val glow-val">2 800.0</span>
                          <div class="bar-track"><div class="bar-fill highlight-fill" style="height: 100%;"></div></div>
                          <span class="bar-lbl active-year" style="white-space: pre-line;">{{ t('bento.analytics.ytd2025') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- =============================================================== -->
              <!-- SLIDE 2: ENTERPRISE UZBEKISTAN (891:2299)                       -->
              <!-- =============================================================== -->
              <div v-else-if="currentSlide === 2" key="slide-2" class="slide-content slide-enterprise">
                <div class="enterprise-grid">
                  <div class="enterprise-card" v-for="(item, idx) in enterpriseCards" :key="idx">
                    <div class="card-header-flex">
                      <h4 class="ent-title">{{ item.title }}</h4>
                      <div class="ent-icon-wrapper" v-html="item.svgIcon"></div>
                    </div>
                    <p class="ent-desc">{{ item.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- =============================================================== -->
              <!-- SLIDE 3: DIGITAL SERVICE AND PRODUCTS EXPORT DEVELOPMENT       -->
              <!-- =============================================================== -->
              <div v-else-if="currentSlide === 3" key="slide-3" class="slide-content slide-export-dev">
                <!-- Top Row: Tax Benefits, Zero-Risk Expense, Energy Grid -->
                <div class="export-top-row">
                  <!-- Col 1: Benefits for IT Park Member Companies -->
                  <div class="export-card tax-benefits-card">
                    <h4 class="export-card-title-accent" style="white-space: pre-line;">{{ t('bento.exportDev.taxTitle') }}</h4>
                    <div class="tax-stats-list">
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">0%</span>
                        <span class="tax-name">{{ t('bento.exportDev.corpTaxes') }}</span>
                      </div>
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">0%</span>
                        <span class="tax-name">{{ t('bento.exportDev.socialTax') }}</span>
                      </div>
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">0%</span>
                        <span class="tax-name">{{ t('bento.exportDev.propertyTax') }}</span>
                      </div>
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">{{ t('bento.exportDev.noWord') }}</span>
                        <span class="tax-name">{{ t('bento.exportDev.noVat') }}</span>
                      </div>
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">5%</span>
                        <span class="tax-name">{{ t('bento.exportDev.dividendTax') }}</span>
                      </div>
                      <div class="tax-stat-row">
                        <span class="tax-rate-green">7.5%</span>
                        <span class="tax-name">{{ t('bento.exportDev.incomeTax') }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 2: Zero Risk Expense Reimbursement -->
                  <div class="export-card zerorisk-card">
                    <h4 class="export-card-title" style="white-space: pre-line;">{{ t('bento.exportDev.zeroRiskTitle') }}</h4>
                    <div class="zerorisk-items">
                      <div class="zerorisk-item">
                        <div class="item-icon-box">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M3 21H21M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21M9 7H10M14 7H15M9 11H10M14 11H15M9 15H10M14 15H15M10 21V18H14V21" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span class="item-text">{{ t('bento.exportDev.freeOffice') }}</span>
                      </div>
                      <div class="zerorisk-item">
                        <div class="item-icon-box">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20V16H4V6ZM8 20H16M12 16V20" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="11" r="2" stroke="#83FFC1" stroke-width="1.5"/>
                          </svg>
                        </div>
                        <span class="item-text">{{ t('bento.exportDev.techEquipment') }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 3: Energy Grid & Special Terms -->
                  <div class="export-card energy-card">
                    <div class="energy-map-stats">
                      <div class="energy-stat-block">
                        <div class="stat-val-badge">
                          <span class="energy-big-val">9.3 GW</span>
                          <span class="energy-tag">{{ t('bento.exportDev.windFarms') }}</span>
                        </div>
                        <p class="energy-desc">{{ t('bento.exportDev.windFarmsDesc') }}</p>
                      </div>

                      <div class="energy-stat-block">
                        <div class="stat-val-badge">
                          <span class="energy-big-val">1 885 km</span>
                          <span class="energy-tag">{{ t('bento.exportDev.electricityGrid') }}</span>
                        </div>
                        <p class="energy-desc">{{ t('bento.exportDev.electricityGridDesc') }}</p>
                      </div>
                    </div>

                    <div class="special-terms-section">
                      <span class="special-terms-heading">{{ t('bento.exportDev.specialTerms') }}</span>
                      <div class="special-terms-grid">
                        <div class="term-box">
                          <span class="term-rate">{{ t('bento.exportDev.electricityRate') }}</span>
                          <span class="term-desc">{{ t('bento.exportDev.electricityRateDesc') }}</span>
                        </div>
                        <div class="term-box">
                          <span class="term-rate">{{ t('bento.exportDev.waterSupply') }}</span>
                          <span class="term-desc">{{ t('bento.exportDev.waterSupplyDesc') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Row: Softlanding, IT-Visa, AI Data Centers & DataVolt -->
                <div class="export-bottom-row">
                  <!-- Col 1: Softlanding Support -->
                  <div class="export-card softlanding-card">
                    <h4 class="export-card-title">{{ t('bento.exportDev.softlandingTitle') }}</h4>
                    <div class="softlanding-checklist">
                      <div class="softlanding-item">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.regDays') }}</span>
                      </div>
                      <div class="softlanding-item">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M3 21H21M3 10H21M5 10V18M9 10V18M15 10V18M19 10V18M12 3L3 7.5V10H21V7.5L12 3Z" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.bankingSupport') }}</span>
                      </div>
                      <div class="softlanding-item">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3V21M3 9L12 3L21 9M3 9L6 18M3 9H9M21 9L18 18M21 9H15M6 18H9M18 18H15" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.turnkeyLegal') }}</span>
                      </div>
                      <div class="softlanding-item">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11ZM23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.recruitment') }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 2: IT-VISA -->
                  <div class="export-card itvisa-card">
                    <div class="itvisa-header-brand">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="17" fill="rgba(131,255,193,0.1)" stroke="#83FFC1" stroke-width="1.5"/>
                        <path d="M18 8L22 18H14L18 8Z" fill="#83FFC1"/>
                        <path d="M18 28L14 18H22L18 28Z" fill="#83FFC1"/>
                        <path d="M8 18L18 14V22L8 18Z" fill="#83FFC1"/>
                        <path d="M28 18L18 22V14L28 18Z" fill="#83FFC1"/>
                      </svg>
                      <span class="itvisa-logo-text">{{ t('bento.exportDev.itVisaTitle') }}</span>
                    </div>

                    <div class="itvisa-perks-list">
                      <div class="itvisa-perk">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#83FFC1"/>
                        </svg>
                        <span>{{ t('bento.exportDev.noWorkPermit') }}</span>
                      </div>
                      <div class="itvisa-perk">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.salaryForeign') }}</span>
                      </div>
                      <div class="itvisa-perk">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22S2 18 2 12V5L12 2L22 5V12C22 18 12 22 12 22Z" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M12 8V16M8 12H16" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ t('bento.exportDev.dividendsForeign') }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 3: AI & Mining Infrastructure / DATAVOLT Hero Card -->
                  <div class="export-card datavolt-card">
                    <div class="datavolt-top-hero">
                      <p class="datavolt-pitch">
                        {{ t('bento.exportDev.datavoltPitch') }} <strong>{{ t('bento.exportDev.aiAndMining') }}</strong>
                      </p>

                      <div class="datavolt-metrics-row">
                        <div class="datavolt-logo-wrap">
                          <img src="@/assets/images/652f39e4042f341d1086145e3da43abc2862aeaa.png" alt="DATAVOLT" class="datavolt-img" />
                        </div>
                        <div class="dv-metric-box">
                          <span class="dv-lbl">{{ t('bento.exportDev.capacity') }}</span>
                          <span class="dv-val">500+ MW</span>
                        </div>
                        <div class="dv-metric-box">
                          <span class="dv-lbl">{{ t('bento.exportDev.investment') }}</span>
                          <span class="dv-val">$6.5B</span>
                        </div>
                        <div class="dv-ai-box">
                          <span class="dv-ai-val">$100M+</span>
                          <span class="dv-ai-lbl">{{ t('bento.exportDev.aiInfrastructureInv') }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="datavolt-banner">
                      <span class="banner-highlight">{{ t('bento.exportDev.noCustomsVat') }}</span>
                      <span class="banner-sub">{{ t('bento.exportDev.noCustomsSub') }}</span>
                    </div>

                    <div class="datavolt-bottom-mini-cards">
                      <div class="mini-dv-card">
                        <span class="mini-dv-title">{{ t('bento.exportDev.fastTrackTitle') }}</span>
                        <p class="mini-dv-desc">{{ t('bento.exportDev.fastTrackDesc') }}</p>
                      </div>
                      <div class="mini-dv-card">
                        <span class="mini-dv-title">{{ t('bento.exportDev.directPaymentsTitle') }}</span>
                        <p class="mini-dv-desc">{{ t('bento.exportDev.directPaymentsDesc') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </transition>
          </div>
        </div>

        <!-- Bottom Carousel Controller -->
        <div class="bento-navigation-bar">
          <button class="nav-btn-circle prev-btn" @click="prevSlide" aria-label="Previous card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="#83FFC1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button class="nav-title-pill" @click="nextSlide">
            <span class="pill-text">{{ currentSlideData.title }}</span>
          </button>

          <button class="nav-btn-circle next-btn" @click="nextSlide" aria-label="Next card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="#07121b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const currentSlide = ref(0)
const transitionName = ref('slide-left')

const slides = computed(() => [
  { id: 0, title: t('bento.slides.s0') },
  { id: 1, title: t('bento.slides.s1') },
  { id: 2, title: t('bento.slides.s2') },
  { id: 3, title: t('bento.slides.s3') },
])

const currentSlideData = computed(() => slides.value[currentSlide.value] || slides.value[0])

function prevSlide() {
  transitionName.value = 'slide-right'
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  transitionName.value = 'slide-left'
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

// -------------------------------------------------------------
// SLIDE 0: Digital Startups Program 8 Features
// -------------------------------------------------------------
const startupsFeatures = computed(() => [
  { metric: '100%', desc: t('bento.startups.f0') },
  { metric: '', desc: t('bento.startups.f1'), isIcon: true },
  { metric: '$50K', desc: t('bento.startups.f2') },
  { metric: '1+1', desc: t('bento.startups.f3') },
  { metric: '$20K', desc: t('bento.startups.f4') },
  { metric: '1 YEAR', desc: t('bento.startups.f5') },
  { metric: '1 YEAR', desc: t('bento.startups.f6') },
  { metric: '$10K', desc: t('bento.startups.f7') },
])

// -------------------------------------------------------------
// SLIDE 2: Enterprise Uzbekistan 9 Features (3x3 Grid)
// -------------------------------------------------------------
const enterpriseCards = computed(() => [
  {
    title: t('bento.enterprise.card0Title'),
    desc: t('bento.enterprise.card0Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M16 12H32V18H16V12ZM20 18V26H28V18M14 34H34M16 34L18 28H30L32 34" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 23H26" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card1Title'),
    desc: t('bento.enterprise.card1Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M12 20H32M32 20L27 15M32 20L27 25M36 28H16M16 28L21 23M16 28L21 33" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="24" r="5" stroke="#83FFC1" stroke-width="1.8"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card2Title'),
    desc: t('bento.enterprise.card2Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M14 10H30L34 14V38H14V10Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 22L28 22M20 28H28M24 16H28" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <circle cx="24" cy="25" r="7" stroke="#83FFC1" stroke-width="1.8" stroke-dasharray="3 3"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card3Title'),
    desc: t('bento.enterprise.card3Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M12 14H22L25 18H36V36H12V14Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 25H30M18 29H26" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card4Title'),
    desc: t('bento.enterprise.card4Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <rect x="14" y="12" width="20" height="6" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <rect x="14" y="21" width="20" height="6" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <rect x="14" y="30" width="20" height="6" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <circle cx="18" cy="15" r="1" fill="#83FFC1"/>
        <circle cx="18" cy="24" r="1" fill="#83FFC1"/>
        <circle cx="18" cy="33" r="1" fill="#83FFC1"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card5Title'),
    desc: t('bento.enterprise.card5Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M24 10L12 17V20H36V17L24 10Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 20V32M21.3 20V32M26.7 20V32M32 20V32M10 36H38M12 32H36" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card6Title'),
    desc: t('bento.enterprise.card6Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M24 12C18 12 14 16 14 22C14 26 17 29 20 30V34H28V30C31 29 34 26 34 22C34 16 30 12 24 12Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 38H28M24 20V26M21 23H27" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card7Title'),
    desc: t('bento.enterprise.card7Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <path d="M12 12H36V36H12V12Z" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 28L23 23L27 27L32 20M32 20H27M32 20V25" stroke="#83FFC1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card8Title'),
    desc: t('bento.enterprise.card8Desc'),
    svgIcon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="rgba(131,255,193,0.1)"/>
        <circle cx="24" cy="24" r="13" stroke="#83FFC1" stroke-width="2.2"/>
        <ellipse cx="24" cy="24" rx="7" ry="13" stroke="#83FFC1" stroke-width="1.8"/>
        <path d="M11 24H37M15 15H33M15 33H33" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `
  },
])
</script>

<style scoped>



.bento-section {
  width: 100%;
  padding: 40px 0 60px;
  position: relative;
  overflow: hidden;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.bento-card-outer {
  width: 100%;
  max-width: 1208px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.bento-main-card {
  width: 100%;
  background: linear-gradient(165deg, #0c1824 0%, #071017 55%, #0a1620 100%);
  border: 1px solid rgba(131, 255, 193, 0.22);
  border-radius: 24px;
  box-shadow:
    0 0 0 1px rgba(131, 255, 193, 0.08),
    0 24px 80px rgba(0, 0, 0, 0.7),
    0 0 35px rgba(131, 255, 193, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
}

/* Hexagonal Background */
.hexagon-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 1;
}

.hex-svg {
  width: 100%;
  height: 100%;
}

/* Ensure all content sits above hexagon bg */
.card-header-bar,
.slide-viewport {
  position: relative;
  z-index: 1;
}


/* ==========================================================================
   HEADER BAR (Mint gradient pill + Ministry & IT Park Logos)
   ========================================================================== */
.card-header-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: linear-gradient(90deg, #83FFC1 0%, rgba(131, 255, 193, 0.38) 45%, transparent 80%);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  box-sizing: border-box;
}

.header-badge-pill {
  display: flex;
  align-items: center;
  gap: 12px;
}

.badge-accent-line {
  display: inline-block;
  width: 3px;
  height: 22px;
  background-color: #0b131b;
  border-radius: 4px;
}

.badge-title {
  margin: 0;
  font-family: 'Outfit', 'Inter', -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #0b131b;
  text-transform: uppercase;
  white-space: nowrap;
}

.header-logos-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.gov-logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.itpark-logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

/* Viewport for Slide Transitions */
.slide-viewport {
  padding: 24px 24px 28px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-content {
  width: 100%;
}

/* ==========================================================================
   SLIDE 0: DIGITAL STARTUPS PROGRAM
   ========================================================================== */
.startups-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 18px;
  margin-bottom: 20px;
}

.startup-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px 24px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.startup-card:hover {
  transform: translateY(-2px);
  border-color: rgba(131, 255, 193, 0.4);
  background: rgba(18, 30, 44, 0.88);
}

.startup-metric {
  min-width: 120px;
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #83FFC1;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
}

.startup-desc {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14.5px;
  font-weight: 500;
  color: #c4d1df;
  line-height: 1.45;
}

.startups-bottom-row {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 18px;
}

.startups-cta-box {
  background: linear-gradient(90deg, rgba(46, 138, 100, 0.35) 0%, rgba(20, 70, 55, 0.35) 100%);
  border: 1px solid rgba(131, 255, 193, 0.35);
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.cta-text {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.55;
  color: #e4eef8;
}

.cta-text strong {
  color: #ffffff;
  font-weight: 700;
}

.startupbase-card {
  background: rgba(14, 23, 34, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.25s ease;
}

.startupbase-card:hover {
  border-color: #83FFC1;
  background: rgba(20, 34, 50, 0.95);
  transform: translateY(-2px);
}

.startupbase-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.startupbase-name {
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

.startupbase-qr {
  width: 68px;
  height: 68px;
  background: rgba(6, 12, 20, 0.95);
  padding: 4px;
  border-radius: 8px;
  border: 1px solid rgba(131, 255, 193, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-svg-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ==========================================================================
   SLIDE 1: KEY INDICATORS OF IT PARK MEMBERS
   ========================================================================== */
.analytics-row-top {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 14px;
}

.analytics-card {
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.card-title-row {
  margin-bottom: 12px;
}

.analytics-card-title {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}

.title-sub {
  font-size: 13px;
  font-weight: 500;
  color: #8da2b5;
}

/* Map visual */
.geo-map-wrapper {
  position: relative;
  height: 140px;
}

.world-map-svg {
  width: 100%;
  height: 100%;
}

.geo-badge {
  position: absolute;
  background: rgba(6, 14, 24, 0.88);
  border: 1px solid rgba(131, 255, 193, 0.35);
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
}

.geo-badge .geo-val {
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
}

.geo-badge .geo-lbl {
  color: #83FFC1;
  font-size: 9px;
  text-transform: uppercase;
}

.na-badge { top: 12px; left: 8px; }
.cis-badge { top: 12px; right: 12px; }
.eu-badge { bottom: 12px; left: 4px; }
.mena-badge { bottom: 8px; right: 28px; }

/* Donut Chart */
.donut-chart-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
}

.donut-center-wrap {
  position: relative;
  width: 100px;
  height: 100px;
}

.donut-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.donut-inner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-billion {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
}

.donut-legend-left,
.donut-legend-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.legend-stat {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-pct {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
}

.stat-name {
  font-size: 11px;
  font-weight: 600;
  color: #a0b2c6;
  line-height: 1.2;
}

/* ICT Revenue Bar Chart */
.chart-content-flex {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 135px;
}

.growth-multiplier-badge {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.mult-num {
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #83FFC1;
  line-height: 1;
}

.mult-sub {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.mult-note {
  font-size: 10px;
  color: #8da2b5;
  margin-top: 4px;
  max-width: 120px;
}

.bar-chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.bar-val {
  font-size: 10px;
  font-weight: 700;
  color: #c8d3df;
  text-align: center;
}

.sub-val {
  font-size: 8px;
  color: #83FFC1;
}

.glow-val {
  color: #83FFC1;
  font-weight: 800;
}

.bar-track {
  width: 24px;
  height: 70px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.bar-fill {
  width: 100%;
  background: rgba(131, 255, 193, 0.5);
  border-radius: 4px 4px 0 0;
  transition: height 0.6s ease;
}

.highlight-fill {
  background: #83FFC1;
  box-shadow: 0 0 12px rgba(131, 255, 193, 0.5);
}

.bar-lbl {
  font-size: 9px;
  color: #8da2b5;
  text-align: center;
}

.active-year {
  color: #83FFC1;
  font-weight: 700;
}

/* 6 Representative Offices */
.analytics-row-offices {
  margin-bottom: 14px;
}

.offices-bar-card {
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.offices-title {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.offices-flags-list {
  display: flex;
  align-items: center;
  gap: 20px;
}

.office-flag-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.country-name {
  font-size: 13px;
  font-weight: 600;
  color: #c8d3df;
}

/* Bottom 3 Metric Charts */
.analytics-row-bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* ==========================================================================
   SLIDE 2: ENTERPRISE UZBEKISTAN
   ========================================================================== */
.enterprise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.enterprise-card {
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 145px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.25s ease;
}

.enterprise-card:hover {
  transform: translateY(-2px);
  border-color: rgba(131, 255, 193, 0.35);
  background: rgba(18, 30, 44, 0.88);
}

.card-header-flex {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.ent-title {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
}

.ent-icon-wrapper {
  flex-shrink: 0;
}

.ent-desc {
  margin: 12px 0 0;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #a8b8c8;
  line-height: 1.45;
}

/* ==========================================================================
   SLIDE 3: DIGITAL SERVICE AND PRODUCTS EXPORT DEVELOPMENT
   ========================================================================== */
.export-top-row,
.export-bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr;
  gap: 16px;
  margin-bottom: 16px;
}

.export-bottom-row {
  margin-bottom: 0;
}

.export-card {
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.export-card-title-accent {
  margin: 0 0 14px;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: #83FFC1;
  line-height: 1.3;
}

.export-card-title {
  margin: 0 0 14px;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}

/* Tax Stats */
.tax-stats-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tax-stat-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tax-rate-green {
  min-width: 42px;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #83FFC1;
}

.tax-name {
  font-size: 12px;
  font-weight: 600;
  color: #c8d3df;
  text-transform: uppercase;
}

/* Zero Risk Expense */
.zerorisk-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.zerorisk-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(6, 14, 24, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 12px 14px;
}

.item-icon-box {
  width: 40px;
  height: 40px;
  background: rgba(131, 255, 193, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.item-text {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

/* Energy Grid */
.energy-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.energy-map-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 12px;
}

.stat-val-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.energy-big-val {
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

.energy-tag {
  background: rgba(131, 255, 193, 0.15);
  color: #83FFC1;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}

.energy-desc {
  margin: 0;
  font-size: 11px;
  color: #8da2b5;
  line-height: 1.35;
}

.special-terms-heading {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #83FFC1;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 8px;
}

.special-terms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.term-box {
  background: rgba(6, 14, 24, 0.65);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 8px 12px;
}

.term-rate {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
  display: block;
}

.term-desc {
  font-size: 10px;
  color: #8da2b5;
}

/* Softlanding Checklist */
.softlanding-checklist {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.softlanding-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #c8d3df;
}

/* IT-VISA */
.itvisa-header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.itvisa-logo-text {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.itvisa-perks-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.itvisa-perk {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #c8d3df;
}

/* DataVolt Card */
.datavolt-top-hero {
  margin-bottom: 12px;
}

.datavolt-pitch {
  margin: 0 0 10px;
  font-size: 12px;
  color: #c8d3df;
  line-height: 1.35;
}

.datavolt-pitch strong {
  color: #83FFC1;
}

.datavolt-metrics-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: rgba(6, 14, 24, 0.65);
  border-radius: 10px;
  padding: 8px 12px;
}

.datavolt-img {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.dv-metric-box {
  display: flex;
  flex-direction: column;
}

.dv-lbl {
  font-size: 8px;
  font-weight: 700;
  color: #8da2b5;
  text-transform: uppercase;
}

.dv-val {
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #83FFC1;
}

.dv-ai-box {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.dv-ai-val {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #83FFC1;
}

.dv-ai-lbl {
  font-size: 9px;
  font-weight: 600;
  color: #c8d3df;
}

.datavolt-banner {
  background: linear-gradient(90deg, rgba(131, 255, 193, 0.15) 0%, rgba(131, 255, 193, 0.05) 100%);
  border: 1px solid rgba(131, 255, 193, 0.25);
  border-radius: 8px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.banner-highlight {
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #83FFC1;
}

.banner-sub {
  font-size: 10px;
  color: #c8d3df;
}

.datavolt-bottom-mini-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mini-dv-card {
  background: rgba(6, 14, 24, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 8px 10px;
}

.mini-dv-title {
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
  display: block;
  margin-bottom: 2px;
}

.mini-dv-desc {
  margin: 0;
  font-size: 9px;
  color: #8da2b5;
  line-height: 1.3;
}

/* ==========================================================================
   Bottom Navigation Bar
   ========================================================================== */
.bento-navigation-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 8px;
}

.nav-btn-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.prev-btn {
  background: #0c1622;
  border: 1px solid rgba(131, 255, 193, 0.3);
}

.prev-btn:hover {
  background: #142232;
  border-color: #83FFC1;
  transform: scale(1.06);
}

.next-btn {
  background: #83FFC1;
  border: none;
  box-shadow: 0 4px 20px rgba(131, 255, 193, 0.4);
}

.next-btn:hover {
  background: #9effd3;
  box-shadow: 0 6px 25px rgba(131, 255, 193, 0.6);
  transform: scale(1.06);
}

.nav-title-pill {
  background: #0c1622;
  border: 1px solid rgba(131, 255, 193, 0.3);
  border-radius: 30px;
  padding: 12px 32px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;
}

.nav-title-pill:hover {
  border-color: #83FFC1;
  background: #142232;
}

.pill-text {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

/* ==========================================================================
   TRANSITIONS
   ========================================================================== */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ==========================================================================
   RESPONSIVE DESIGN (Desktop >= 1025px completely preserved)
   ========================================================================== */
@media (max-width: 1024px) and (min-width: 768px) {
  .bento-main-card {
    padding: 32px 28px;
    gap: 24px;
  }
  .card-header-bar {
    gap: 16px;
  }
  .badge-title {
    font-size: 18px;
  }
  .startups-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .startups-bottom-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .analytics-row-top {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .analytics-row-bottom {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .enterprise-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .export-top-row,
  .export-bottom-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .offices-bar-card {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .offices-flags-list {
    flex-wrap: wrap;
    gap: 12px;
  }
}

@media (max-width: 767px) {
  .page-container {
    padding: 0 16px;
  }
  .bento-main-card {
    padding: 20px 16px;
    gap: 18px;
    border-radius: 18px;
  }
  .card-header-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .badge-title {
    font-size: 15px;
    white-space: normal;
    line-height: 1.3;
  }
  .header-logos-group {
    gap: 10px;
  }
  .gov-logo-img {
    height: 28px;
  }
  .itpark-logo-img {
    height: 24px;
  }
  .startups-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .startup-card {
    padding: 14px 16px;
    gap: 12px;
  }
  .startups-bottom-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .startupbase-card {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .analytics-row-top,
  .analytics-row-bottom {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .analytics-card {
    padding: 16px;
  }
  .donut-chart-container {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .donut-legend-left,
  .donut-legend-right {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    width: 100%;
  }
  .enterprise-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .enterprise-card {
    padding: 16px;
  }
  .export-top-row,
  .export-bottom-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .export-card {
    padding: 16px;
  }
  .datavolt-metrics-row {
    flex-wrap: wrap;
    gap: 12px;
  }
  .datavolt-bottom-mini-cards {
    grid-template-columns: 1fr;
  }
  .offices-bar-card {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    padding: 14px 16px;
  }
  .offices-flags-list {
    flex-wrap: wrap;
    gap: 10px;
  }
  .bento-navigation-bar {
    gap: 10px;
  }
  .nav-title-pill {
    padding: 8px 14px;
  }
  .pill-text {
    font-size: 11.5px;
    letter-spacing: 0.4px;
  }
  .nav-btn-circle {
    width: 42px;
    height: 42px;
  }
}
</style>
