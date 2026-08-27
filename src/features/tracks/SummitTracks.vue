<template>
  <section id="summit-tracks" class="summit-section">
    <div class="page-container">
      <div class="summit-card">

        <!-- Tab Bar -->
        <div class="tab-bar" role="tablist" aria-label="Summit tracks">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ active: activeTab === tab.id }"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :id="`tab-${tab.id}`"
            @click="activeTab = tab.id"
          >
            {{ t(tab.labelKey) }}
          </button>
        </div>

        <!-- Main Title -->
        <div class="title-block">
          <h2 class="summit-title">{{ activeTrackData.title?.toUpperCase() || '' }}</h2>
        </div>

        <!-- Metadata Bar -->
        <div class="meta-bar" v-if="!activeTrackData.isMultiCard && activeTrackData.date">
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="meta-icon">
              <rect x="2.5" y="3.5" width="15" height="14" rx="2.5" stroke="#83FFC1" stroke-width="1.8"/>
              <path d="M6.5 2v3M13.5 2v3" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M2.5 7.5h15" stroke="#83FFC1" stroke-width="1.8"/>
            </svg>
            <span>{{ activeTrackData.date }}</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="meta-icon">
              <circle cx="10" cy="10" r="7" stroke="#83FFC1" stroke-width="1.8"/>
              <path d="M10 6v4l2.5 2.5" stroke="#83FFC1" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span>{{ activeTrackData.time }}</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="meta-icon">
              <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="#83FFC1" stroke-width="1.8"/>
              <circle cx="10" cy="7" r="2" fill="#83FFC1"/>
            </svg>
            <span>{{ activeTrackData.location }}</span>
          </div>
        </div>

        <!-- Tab Content Area -->
        <transition name="fade-tab" mode="out-in">

          <!-- Multi-event view -->
          <div v-if="activeTrackData.isMultiCard" :key="activeTab + '-multi'" class="multi-events-grid">
            <div
              v-for="(ev, idx) in activeTrackData.events"
              :key="idx"
              class="event-sub-card"
            >
              <!-- Card Image on Top -->
              <div class="event-card-img-wrap" v-if="ev.image">
                <img :src="ev.image" :alt="ev.title" class="event-card-img" loading="lazy" />
              </div>

              <!-- Card Content -->
              <div class="event-card-body">
                <h4 class="event-card-title">{{ ev.title }}</h4>

                <!-- Meta Row -->
                <div class="event-card-meta">
                  <div class="meta-badge-item" v-if="ev.date">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="meta-badge-svg">
                      <rect x="2.5" y="3.5" width="15" height="14" rx="2.5" stroke="#1BDB86" stroke-width="1.8"/>
                      <path d="M6.5 2v3M13.5 2v3" stroke="#1BDB86" stroke-width="1.8" stroke-linecap="round"/>
                      <path d="M2.5 7.5h15" stroke="#1BDB86" stroke-width="1.8"/>
                    </svg>
                    <span>{{ ev.date }}</span>
                  </div>

                  <div class="meta-badge-item" v-if="ev.time">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="meta-badge-svg">
                      <circle cx="10" cy="10" r="7" stroke="#1BDB86" stroke-width="1.8"/>
                      <path d="M10 6v4l2.5 2.5" stroke="#1BDB86" stroke-width="1.8" stroke-linecap="round"/>
                    </svg>
                    <span>{{ ev.time }}</span>
                  </div>

                  <div class="meta-badge-item" v-if="ev.venue">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="meta-badge-svg">
                      <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="#1BDB86" stroke-width="1.8"/>
                      <circle cx="10" cy="7" r="2" fill="#1BDB86"/>
                    </svg>
                    <span>{{ ev.venue }}</span>
                  </div>
                </div>

                <!-- Description -->
                <p class="event-card-desc">{{ ev.desc }}</p>

                <!-- Bullets List -->
                <div class="event-bullets-list" v-if="ev.bullets && ev.bullets.length">
                  <div class="event-bullet-item" v-for="(b, bi) in ev.bullets" :key="bi">
                    <div class="event-bullet-icon">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#0B0F13" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <span class="event-bullet-text">{{ b }}</span>
                  </div>
                </div>

                <!-- Ideal for Box -->
                <div class="event-ideal-for-box" v-if="ev.idealFor">
                  <div class="ideal-accent-line"></div>
                  <div class="ideal-for-text-group">
                    <span class="ideal-for-tag">{{ t('summits.idealFor') }}</span>
                    <p class="ideal-for-content">{{ ev.idealFor }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Showcase View -->
          <div v-else :key="activeTab + '-single'" class="content-card">
            <!-- Left image with hover overlay -->
            <div class="single-image-wrap" :class="{ 'has-overlay': hasHoverOverlay }">
              <img :src="activeTrackData.image" :alt="activeTrackData.title" class="single-track-img" />
              <!-- Hover Overlay -->
              <div v-if="hasHoverOverlay" class="event-card-hover-overlay">
                <div class="hover-overlay-top">
                  <h4 class="hover-overlay-title">{{ activeTrackData.cardTitle || activeTrackData.title }}</h4>
                  <p class="hover-overlay-desc">{{ activeTrackData.cardSubtitle || activeTrackData.description }}</p>
                </div>
                <button class="hover-register-btn" @click="scrollToRegister">
                  {{ t('summits.attendBtn') }}
                </button>
              </div>
            </div>

            <!-- Right content -->
            <div class="right-content">
              <p class="track-desc">{{ activeTrackData.description }}</p>

              <!-- Bullets with green checkmark -->
              <div class="bullets-list">
                <div class="bullet-item" v-for="(bullet, i) in activeTrackData.bullets" :key="i">
                  <div class="check-circle-icon">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#0B0F13" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="bullet-text">{{ bullet }}</p>
                </div>
              </div>

              <!-- Ideal for box -->
              <div class="ideal-for-box" v-if="activeTrackData.idealFor">
                <div class="ideal-accent"></div>
                <p class="ideal-text">
                  <strong class="ideal-highlight">{{ t('summits.idealFor') }}</strong> {{ activeTrackData.idealFor }}
                </p>
              </div>
            </div>
          </div>

        </transition>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

import enterpriseImg from '@/assets/images/ffadb69d87e61db3d1a80583155ff77a5538f32c.png'
import serviceImg from '@/assets/images/2f2cf6a72bbf241d8deb2c1c03ca8bb140f8c6e5.png'
import gamedevImg from '@/assets/images/863f8e03364a99d22061c9a9091478065d3e50fd.png'
import aiImg from '@/assets/images/04c76006732b964d1725bead9842db8d9927fc37.png'

// Multi-card track images (matching Image 2)
import trackStartupSummitImg from '@/assets/images/track-startup-summit.png'
import trackStartupBlinkImg from '@/assets/images/track-startupblink-awards.png'
import trackStartupWorldCupImg from '@/assets/images/track-startup-worldcup.png'
import trackIgnyteImg from '@/assets/images/track-ignyte.png'
import trackTaqdimotImg from '@/assets/images/track-taqdimot.png'

import trackUzbekJapanImg from '@/assets/images/track-uzbek-japan.png'
import trackOtsForumImg from '@/assets/images/track-ots-forum.png'
import trackMiddleEastImg from '@/assets/images/track-middle-east.png'
import trackSabriyaImg from '@/assets/images/track-sabriya.png'
import trackAwsImg from '@/assets/images/track-aws.png'

const { t } = useI18n()

const activeTab = ref('enterprise')

const tabs = [
  { id: 'enterprise', labelKey: 'summits.tabEnterprise' },
  { id: 'startup', labelKey: 'summits.tabStartup' },
  { id: 'service', labelKey: 'summits.tabOutsourcing' },
  { id: 'bridge', labelKey: 'summits.tabGlobal' },
  { id: 'gamedev', labelKey: 'summits.tabGamedev' },
  { id: 'ai', labelKey: 'summits.tabAi' },
]

const singleImages = {
  enterprise: enterpriseImg,
  service: serviceImg,
  gamedev: gamedevImg,
  ai: aiImg
}

const multiImages = {
  startup: [
    trackStartupSummitImg,
    trackStartupBlinkImg,
    trackStartupWorldCupImg,
    trackIgnyteImg,
    trackTaqdimotImg
  ],
  bridge: [
    trackUzbekJapanImg,
    trackOtsForumImg,
    trackMiddleEastImg,
    trackSabriyaImg,
    trackAwsImg
  ]
}

const activeTrackData = computed(() => {
  const currentKey = activeTab.value
  const raw = t(`summits.tracks.${currentKey}`)
  if (!raw || typeof raw !== 'object') {
    // Fallback default details if not nested in locales
    const defaultData = {
      enterprise: {
        title: 'ENTERPRISE UZBEKISTAN SUMMIT',
        date: 'Sept 22, 2026',
        time: '10:00 - 18:00',
        location: 'CAEx Main Hall',
        description: 'Exclusive sovereign legal zone, common law principles, regulatory sandbox for international FinTech, AI, and enterprise tech ventures.',
        bullets: [
          'English common law jurisdiction & independent international commercial courts',
          '0% Corporate, Dividend, and Property tax regimes for registered entities',
          'Seamless capital repatriation with global banking integrations'
        ],
        idealFor: 'Multinational Corporations, Enterprise Founders, FinTech Institutions'
      },
      gamedev: {
        title: 'GAMEDEV & CREATIVE SUMMIT',
        date: 'Sept 24, 2026',
        time: '11:00 - 17:30',
        location: 'CAEx Hall B',
        description: 'Connecting top regional game developers, publishers, 3D studios, and international gaming accelerators.',
        bullets: [
          'Direct publishing deals and angel investments for regional studios',
          'Unreal Engine 5 and generative AI workflows in gaming showcase',
          'Talent scouting & international outsourcing pipeline'
        ],
        idealFor: 'Game Developers, 3D Artists, Studio Founders, Publishers'
      },
      ai: {
        title: 'AI NATIVE UZBEKISTAN',
        date: 'Sept 25, 2026',
        time: '10:00 - 18:00',
        location: 'CAEx Main Stage',
        description: 'The frontier artificial intelligence conference showcasing national supercomputing clusters, LLM research, and AI-driven automation.',
        bullets: [
          'High-performance GPU cluster compute subsidies for AI startups',
          'State data sandbox access for training sovereign AI models',
          'Direct VC funding rounds for AI native seed and series A ventures'
        ],
        idealFor: 'AI Researchers, Machine Learning Engineers, DeepTech Founders, VC Funds'
      },
      service: {
        title: 'IT OUTSOURCING & SERVICE COMPANIES',
        date: 'Sept 23, 2026',
        time: '09:30 - 17:00',
        location: 'CAEx Hall A',
        description: 'Scale your engineering and BPO outsourcing operations with zero tax rates, state talent pipelines, and Zero-Risk programs.',
        bullets: [
          '100% tax incentives & Zero-Risk soft-landing package',
          'Access to 20,000+ bilingual software engineers and developers annually',
          'High-speed redundant international internet backbone'
        ],
        idealFor: 'BPO & IT Service Companies, Outsourcing Executives, Regional Directors'
      }
    }
    const current = defaultData[currentKey] || {
      title: 'ICTWEEK TRACK',
      date: 'Sept 22–26, 2026',
      time: '10:00 - 18:00',
      location: 'CAEx, Tashkent',
      description: 'Explore dedicated summits, keynotes, and high-impact international networking opportunities.',
      bullets: [
        'World-class keynote speakers and government delegates',
        'Direct business matchmaking and B2B matchmaking lounges',
        'International investor summits and demo days'
      ],
      idealFor: 'Tech Founders, C-Level Executives, Investors'
    }
    return {
      ...current,
      isMultiCard: false,
      image: singleImages[currentKey] || enterpriseImg
    }
  }

  const isMulti = currentKey === 'startup' || currentKey === 'bridge'
  if (isMulti) {
    const images = multiImages[currentKey] || []
    return {
      ...raw,
      isMultiCard: true,
      events: (raw.events || []).map((ev, i) => ({
        ...ev,
        image: images[i]
      }))
    }
  } else {
    return {
      ...raw,
      isMultiCard: false,
      image: singleImages[currentKey]
    }
  }
})

const hasHoverOverlay = computed(() => activeTab.value === 'enterprise' || activeTab.value === 'service')

function scrollToRegister() {
  const el = document.getElementById('register')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.summit-section {
  width: 100%;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.summit-card {
  background: rgba(10, 16, 24, 0.68);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px 48px 48px 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

/* Tab Bar with ALL CAPS uppercase tabs */
.tab-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tab-btn {
  height: 42px;
  padding: 8px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  background: #141A1F;
  color: #8E9CA8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.tab-btn.active {
  background: #83FFC1;
  color: #0A1116;
  font-weight: 800;
  border-color: transparent;
}

.tab-btn:not(.active):hover {
  background: #1A2229;
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.16);
}

/* Title Block: CENTERED and ALL-CAPS matching Image 2 */
.title-block {
  text-align: center;
  width: 100%;
}

.summit-title {
  font-family: 'Manrope', sans-serif;
  font-size: 44px;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.15;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Metadata Bar matching Image 2 */
.meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 28px;
  height: 52px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #FFFFFF;
  white-space: nowrap;
}

.meta-icon {
  flex-shrink: 0;
}

.meta-sep {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

/* Single Showcase Content Card matching GameGap & AI Native Images */
.content-card {
  display: flex;
  gap: 32px;
  background: #0E1419;
  border-radius: 20px;
  border: 1px solid rgba(27, 219, 134, 0.22);
  padding: 28px 32px;
  align-items: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.single-image-wrap {
  flex: 0 0 440px;
  height: 295px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  background: #080D11;
}

.single-image-wrap.has-overlay {
  cursor: pointer;
}

.single-track-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
}

.track-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.55;
  margin: 0;
}

.bullets-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bullet-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.check-circle-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1BDB86;
  color: #0B0F13;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.bullet-text {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.45;
  margin: 0;
}

.ideal-for-box {
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(27, 219, 134, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(27, 219, 134, 0.28);
  padding: 12px 18px;
  margin-top: 4px;
}

.ideal-accent {
  width: 3px;
  height: 22px;
  border-radius: 2px;
  background: #1BDB86;
  flex-shrink: 0;
}

.ideal-text {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.45;
  margin: 0;
}

.ideal-highlight {
  color: #FFFFFF;
  font-weight: 700;
}

/* Multi Events Grid */
.multi-events-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}

.event-sub-card:nth-child(1),
.event-sub-card:nth-child(2) {
  grid-column: span 3;
}

.event-sub-card:nth-child(3),
.event-sub-card:nth-child(4),
.event-sub-card:nth-child(5) {
  grid-column: span 2;
}

.event-sub-card {
  background: 
    linear-gradient(180deg, rgba(14, 20, 27, 0.96) 0%, rgba(10, 16, 22, 0.96) 100%) padding-box,
    linear-gradient(135deg, #155B7F 0%, #1BDB86 100%) border-box;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.event-sub-card:hover {
  background: 
    linear-gradient(180deg, rgba(18, 26, 35, 0.96) 0%, rgba(13, 21, 28, 0.96) 100%) padding-box,
    linear-gradient(135deg, #2481b3 0%, #1BDB86 100%) border-box;
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(27, 219, 134, 0.15);
}

.event-card-img-wrap {
  width: 100%;
  height: 185px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #080D11;
}

.event-card-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(6, 13, 22, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 5;
  box-sizing: border-box;
}

.single-image-wrap.has-overlay:hover .event-card-hover-overlay {
  opacity: 1;
  pointer-events: auto;
}

.hover-overlay-top {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  transform: translateY(-8px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.single-image-wrap.has-overlay:hover .hover-overlay-top {
  transform: translateY(0);
}

.hover-overlay-title {
  font-family: 'Manrope', sans-serif;
  font-size: 19px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.hover-overlay-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.82);
  margin: 0;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hover-register-btn {
  align-self: flex-start;
  padding: 10px 22px;
  background: #83FFC1;
  color: #060d15;
  border: none;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transform: translateY(8px);
  transition: background 0.2s ease, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(131, 255, 193, 0.25);
}

.single-image-wrap.has-overlay:hover .hover-register-btn {
  transform: translateY(0);
}

.hover-register-btn:hover {
  background: #a8ffd4;
  transform: scale(1.04) !important;
  box-shadow: 0 6px 18px rgba(131, 255, 193, 0.35);
}

.event-sub-card:nth-child(1) .event-card-img-wrap,
.event-sub-card:nth-child(2) .event-card-img-wrap {
  height: 220px;
}

.event-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.event-sub-card:hover .event-card-img {
  transform: scale(1.04);
}

.event-card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.event-card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;
}

.event-card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.meta-badge-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Manrope', sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  color: #8E9CA8;
  white-space: nowrap;
}

.meta-badge-svg {
  flex-shrink: 0;
}

.event-card-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: #8E9CA8;
  line-height: 1.5;
  margin: 0;
}

.event-bullets-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.event-bullet-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.event-bullet-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1BDB86;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.event-bullet-text {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.45;
}

.event-ideal-for-box {
  margin-top: auto;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(27, 219, 134, 0.28);
  background: rgba(27, 219, 134, 0.03);
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.ideal-accent-line {
  width: 2.5px;
  height: 16px;
  background: #1BDB86;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 2px;
}

.ideal-for-text-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ideal-for-tag {
  font-family: 'Manrope', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  color: #1BDB86;
  text-transform: capitalize;
  margin: 0;
}

.ideal-for-content {
  font-family: 'Manrope', sans-serif;
  font-size: 12.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;
}

/* Transitions */
.fade-tab-enter-active, .fade-tab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-tab-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-tab-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ==========================================================================
   Responsive Styling (Desktop >= 1025px preserved completely)
   ========================================================================== */
@media (max-width: 1024px) and (min-width: 768px) {
  .summit-card {
    padding: 36px 32px 40px 32px;
    gap: 26px;
  }
  .summit-title {
    font-size: 36px;
  }
  .tab-btn {
    font-size: 12.5px;
    padding: 7px 18px;
    height: 38px;
  }
  .content-card {
    flex-direction: column;
    padding: 24px;
    gap: 20px;
  }
  .single-image-wrap {
    flex: none;
    width: 100%;
    height: 280px;
  }
  .multi-events-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .event-sub-card:nth-child(1),
  .event-sub-card:nth-child(2),
  .event-sub-card:nth-child(3),
  .event-sub-card:nth-child(4),
  .event-sub-card:nth-child(5) {
    grid-column: span 1;
  }
  .event-sub-card:nth-child(5) {
    grid-column: span 2;
  }
  .event-card-img-wrap {
    height: 180px;
  }
}

@media (max-width: 767px) {
  .page-container {
    padding: 0 16px;
  }
  .summit-card {
    padding: 24px 16px;
    gap: 20px;
    border-radius: 18px;
  }
  .tab-bar {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
    margin: 0 -8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .tab-bar::-webkit-scrollbar {
    display: none;
  }
  .tab-btn {
    font-size: 11.5px;
    padding: 6px 14px;
    height: 34px;
    flex-shrink: 0;
  }
  .summit-title {
    font-size: 24px;
    line-height: 1.2;
  }
  .meta-bar {
    flex-direction: column;
    height: auto;
    gap: 8px;
    padding: 12px 14px;
    align-items: flex-start;
  }
  .meta-item {
    font-size: 13.5px;
  }
  .meta-sep {
    display: none;
  }
  .content-card {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
  }
  .single-image-wrap {
    flex: none;
    width: 100%;
    height: 200px;
  }
  .track-desc {
    font-size: 14px;
  }
  .bullet-text {
    font-size: 13px;
  }
  .ideal-for-box {
    padding: 10px 14px;
  }
  .ideal-text {
    font-size: 13px;
  }
  .multi-events-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .event-sub-card {
    padding: 14px;
    border-radius: 16px;
    gap: 14px;
  }
  .event-sub-card:nth-child(1),
  .event-sub-card:nth-child(2),
  .event-sub-card:nth-child(3),
  .event-sub-card:nth-child(4),
  .event-sub-card:nth-child(5) {
    grid-column: span 1;
  }
  .event-sub-card .event-card-img-wrap {
    height: 160px !important;
  }
  .event-card-title {
    font-size: 16px;
  }
  .event-card-meta {
    gap: 8px;
  }
  .meta-badge-item {
    font-size: 11.5px;
  }
  .event-card-desc {
    font-size: 12.5px;
  }
}
</style>
