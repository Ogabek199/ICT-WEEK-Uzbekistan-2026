<template>
  <!-- Floating Navbar matching Figma & user screenshot media_1787814403079.png -->
  <header class="header-outer">
    <div class="header-container">

      <!-- Logo on Far Left: Official ICT WEEK 2026 Logo -->
      <a href="#home" class="header-logo" @click.prevent="scrollTo('home')" aria-label="ICT Week Uzbekistan 2026">
        <img
          src="@/assets/images/ict-week-logo.png"
          alt="ICT WEEK 2026 | UZBEKISTAN"
          class="logo-img"
        />
      </a>

      <!-- Center Navigation Tabs (Home, Program, Partners, Incentives) -->
      <nav class="header-nav" role="navigation" aria-label="Main navigation">
        <div class="nav-pill-wrapper">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-item"
            :class="{ active: activeSection === item.id }"
            @click="scrollTo(item.id)"
            :id="`nav-${item.id}`"
          >
            {{ t(item.key) }}
          </button>
        </div>
      </nav>

      <!-- Right Actions: Language Dropdown + Register Now Button -->
      <div class="header-actions">
        <!-- Language selector dropdown -->
        <div class="lang-selector" @click="toggleLang" id="lang-dropdown" role="combobox" :aria-expanded="langOpen">
          <div class="lang-current">
            <span>{{ currentLangLabel }}</span>
            <svg class="chevron" :class="{ open: langOpen }" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.85)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="lang-dropdown" v-if="langOpen" @click.stop>
            <button
              v-for="l in langs"
              :key="l.code"
              class="lang-option"
              :class="{ selected: lang === l.code }"
              @click="selectLang(l.code)"
            >
              <svg v-if="lang === l.code" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="#83FFC1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span v-else class="check-spacer"></span>
              {{ l.label }}
            </button>
          </div>
        </div>

        <!-- Register Now Button -->
        <button class="btn-register" @click="scrollTo('register')" id="header-register-btn">
          {{ t('nav.register') }}
        </button>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n, setLanguage } from '@/composables/useI18n'

const { t, lang } = useI18n()

const activeSection = ref('home')
const langOpen = ref(false)

const navItems = [
  { id: 'home', key: 'nav.home' },
  { id: 'program', key: 'nav.program' },
  { id: 'partners', key: 'nav.partners' },
  { id: 'incentives', key: 'nav.incentives' },
]

const langs = [
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbekcha" },
  { code: 'ru', label: 'Русский' },
]

const currentLangLabel = computed(() => {
  const found = langs.find(l => l.code === lang.value)
  return found ? found.label : 'English'
})

function scrollTo(id) {
  const sectionMap = {
    home: 'home',
    program: 'summit-tracks',
    partners: 'partners',
    incentives: 'incentives',
    register: 'register',
  }
  const targetId = sectionMap[id] || id
  const el = document.getElementById(targetId) || document.getElementById(id)
  if (el) {
    const headerOffset = 105
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    })
  }
  activeSection.value = id
}

function toggleLang() {
  langOpen.value = !langOpen.value
}

function selectLang(code) {
  setLanguage(code)
  langOpen.value = false
}

function closeLang(e) {
  if (!e.target.closest('.lang-selector')) {
    langOpen.value = false
  }
}

function handleScroll() {
  const scrollPosition = window.pageYOffset + 160

  const sections = [
    { navId: 'home', elId: 'home' },
    { navId: 'program', elId: 'summit-tracks' },
    { navId: 'incentives', elId: 'incentives' },
    { navId: 'partners', elId: 'partners' },
    { navId: 'register', elId: 'register' },
  ]

  let current = 'home'
  for (const s of sections) {
    const el = document.getElementById(s.elId)
    if (el) {
      const top = el.offsetTop
      if (scrollPosition >= top) {
        current = s.navId
      }
    }
  }

  if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 60) {
    current = 'register'
  }

  activeSection.value = current
}

onMounted(() => {
  document.addEventListener('click', closeLang)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  document.removeEventListener('click', closeLang)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Header outer wrapper - fixed top centered */
.header-outer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  pointer-events: none;
}

/* Floating pill matching Figma 259:3650 (1001x82) */
.header-container {
  pointer-events: all;
  width: 1040px;
  max-width: calc(100% - 32px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 12px 28px;
  border-radius: 100px;
  background: rgba(10, 20, 26, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.45);
}

/* Logo */
.header-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* Nav center container */
.header-nav {
  display: flex;
  align-items: center;
}

.nav-pill-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 100px;
  white-space: nowrap;
  transition: all 0.2s ease;
  line-height: 1.25;
}

/* Active tab style matching screenshot */
.nav-item.active {
  color: #ffffff;
  font-weight: 600;
  background: rgba(0, 42, 48, 0.85);
  border: 1px solid rgba(131, 255, 193, 0.2);
  box-shadow:
    inset 0 0 16px rgba(131, 255, 193, 0.12),
    0 0 12px rgba(0, 0, 0, 0.3);
}

.nav-item:not(.active):hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

/* Right actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* Language selector */
.lang-selector {
  position: relative;
  height: 52px;
  border-radius: 160px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: all 0.2s ease;
  user-select: none;
}

.lang-selector:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.lang-current {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
}

.chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.chevron.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 150px;
  background: rgba(10, 18, 26, 0.98);
  border: 1px solid rgba(131, 255, 193, 0.2);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(24px);
  z-index: 200;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(220, 220, 220, 1);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}

.lang-option:hover {
  background: rgba(131, 255, 193, 0.1);
  color: #ffffff;
}

.lang-option.selected {
  color: #83FFC1;
  font-weight: 600;
}

.check-spacer {
  display: inline-block;
  width: 14px;
}

/* Register CTA button matching screenshot */
.btn-register {
  height: 52px;
  padding: 0 28px;
  border-radius: 160px;
  background: linear-gradient(135deg, #83FFC1 0%, #44c986 100%);
  border: none;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #0d1a24;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(131, 255, 193, 0.35);
}

.btn-register:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 28px rgba(131, 255, 193, 0.5);
  filter: brightness(1.05);
}

.btn-register:active {
  transform: translateY(0);
}

@media (max-width: 900px) {
  .header-nav { display: none; }
  .header-container {
    height: 68px;
    padding: 8px 12px 8px 20px;
  }
}
</style>
