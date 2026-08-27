<template>
  <footer class="footer-section">
    <div class="page-container">
      <div class="footer-card glass-panel">
        <div class="footer-top">
          <!-- Logo & Description -->
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              <div class="logo-mark">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="34" height="34" rx="17" fill="#121B26" />
                  <path d="M17 6L25.6603 11V21L17 26L8.33975 21V11L17 6Z" stroke="#83FFC1" stroke-width="1.8" stroke-linejoin="round"/>
                  <circle cx="17" cy="16" r="3.5" fill="#83FFC1" />
                  <path d="M17 9.5V12.5M17 19.5V22.5M11.5 13L14 14.5M20 17.5L22.5 19M11.5 19L14 17.5M20 14.5L22.5 13" stroke="#83FFC1" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="logo-text">
                <span class="logo-title">ICT WEEK</span>
                <span class="logo-year">2026</span>
              </div>
            </a>
            <p class="footer-about">
              {{ t('footer.about') }}
            </p>
            <div class="organizers-tag">
              <span>{{ t('footer.organizers') }}</span>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div class="footer-nav-col">
            <span class="footer-col-title">{{ t('footer.navigation') }}</span>
            <ul class="footer-links">
              <li><a href="#home">{{ t('nav.home') }}</a></li>
              <li><a href="#summit-tracks">{{ t('nav.program') }}</a></li>
              <li><a href="#partners">{{ t('nav.partners') }}</a></li>
              <li><a href="#incentives">{{ t('nav.incentives') }}</a></li>
              <li><a href="#register">{{ t('nav.register') }}</a></li>
            </ul>
          </div>

          <!-- Summits -->
          <div class="footer-nav-col">
            <span class="footer-col-title">{{ t('footer.summits') }}</span>
            <ul class="footer-links">
              <li><a href="#summit-tracks">{{ t('summits.tabEnterprise') }}</a></li>
              <li><a href="#summit-tracks">{{ t('summits.tabStartup') }}</a></li>
              <li><a href="#summit-tracks">{{ t('summits.tabOutsourcing') }}</a></li>
              <li><a href="#summit-tracks">{{ t('summits.tabGlobal') }}</a></li>
              <li><a href="#summit-tracks">{{ t('summits.tabGamedev') }}</a></li>
              <li><a href="#summit-tracks">{{ t('summits.tabAi') }}</a></li>
            </ul>
          </div>

          <!-- Contact & Venue -->
          <div class="footer-nav-col">
            <span class="footer-col-title">{{ t('footer.venueContact') }}</span>
            <div class="footer-contact-info">
              <p>📍 <strong>CAEx Exhibition Center</strong><br />Tashkent, Uzbekistan</p>
              <p>✉️ <a href="mailto:info@ictweek.uz">info@ictweek.uz</a></p>
              <p>📞 <a href="tel:+998712090000">+998 (71) 209-00-00</a></p>
            </div>
            <!-- Socials -->
            <div class="footer-socials">
              <a href="https://t.me/itpark_uz" target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21.5 2L2 9.5L9.5 13L13 20.5L21.5 2Z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright-text">
            {{ t('footer.rights') }}
          </p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Participation</a>
            <span>•</span>
            <a href="#">Press Kit</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.footer-section {
  position: relative;
  padding: 0;
}

.footer-card {
  padding: 48px 56px 32px;
  background: rgba(11, 17, 26, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.logo-title {
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
}

.logo-year {
  font-weight: 800;
  font-size: 20px;
  color: var(--brand-green);
}

.footer-about {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 320px;
}

.organizers-tag {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

.organizers-tag strong {
  color: var(--brand-green);
}

/* Nav Columns */
.footer-nav-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-col-title {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: var(--brand-green);
  transform: translateX(3px);
}

/* Contact & Socials */
.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.footer-contact-info a {
  color: var(--brand-green);
  text-decoration: none;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.social-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-icon-btn:hover {
  background: rgba(131, 255, 193, 0.2);
  color: var(--brand-green);
  border-color: var(--brand-green);
  transform: translateY(-2px);
}

/* Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.legal-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #ffffff;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .footer-card {
    padding: 36px 28px 24px;
  }
}

@media (max-width: 640px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .footer-card {
    padding: 28px 16px 20px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
