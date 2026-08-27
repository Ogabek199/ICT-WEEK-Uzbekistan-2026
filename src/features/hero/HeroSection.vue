<template>
  <section id="home" class="hero-section">
    <div class="page-container">
      <div class="hero-heading-block">
        <h1 class="hero-title">
          {{ t('hero.titleLine1') }} <br />
          {{ t('hero.titleLine2') }}
        </h1>
      </div>

      <div class="hero-media-grid">
        <div class="video-showcase-card glass-panel" :class="{ 'is-video-playing': isPlaying }" @click="toggleInlineVideo">
          <!-- Inline Video (only mounted on user interaction) -->
          <video
            v-if="isPlaying"
            ref="inlineVideoRef"
            class="video-bg-media"
            playsinline
            loop
            autoplay
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @ended="isPlaying = false"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
            <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          </video>

          <img 
            v-show="!isPlaying"
            src="/images/hero-caex-balloon.webp" 
            srcset="/images/hero-caex-balloon-sm.webp 768w, /images/hero-caex-balloon.webp 1200w"
            sizes="(max-width: 768px) 100vw, 700px"
            alt="CAEx Aerial View - ICT WEEK 2026" 
            class="video-bg-img"
            width="640"
            height="360"
            fetchpriority="high"
          />
          <div class="video-overlay" v-show="!isPlaying"></div>
          
          <div class="play-btn-circle" :class="{ 'is-playing': isPlaying }" @click.stop="toggleInlineVideo" role="button" tabindex="0" aria-label="Play video">
            <div class="play-btn-inner">
              <svg v-if="!isPlaying" width="18" height="18" viewBox="0 0 24 24" fill="#030A12">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="#030A12">
                <rect x="6" y="5" width="4" height="14"></rect>
                <rect x="14" y="5" width="4" height="14"></rect>
              </svg>
            </div>
          </div>

          <div v-if="isPlaying" class="inline-video-bar" @click.stop>
            <button class="video-ctrl-btn" @click="toggleMute" :title="isMuted ? 'Unmute' : 'Mute'" aria-label="Toggle audio">
              <svg v-if="!isMuted" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            </button>
            <button class="video-ctrl-btn" @click="resetToPoster" title="Back to cover" aria-label="Back to cover">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Screen Image (ICT Stage) + Subtitle + Buttons + Countdown -->
        <div class="hero-info-card glass-panel">
          <div class="info-card-content">
            <!-- Screen image -->
            <div class="screen-preview-wrapper">
              <img 
                src="/images/hero-screen-thumb-sm.webp" 
                srcset="/images/hero-screen-thumb-sm.webp 720w, /images/hero-screen-thumb.webp 1200w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="ICTWEEK Stage Presentation" 
                class="screen-thumb-img"
                width="640"
                height="280"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Subtitle -->
            <p class="hero-info-desc">
              {{ t('hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="hero-info-ctas">
              <a href="#register" class="btn-primary hero-main-btn">
                <span>{{ t('hero.registerBtn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a href="#summit-tracks" class="btn-secondary hero-agenda-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{{ t('hero.agendaBtn') }}</span>
              </a>
            </div>

            <!-- Modular Countdown 3-box row -->
            <CountdownTimer />
          </div>
        </div>
      </div>

      <!-- Key Stats / Ecosystem Valuation Bar -->
      <div class="stats-valuation-bar">
        <!-- Far Left: Medal Ribbon (150x150) -->
        <div class="medal-wrapper">
          <img 
            src="@/assets/images/34d40235a885784b968f902082f60ccc6508a418.webp" 
            alt="StartupBlink Country of the Year Medal" 
            class="medal-img"
            width="150"
            height="150"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- 3 Exact Neon Green Border Cards (405px + 332px + 255px) -->
        <div class="stats-cards-row">
          
          <!-- Card 1: $4.3B + #1 Venture Growth (405x108) -->
          <div class="stat-neon-card card-dealroom">
            <div class="badge-year-top">2026</div>

            <div class="card-inner-flex">
              <div class="stat-col stat-col-1">
                <span class="stat-num">$4.3B</span>
                <span class="stat-label">{{ t('hero.stats.dealroomVal') }}</span>
              </div>

              <div class="stat-col stat-col-2">
                <span class="stat-num">#1</span>
                <span class="stat-label">{{ t('hero.stats.dealroomRank') }}</span>
              </div>
            </div>

            <div class="dealroom-logo-box">
              <img 
                src="@/assets/attendee-logos/dealroom.webp" 
                alt="dealroom.co" 
                class="dealroom-logo-img" 
                width="114"
                height="28"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- Card 2: #1 Growth Rate + #1 Startup Hub (332x108) -->
          <div class="stat-neon-card card-startupblink">
            <div class="badge-year-top badge-startupblink">2026</div>

            <div class="card-inner-flex">
              <!-- Mobile-only Medal on the left side of Card 2 matching Image 2 -->
              <img 
                src="@/assets/images/medal-sm.webp" 
                alt="StartupBlink Country of the Year Medal" 
                class="card-medal-mobile" 
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />

              <div class="stat-col stat-col-1">
                <span class="stat-num">#1</span>
                <span class="stat-label">{{ t('hero.stats.startupblinkGrowth') }}</span>
              </div>

              <div class="stat-col stat-col-2">
                <span class="stat-num">#1</span>
                <span class="stat-label">{{ t('hero.stats.startupblinkHub') }}</span>
              </div>
            </div>

            <div class="startupblink-logo-box">
              <img 
                src="@/assets/attendee-logos/startupblink.webp" 
                alt="StartupBlink" 
                class="startupblink-logo-img" 
                width="114"
                height="28"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- Card 3: 2 Fintech Unicorns (255x108) -->
          <div class="stat-neon-card card-unicorns">
            <div class="badge-year-top">2026</div>

            <div class="unicorn-left-group">
              <div class="unicorn-num-row">
                <span class="stat-num">2</span>
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="unicorn-head-svg">
                  <path d="M23.361 9.69342C24.6251 8.28337 29.2059 3.17223 30.5201 1.68559C30.8787 1.27994 30.8601 0.779878 30.4703 0.347871C30.4504 0.325782 30.4285 0.305276 30.4048 0.286559C29.9434 -0.0783558 29.4093 -0.0956966 28.9763 0.239973C27.3885 1.47076 21.9294 5.76083 20.4246 6.94372L19.8711 6.42556L23.7874 2.75845C23.945 2.61085 23.9921 2.38886 23.9068 2.19605C23.8215 2.00316 23.6205 1.87744 23.3976 1.87744C17.1478 1.87744 11.2722 4.15639 6.85299 8.29452C2.43376 12.4326 0 17.9345 0 23.7867C0 24.5829 0.0460031 25.3781 0.137054 26.1671C0.137495 26.1721 0.138083 26.1771 0.138671 26.1821C0.231926 26.9848 0.371846 27.7808 0.55799 28.5645C0.61509 28.805 0.842827 28.9687 1.09548 28.9687C1.13509 28.9687 1.17536 28.9646 1.21563 28.9563C1.51281 28.8944 1.70013 28.6187 1.63399 28.3404C1.50179 27.784 1.39406 27.2209 1.31094 26.6537C3.84214 26.7796 5.55719 27.6631 7.51923 28.6752C10.3913 30.1564 13.9656 32 21.3804 32C21.6848 32 21.9315 31.7689 21.9315 31.4839C21.9315 28.8478 20.5936 27.086 19.1772 25.2207C17.9769 23.6401 16.7358 22.0058 16.2636 19.6984C16.2064 19.4185 15.9176 19.2349 15.6186 19.2886C15.3197 19.3423 15.1238 19.6126 15.181 19.8927C15.6985 22.4208 17.0694 24.2261 18.2789 25.8189C19.542 27.4823 20.6462 28.9362 20.8088 30.9641C14.0707 30.8759 10.8776 29.2288 8.05113 27.771C6.0084 26.7174 4.07223 25.7197 1.18734 25.6152C1.13104 25.0081 1.10224 24.3977 1.10224 23.7867C1.10224 12.7065 10.368 3.61462 22.0251 2.94879L18.7018 6.06065C18.4866 6.2622 18.4866 6.58899 18.7018 6.79048L20.584 8.55291C20.7993 8.75446 21.1482 8.75446 21.3634 8.55291C21.5787 8.35136 21.5787 8.02456 21.3634 7.82308L21.2068 7.67637C22.7915 6.43065 28.013 2.32769 29.6311 1.0722C28.0518 2.85741 22.2509 9.3263 22.1919 9.39201C22.0081 9.59701 22.0221 9.89958 22.2242 10.0888L29.0321 16.4636C29.3007 16.7151 29.4487 17.0496 29.4487 17.4054C29.4487 17.7612 29.3007 18.0957 29.0321 18.3472C28.4773 18.8666 27.575 18.8665 27.0203 18.3472C26.9472 18.2788 26.8551 18.231 26.7544 18.2093L20.4204 16.8425C20.291 16.8146 20.1551 16.8313 20.0377 16.8898C17.9438 17.9333 15.4088 17.5783 13.7299 16.0063C12.0288 14.4134 11.6697 11.9348 12.8566 9.97871C13.007 9.73085 12.9144 9.41582 12.6498 9.27496C12.3851 9.1341 12.0486 9.22095 11.8983 9.46874C10.4669 11.8274 10.8997 14.8159 12.9504 16.7361C13.9492 17.6713 15.2143 18.2634 16.6092 18.4483C17.8878 18.6178 19.2142 18.4198 20.3683 17.8905L26.3627 19.184C26.8372 19.5736 27.4317 19.7684 28.0261 19.7684C28.6727 19.7684 29.3193 19.538 29.8115 19.0771C30.2883 18.6306 30.551 18.0369 30.551 17.4054C30.551 16.7739 30.2883 16.1802 29.8115 15.7337L23.361 9.69342Z" fill="white"/>
                </svg>
              </div>
              <span class="stat-label">{{ t('hero.stats.unicorns') }}</span>
            </div>

            <div class="brands-right-group">
              <div class="brand-line">
                <svg width="95" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5924 11.9524C25.5991 14.3238 24.8537 16.6425 23.4517 18.6176C22.0496 20.5916 20.0527 22.1326 17.7155 23.0439C15.3784 23.9552 12.8045 24.197 10.3203 23.7377C7.83612 23.2783 5.55289 22.1399 3.7602 20.4655C1.96751 18.791 0.745074 16.6562 0.248915 14.3311C-0.248368 12.006 0.0030796 9.59473 0.970703 7.40417C1.93833 5.21257 3.57835 3.33946 5.6831 2.0224C7.78785 0.703229 10.2642 2.40535e-05 12.7955 2.40535e-05C14.4737 -0.00312933 16.1373 0.3038 17.6886 0.903995C19.2399 1.50314 20.651 2.38293 21.8397 3.49292C23.0285 4.60292 23.9714 5.92103 24.6146 7.37264C25.259 8.82425 25.5901 10.3799 25.5912 11.9524H25.5924ZM14.2649 4.15093C13.7867 4.10889 13.2939 4.09207 12.7955 4.09207C12.2971 4.09207 11.8133 4.10889 11.3328 4.15093V10.525H14.2671L14.2649 4.15093ZM21.0349 7.86562C19.9651 7.53767 18.8729 7.28014 17.7649 7.09619V12.4443C17.7649 16.2967 16.016 18.3233 12.8 18.3233C9.5839 18.3233 7.835 16.2967 7.835 12.4443V7.09619C6.72706 7.28119 5.63483 7.53767 4.56506 7.86562V12.4769C4.63578 14.4783 5.53492 16.3756 7.07167 17.7683C8.60842 19.161 10.6638 19.9389 12.8022 19.9389C14.9406 19.9389 16.996 19.16 18.5327 17.7683C20.0695 16.3756 20.9686 14.4783 21.0394 12.4769L21.0349 7.86562Z" fill="white"/>
                  <path d="M66.9513 12.3539C66.9513 13.9075 66.0151 14.6254 64.6187 14.6254C63.2223 14.6254 62.3209 13.9212 62.3209 12.3539V7.22546H59.3125V12.4527C59.3125 15.8584 62.3557 17.1933 64.6423 17.1933C66.9289 17.1933 69.9754 15.8584 69.9754 12.4527V7.22546H66.9671L66.9525 12.3539H66.9513Z" fill="white"/>
                  <path d="M56.7679 9.60627V7.22546H46.9884V9.60627H52.7773L46.7549 14.6328V17.0136H57.1327V14.6328H50.7567L56.7668 9.60627H56.7679Z" fill="white"/>
                  <path d="M85.0394 7.03992C83.1322 7.03992 81.6954 7.7652 80.9848 8.87098C80.2586 7.7652 78.6825 7.03992 77.047 7.03992C73.8309 7.03992 72.1572 8.95928 72.1572 11.3296V17.0141H75.1667V11.7311C75.1667 10.5969 75.8021 9.60047 77.2614 9.60047C77.5589 9.58365 77.8563 9.62674 78.1347 9.7266C78.4131 9.82646 78.6657 9.97992 78.8756 10.1775C79.0855 10.3751 79.2483 10.6127 79.3538 10.8744C79.4582 11.1362 79.5031 11.4147 79.484 11.6933V17.0183H82.4935V11.6891C82.4935 10.5517 83.2086 9.59731 84.6521 9.59731C86.0957 9.59731 86.7928 10.5938 86.7928 11.7279V17.0109H89.8012V11.3369C89.8012 8.96663 88.2476 7.04727 85.0136 7.04727L85.0394 7.03992Z" fill="white"/>
                  <path d="M41.7619 12.3539C41.7619 13.9075 40.8257 14.6254 39.4416 14.6254C38.0575 14.6254 37.1326 13.9212 37.1326 12.3539V7.22546H34.123V12.4527C34.123 15.8584 37.155 17.1933 39.4528 17.1933C41.7507 17.1933 44.7748 15.8584 44.7748 12.4527V7.22546H41.7653L41.7619 12.3539Z" fill="white"/>
                </svg>
              </div>
              <div class="brand-line">
                <img 
                  src="@/assets/attendee-logos/tbc-bank.webp" 
                  alt="TBC Bank" 
                  class="tbc-bank-logo-img" 
                  width="95"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useI18n } from '@/composables/useI18n'
import CountdownTimer from './components/CountdownTimer.vue'

const { t } = useI18n()

// Inline video state
const isPlaying = ref(false)
const isMuted = ref(false)
const inlineVideoRef = ref(null)

const toggleInlineVideo = async () => {
  if (!isPlaying.value) {
    isPlaying.value = true
    await nextTick()
    if (inlineVideoRef.value) {
      inlineVideoRef.value.play().catch(() => {
        inlineVideoRef.value.muted = true
        isMuted.value = true
        inlineVideoRef.value.play().catch(err => {
          console.warn('Video playback error:', err)
        })
      })
    }
  } else {
    if (inlineVideoRef.value) {
      inlineVideoRef.value.pause()
    }
    isPlaying.value = false
  }
}

const toggleMute = () => {
  if (!inlineVideoRef.value) return
  inlineVideoRef.value.muted = !inlineVideoRef.value.muted
  isMuted.value = inlineVideoRef.value.muted
}

const resetToPoster = () => {
  if (!inlineVideoRef.value) return
  inlineVideoRef.value.pause()
  inlineVideoRef.value.currentTime = 0
  isPlaying.value = false
}
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 0;
}

/* Centered Title */
.hero-heading-block {
  text-align: center;
  margin-bottom: 36px;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #ffffff;
}

/* Hero Media Grid (Exact proportion matching screenshot) */
.hero-media-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
  align-items: stretch;
}

/* Left Video Card */
.video-showcase-card {
  position: relative;
  height: 485px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.video-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 2;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-showcase-card:hover .video-bg-img {
  transform: scale(1.03);
}

.video-bg-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
  background: #000;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,8,14,0.3) 100%);
  pointer-events: none;
  z-index: 3;
}

/* Circular Play Button */
.play-btn-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(18, 27, 38, 0.15);
  backdrop-filter: blur(24.98px);
  -webkit-backdrop-filter: blur(24.98px);
  border: 0.72px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 5;
  cursor: pointer;
}

.play-btn-circle:hover {
  background: rgba(18, 27, 38, 0.35);
  border-color: rgba(255, 255, 255, 0.35);
  transform: translate(-50%, -50%) scale(1.08);
}

.play-btn-circle.is-playing {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.video-showcase-card:hover .play-btn-circle.is-playing {
  opacity: 1;
  pointer-events: auto;
  background: rgba(18, 27, 38, 0.45);
}

.play-btn-inner {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #84FFC1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 22px rgba(132, 255, 193, 0.75);
  padding-left: 2px;
  transition: transform 0.3s ease;
}

.video-showcase-card:hover .play-btn-inner {
  transform: scale(1.06);
}

/* Inline Floating Video Control Bar */
.inline-video-bar {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(18, 27, 38, 0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 0.72px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  z-index: 10;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  animation: fadeInControls 0.3s ease;
}

@keyframes fadeInControls {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.video-ctrl-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.video-ctrl-btn:hover {
  background: rgba(132, 255, 193, 0.25);
  border-color: rgba(132, 255, 193, 0.7);
  color: #84FFC1;
  transform: scale(1.05);
}

/* Right Info Card */
.hero-info-card {
  height: 485px;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.info-card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.screen-preview-wrapper {
  position: relative;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #02070e;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.screen-thumb-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 435 / 187;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-info-card:hover .screen-thumb-img {
  transform: scale(1.02);
}

.hero-info-desc {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.hero-info-ctas {
  display: flex;
  gap: 12px;
}

.hero-main-btn {
  flex: 1;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #030A12;
  background: linear-gradient(135deg, rgba(132, 255, 193, 0.85) 0%, rgba(85, 235, 165, 0.65) 100%);
  backdrop-filter: blur(20px) saturate(190%);
  -webkit-backdrop-filter: blur(20px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(132, 255, 193, 0.35), inset 0 1.5px 2px rgba(255, 255, 255, 0.8), inset 0 -1.5px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
}

.hero-main-btn:hover {
  background: linear-gradient(135deg, rgba(160, 255, 215, 0.95) 0%, rgba(105, 245, 185, 0.78) 100%);
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(132, 255, 193, 0.55), inset 0 2px 3px rgba(255, 255, 255, 0.9);
}

.hero-agenda-btn {
  flex: 1;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #84FFC1;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(132, 255, 193, 0.35);
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 1.5px rgba(255, 255, 255, 0.15);
  transition: all 0.25s ease;
}

.hero-agenda-btn:hover {
  background: rgba(132, 255, 193, 0.08);
  border-color: rgba(132, 255, 193, 0.7);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(132, 255, 193, 0.2);
}

/* ==========================================================================
   Key Stats / Ecosystem Valuation Bar
   ========================================================================== */
.stats-valuation-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #121B2666;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 16px 24px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  max-width: 1280px;
  margin: 0 auto 32px auto;
  box-sizing: border-box;
}

.medal-wrapper {
  flex: 0 0 140px;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.medal-img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.5));
}

.stats-cards-row {
  flex: 1;
  display: grid;
  grid-template-columns: 395px 335px 255px;
  gap: 20px;
  align-items: center;
}

/* Neon Green Bordered Card */
.stat-neon-card {
  position: relative;
  height: 112px;
  background: #121B2666;
  border: 1px solid #1BDB86;
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(27, 219, 134, 0.06);
  transition: all 0.2s ease;
  overflow: hidden;
  box-sizing: border-box;
}

.stat-neon-card:hover {
  box-shadow: 0 0 20px rgba(27, 219, 134, 0.2);
  transform: translateY(-1px);
}

/* Top Right 2026 Badge */
.badge-year-top {
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 24px;
  background: #68FFB7;
  color: #030A12;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 11px;
  border-bottom-left-radius: 12px;
  letter-spacing: 0.3px;
  z-index: 2;
}

.badge-startupblink {
  width: 76px;
}

/* Stat numbers and labels common */
.card-inner-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  position: absolute;
  left: 14px;
  top: 12px;
}

.stat-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-num {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 11.5px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.25;
  margin-top: 4px;
  display: block;
  white-space: pre-line;
  word-break: break-word;
}

/* Card 1: Dealroom */
.card-dealroom .stat-col-1 {
  max-width: 140px;
}

.card-dealroom .stat-col-2 {
  max-width: 130px;
}

.dealroom-logo-box {
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: flex;
  align-items: center;
}

.dealroom-logo-img {
  width: 90px;
  height: 20px;
  object-fit: contain;
  display: block;
}

/* Card 2: StartupBlink */
.card-startupblink .stat-col-1 {
  max-width: 125px;
}

.card-startupblink .stat-col-2 {
  max-width: 135px;
}

.startupblink-logo-box {
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: flex;
  align-items: center;
}

.startupblink-logo-img {
  width: 95px;
  height: 20px;
  object-fit: contain;
  display: block;
}

/* Card 3: Unicorns */
.card-unicorns .unicorn-left-group {
  position: absolute;
  left: 14px;
  top: 12px;
}

.unicorn-num-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.unicorn-head-svg {
  width: 28px;
  height: 29px;
  flex-shrink: 0;
}

.card-unicorns .stat-label {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.25;
}

.card-unicorns .brands-right-group {
  position: absolute;
  right: 14px;
  top: 36px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}

.brand-line {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tbc-bank-logo-img {
  width: 105px;
  height: 22px;
  object-fit: contain;
  display: block;
}

/* ==========================================================================
   Media Queries & Responsive Styling (Preserves Desktop >= 1025px completely)
   ========================================================================== */
@media (max-width: 1240px) and (min-width: 1025px) {
  .stats-valuation-bar {
    padding: 16px 20px;
    gap: 16px;
  }
  .stats-cards-row {
    grid-template-columns: 1.2fr 1fr 0.85fr;
    gap: 14px;
  }
}

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 768px) {
  .hero-title {
    font-size: 44px;
    line-height: 1.15;
    text-align: center;
  }
  .hero-heading-block {
    margin-bottom: 28px;
  }
  .hero-media-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .video-showcase-card {
    height: 380px;
  }
  .hero-info-card {
    height: auto;
    padding: 24px;
    gap: 20px;
  }
  .stats-valuation-bar {
    flex-direction: row;
    padding: 20px 24px;
    gap: 20px;
    align-items: center;
  }
  .medal-wrapper {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
  }
  .medal-img {
    width: 100px;
    height: 100px;
  }
  .stats-cards-row {
    flex: 1;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .card-dealroom {
    grid-column: 1 / -1;
  }
  .stat-num {
    font-size: 26px;
  }
  .stat-label {
    font-size: 11px;
  }
  .card-inner-flex {
    left: 14px;
    top: 14px;
    gap: 12px;
  }
  .dealroom-logo-img {
    width: 85px;
  }
  .startupblink-logo-img {
    width: 85px;
  }
  .card-unicorns .unicorn-left-group {
    left: 14px;
    top: 14px;
  }
  .tbc-bank-logo-img {
    width: 90px;
  }
}

.card-medal-mobile {
  display: none;
}

/* Mobile (< 768px) - MATCHING IMAGE 2 EXACTLY */
@media (max-width: 767px) {
  .hero-heading-block {
    margin-bottom: 20px;
  }
  .hero-title {
    font-size: 32px;
    line-height: 1.18;
    letter-spacing: -0.02em;
  }
  .hero-media-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .video-showcase-card {
    height: 230px;
    border-radius: 16px;
  }
  .play-btn-circle {
    width: 58px;
    height: 58px;
  }
  .play-btn-inner {
    width: 34px;
    height: 34px;
  }
  .hero-info-card {
    height: auto;
    border-radius: 16px;
    padding: 16px;
    gap: 16px;
  }
  .hero-info-desc {
    font-size: 13.5px;
    line-height: 1.45;
  }
  .hero-info-ctas {
    flex-direction: row;
    gap: 10px;
  }
  .hero-main-btn,
  .hero-agenda-btn {
    height: 44px;
    font-size: 13.5px;
  }

  /* Key Stats Section on Mobile - 3 Separate Floating Cards matching Image 2 */
  .stats-valuation-bar {
    background: transparent;
    border: none;
    padding: 0;
    box-shadow: none;
    margin-bottom: 24px;
    width: 100%;
  }
  .medal-wrapper {
    display: none !important;
  }
  .stats-cards-row {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  .stat-neon-card {
    width: 100%;
    height: auto;
    min-height: 104px;
    background: rgba(13, 22, 30, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 16px 18px 14px 18px;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
  }
  .badge-year-top {
    position: absolute;
    top: 14px;
    right: 14px;
    width: auto;
    height: auto;
    padding: 3px 12px;
    border-radius: 6px;
    background: #73fbb3;
    color: #041a12;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0;
    z-index: 2;
  }
  .stat-num {
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
  }
  .stat-label {
    font-size: 11px;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 4px;
  }

  /* Card 1: Dealroom */
  .card-dealroom .card-inner-flex {
    position: static;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  .card-dealroom .stat-col-1 {
    max-width: 120px;
  }
  .card-dealroom .stat-col-2 {
    max-width: 130px;
  }
  .dealroom-logo-box {
    position: absolute;
    right: 14px;
    bottom: 14px;
  }
  .dealroom-logo-img {
    width: 82px;
    height: auto;
  }

  /* Card 2: StartupBlink with Medal on Left */
  .card-startupblink .card-inner-flex {
    position: static;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .card-medal-mobile {
    display: block;
    width: 44px;
    height: 48px;
    object-fit: contain;
    flex-shrink: 0;
    margin-right: 2px;
  }
  .card-startupblink .stat-col-1 {
    max-width: 105px;
  }
  .card-startupblink .stat-col-2 {
    max-width: 110px;
  }
  .startupblink-logo-box {
    position: absolute;
    right: 14px;
    bottom: 14px;
  }
  .startupblink-logo-img {
    width: 82px;
    height: auto;
  }

  /* Card 3: Unicorns with centered brands */
  .card-unicorns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-unicorns .unicorn-left-group {
    position: static;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .unicorn-num-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .unicorn-head-svg {
    width: 24px;
    height: 25px;
  }
  .card-unicorns .brands-right-group {
    position: static;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    margin-left: auto;
    margin-right: 48px;
  }
  .brand-line svg {
    width: 78px;
    height: auto;
  }
  .tbc-bank-logo-img {
    width: 82px;
    height: auto;
  }
}

@media (max-width: 420px) {
  .hero-title {
    font-size: 28px;
  }
  .hero-info-ctas {
    flex-direction: column;
  }
  .card-dealroom .card-inner-flex {
    gap: 14px;
  }
  .card-startupblink .card-inner-flex {
    gap: 8px;
  }
  .card-unicorns .brands-right-group {
    margin-right: 42px;
  }
}
</style>
