<template>
  <!--
    Figma: Registration Section (214:77)
    - Left Column: Full name, Email, Company, I am attending as (2-col radio), How did you hear about us? (radio)
    - Right Column: Country (select), Phone number, Position,
      Event track(s) you plan to attend (clean multi-select without subpages),
      Name of focal point in IT Park (if available) (SELECT DROPDOWN WITH SUBPAGES matching user screenshot!)
  -->
  <section id="register" class="registration-section">
    <div class="page-container">
      <div class="reg-card" v-if="!submitted">

        <!-- Header -->
        <div class="reg-header">
          <h2 class="reg-title">{{ t('form.title') }}</h2>
          <p class="reg-subtitle" style="white-space: pre-line;">{{ t('form.subtitle') }}</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="reg-form">

          <!-- 2 Columns Grid -->
          <div class="form-cols">

            <!-- LEFT COLUMN -->
            <div class="form-col">

              <!-- Full name -->
              <div class="field-group" :class="{ 'has-error': errors.name }">
                <label class="field-label" for="reg-fullname">{{ t('form.fullName') }}</label>
                <div class="input-wrap" :class="{ 'error-wrap': errors.name }">
                  <input
                    v-model="form.name"
                    @input="formatName"
                    @blur="validateField('name')"
                    type="text"
                    :placeholder="t('form.fullNamePlaceholder')"
                    class="field-input"
                    id="reg-fullname"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="field-group" :class="{ 'has-error': errors.email }">
                <label class="field-label" for="reg-email">{{ t('form.email') }}</label>
                <div class="input-wrap" :class="{ 'error-wrap': errors.email }">
                  <input
                    v-model="form.email"
                    @input="errors.email = ''"
                    @blur="validateField('email')"
                    type="email"
                    :placeholder="t('form.emailPlaceholder')"
                    class="field-input"
                    id="reg-email"
                  />
                </div>
              </div>

              <!-- Company -->
              <div class="field-group" :class="{ 'has-error': errors.company }">
                <label class="field-label" for="reg-company">{{ t('form.company') }}</label>
                <div class="input-wrap" :class="{ 'error-wrap': errors.company }">
                  <input
                    v-model="form.company"
                    @input="errors.company = ''"
                    @blur="validateField('company')"
                    type="text"
                    :placeholder="t('form.companyPlaceholder')"
                    class="field-input"
                    id="reg-company"
                  />
                </div>
              </div>

              <!-- I am attending as (2-col radio dropdown matching Image 2) -->
              <div class="field-group" :class="{ 'has-error': errors.category }">
                <label class="field-label">{{ t('form.category') }}</label>
                <div class="select-wrap" @click="toggleDropdown('category')" :class="{ open: openDropdown === 'category', 'error-wrap': errors.category }" id="reg-category">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.category }">
                      {{ form.category || t('form.categoryPlaceholder') }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'category' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- 2-column grid dropdown menu matching Image 2 -->
                  <div class="dropdown-menu category-grid-menu" v-if="openDropdown === 'category'" @click.stop>
                    <div
                      class="radio-option-item"
                      v-for="cat in categoryList"
                      :key="cat"
                      @click="selectCategory(cat)"
                      :class="{ selected: form.category === cat }"
                    >
                      <div class="radio-circle" :class="{ checked: form.category === cat }">
                        <div class="radio-dot" v-if="form.category === cat"></div>
                      </div>
                      <span class="option-text">{{ cat }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- How did you hear about us? (Radio dropdown matching Image 1) -->
              <div class="field-group">
                <label class="field-label">{{ t('form.source') }}</label>
                <div class="select-wrap" @click="toggleDropdown('source')" :class="{ open: openDropdown === 'source' }" id="reg-source">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.source }">
                      {{ form.source || t('form.sourcePlaceholder') }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'source' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- Source radio list dropdown matching Image 1 -->
                  <div class="dropdown-menu source-menu" v-if="openDropdown === 'source'" @click.stop>
                    <div
                      class="radio-option-item"
                      v-for="src in sourceList"
                      :key="src"
                      @click="selectSource(src)"
                      :class="{ selected: form.source === src }"
                    >
                      <div class="radio-circle" :class="{ checked: form.source === src }">
                        <div class="radio-dot" v-if="form.source === src"></div>
                      </div>
                      <span class="option-text">{{ src }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- RIGHT COLUMN -->
            <div class="form-col">

              <!-- Country (Dropdown) -->
              <div class="field-group" :class="{ 'has-error': errors.country }">
                <label class="field-label">{{ t('form.country') }}</label>
                <div class="select-wrap" @click="toggleDropdown('country')" :class="{ open: openDropdown === 'country', 'error-wrap': errors.country }" id="reg-country">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.country }">
                      {{ form.country || t('form.countryPlaceholder') }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'country' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- Country List Menu -->
                  <div class="dropdown-menu country-menu" v-if="openDropdown === 'country'" @click.stop>
                    <div
                      class="dropdown-item"
                      v-for="c in countryList"
                      :key="c"
                      @click="selectCountry(c)"
                      :class="{ selected: form.country === c }"
                    >
                      <span>{{ c }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Phone number -->
              <div class="field-group" :class="{ 'has-error': errors.phone }">
                <label class="field-label" for="reg-phone">{{ t('form.phone') }}</label>
                <div class="input-wrap" :class="{ 'error-wrap': errors.phone }">
                  <input
                    v-model="form.phone"
                    @input="formatPhone"
                    @blur="validateField('phone')"
                    type="tel"
                    :placeholder="t('form.phonePlaceholder')"
                    class="field-input"
                    id="reg-phone"
                  />
                </div>
              </div>

              <!-- Position -->
              <div class="field-group">
                <label class="field-label" for="reg-position">{{ t('form.position') }}</label>
                <div class="input-wrap">
                  <input
                    v-model="form.position"
                    type="text"
                    :placeholder="t('form.positionPlaceholder')"
                    class="field-input"
                    id="reg-position"
                  />
                </div>
              </div>

              <!-- Event track(s) you plan to attend (Multi-select WITHOUT sub-pages) -->
              <div class="field-group" :class="{ 'has-error': errors.tracks }">
                <label class="field-label">{{ t('form.tracks') }}</label>
                <div class="select-wrap" @click="toggleDropdown('tracks')" :class="{ open: openDropdown === 'tracks', 'error-wrap': errors.tracks }" id="reg-tracks">
                  <div class="select-display" :title="form.tracks.length ? form.tracks.join(', ') : ''">
                    <span :class="{ placeholder: !form.tracks.length }">
                      {{ form.tracks.length ? form.tracks.join(', ') : t('form.tracksPlaceholder') }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'tracks' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- Simple Tracks dropdown (no sub-pages) -->
                  <div class="dropdown-menu tracks-menu" v-if="openDropdown === 'tracks'" @click.stop>
                    <div
                      class="checkbox-option-item"
                      v-for="tName in simpleTracksList"
                      :key="tName"
                      @click="toggleSimpleTrack(tName)"
                      :class="{ selected: form.tracks.includes(tName) }"
                    >
                      <div class="custom-checkbox" :class="{ checked: form.tracks.includes(tName) }">
                        <svg v-if="form.tracks.includes(tName)" width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="option-text">{{ tName }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Name of focal point in IT Park (SELECT DROPDOWN WITH SUBPAGES matching screenshot) -->
              <div class="field-group">
                <label class="field-label">{{ t('form.focalPoint') }}</label>
                <div class="select-wrap" @click="toggleDropdown('focal')" :class="{ open: openDropdown === 'focal' }" id="reg-focal">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.focalPoint }">
                      {{ form.focalPoint || t('form.focalPointPlaceholder') }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'focal' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- Main Focal Dropdown matching screenshot media_1787844960797.png -->
                  <div class="focal-main-menu" v-if="openDropdown === 'focal'" @click.stop>
                    <!-- Left Sub-page Flyout Menu (Only shown when hovered track has subtracks) -->
                    <div class="focal-sub-flyout-left" v-if="hoveredFocalTrack?.subtracks">
                      <div
                        class="focal-row-item"
                        v-for="sub in hoveredFocalTrack.subtracks"
                        :key="sub"
                        @click="selectFocal(sub)"
                        :class="{ 'is-selected': form.focalPoint === sub }"
                      >
                        <div class="focal-checkbox-square" :class="{ checked: form.focalPoint === sub }">
                          <svg v-if="form.focalPoint === sub" width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span class="focal-item-text">{{ sub }}</span>
                      </div>
                    </div>

                    <!-- Main List of Tracks (Right Panel) -->
                    <div
                      class="focal-row-item"
                      v-for="track in focalTracksList"
                      :key="track.id"
                      @mouseenter="hoveredFocalTrack = track"
                      @click="!track.subtracks && selectFocal(track.title)"
                      :class="{
                        'is-hovered': hoveredFocalTrack?.id === track.id,
                        'is-selected': isFocalChecked(track)
                      }"
                    >
                      <div class="focal-checkbox-square" :class="{ checked: isFocalChecked(track) }">
                        <svg v-if="isFocalChecked(track)" width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="focal-item-text">{{ track.title }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Consent & Submit Row matching Image 1 -->
          <div class="form-bottom" :class="{ 'has-error': errors.consent }">
            <!-- Consent Checkbox -->
            <label class="consent-label" @click="toggleConsent">
              <div class="custom-checkbox consent-box" :class="{ checked: form.consent, 'error-box': errors.consent }">
                <svg v-if="form.consent" width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="consent-text">
                {{ t('form.consent') }}
              </span>
            </label>

            <!-- Submit Button with top-right arrow ↗ -->
            <button type="submit" class="btn-register-submit" :disabled="submitting" id="reg-submit-btn">
              <span>{{ submitting ? t('form.submitting') : t('form.submitBtn') }}</span>
              <svg v-if="!submitting" width="18" height="18" viewBox="0 0 24 24" fill="none" class="submit-arrow">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0B0F13" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div v-else class="spinner"></div>
            </button>
          </div>

        </form>
      </div>

      <!-- Thank You State matching Figma 350:24 & media_1787844363947.png -->
      <div class="thank-you-view" v-if="submitted">
        <div class="thank-avatar-wrap">
          <img src="@/assets/images/thank-you-avatar.png" alt="Success" class="thank-avatar-img" />
        </div>
        <h1 class="thank-title">{{ t('thankYou.titleLine1') }}<br class="desktop-br" /> {{ t('thankYou.titleLine2') }}</h1>
        <p class="thank-subtitle">
          {{ t('thankYou.subtitle') }}
        </p>
        <button class="btn-back-home" @click="handleBackHome" id="reg-back-home-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#84FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 21V12H15V21" stroke="#84FFC1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ t('thankYou.backHome') }}</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const emit = defineEmits(['submitted', 'backToHome'])

const submitted = ref(false)
const submitting = ref(false)
const openDropdown = ref(null)
const hoveredFocalTrack = ref(null)

const form = reactive({
  name: '',
  email: '',
  company: '',
  category: '',
  source: '',
  country: '',
  phone: '',
  position: '',
  tracks: [],
  focalPoint: '',
  consent: false,
})

const errors = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  category: '',
  country: '',
  tracks: '',
  consent: '',
})

// Formatting and mask helpers
function formatName(e) {
  const val = e.target.value
  // Allow letters (including Cyrillic, Latin, Uzbek o', g'), spaces, hyphens, and apostrophes
  form.name = val.replace(/[^a-zA-Zа-яА-ЯёЁ\u0400-\u04FF\s'’`\-]/g, '')
  if (errors.name) validateField('name')
}

function formatPhone(e) {
  let val = e.target.value.replace(/[^\d+]/g, '')
  if (!val) {
    form.phone = ''
    return
  }
  if (!val.startsWith('+')) {
    val = '+' + val
  }
  const digits = val.slice(1).replace(/\D/g, '')

  if (digits.startsWith('998')) {
    // Uzbek format: +998 (XX) XXX-XX-XX
    let res = '+998'
    const rest = digits.slice(3)
    if (rest.length > 0) res += ' (' + rest.slice(0, 2)
    if (rest.length >= 2) res += ') ' + rest.slice(2, 5)
    if (rest.length >= 5) res += '-' + rest.slice(5, 7)
    if (rest.length >= 7) res += '-' + rest.slice(7, 9)
    form.phone = res
  } else {
    // International format: +XXX XX XXX XXXX
    let res = '+'
    for (let i = 0; i < digits.length && i < 15; i++) {
      if (i === 3 || i === 5 || i === 8 || i === 11) res += ' '
      res += digits[i]
    }
    form.phone = res
  }
  if (errors.phone) validateField('phone')
}

function validateField(field) {
  if (field === 'name') {
    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = t('form.errors.name')
      return false
    }
    errors.name = ''
    return true
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errors.email = t('form.errors.email')
      return false
    }
    errors.email = ''
    return true
  }

  if (field === 'company') {
    if (!form.company.trim()) {
      errors.company = t('form.errors.company')
      return false
    }
    errors.company = ''
    return true
  }

  if (field === 'phone') {
    const digitsOnly = form.phone.replace(/\D/g, '')
    if (!form.phone.trim() || digitsOnly.length < 7) {
      errors.phone = t('form.errors.phone')
      return false
    }
    errors.phone = ''
    return true
  }

  return true
}

function toggleConsent() {
  form.consent = !form.consent
  if (form.consent) errors.consent = ''
}

// 6 Categories matching Image 2
const categoryList = computed(() => {
  const list = t('form.categories')
  return Array.isArray(list) ? list : []
})

// 4 Sources matching Image 1
const sourceList = computed(() => {
  const list = t('form.sources')
  return Array.isArray(list) ? list : []
})

// Countries
const countryList = computed(() => {
  const list = t('form.countries')
  return Array.isArray(list) ? list : []
})

// Simple tracks (no sub-pages) for Event track(s)
const simpleTracksList = computed(() => {
  const list = t('form.simpleTracks')
  return Array.isArray(list) ? list : []
})

// Focal point tracks with left sub-pages matching user screenshot
const focalTracksList = computed(() => {
  const list = t('form.focalTracks')
  return Array.isArray(list) ? list : []
})

function toggleDropdown(name) {
  if (openDropdown.value === name) {
    openDropdown.value = null
  } else {
    openDropdown.value = name
    if (name === 'focal') {
      const active = focalTracksList.value.find(t => isFocalChecked(t)) || focalTracksList.value[1]
      hoveredFocalTrack.value = active
    }
  }
}

function selectCategory(cat) {
  form.category = cat
  errors.category = ''
  openDropdown.value = null
}

function selectSource(src) {
  form.source = src
  openDropdown.value = null
}

function selectCountry(c) {
  form.country = c
  errors.country = ''
  openDropdown.value = null
}

function toggleSimpleTrack(title) {
  const idx = form.tracks.indexOf(title)
  if (idx === -1) {
    form.tracks.push(title)
  } else {
    form.tracks.splice(idx, 1)
  }
  if (form.tracks.length > 0) errors.tracks = ''
}

function selectFocal(name) {
  form.focalPoint = name
  openDropdown.value = null
}

function isFocalChecked(track) {
  if (form.focalPoint === track.title) return true
  if (track.subtracks && track.subtracks.includes(form.focalPoint)) return true
  return false
}

function validateAll() {
  let valid = true

  if (!validateField('name')) valid = false
  if (!validateField('email')) valid = false
  if (!validateField('company')) valid = false
  if (!validateField('phone')) valid = false

  if (!form.category) {
    errors.category = t('form.errors.category')
    valid = false
  } else {
    errors.category = ''
  }

  if (!form.country) {
    errors.country = t('form.errors.country')
    valid = false
  } else {
    errors.country = ''
  }

  if (!form.tracks || form.tracks.length === 0) {
    errors.tracks = t('form.errors.tracks')
    valid = false
  } else {
    errors.tracks = ''
  }

  if (!form.consent) {
    errors.consent = t('form.errors.consent')
    valid = false
  } else {
    errors.consent = ''
  }

  return valid
}

async function handleSubmit() {
  if (!validateAll()) {
    return
  }

  submitting.value = true
  await new Promise(r => setTimeout(r, 800))
  submitting.value = false
  submitted.value = true
  emit('submitted', { ...form })
}

function handleBackHome() {
  submitted.value = false
  resetForm()
  emit('backToHome')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function resetForm() {
  Object.assign(form, {
    name: '', email: '', company: '', category: '',
    source: '', country: '', phone: '', position: '',
    tracks: [], focalPoint: '', consent: false,
  })
  Object.keys(errors).forEach(k => errors[k] = '')
}

function closeOnOutside(e) {
  if (!e.target.closest('.select-wrap')) {
    openDropdown.value = null
    hoveredFocalTrack.value = null
  }
}

onMounted(() => document.addEventListener('click', closeOnOutside))
onUnmounted(() => document.removeEventListener('click', closeOnOutside))
</script>

<style scoped>
.registration-section {
  width: 100%;
  padding: 0;
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Outer Card matching Figma & Images */
.reg-card {
  background: rgba(14, 20, 27, 0.68);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 48px 56px 56px 56px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.5);
}

/* Header */
.reg-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.reg-title {
  font-family: 'Manrope', sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin: 0;
}

.reg-subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.70);
  line-height: 1.55;
  margin: 0;
}

/* Form Layout */
.reg-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.form-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Field Group */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.4;
}

/* Input matching Image 1 & 2 (#1F2732) */
.input-wrap {
  position: relative;
  width: 100%;
}

.field-input {
  width: 100%;
  height: 46px;
  padding: 0 16px;
  border-radius: 8px;
  background: #1F2732;
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.field-input::placeholder {
  color: rgba(255, 255, 255, 0.40);
}

.field-input:focus {
  border-color: rgba(255, 255, 255, 0.28);
  background: #252F3D;
  box-shadow: 0 0 12px rgba(27, 219, 134, 0.15);
}

/* Custom Select Dropdowns */
.select-wrap {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.select-wrap.open {
  z-index: 500;
}

.select-display {
  width: 100%;
  min-height: 46px;
  height: auto;
  padding: 10px 16px;
  border-radius: 8px;
  background: #1F2732;
  border: 1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.45;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

/* When select is OPEN - clean neutral styling without green hover glow */
.select-wrap.open .select-display {
  border-color: rgba(255, 255, 255, 0.28);
  background: #252F3D;
  box-shadow: none;
}

.select-display span {
  flex: 1;
  min-width: 0;
  white-space: normal;
  line-height: 1.45;
  word-break: normal;
  display: block;
}

.select-display .placeholder {
  color: rgba(255, 255, 255, 0.40);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chevron {
  flex-shrink: 0;
  align-self: center;
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

/* Floating Dropdown Menus */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #151e29;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 8px;
  z-index: 500;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95);
  box-sizing: border-box;
  max-height: 240px;
  overflow-y: auto;
}

/* Dropup: ONLY 'Name of focal point' opens UPWARDS to fit on screen */
#reg-focal .dropdown-menu {
  top: auto;
  bottom: calc(100% + 8px);
}

/* Custom scrollbars */
.dropdown-menu::-webkit-scrollbar,
.country-menu::-webkit-scrollbar,
.subtracks-flyout::-webkit-scrollbar {
  width: 5px;
}

.dropdown-menu::-webkit-scrollbar-track,
.country-menu::-webkit-scrollbar-track,
.subtracks-flyout::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
}

.dropdown-menu::-webkit-scrollbar-thumb,
.country-menu::-webkit-scrollbar-thumb,
.subtracks-flyout::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 6px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover,
.country-menu::-webkit-scrollbar-thumb:hover,
.subtracks-flyout::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.45);
}

/* Category 2-Column Menu matching Image 2 */
.category-grid-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px;
}

/* Radio Option Items - Neutral hover, no color */
.radio-option-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
  color: #FFFFFF;
}

.radio-option-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.radio-option-item.selected {
  background: rgba(255, 255, 255, 0.12);
  color: #FFFFFF;
}

/* Radio circle */
.radio-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.radio-circle.checked {
  background: #00E575;
}

.radio-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #0B0F13;
}

.option-text {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.35;
}

/* Source Menu */
.source-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
}

/* Country Menu */
.country-menu {
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
}

.dropdown-item {
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;
  transition: background 0.15s ease;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.dropdown-item.selected {
  background: rgba(255, 255, 255, 0.14);
  color: #FFFFFF;
  font-weight: 600;
}

/* Tracks Menu */
.tracks-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
}

.track-menu-row {
  position: relative;
}

/* Checkbox Option Item - Neutral hover, no color */
.checkbox-option-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
  color: #FFFFFF;
}

.checkbox-option-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.checkbox-option-item.selected {
  background: rgba(255, 255, 255, 0.12);
  color: #FFFFFF;
}

/* Custom Checkbox */
.custom-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.custom-checkbox.checked {
  background: #00E575;
}

/* Focal Point Dropdown matching screenshot media_1787844960797.png */
#reg-focal {
  position: relative;
}

#reg-focal .focal-main-menu {
  position: absolute;
  top: auto;
  bottom: calc(100% + 8px);
  left: 0;
  right: 0;
  min-width: 360px;
  background: #18222d;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 8px;
  z-index: 600;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-sizing: border-box;
}

.focal-row-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
  color: #FFFFFF;
}

.focal-row-item:hover,
.focal-row-item.is-hovered {
  background: rgba(255, 255, 255, 0.08);
}

.focal-row-item.is-selected {
  background: rgba(255, 255, 255, 0.12);
}

.focal-checkbox-square {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.focal-checkbox-square.checked {
  background: #00E575;
}

.focal-item-text {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.35;
  white-space: nowrap;
}

/* Left Sub-page Flyout Menu matching screenshot */
.focal-sub-flyout-left {
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
  min-width: 320px;
  max-width: 380px;
  background: #18222d;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 8px;
  z-index: 700;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  gap: 3px;
  animation: flyoutFadeIn 0.15s ease;
}

@keyframes flyoutFadeIn {
  from { opacity: 0; transform: translateX(6px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 768px) {
  #reg-focal .focal-main-menu {
    min-width: 100%;
  }
  .focal-sub-flyout-left {
    position: static;
    margin-top: 4px;
    margin-bottom: 6px;
    border-left: 2px solid #00E575;
    background: rgba(0, 0, 0, 0.35);
  }
}

/* Bottom Row: Consent + Submit Button */
.form-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  margin-top: 8px;
}

.consent-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  flex: 1;
}

.consent-box {
  margin-top: 2px;
}

.consent-text {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.45;
}

/* Register Now Button with Arrow ↗ matching Image 1 */
.btn-register-submit {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  border-radius: 12px;
  background: #83FFC1;
  border: none;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #0B0F13;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(131, 255, 193, 0.35);
}

.btn-register-submit:hover:not(:disabled) {
  background: #9EFFCE;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(131, 255, 193, 0.5);
}

.btn-register-submit:active:not(:disabled) {
  transform: translateY(0);
}

.btn-register-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-arrow {
  flex-shrink: 0;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2.5px solid rgba(11, 15, 19, 0.3);
  border-top-color: #0B0F13;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Error Border Styles (No error text) */
.error-wrap {
  border-color: #FF5E5E !important;
  box-shadow: 0 0 14px rgba(255, 94, 94, 0.35) !important;
}

.error-box {
  border: 1.5px solid #FF5E5E !important;
  box-shadow: 0 0 10px rgba(255, 94, 94, 0.35) !important;
}

/* Thank You State matching Figma 350:24 & media_1787844363947.png */
.thank-you-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 24px;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;
}

.thank-avatar-wrap {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: rgba(10, 18, 26, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.15);
}

.thank-avatar-img {
  width: 84px;
  height: 84px;
  object-fit: contain;
}

.thank-title {
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  text-align: center;
}

.thank-subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.55;
  max-width: 760px;
  margin: 0 0 36px 0;
  text-align: center;
}

.btn-back-home {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  padding: 0 26px;
  border-radius: 12px;
  background: rgba(1, 20, 26, 0.6);
  border: 1px solid #84FFC1;
  color: #84FFC1;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.btn-back-home:hover {
  background: rgba(132, 255, 193, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5), 0 0 20px rgba(132, 255, 193, 0.2);
}

@media (max-width: 960px) {
  .reg-card {
    padding: 32px 24px 40px 24px;
    gap: 24px;
  }
  .reg-title {
    font-size: 30px;
  }
  .thank-title {
    font-size: 32px;
  }
  .thank-subtitle {
    font-size: 15px;
  }
  .thank-avatar-wrap {
    width: 100px;
    height: 100px;
  }
  .desktop-br {
    display: none;
  }
  .form-cols {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .category-grid-menu {
    grid-template-columns: 1fr;
  }
  .subtracks-flyout {
    position: static;
    width: 100%;
    margin-top: 8px;
  }
  .form-bottom {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
  .btn-register-submit {
    width: 100%;
    justify-content: center;
  }
}
</style>
