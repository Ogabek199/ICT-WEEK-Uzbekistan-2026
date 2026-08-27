<template>
  <!-- Floating Navbar matching Figma & user screenshot -->
  <header class="header-outer">
    <div class="header-container">

      <!-- Logo on Far Left: Official ICT WEEK 2026 Logo -->
      <a href="#home" class="header-logo" @click.prevent="scrollTo('home')" aria-label="ICT Week Uzbekistan 2026">
        <img
          src="@/assets/images/ict-week-logo.svg"
          alt="ICT WEEK 2026 | UZBEKISTAN"
          class="logo-img"
          width="60"
          height="38"
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
import { useI18n } from '@/composables/useI18n'

const { t, lang, setLanguage } = useI18n()

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
  const scrollY = window.pageYOffset || document.documentElement.scrollTop
  const headerOffset = 180

  if (scrollY < 180) {
    activeSection.value = 'home'
    return
  }

  const sectionsInDomOrder = [
    { navId: 'home', elId: 'home' },
    { navId: 'program', elId: 'summit-tracks' },
    { navId: 'incentives', elId: 'incentives' },
    { navId: 'partners', elId: 'partners' },
  ]

  let currentActive = 'home'

  for (const s of sectionsInDomOrder) {
    const el = document.getElementById(s.elId)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= headerOffset + 50) {
        currentActive = s.navId
      }
    }
  }

  activeSection.value = currentActive
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
  background:
    radial-gradient(50% 100% at 15% 0%, rgba(21, 91, 127, 0.22) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(90deg, rgba(3, 18, 22, 0.8) 0%, rgba(6, 16, 22, 0.75) 50%, rgba(8, 14, 18, 0.85) 100%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

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
  border: 0.94px solid transparent;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 130px;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 20px;
  position: relative;
}

.nav-item.active {
  color: #ffffff;
  font-weight: 600;
  background:
    radial-gradient(100% 100% at 50% 0%, rgba(132, 255, 193, 0.1) 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(180deg, rgba(132, 255, 193, 0.05) 0%, rgba(132, 255, 193, 0.04) 80%, rgba(132, 255, 193, 0.04) 100%),
    #01141A;
  backdrop-filter: blur(22.6px);
  -webkit-backdrop-filter: blur(22.6px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.nav-item.active::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 130px;
  padding: 0.94px;
  background: linear-gradient(180deg, rgba(132, 255, 193, 0.35) 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.nav-item:not(.active):hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.lang-selector {
  position: relative;
  height: 52px;
  border-radius: 160px;
  background:
    radial-gradient(100% 100% at 50% 0%, rgba(132, 255, 193, 0.06) 0%, rgba(255, 255, 255, 0) 100%),
    rgba(1, 20, 26, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 22px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  backdrop-filter: blur(22.6px);
  -webkit-backdrop-filter: blur(22.6px);
}

.lang-selector:hover {
  background:
    radial-gradient(100% 100% at 50% 0%, rgba(132, 255, 193, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
    rgba(2, 28, 36, 0.85);
  border-color: rgba(132, 255, 193, 0.3);
  box-shadow: 0 0 16px rgba(132, 255, 193, 0.12);
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
  background: rgba(1, 20, 26, 0.95);
  border: 1px solid rgba(132, 255, 193, 0.25);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 200;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
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

.btn-register {
  height: 52px;
  padding: 0 28px;
  border-radius: 160px;
  background: linear-gradient(135deg, rgba(132, 255, 193, 0.88) 0%, rgba(69, 155, 112, 0.72) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #041A12;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(132, 255, 193, 0.35), inset 0 1.5px 2px rgba(255, 255, 255, 0.75), inset 0 -1.5px 2px rgba(0, 0, 0, 0.15);
}

.btn-register:hover {
  background: linear-gradient(135deg, rgba(160, 255, 215, 0.95) 0%, rgba(85, 185, 135, 0.82) 100%);
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(132, 255, 193, 0.5), inset 0 2px 3px rgba(255, 255, 255, 0.9);
  filter: brightness(1.03);
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
