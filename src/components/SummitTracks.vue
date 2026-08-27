<template>
  <!--
    Figma: Enterprise Uzbekistan Summit - Premium Dark (259:3986 & 118:7058)
    Matching user screenshot Image 2 exactly
  -->
  <section id="summit-tracks" class="summit-section">
    <div class="page-container">
      <div class="summit-card">

        <!-- Tab Bar: 6 tabs with ALL-CAPS uppercase pills -->
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

        <!-- Main Title: CENTERED & ALL CAPS matching Image 2 -->
        <div class="title-block">
          <h2 class="summit-title">{{ activeTrackData.title.toUpperCase() }}</h2>
        </div>

        <!-- Metadata Bar matching Image 2 (green icons + 3 balanced columns) -->
        <div class="meta-bar" v-if="!activeTrackData.isMultiCard">
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

          <!-- MULTI-EVENT VIEW: For Startup & VC and Global Bridge (Row 1: 2 cards, Row 2: 3 cards matching Image 2) -->
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

                <!-- Meta Row: Calendar, Clock, Pin with green icons -->
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

                <!-- Bullets List matching Figma Image 2 -->
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

                <!-- Ideal for Box matching Figma Image 2 -->
                <div class="event-ideal-for-box" v-if="ev.idealFor">
                  <div class="ideal-accent-line"></div>
                  <div class="ideal-for-text-group">
                    <span class="ideal-for-tag">Ideal for</span>
                    <p class="ideal-for-content">{{ ev.idealFor }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SINGLE SHOWCASE VIEW matching GameGap & AI Native Figma Images -->
          <div v-else :key="activeTab + '-single'" class="content-card">
            <!-- Left image -->
            <div class="single-image-wrap">
              <img :src="activeTrackData.image" :alt="activeTrackData.title" class="single-track-img" />
            </div>

            <!-- Right content matching Figma Images -->
            <div class="right-content">
              <p class="track-desc">{{ activeTrackData.description }}</p>

              <!-- Bullets with green checkmark circle matching Figma -->
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

              <!-- Ideal for box matching Figma Images -->
              <div class="ideal-for-box">
                <div class="ideal-accent"></div>
                <p class="ideal-text">
                  <strong class="ideal-highlight">Ideal for:</strong> {{ activeTrackData.idealFor }}
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

const activeTab = ref('service')

const tabs = [
  { id: 'enterprise', labelKey: 'summits.tabEnterprise' },
  { id: 'startup', labelKey: 'summits.tabStartup' },
  { id: 'service', labelKey: 'summits.tabOutsourcing' },
  { id: 'bridge', labelKey: 'summits.tabGlobal' },
  { id: 'gamedev', labelKey: 'summits.tabGamedev' },
  { id: 'ai', labelKey: 'summits.tabAi' },
]

// Text exactly matching Image 2 and Figma 124:7171 / 118:7058
const trackData = {
  enterprise: {
    isMultiCard: false,
    title: 'Enterprise Uzbekistan Summit',
    cardTitle: 'Enterprise Uzbekistan Summit',
    cardSubtitle: 'Legally protected testing environment for new business models and frontier technologies.',
    date: 'September 23, 2026',
    time: '10:00 - 12:00',
    location: 'CAEx, Hall 1',
    image: enterpriseImg,
    description: "Discover Enterprise Uzbekistan — the country's first dedicated jurisdiction built for global technology business.",
    bullets: [
      "Running on elements of English and Welsh law, it offers a legal environment that locks in the day you enter and remains guaranteed through 2100 — for IT exporters, data centers, startups, and infrastructure and institutional investors alike.",
      "On September 23, Enterprise Uzbekistan takes the stage at ICT Week to open the framework up in person. Meet the people building it, see how it's structured, and get a first look at what it means to operate inside it.",
      "Join us at CAEx, Main Hall — come see it before everyone else does.",
    ],
    idealFor: 'global tech companies, investors, legal and financial advisors, and government officials',
  },
  startup: {
    isMultiCard: true,
    title: 'Startup & Venture Summit',
    events: [
      {
        title: 'Startup & Venture Summit',
        image: trackStartupSummitImg,
        date: 'Sep 22, 2026',
        time: '14:00 - 17:00',
        venue: 'CAEX, Main Hall',
        desc: "The flagship gathering of Central Asia's startup ecosystem — bringing together founders, investors, and government leaders to discuss the region's next stage of hyper-growth.",
        bullets: [
          'Keynote addresses from leading global venture capitalists',
          'Panels on emerging tech trends and fundraising strategies',
          'High-impact networking with 500+ investors and founders',
        ],
        idealFor: 'Founders, VCs, angel investors, accelerators, and startup executives.',
      },
      {
        title: 'Startup Blink Awards',
        image: trackStartupBlinkImg,
        date: 'Sep 23, 2026',
        time: '16:00 - 18:00',
        venue: 'CAEX, Hall 3',
        desc: 'An official award ceremony celebrating top-performing startup ecosystems and ecosystem builders shaping the global innovation landscape.',
        bullets: [
          'Presentation of Global Startup Ecosystem Index 2026',
          'Recognition of fastest-growing regional startup hubs',
          'Award ceremony for outstanding tech innovators',
        ],
        idealFor: 'Ecosystem builders, policymakers, researchers, and media.',
      },
      {
        title: 'Startup World Cup - Uzbekistan Regional Final',
        image: trackStartupWorldCupImg,
        date: 'Sep 24, 2026',
        time: '10:00 - 17:00',
        venue: 'CAEX, Main Hall',
        desc: "The regional final of the world's largest startup competition, where top regional startups compete for a spot in the global final in Silicon Valley and a share of $1M+ in investment.",
        bullets: [
          'Top 10 shortlisted startups pitching live on stage',
          'International jury of top-tier Silicon Valley VCs',
          'Winner secures ticket to San Francisco Grand Finale',
        ],
        idealFor: 'Early and growth-stage tech startups, investors, and accelerators.',
      },
      {
        title: 'Ignyte Challenge',
        image: trackIgnyteImg,
        date: 'Sep 25, 2026',
        time: '11:00 - 13:00',
        venue: 'CAEX, Hall 3',
        desc: 'A high-energy pitch competition in partnership with DIFC Innovation Hub and IGNYTE connecting ambitious startups with international investors and MENA market entry.',
        bullets: [
          'Direct access to Dubai Future District Fund & DIFC ecosystem',
          'Fast-track incubation and market expansion programs',
          'Cash grants and zero-cost incorporation packages',
        ],
        idealFor: 'Fintech, Web3, AI, and enterprise software startups.',
      },
      {
        title: 'Taqdimot (Startup Pitches)',
        image: trackTaqdimotImg,
        date: 'Sep 25, 2026',
        time: '14:00 - 17:00',
        venue: 'CAEX, Hall 2',
        desc: 'Live pitch sessions showcasing promising global startups to investors, corporates, and ecosystem partners, serving as a high-velocity matchmaking platform.',
        bullets: [
          'Curated 3-minute pitches + 2-minute investor Q&A',
          '1-on-1 investor matchmaking lounge',
          'Instant term sheet and deal-making opportunities',
        ],
        idealFor: 'Angel investors, family offices, syndicate leads, and founders.',
      },
    ],
  },
  service: {
    isMultiCard: false,
    title: 'Tech & Service Outsourcing Conference',
    cardTitle: 'Regulatory Sandbox',
    cardSubtitle: 'Legally protected testing environment for new business models and frontier technologies.',
    date: 'September 23, 2026',
    time: '12:00-14:00',
    location: 'CAEx, Hall 3',
    image: serviceImg,
    description: 'Explore the future of global services and outsourcing from the heart of Central Asia. Discover why Uzbekistan is the next big outsourcing destination for ITES companies and investment.',
    bullets: [
      'Insights into 0% tax breaks for companies',
      'Access a multilingual, tech-savvy workforce of 21 million+',
      'Special IT visa and 3-year zero-cost office support program',
    ],
    idealFor: 'outsourcing companies, IT leaders, global service providers, investors, and government officials',
  },
  bridge: {
    isMultiCard: true,
    title: 'Global Bridge',
    events: [
      {
        title: 'Uzbek-Japan Digital Community Forum',
        image: trackUzbekJapanImg,
        date: 'September 22, 2026',
        time: '15:00 - 18:00',
        venue: 'CAEX, Hall 3',
        desc: 'Explore new opportunities for collaboration between Uzbekistan and Japan in the ICT sector, from joint software development to talent exchange and market entry support.',
        bullets: [
          "Insights into Japan's approach to IT outsourcing partnerships",
          'Access to a growing pool of Uzbek IT talent for Japanese companies',
          'Government-backed support for bilateral tech initiatives',
        ],
        idealFor: 'Japanese tech companies, IT leaders, government officials and investors',
      },
      {
        title: 'OTS Technology forum',
        image: trackOtsForumImg,
        date: 'September 23, 2026',
        time: '12:00 - 14:00',
        venue: 'CAEX, Hall 2',
        desc: 'The forum unites key stakeholders from the Organization of Turkic States (OTS) to advance cooperation in digital innovation and startup ecosystems.',
        bullets: [
          'Government-led innovation ecosystem insights',
          'Panel on startup support and cross-border growth',
          'Strategic networking across the OTS innovation ecosystem',
        ],
        idealFor: 'Government representatives, technology parks, innovation agencies, startup ecosystem leaders, investors, founders',
      },
      {
        title: 'Uzbekistan - Middle east tech summit',
        image: trackMiddleEastImg,
        date: 'Sep 24, 2026',
        time: '14:00 - 16:30',
        venue: 'IT Park Complex',
        desc: "The Summit connects Uzbekistan's tech ecosystem with Middle Eastern investors to expand IT exports and unlock new growth in the MENA region.",
        bullets: [
          'Investment into Uzbekistan IT and digital infrastructure sector',
          'Market entry of Middle Eastern technology companies into Central Asia',
          'Expansion of Uzbek startups and IT service companies into GCC markets',
        ],
        idealFor: 'Women entrepreneurs, developers, investors and ecosystem partners',
      },
      {
        title: 'Sabriya: Women in Digital Economy',
        image: trackSabriyaImg,
        date: 'Sep 24, 2026',
        time: '14:00 - 16:30',
        venue: 'CAEX, Hall 3',
        desc: "Discover Sabriya — IT Park's initiative empowering women to lead and grow in the digital economy across Uzbekistan and beyond.",
        bullets: [
          'Insights into funding and mentorship programs for women-led startups',
          'Access to a growing network of female founders and tech leaders',
          'Practical guidance on career growth in tech',
        ],
        idealFor: 'Women entrepreneurs, developers, investors and ecosystem partners',
      },
      {
        title: 'AWS Community Day',
        image: trackAwsImg,
        date: 'Sep 25, 2026',
        time: '10:00 - 17:00',
        venue: 'CAEX, Main Hall',
        desc: 'Join a full day of cloud technology talks and hands-on sessions led by AWS experts and the regional developer community.',
        bullets: [
          'Insights into the latest AWS services and cloud architecture',
          'Access to real-world case studies from cloud practitioners',
          'Networking with developers, architects and DevOps engineers',
        ],
        idealFor: 'Developers, cloud architects, DevOps engineers and IT leaders',
      },
    ],
  },
  gamedev: {
    isMultiCard: false,
    title: 'GameGap: Gamedev Conference',
    cardTitle: 'GameGap: Gamedev Conference',
    cardSubtitle: 'Central Asia’s premier game development and interactive entertainment forum.',
    date: 'September 25, 2026',
    time: '14:00 - 17:00',
    location: 'CAEx, Hall 3',
    image: gamedevImg,
    description: "Discover the future of gaming from the heart of Central Asia. Explore why Uzbekistan's GameDev ecosystem is becoming a key hub for studios, publishers and investors in the region.",
    bullets: [
      'Insights from world-class gaming industry experts',
      'Access to a growing regional talent pool and gaming market',
      'Networking with publishers, investors and studio founders',
    ],
    idealFor: 'game developers, publishers, investors, gaming executives and industry professionals',
  },
  ai: {
    isMultiCard: false,
    title: 'AI NATIVE: IDEAS TO INNOVATION',
    cardTitle: 'AI NATIVE: IDEAS TO INNOVATION',
    cardSubtitle: 'Frontier artificial intelligence and machine learning applications in emerging markets.',
    date: 'September 24, 2026',
    time: '10:00 – 12:15',
    location: 'CAEx, Hall 3',
    image: aiImg,
    description: 'Step into a world where AI thinks, speaks, creates, and moves — from intelligent agents and LLMs to cloud technologies and real-world robotics.',
    bullets: [
      'Experience LLMs and cloud AI in action with live, hands-on demos',
      'See robotics on stage — from working prototypes to AI built for real jobs',
      'Step into the arena yourself with “Join the AI Game” and discover study programs, career opportunities, and hackathons',
    ],
    idealFor: 'AI developers, tech founders, robotics innovators, enterprise IT leaders, and students',
  },
}

const activeTrackData = computed(() => trackData[activeTab.value] || trackData.enterprise)

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

/* Solid green circle with dark checkmark matching Figma */
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

/* Ideal for Box matching GameGap & AI Native Images */
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

/* Multi Events Grid: Row 1 has 2 cards (50% each), Row 2 has 3 cards (33.33% each) matching Figma Image 2 */
.multi-events-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}

/* Row 1: 2 cards across (each takes 3 columns = 50%) */
.event-sub-card:nth-child(1),
.event-sub-card:nth-child(2) {
  grid-column: span 3;
}

/* Row 2: 3 cards across (each takes 2 columns = 33.33%) */
.event-sub-card:nth-child(3),
.event-sub-card:nth-child(4),
.event-sub-card:nth-child(5) {
  grid-column: span 2;
}

/* Event Sub Card with Figma Gradient Border (Linear Gradient from #155B7F to #1BDB86) */
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

/* Event Bullets List matching Figma Image 2 */
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

/* Event Ideal For Box matching Figma Image 2 */
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

@media (max-width: 1024px) {
  .content-card {
    flex-direction: column;
    padding: 24px;
  }
  .single-image-wrap {
    flex: none;
    width: 100%;
    height: 260px;
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
  .event-card-img-wrap,
  .event-sub-card:nth-child(1) .event-card-img-wrap,
  .event-sub-card:nth-child(2) .event-card-img-wrap,
  .event-sub-card:nth-child(3) .event-card-img-wrap,
  .event-sub-card:nth-child(4) .event-card-img-wrap,
  .event-sub-card:nth-child(5) .event-card-img-wrap {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .summit-card {
    padding: 28px 20px;
    gap: 20px;
  }
  .summit-title {
    font-size: 30px;
  }
  .tab-btn {
    font-size: 12px;
    padding: 6px 14px;
    height: auto;
  }
  .meta-bar {
    flex-direction: column;
    height: auto;
    gap: 8px;
    padding: 12px;
  }
  .meta-sep {
    display: none;
  }
  .multi-events-grid {
    grid-template-columns: 1fr;
  }
  .event-sub-card:nth-child(1),
  .event-sub-card:nth-child(2),
  .event-sub-card:nth-child(3),
  .event-sub-card:nth-child(4),
  .event-sub-card:nth-child(5) {
    grid-column: span 1;
  }
  .event-card-meta {
    gap: 8px;
  }
}
</style>
