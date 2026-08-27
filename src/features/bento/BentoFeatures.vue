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
              <h2 class="badge-title">{{ currentSlideData.title }}</h2>
            </div>

            <!-- Top Right Official Logos -->
            <div class="header-logos-group">
              <img
                src="@/assets/images/gov-itpark-combined-logo.webp"
                alt="Ministry of Digital Technologies & IT Park Uzbekistan"
                class="gov-itpark-combined-img"
                width="240"
                height="32"
                loading="lazy"
                decoding="async"
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

                  <a href="https://startupbase.uz" target="_blank" rel="noopener noreferrer" class="startupbase-card" aria-label="Visit StartupBase website">
                    <div class="startupbase-brand">
                      <div class="startupbase-logo-icon">
                        <img src="@/assets/images/startupbase-icon.webp" alt="Startup Base Emblem" class="startupbase-icon-img" width="154" height="36" loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div class="startupbase-qr">
                      <img src="@/assets/images/startupbase-qr-white.webp" alt="startupbase.uz QR Code" class="qr-svg-img" width="88" height="88" loading="lazy" decoding="async" />
                    </div>
                  </a>
                </div>
              </div>

              <!-- =============================================================== -->
              <!-- SLIDE 1: KEY INDICATORS OF IT PARK MEMBERS                       -->
              <!-- =============================================================== -->
              <div v-else-if="currentSlide === 1" key="slide-1" class="slide-content slide-analytics">
                <!-- Top Grid Section (Tall Left Card + Right Side Stacked Cards) -->
                <div class="analytics-top-grid">
                  <!-- Tall Left Card: EXPORT GEOGRAPHY -->
                  <div class="analytics-card geo-card">
                    <div class="card-title-row">
                      <h4 class="analytics-card-title">{{ t('bento.analytics.exportGeoTitle') }}</h4>
                    </div>
                    <div class="geo-map-wrapper">
                      <div class="geo-map-visual">
                        <svg viewBox="0 0 360 210" fill="none" class="world-map-svg">
                          <g opacity="0.35" fill="#58728a">
                            <!-- High detail World Map Silhouette -->
                            <!-- North America & Greenland -->
                            <path d="M18 28 Q45 8 95 24 Q116 38 104 78 Q75 96 42 78 Q18 55 18 28 Z"/>
                            <path d="M68 78 Q88 84 94 98 Q72 112 62 94 Z"/>
                            <path d="M88 12 Q108 8 118 20 Q104 32 88 12 Z"/>
                            <!-- South America -->
                            <path d="M82 104 Q112 98 118 128 Q104 176 80 166 Q68 142 82 104 Z"/>
                            <!-- Europe & Scandinavia -->
                            <path d="M162 26 Q194 20 212 38 Q190 60 158 52 Z"/>
                            <path d="M178 12 Q192 8 196 22 Q184 28 178 12 Z"/>
                            <!-- Africa -->
                            <path d="M152 66 Q194 58 206 94 Q178 142 152 124 Q140 92 152 66 Z"/>
                            <!-- Asia & Middle East -->
                            <path d="M206 20 Q282 10 322 38 Q312 88 248 82 Q210 50 206 20 Z"/>
                            <path d="M228 88 Q242 84 246 102 Q232 112 228 88 Z"/>
                            <path d="M260 92 Q290 88 296 110 Q272 120 260 92 Z"/>
                            <!-- Australia & NZ -->
                            <path d="M268 116 Q314 110 308 144 Q275 154 268 116 Z"/>
                            <path d="M316 142 Q324 140 322 152 Q314 154 316 142 Z"/>
                          </g>

                          <!-- Dotted Route Curves radiating from Tashkent/Central Asia -->
                          <path d="M72 52 Q130 18 200 42" stroke="#83FFC1" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.9"/>
                          <path d="M182 40 Q212 36 262 36" stroke="#83FFC1" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.9"/>
                          <path d="M182 40 Q190 72 172 92" stroke="#83FFC1" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.9"/>
                          <path d="M182 40 Q242 62 292 52" stroke="#83FFC1" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.9"/>

                          <!-- Glowing Dots -->
                          <circle cx="72" cy="52" r="4.5" fill="#83FFC1" />
                          <circle cx="182" cy="40" r="5.5" fill="#83FFC1" />
                          <circle cx="262" cy="36" r="4.5" fill="#83FFC1" />
                          <circle cx="172" cy="92" r="4.5" fill="#83FFC1" />
                          <circle cx="292" cy="52" r="4.5" fill="#83FFC1" />
                        </svg>

                        <!-- Geo Badges -->
                        <div class="geo-badge na-badge">
                          <span class="geo-val">46%</span>
                          <span class="geo-pill">{{ t('bento.analytics.northAmerica') }}</span>
                        </div>
                        <div class="geo-badge cis-badge">
                          <span class="geo-pill">{{ t('bento.analytics.cisApac') }}</span>
                          <span class="geo-val">27%</span>
                        </div>
                        <div class="geo-badge eu-badge">
                          <span class="geo-val">21%</span>
                          <span class="geo-pill">{{ t('bento.analytics.euUk') }}</span>
                        </div>
                        <div class="geo-badge mena-badge">
                          <span class="geo-pill">{{ t('bento.analytics.mena') }}</span>
                          <span class="geo-val">6%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right Side Stacked Cards -->
                  <div class="top-right-stack">
                    <div class="top-right-cards-row">
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
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#3ddb96" stroke-width="14" stroke-dasharray="87.9 314.16" stroke-dashoffset="-170" stroke-linecap="round"/>
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#25b77c" stroke-width="14" stroke-dasharray="34.5 314.16" stroke-dashoffset="-260" stroke-linecap="round"/>
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#168555" stroke-width="14" stroke-dasharray="25.1 314.16" stroke-dashoffset="-297" stroke-linecap="round"/>
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
                              <div class="bar-track"><div class="bar-fill" style="height: 22%;"></div></div>
                              <span class="bar-lbl">2017</span>
                            </div>
                            <div class="bar-col">
                              <span class="bar-val">181</span>
                              <div class="bar-track"><div class="bar-fill" style="height: 30%;"></div></div>
                              <span class="bar-lbl">2021</span>
                            </div>
                            <div class="bar-col">
                              <span class="bar-val">540</span>
                              <div class="bar-track"><div class="bar-fill" style="height: 60%;"></div></div>
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

                    <!-- Row 2: 6 Representative Offices Abroad -->
                    <div class="offices-bar-card">
                      <span class="offices-title">{{ t('bento.analytics.officesAbroadTitle') }}</span>
                      <div class="offices-flags-list">
                        <div class="office-flag-item">
                          <img src="@/assets/images/0b6aeb6b9391242035b9cf8413aef51d002d763b.webp" alt="USA" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.usa') }}</span>
                        </div>
                        <div class="office-flag-item">
                          <img src="@/assets/images/87c9222fe6152ec4fb7ab88b467c99b06a6bf741.webp" alt="Germany" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.germany') }}</span>
                        </div>
                        <div class="office-flag-item">
                          <img src="@/assets/images/d89371e4f481257aa5a9418282c091e617290b02.webp" alt="Saudi Arabia" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.saudiArabia') }}</span>
                        </div>
                        <div class="office-flag-item">
                          <img src="@/assets/images/7ab717946fae6524f4795cc76f78ae7d8bf40d23.webp" alt="China" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.china') }}</span>
                        </div>
                        <div class="office-flag-item">
                          <img src="@/assets/images/4b2ccd34d19d7a4bcc52c7f4e709e068d6dc2b48.webp" alt="South Korea" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.southKorea') }}</span>
                        </div>
                        <div class="office-flag-item">
                          <img src="@/assets/images/b9750fcbccdf2289b072cd6473617275e5df1804.webp" alt="Japan" class="flag-icon" width="28" height="18" loading="lazy" decoding="async" />
                          <span class="country-name">{{ t('bento.analytics.japan') }}</span>
                        </div>
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
                          <div class="bar-track"><div class="bar-fill" style="height: 18%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">523</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 32%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">1 652</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 62%;"></div></div>
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
                          <div class="bar-track"><div class="bar-fill" style="height: 15%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">23</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 28%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">426</span>
                          <div class="bar-track">
                            <div class="bar-fill" style="height: 60%;">
                              <span class="inner-sub-val">31</span>
                            </div>
                          </div>
                          <span class="bar-lbl">2023</span>
                        </div>
                        <div class="bar-col active-bar">
                          <span class="bar-val glow-val">970+</span>
                          <div class="bar-track">
                            <div class="bar-fill highlight-fill" style="height: 100%;">
                              <span class="inner-sub-val">79</span>
                            </div>
                          </div>
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
                          <div class="bar-track"><div class="bar-fill" style="height: 15%;"></div></div>
                          <span class="bar-lbl">2017</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">234.5</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 30%;"></div></div>
                          <span class="bar-lbl">2021</span>
                        </div>
                        <div class="bar-col">
                          <span class="bar-val">1 000.0</span>
                          <div class="bar-track"><div class="bar-fill" style="height: 60%;"></div></div>
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
                    <h4 class="export-card-title-accent text-center">
                      <span class="neon-green-text">BENEFITS FOR IT PARK</span><br/>
                      <span class="neon-green-text">MEMBER COMPANIES</span>
                    </h4>
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
                    <h4 class="export-card-title text-center">
                      <span class="neon-green-text">ZERO RISK</span> EXPENSE<br/>
                      REIMBURSEMENT
                    </h4>
                    <div class="zerorisk-items">
                      <div class="zerorisk-item">
                        <div class="item-icon-box">
                          <img src="@/assets/images/icon-free-office.svg" alt="Free office" class="card-feature-icon" />
                        </div>
                        <span class="item-text">{{ t('bento.exportDev.freeOffice') }}</span>
                      </div>

                      <div class="zerorisk-item">
                        <div class="item-icon-box">
                          <img src="@/assets/images/icon-tech-equipment.svg" alt="Technical Equipment" class="card-feature-icon" />
                        </div>
                        <span class="item-text">{{ t('bento.exportDev.techEquipment') }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 3: Energy Grid & Special Terms (Matching latest screenshot 1:1) -->
                  <div class="export-card energy-card">
                    <div class="energy-top-flex">
                      <!-- Official Uzbekistan Green Wind Map Container -->
                      <div class="energy-map-visual">
                        <img src="@/assets/images/uzb-wind-map.svg" alt="Uzbekistan Wind Energy Zones" class="uzb-wind-map-img" />
                      </div>

                      <div class="energy-map-stats">
                        <div class="energy-stat-box">
                          <div class="stat-val-badge">
                            <span class="energy-big-val">9.3 GW</span>
                            <span class="energy-tag-pill">Wind farms</span>
                          </div>
                          <p class="energy-desc">{{ t('bento.exportDev.windFarmsDesc') }}</p>
                        </div>

                        <div class="energy-stat-box">
                          <div class="stat-val-badge">
                            <span class="energy-big-val">1 885 km</span>
                            <span class="energy-tag-pill">Electricity grid</span>
                          </div>
                          <p class="energy-desc">{{ t('bento.exportDev.electricityGridDesc') }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="special-terms-section">
                      <span class="special-terms-heading">SPECIAL TERMS</span>
                      <div class="special-terms-grid">
                        <div class="term-pill-green">
                          <span class="term-bullet">●</span>
                          <div class="term-pill-text">
                            <span class="term-rate-bold">$0.05 kWh</span>
                            <span class="term-desc-dark">Competitive electricity rate</span>
                          </div>
                        </div>
                        <div class="term-pill-green">
                          <span class="term-bullet">●</span>
                          <div class="term-pill-text">
                            <span class="term-rate-bold">$0.08-$0.12</span>
                            <span class="term-desc-dark">Low-cost water supply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Row: Softlanding, IT-Visa, AI Data Centers & DataVolt -->
                <div class="export-bottom-row">
                  <!-- Col 1: Softlanding Support -->
                  <div class="export-card softlanding-card">
                    <h4 class="export-card-title text-center">
                      <span class="neon-green-text">SOFTLANDING</span> SUPPORT
                    </h4>
                    <div class="softlanding-checklist">
                      <!-- 1. 3 days Company registration -->
                      <div class="softlanding-item">
                        <div class="softlanding-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#83FFC1" stroke-width="1.8" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="#83FFC1" stroke-width="1.8" stroke-linejoin="round"/>
                            <path d="M8 13H12M8 17H16" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
                            <path d="M13 15L17 11L19 13L15 17L12 18L13 15Z" stroke="#83FFC1" stroke-width="1.5" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span><strong class="neon-green-text">3 days</strong> Company registration</span>
                      </div>

                      <!-- 2. Banking support -->
                      <div class="softlanding-item">
                        <div class="softlanding-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M3 21H21M3 10H21M5 10V18M9 10V18M15 10V18M19 10V18M12 3L3 7.5V10H21V7.5L12 3Z" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span><strong class="neon-green-text">Banking</strong> support</span>
                      </div>

                      <!-- 3. Turnkey Accounting and Legal Services -->
                      <div class="softlanding-item">
                        <div class="softlanding-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="3" width="16" height="18" rx="2" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M8 7H16M8 11H10M14 11H16M8 15H10M14 15H16" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
                            <circle cx="12" cy="13" r="1.5" fill="#83FFC1"/>
                          </svg>
                        </div>
                        <span><strong class="neon-green-text">Turnkey Accounting</strong> and <strong class="neon-green-text">Legal Services</strong></span>
                      </div>

                      <!-- 4. Talent and Staff Recruitment -->
                      <div class="softlanding-item">
                        <div class="softlanding-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="7" r="3" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M6 19C6 16 9 14 12 14C15 14 18 16 18 19" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
                            <circle cx="4" cy="9" r="2" stroke="#83FFC1" stroke-width="1.5"/>
                            <circle cx="20" cy="9" r="2" stroke="#83FFC1" stroke-width="1.5"/>
                            <path d="M1 18C1 16 2.5 15 4 15M23 18C23 16 21.5 15 20 15" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                        </div>
                        <span><strong class="neon-green-text">Talent</strong> and <strong class="neon-green-text">Staff</strong> Recruitment</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 2: IT-VISA -->
                  <div class="export-card itvisa-card">
                    <div class="itvisa-header-brand">
                      <!-- Official IT-VISA Logo Asset from Figma -->
                      <img src="@/assets/images/it-visa-logo.webp" alt="IT-VISA powered by IT Park" class="itvisa-official-img" width="150" height="41" loading="lazy" decoding="async" />
                    </div>

                    <div class="itvisa-perks-list">
                      <!-- 1. No work permit (Open Hand Palm) -->
                      <div class="itvisa-perk">
                        <div class="perk-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M7 11V6C7 4.89543 7.89543 4 9 4C10.1046 4 11 4.89543 11 6V11M11 6C11 4.89543 11.8954 4 13 4C14.1046 4 15 4.89543 15 6V11M15 7C15 5.89543 15.8954 5 17 5C18.1046 5 19 5.89543 19 7V13C19 17.5 15.5 21 11 21C7.5 21 5 18.5 5 15L5 11C5 9.89543 5.89543 9 7 9V11" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span>No work permit</span>
                      </div>

                      <!-- 2. Salary in foreign currency (Stack of Coins) -->
                      <div class="itvisa-perk">
                        <div class="perk-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="6" rx="7" ry="3" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M5 6V12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12V6" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M5 12V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V12" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M12 9V12M10.5 10H13.5" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                        </div>
                        <span>Salary in foreign currency</span>
                      </div>

                      <!-- 3. Dividends in foreign currency (Hand with Coin) -->
                      <div class="itvisa-perk">
                        <div class="perk-icon-wrap">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="7" r="4" stroke="#83FFC1" stroke-width="1.8"/>
                            <path d="M12 5V9M10.5 6.5H13.5" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M4 17C4 17 7 15 10 15H15C16.5 15 19 16 20 17L21 18M3 21H17C18.5 21 20 20 21 18" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span>Dividends in foreign currency</span>
                      </div>
                    </div>
                  </div>

                  <!-- Col 3: AI & Mining Infrastructure / DATAVOLT Hero Card -->
                  <div class="export-card datavolt-card">
                    <div class="datavolt-top-hero">
                      <div class="datavolt-pitch-col">
                        <p class="datavolt-pitch">
                          Turn your Data Center into the cutting edge infrastructure for <strong class="neon-green-text">AI & MINING</strong>
                        </p>
                      </div>

                      <div class="datavolt-metrics-row">
                        <div class="datavolt-logo-wrap">
                          <!-- Official DataVolt Logo Asset from Figma -->
                          <div class="datavolt-brand-flex">
                            <img src="@/assets/images/652f39e4042f341d1086145e3da43abc2862aeaa.webp" alt="DATAVOLT" class="datavolt-official-img" width="220" height="60" loading="lazy" decoding="async" />
                          </div>
                          <div class="datavolt-caps-row">
                            <div class="dv-cap-item">
                              <span class="dv-lbl">CAPACITY</span>
                              <span class="dv-val">500+ MW</span>
                            </div>
                            <div class="dv-cap-item">
                              <span class="dv-lbl">INVESTMENT</span>
                              <span class="dv-val">$6.5B</span>
                            </div>
                          </div>
                        </div>

                        <div class="dv-ai-box">
                          <span class="dv-ai-val">$100M+</span>
                          <span class="dv-ai-lbl">Investment in</span>
                          <span class="dv-ai-lbl">AI infrostroctore</span>
                        </div>
                      </div>
                    </div>

                    <div class="datavolt-banner">
                      <span class="banner-highlight">NO CUSTOMS & VAT</span>
                      <span class="banner-sub">Imported servers/gpus exempt from taxes</span>
                    </div>

                    <div class="datavolt-bottom-mini-cards">
                      <div class="mini-dv-card">
                        <h5 class="mini-dv-title">Fast-track construction</h5>
                        <p class="mini-dv-desc">Accelerated Design-Procure-Build with streamlined land allocation in region</p>
                      </div>
                      <div class="mini-dv-card">
                        <h5 class="mini-dv-title">Direct international payments</h5>
                        <p class="mini-dv-desc">Cross-border transactions without local bank intermediaries</p>
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
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Document Background -->
        <path d="M19 6H38C39.1046 6 40 6.89543 40 8V38C40 39.1046 39.1046 40 38 40H26" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26 12H34M26 17H34M26 22H34" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <!-- Stamp Handle -->
        <path d="M13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16V22H13V16Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <path d="M10 22H22C23.1046 22 24 22.8954 24 24V26H8V24C8 22.8954 8.89543 22 10 22Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- Stamp Seal / Imprint -->
        <ellipse cx="16" cy="34" rx="9" ry="5" stroke="#83FFC1" stroke-width="2"/>
        <path d="M11 34H21" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="16" cy="34" r="1.5" fill="#83FFC1"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card1Title'),
    desc: t('bento.enterprise.card1Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Left Smartphone with EUR -->
        <rect x="6" y="12" width="14" height="22" rx="3" stroke="#83FFC1" stroke-width="2"/>
        <path d="M15 20C13.5 20 12 21 12 23C12 25 13.5 26 15 26M10 22H14M10 24H14" stroke="#83FFC1" stroke-width="1.6" stroke-linecap="round"/>
        <!-- Right Smartphone with JPY/Yuan -->
        <rect x="28" y="12" width="14" height="22" rx="3" stroke="#83FFC1" stroke-width="2"/>
        <path d="M32 19L35 23M38 19L35 23M35 23V27M32 24H38M32 26H38" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Hands holding base -->
        <path d="M6 28V36C6 37.1046 6.89543 38 8 38H14" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <path d="M42 28V36C42 37.1046 41.1046 38 40 38H34" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <!-- Top and Bottom flow arrows -->
        <path d="M13 7V10M13 7L10 9M13 7L16 9" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 41V38M35 41L32 39M35 41L38 39" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Dots between -->
        <circle cx="24" cy="19" r="1.5" fill="#83FFC1"/>
        <circle cx="24" cy="24" r="1.5" fill="#83FFC1"/>
        <circle cx="24" cy="29" r="1.5" fill="#83FFC1"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card2Title'),
    desc: t('bento.enterprise.card2Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Document with Folded Corner -->
        <path d="M12 8C12 6.89543 12.8954 6 14 6H30L38 14V40C38 41.1046 37.1046 42 36 42H14C12.8954 42 12 41.1046 12 40V8Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <path d="M30 6V14H38" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- TAX Badge -->
        <rect x="17" y="14" width="16" height="8" rx="2" stroke="#83FFC1" stroke-width="1.8"/>
        <path d="M19 16H23M21 16V20M24 20L25.5 16L27 20M24.5 19H26.5M28.5 16L31.5 20M31.5 16L28.5 20" stroke="#83FFC1" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Cycle Arrows -->
        <path d="M19 31C19.5 28 22 26 25.5 26C28.5 26 31 27.5 32 30M32 26V30H28" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 34C31.5 37 29 39 25.5 39C22.5 39 20 37.5 19 35M19 39V35H23" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card3Title'),
    desc: t('bento.enterprise.card3Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Folder Body & Tab -->
        <path d="M8 15C8 13.8954 8.89543 13 10 13H18L22 17H38C39.1046 17 40 17.8954 40 19V37C40 38.1046 39.1046 39 38 39H10C8.89543 39 8 38.1046 8 37V15Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- Stacked Documents Emerging -->
        <path d="M15 9H31C32.1046 9 33 9.89543 33 11V15" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M18 5H28C29.1046 5 30 5.89543 30 7" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Text Lines -->
        <path d="M14 25H34M14 29H30M14 33H24" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card4Title'),
    desc: t('bento.enterprise.card4Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Top Central Server -->
        <rect x="15" y="6" width="18" height="11" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <circle cx="19" cy="11.5" r="1.3" fill="#83FFC1"/>
        <circle cx="23" cy="11.5" r="1.3" fill="#83FFC1"/>
        <line x1="26" y1="11.5" x2="30" y2="11.5" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Hierarchy Network Branch -->
        <path d="M24 17V24M24 24H13.5V27M24 24H34.5V27" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Bottom Left Server -->
        <rect x="6" y="27" width="15" height="15" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <line x1="6" y1="34.5" x2="21" y2="34.5" stroke="#83FFC1" stroke-width="1.8"/>
        <circle cx="10" cy="31" r="1" fill="#83FFC1"/>
        <circle cx="10" cy="38" r="1" fill="#83FFC1"/>
        <line x1="13.5" y1="31" x2="17.5" y2="31" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="13.5" y1="38" x2="17.5" y2="38" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Bottom Right Server -->
        <rect x="27" y="27" width="15" height="15" rx="2" stroke="#83FFC1" stroke-width="2"/>
        <line x1="27" y1="34.5" x2="42" y2="34.5" stroke="#83FFC1" stroke-width="1.8"/>
        <circle cx="31" cy="31" r="1" fill="#83FFC1"/>
        <circle cx="31" cy="38" r="1" fill="#83FFC1"/>
        <line x1="34.5" y1="31" x2="38.5" y2="31" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="34.5" y1="38" x2="38.5" y2="38" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card5Title'),
    desc: t('bento.enterprise.card5Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Flag -->
        <path d="M24 5V10M24 5L29 7.5L24 10" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Dome -->
        <path d="M16 18C16 13.5788 19.5817 10 24 10C28.4183 10 32 13.5788 32 18H16Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- Roof Beam -->
        <path d="M8 18H40V22H8V18Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- Columns & Arches -->
        <path d="M11 22V34M17.5 22V34M24 22V34M30.5 22V34M37 22V34" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <path d="M11 26C11 24.5 17.5 24.5 17.5 26M17.5 26C17.5 24.5 24 24.5 24 26M24 26C24 24.5 30.5 24.5 30.5 26M30.5 26C30.5 24.5 37 24.5 37 26" stroke="#83FFC1" stroke-width="1.5"/>
        <!-- Steps Base -->
        <path d="M6 34H42V37H6V34ZM4 37H44V41H4V37Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card6Title'),
    desc: t('bento.enterprise.card6Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Left Brain Structure -->
        <path d="M23 9C19.5 8 16 9.5 14 12C11 15.5 10 20 11 24C9 25.5 8 28.5 9 31.5C10.5 35.5 14 38.5 18 39C20 39.5 21.5 39 23 38" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 18C17 19 19.5 18 23 18M12 26C15 26 18 27.5 23 27.5M15 33C17.5 33 19.5 31.5 23 33" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Central Dividing Line -->
        <path d="M23 7V41" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <!-- Right AI Circuit Structure -->
        <path d="M23 13H33L37 17" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="38" cy="17" r="2" fill="#83FFC1"/>
        <path d="M23 22H35" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <circle cx="37" cy="22" r="2" fill="#83FFC1"/>
        <path d="M23 30H31L35 34" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="36" cy="35" r="2" fill="#83FFC1"/>
        <path d="M23 37H31" stroke="#83FFC1" stroke-width="2" stroke-linecap="round"/>
        <circle cx="33" cy="37" r="2" fill="#83FFC1"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card7Title'),
    desc: t('bento.enterprise.card7Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Document Base -->
        <path d="M10 8C10 6.89543 10.8954 6 12 6H36C37.1046 6 38 6.89543 38 8V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V8Z" stroke="#83FFC1" stroke-width="2" stroke-linejoin="round"/>
        <!-- Dollar Icon Box -->
        <rect x="14" y="10" width="10" height="9" rx="1.5" stroke="#83FFC1" stroke-width="1.8"/>
        <path d="M19 11.5V17.5M16.5 13H19.5C20.5 13 21 13.5 21 14.5C21 15.5 20 15.5 19 15.5H17C16 15.5 16 16.5 17 16.5H20.5" stroke="#83FFC1" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Ascending Bar Chart -->
        <rect x="15" y="30" width="3.5" height="7" stroke="#83FFC1" stroke-width="1.6"/>
        <rect x="20.5" y="25" width="3.5" height="12" stroke="#83FFC1" stroke-width="1.6"/>
        <rect x="26" y="20" width="3.5" height="17" stroke="#83FFC1" stroke-width="1.6"/>
        <!-- Trend Arrow -->
        <path d="M15 28L21 21L26 24L33 16M33 16H29M33 16V20" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Pie Chart -->
        <circle cx="32" cy="33" r="4.5" stroke="#83FFC1" stroke-width="1.6"/>
        <path d="M32 28.5V33H36.5" stroke="#83FFC1" stroke-width="1.6"/>
      </svg>
    `
  },
  {
    title: t('bento.enterprise.card8Title'),
    desc: t('bento.enterprise.card8Desc'),
    svgIcon: `
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Globe Grid -->
        <circle cx="24" cy="24" r="16" stroke="#83FFC1" stroke-width="2"/>
        <ellipse cx="24" cy="24" rx="8" ry="16" stroke="#83FFC1" stroke-width="1.8"/>
        <line x1="8" y1="24" x2="40" y2="24" stroke="#83FFC1" stroke-width="1.8"/>
        <path d="M10 16H38M10 32H38" stroke="#83FFC1" stroke-width="1.5"/>
        <!-- Global Connection Nodes -->
        <circle cx="16" cy="16" r="2.5" fill="#83FFC1"/>
        <circle cx="32" cy="16" r="2.5" fill="#83FFC1"/>
        <circle cx="24" cy="24" r="2.5" fill="#83FFC1"/>
        <circle cx="32" cy="32" r="2.5" fill="#83FFC1"/>
        <circle cx="16" cy="32" r="2.5" fill="#83FFC1"/>
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
  gap: 24px;
  background: #081119;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  padding: 24px 24px 28px 24px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
}

.bento-main-card {
  width: 100%;
  background: linear-gradient(165deg, #0c1824 0%, #071017 55%, #0a1620 100%);
  border: 1px solid rgba(131, 255, 193, 0.22);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px rgba(131, 255, 193, 0.08),
    0 20px 60px rgba(0, 0, 0, 0.6),
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
.gov-itpark-combined-img {
  height: 32px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
  display: block;
}

.startups-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 18px;
}

.startup-card {
  background: rgba(14, 23, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  gap: 18px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.25s ease;
}

.startup-card:hover {
  border-color: rgba(131, 255, 193, 0.35);
  background: rgba(18, 30, 44, 0.88);
  transform: translateY(-2px);
}

.startup-metric {
  font-family: 'Outfit', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #83FFC1;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 100px;
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
  background: linear-gradient(90deg, rgba(32, 92, 72, 0.65) 0%, rgba(18, 54, 42, 0.65) 100%);
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
  background: linear-gradient(135deg, rgba(12, 34, 38, 0.95) 0%, rgba(8, 24, 28, 0.95) 100%);
  border: 1px solid rgba(131, 255, 193, 0.3);
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
  background: linear-gradient(135deg, rgba(16, 44, 50, 0.98) 0%, rgba(10, 30, 34, 0.98) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(131, 255, 193, 0.25);
}

.startupbase-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.startupbase-logo-icon {
  height: 48px;
  width: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.startupbase-icon-img {
  height: 48px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  display: block;
}

.startupbase-qr {
  width: 84px;
  height: 84px;
  background: transparent;
  padding: 0;
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: none;
}

.qr-svg-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  display: block;
}

.bento-img-card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.bento-img-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(131, 255, 193, 0.15);
}

.bento-chart-img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  border-radius: 16px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* ==========================================================================
   SLIDE 1: KEY INDICATORS OF IT PARK MEMBERS
   ========================================================================== */
.analytics-top-grid {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 16px;
  margin-bottom: 14px;
}

.top-right-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.top-right-cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.geo-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.analytics-card {
  background: linear-gradient(150deg, rgba(20, 36, 48, 0.85) 0%, rgba(12, 24, 34, 0.85) 100%);
  border: 1px solid rgba(131, 255, 193, 0.22);
  border-radius: 16px;
  padding: 16px 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.25s ease;
}

.analytics-card:hover {
  border-color: rgba(131, 255, 193, 0.4);
  background: linear-gradient(150deg, rgba(24, 44, 58, 0.9) 0%, rgba(14, 28, 40, 0.9) 100%);
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
  font-size: 12px;
  font-weight: 500;
  color: #8da2b5;
}

/* Map visual */
.geo-map-wrapper {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.world-map-svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.geo-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
}

.geo-badge .geo-val {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}

.geo-badge .geo-pill {
  font-family: 'Outfit', sans-serif;
  font-size: 10px;
  font-weight: 800;
  color: #071017;
  background: #83FFC1;
  padding: 3px 9px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.na-badge { top: 18px; left: 8px; }
.cis-badge { top: 18px; right: 8px; }
.eu-badge { bottom: 18px; left: 8px; }
.mena-badge { bottom: 18px; right: 8px; }

/* Donut Chart */
.donut-chart-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
}

.donut-center-wrap {
  position: relative;
  width: 105px;
  height: 105px;
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
  font-size: 26px;
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
  font-size: 18px;
  font-weight: 800;
  color: #83FFC1;
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
  font-size: 26px;
  font-weight: 800;
  color: #83FFC1;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 4px;
}

.mult-sub {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 2px;
}

.mult-note {
  font-size: 10.5px;
  color: #83FFC1;
  margin-top: 4px;
  max-width: 120px;
  line-height: 1.25;
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
  font-family: 'Outfit', sans-serif;
  font-size: 10.5px;
  font-weight: 800;
  color: #071017;
  background: #ffffff;
  padding: 2px 7px;
  border-radius: 10px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  display: inline-block;
}

.glow-val {
  background: #ffffff;
  color: #071017;
  font-weight: 800;
}

.bar-track {
  width: 26px;
  height: 72px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
}

.bar-fill {
  width: 100%;
  background: #83FFC1;
  border-radius: 6px 6px 0 0;
  transition: height 0.6s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2px;
  box-shadow: 0 0 10px rgba(131, 255, 193, 0.35);
}

.highlight-fill {
  background: #83FFC1;
  box-shadow: 0 0 14px rgba(131, 255, 193, 0.6);
}

.inner-sub-val {
  font-family: 'Outfit', sans-serif;
  font-size: 9px;
  font-weight: 800;
  color: #071017;
  background: #83FFC1;
  padding: 1px 4px;
  border-radius: 4px;
}

.bar-lbl {
  font-size: 10px;
  color: #a0b2c6;
  text-align: center;
  margin-top: 4px;
}

.active-year {
  background: #83FFC1;
  color: #071017;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 6px;
  font-size: 9.5px;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(131, 255, 193, 0.35);
}

/* 6 Representative Offices */
.analytics-row-offices {
  margin-bottom: 14px;
}

.offices-bar-card {
  background: linear-gradient(150deg, rgba(20, 36, 48, 0.85) 0%, rgba(12, 24, 34, 0.85) 100%);
  border: 1px solid rgba(131, 255, 193, 0.22);
  border-radius: 14px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  text-align: center;
}

.offices-title {
  font-family: 'Outfit', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  max-width: 100%;
  line-height: 1.2;
  text-align: center;
}

.offices-flags-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
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
  gap: 16px;
}

.enterprise-card {
  border-radius: 18px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 155px;
  border: 1px solid #84FFC166;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

/* Card 1: Regulatory Sandbox */
.enterprise-card:nth-child(1) {
  background: linear-gradient(135deg, #FFFFFF0D 0%, #84EBC240 100%), rgba(8, 20, 22, 0.7);
}

/* Card 2: Foreign exchange freedom */
.enterprise-card:nth-child(2) {
  background: linear-gradient(160deg, #FFFFFF0D 10%, #84EBC238 100%), rgba(8, 20, 22, 0.7);
}

/* Card 3: Tax & customs */
.enterprise-card:nth-child(3) {
  background: linear-gradient(225deg, #84EBC238 0%, #FFFFFF0D 75%), rgba(8, 20, 22, 0.7);
}

/* Card 4: Labour relations */
.enterprise-card:nth-child(4) {
  background: linear-gradient(115deg, #FFFFFF0D 15%, #84EBC238 100%), rgba(8, 20, 22, 0.7);
}

/* Card 5: Personal data */
.enterprise-card:nth-child(5) {
  background: linear-gradient(180deg, #FFFFFF0D 0%, #84EBC245 100%), rgba(8, 20, 22, 0.7);
}

/* Card 6: Government services */
.enterprise-card:nth-child(6) {
  background: linear-gradient(240deg, #84EBC24D 0%, #FFFFFF0D 80%), rgba(8, 20, 22, 0.7);
}

/* Card 7: Intellectual property */
.enterprise-card:nth-child(7) {
  background: linear-gradient(55deg, #84EBC255 0%, #FFFFFF0D 60%, #84EBC233 100%), rgba(8, 20, 22, 0.7);
}

/* Card 8: Investment attraction */
.enterprise-card:nth-child(8) {
  background: linear-gradient(140deg, #FFFFFF0D 0%, #84EBC238 100%), rgba(8, 20, 22, 0.7);
}

/* Card 9: Export promotion */
.enterprise-card:nth-child(9) {
  background: linear-gradient(315deg, #84EBC245 0%, #FFFFFF0D 85%), rgba(8, 20, 22, 0.7);
}

.enterprise-card:hover {
  transform: translateY(-3px);
  border-color: #84FFC1;
  box-shadow: 0 10px 30px rgba(132, 255, 193, 0.2);
  filter: brightness(1.15);
}

.card-header-flex {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.ent-title {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: 21px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.22;
  letter-spacing: -0.2px;
  max-width: 170px;
}

.ent-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.ent-desc {
  margin: 14px 0 0;
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: #c4d7e5;
  line-height: 1.5;
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
  border: 1px solid rgba(131, 255, 193, 0.25);
  border-radius: 18px;
  padding: 20px 22px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Card 1: Benefits for IT Park Member Companies (#FFFFFF0D -> #7FA0CB33) */
.tax-benefits-card {
  background: linear-gradient(145deg, #FFFFFF0D 0%, #7FA0CB33 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.25);
}

/* Card 2: Zero Risk Expense Reimbursement (#FFFFFF0D -> #7FA0CB33) */
.zerorisk-card {
  background: linear-gradient(180deg, #FFFFFF0D 0%, #7FA0CB33 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.25);
  display: flex;
  flex-direction: column;
}

/* Card 3: Energy Grid & Wind Farms (#FFFFFF0D -> #7FA0CB33) */
.energy-card {
  background: linear-gradient(135deg, #FFFFFF0D 0%, #7FA0CB33 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Card 4: Softlanding Support (#84FFC100 -> #84FFC166) */
.softlanding-card {
  background: linear-gradient(135deg, #84FFC100 0%, #84FFC166 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.35);
}

/* Card 5: IT-VISA (#84FFC100 -> #84FFC166) */
.itvisa-card {
  background: linear-gradient(160deg, #84FFC100 0%, #84FFC166 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Card 6: Data Center / DATAVOLT / AI & Mining */
.datavolt-card {
  background: linear-gradient(135deg, #FFFFFF0D 0%, #7FA0CB33 100%), rgba(8, 20, 24, 0.7);
  border: 1px solid rgba(131, 255, 193, 0.25);
}

.export-card:hover {
  transform: translateY(-2px);
  border-color: rgba(131, 255, 193, 0.5);
  box-shadow: 0 8px 25px rgba(131, 255, 193, 0.15);
}

.neon-green-text {
  color: #83FFC1;
}

.export-card-title-accent,
.export-card-title {
  margin: 0 0 14px;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.25;
  letter-spacing: 0.5px;
}

/* Tax Benefits Card */
.tax-stats-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tax-stat-row {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 11.5px;
  font-weight: 600;
}

.tax-rate-green {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #83FFC1;
  min-width: 38px;
  text-align: right;
}

.tax-name {
  color: #ffffff;
  letter-spacing: 0.4px;
  font-size: 11.5px;
  text-transform: uppercase;
}

/* Zero Risk Card */
.zerorisk-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  justify-content: center;
}

.zerorisk-item {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.card-feature-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.item-text {
  font-size: 13.5px;
  font-weight: 600;
  color: #ffffff;
}

/* Energy Grid & Special Terms (Matching latest screenshot 1:1) */
.energy-top-flex {
  display: flex;
  align-items: stretch;
  gap: 12px;
  margin-bottom: 8px;
}

.energy-map-visual {
  width: 140px;
  height: 110px;
  flex-shrink: 0;
  background: #0d1e22;
  border: 1px solid rgba(131, 255, 193, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  overflow: hidden;
}

.uzb-wind-map-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(125, 249, 184, 0.35));
}

.energy-map-stats {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  flex: 1;
}

.energy-stat-box {
  background: #0d1e22;
  border: 1px solid rgba(131, 255, 193, 0.15);
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
}

.stat-val-badge {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 2px;
}

.energy-big-val {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #7DF9B8;
  line-height: 1;
}

.energy-tag-pill {
  background: #7DF9B8;
  color: #07121b;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 6px;
}

.energy-desc {
  margin: 0;
  font-size: 9.5px;
  color: #c4d7e5;
  line-height: 1.3;
}

/* Special Terms Pills */
.special-terms-section {
  padding-top: 2px;
}

.special-terms-heading {
  font-family: 'Outfit', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  color: #7DF9B8;
  letter-spacing: 0.8px;
  display: block;
  margin: 8px 0 8px;
  text-align: center;
}

.special-terms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.term-pill-green {
  background: #7DF9B8;
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.term-bullet {
  color: #07121b;
  font-size: 12px;
  line-height: 1;
}

.term-pill-text {
  display: flex;
  flex-direction: column;
}

.term-rate-bold {
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #07121b;
  line-height: 1.1;
}

.term-desc-dark {
  font-size: 9.5px;
  font-weight: 600;
  color: #07121b;
  line-height: 1.15;
}

/* Softlanding Support */
.softlanding-checklist {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.softlanding-item {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #ffffff;
}

.softlanding-icon-wrap {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* IT-VISA Card */
.itvisa-header-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
}

.itvisa-official-img {
  width: 150px;
  height: 41px;
  object-fit: contain;
  margin: 0 auto;
}

.itvisa-perks-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.itvisa-perk {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12.5px;
  font-weight: 500;
  color: #ffffff;
}

.perk-icon-wrap {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* DataVolt & AI Hero Card */
.datavolt-top-hero {
  margin-bottom: 10px;
}

.datavolt-pitch-col {
  margin-bottom: 8px;
}

.datavolt-pitch {
  margin: 0;
  font-size: 12.5px;
  color: #ffffff;
  line-height: 1.35;
}

.datavolt-metrics-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: center;
  gap: 12px;
}

.datavolt-logo-wrap {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.datavolt-brand-flex {
  display: flex;
  align-items: center;
  gap: 6px;
}

.datavolt-official-img {
  height: 22px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.2);
}

.datavolt-text-brand {
  font-family: 'Outfit', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.datavolt-caps-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dv-cap-item {
  display: flex;
  flex-direction: column;
}

.dv-lbl {
  font-size: 7.5px;
  font-weight: 700;
  color: #8da2b5;
  letter-spacing: 0.5px;
}

.dv-val {
  font-family: 'Outfit', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  color: #83FFC1;
}

.dv-ai-box {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.dv-ai-val {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #83FFC1;
  line-height: 1;
  margin-bottom: 2px;
}

.dv-ai-lbl {
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.datavolt-banner {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
  padding: 4px 0;
}

.banner-highlight {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #83FFC1;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.banner-sub {
  font-size: 11px;
  color: #c4d7e5;
}

.datavolt-bottom-mini-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mini-dv-card {
  background: rgba(6, 18, 20, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
}

.mini-dv-title {
  margin: 0 0 4px;
  font-size: 11.5px;
  font-weight: 700;
  color: #ffffff;
}

.mini-dv-desc {
  margin: 0;
  font-size: 9.5px;
  color: #c4d7e5;
  line-height: 1.35;
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
  .page-container {
    padding: 0 16px;
    max-width: 100%;
    box-sizing: border-box;
  }
  .bento-card-outer {
    padding: 12px 12px 18px 12px;
    border-radius: 20px;
    gap: 14px;
    width: 100%;
    box-sizing: border-box;
  }
  .bento-main-card {
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  .card-header-bar {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  .header-badge-pill {
    min-width: 0;
    flex: 1 1 auto;
  }
  .badge-title {
    font-size: 13.5px;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header-logos-group {
    flex-shrink: 0;
  }
  .gov-itpark-combined-img {
    height: 26px;
    width: auto;
  }
  .slide-viewport {
    padding: 16px 14px 18px;
    min-height: auto;
    width: 100%;
    box-sizing: border-box;
  }

  /* Slide 0: Startups */
  .startups-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 12px;
  }
  .startup-card {
    padding: 12px 14px;
    gap: 12px;
  }
  .startup-metric {
    font-size: 20px;
    min-width: 75px;
  }
  .startup-desc {
    font-size: 13px;
  }
  .startups-bottom-row {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .startups-cta-box {
    padding: 14px 16px;
  }
  .cta-text {
    font-size: 13px;
  }
  .startupbase-card {
    padding: 12px 16px;
  }
  .startupbase-icon-img {
    height: 38px;
  }
  .startupbase-qr {
    width: 64px;
    height: 64px;
  }

  /* Slide 1: Analytics */
  .analytics-top-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
    width: 100%;
  }
  .geo-card {
    width: 100%;
    min-height: 210px;
  }
  .geo-map-wrapper {
    height: 190px;
    width: 100%;
  }
  .top-right-stack {
    width: 100%;
    gap: 12px;
  }
  .top-right-cards-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
  }
  .donut-center-wrap {
    width: 84px;
    height: 84px;
  }
  .center-billion {
    font-size: 20px;
  }
  .stat-pct {
    font-size: 15px;
  }
  .stat-name {
    font-size: 10px;
  }
  .chart-content-flex {
    height: 120px;
  }
  .mult-num {
    font-size: 21px;
  }
  .mult-sub {
    font-size: 12px;
  }
  .offices-bar-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    gap: 12px;
    box-sizing: border-box;
  }
  .offices-title {
    font-size: 11.5px;
    white-space: nowrap;
  }
  .offices-flags-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex: 1 1 auto;
  }
  .flag-icon {
    width: 20px;
    height: 20px;
  }
  .country-name {
    font-size: 11px;
  }
  .analytics-row-bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }
  .metric-chart-card {
    padding: 12px 14px;
    box-sizing: border-box;
  }
  .metric-chart-card .bar-chart-bars {
    gap: 5px;
  }
  .metric-chart-card .bar-track {
    width: 18px;
    height: 56px;
  }
  .metric-chart-card .bar-val {
    font-size: 8px;
    padding: 1px 4px;
  }
  .metric-chart-card .active-year {
    font-size: 7.5px;
    padding: 1px 4px;
  }

  /* Slide 2: Enterprise */
  .enterprise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }
  .enterprise-card {
    padding: 14px 16px;
    min-height: 135px;
    box-sizing: border-box;
  }
  .ent-title {
    font-size: 15.5px;
  }
  .ent-icon-box svg {
    width: 38px;
    height: 38px;
  }
  .ent-desc {
    font-size: 12px;
    line-height: 1.35;
  }

  /* Slide 3: Export */
  .export-top-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
    width: 100%;
  }
  .export-top-row .energy-card {
    grid-column: 1 / -1;
  }
  .export-bottom-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
  }
  .export-bottom-row .datavolt-card {
    grid-column: 1 / -1;
  }
  .export-card {
    padding: 14px 16px;
    box-sizing: border-box;
  }

  /* Navigation Bar */
  .bento-navigation-bar {
    margin-top: 14px;
    gap: 10px;
  }
  .nav-title-pill {
    padding: 8px 16px;
  }
  .pill-text {
    font-size: 10.5px;
  }
  .nav-btn-circle {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 767px) {
  .bento-section {
    overflow-x: hidden;
    width: 100%;
  }
  .page-container {
    padding: 0 8px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .bento-card-outer {
    padding: 6px 6px 12px 6px;
    border-radius: 16px;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .bento-main-card {
    border-radius: 14px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .card-header-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    gap: 8px;
    box-sizing: border-box;
    width: 100%;
  }
  .header-badge-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .badge-accent-line {
    width: 2.5px;
    height: 16px;
    flex-shrink: 0;
  }
  .badge-title {
    font-size: 11.5px;
    font-weight: 800;
    line-height: 1.2;
    white-space: normal;
    word-break: break-word;
    color: #0b131b;
  }
  .header-logos-group {
    gap: 6px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .gov-logo-img {
    height: 20px;
  }
  .itpark-logo-img {
    height: 18px;
  }
  .gov-itpark-combined-img {
    height: 24px;
    width: auto;
    max-width: 110px;
    object-fit: contain;
    display: block;
    filter: brightness(1.1);
  }

  .slide-viewport {
    padding: 12px 6px 14px;
    min-height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .slide-content {
    width: 100%;
    box-sizing: border-box;
  }

  /* Slide 0: Startups */
  .startups-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 10px;
    width: 100%;
  }
  .startup-card {
    padding: 10px 12px;
    gap: 10px;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .startup-metric {
    font-size: 18px;
    min-width: 60px;
    flex-shrink: 0;
  }
  .startup-desc {
    font-size: 12px;
    line-height: 1.35;
    word-break: break-word;
  }
  .startups-bottom-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  .startups-cta-box {
    padding: 12px 14px;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .cta-text {
    font-size: 12px;
    line-height: 1.4;
  }
  .startupbase-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .startupbase-icon-img {
    height: 34px;
    max-width: 100px;
  }
  .startupbase-qr {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
  }

  /* Slide 1: Analytics */
  .analytics-top-grid,
  .top-right-stack,
  .top-right-cards-row,
  .analytics-row-bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
  .analytics-card {
    padding: 12px 14px;
    border-radius: 14px;
    width: 100%;
    box-sizing: border-box;
  }
  .analytics-card-title {
    font-size: 13px;
    margin-bottom: 8px;
  }
  .geo-map-wrapper {
    height: 150px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .world-map-svg {
    width: 100%;
    height: 100%;
  }
  .geo-badge .geo-val {
    font-size: 11px;
  }
  .geo-badge .geo-pill {
    font-size: 7.5px;
    padding: 2px 5px;
  }
  .na-badge { top: 6px; left: 2px; }
  .cis-badge { top: 6px; right: 2px; }
  .eu-badge { bottom: 6px; left: 2px; }
  .mena-badge { bottom: 6px; right: 2px; }

  /* Donut chart - Horizontal layout matching Figma mobile */
  .donut-chart-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 4px 0;
    gap: 6px;
    width: 100%;
    box-sizing: border-box;
  }
  .donut-center-wrap {
    width: 76px;
    height: 76px;
    flex-shrink: 0;
  }
  .center-billion {
    font-size: 17px;
  }
  .donut-legend-left,
  .donut-legend-right {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .stat-pct {
    font-size: 12.5px;
  }
  .stat-name {
    font-size: 9.5px;
    line-height: 1.15;
  }

  /* Bar charts on mobile - side-by-side with multiplier */
  .chart-content-flex {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
  }
  .growth-multiplier-badge {
    margin-bottom: 2px;
    flex-shrink: 0;
  }
  .mult-num {
    font-size: 19px;
  }
  .mult-sub {
    font-size: 11px;
  }
  .mult-note {
    font-size: 8.5px;
    max-width: 80px;
  }
  .bar-chart-bars {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }
  .bar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .bar-track {
    width: 18px;
    height: 52px;
    border-radius: 4px;
  }
  .bar-val {
    font-size: 8.5px;
    padding: 1px 4px;
    border-radius: 6px;
  }
  .bar-lbl {
    font-size: 8px;
    margin-top: 2px;
  }
  .active-year {
    font-size: 7.5px;
    padding: 1px 4px;
    border-radius: 4px;
  }
  .inner-sub-val {
    font-size: 7px;
    padding: 0 2px;
  }

  /* Offices bar card on mobile */
  .offices-bar-card {
    padding: 10px 12px;
    border-radius: 12px;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .offices-title {
    font-size: 11px;
    text-align: center;
    width: 100%;
  }
  .offices-flags-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px 8px;
    width: 100%;
    justify-items: center;
  }
  .office-flag-item {
    gap: 4px;
  }
  .flag-icon {
    width: 18px;
    height: 18px;
  }
  .country-name {
    font-size: 10px;
  }

  /* Slide 2: Enterprise */
  .enterprise-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  .enterprise-card {
    padding: 12px 14px;
    border-radius: 12px;
    min-height: auto;
    width: 100%;
    box-sizing: border-box;
  }
  .card-header-flex {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
  .ent-title {
    font-size: 15px;
    line-height: 1.2;
  }
  .ent-icon-box {
    flex-shrink: 0;
  }
  .ent-icon-box svg {
    width: 32px;
    height: 32px;
  }
  .ent-desc {
    font-size: 11.5px;
    line-height: 1.35;
    margin-top: 8px;
  }

  /* Slide 3: Export */
  .export-top-row,
  .export-bottom-row {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .export-card {
    padding: 12px 14px;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .datavolt-top-hero {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .datavolt-metrics-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .datavolt-bottom-mini-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Navigation Bar */
  .bento-navigation-bar {
    gap: 8px;
    margin-top: 14px;
    width: 100%;
    box-sizing: border-box;
  }
  .nav-title-pill {
    padding: 6px 12px;
    border-radius: 16px;
    max-width: calc(100% - 90px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pill-text {
    font-size: 10px;
    letter-spacing: 0.3px;
  }
  .nav-btn-circle {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }
  .nav-btn-circle svg {
    width: 16px;
    height: 16px;
  }
}
</style>
