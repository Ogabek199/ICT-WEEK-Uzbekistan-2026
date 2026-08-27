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
          <h2 class="reg-title">Register for ICTWEEK Uzbekistan 2026</h2>
          <p class="reg-subtitle">
            Join global tech leaders, enterprise delegates, and investors in Tashkent.<br />
            Complete your details below to secure your pass.
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="reg-form">

          <!-- 2 Columns Grid -->
          <div class="form-cols">

            <!-- LEFT COLUMN -->
            <div class="form-col">

              <!-- Full name -->
              <div class="field-group">
                <label class="field-label" for="reg-fullname">Full name</label>
                <div class="input-wrap">
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="e.g. John Doe"
                    class="field-input"
                    required
                    id="reg-fullname"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="field-group">
                <label class="field-label" for="reg-email">Email</label>
                <div class="input-wrap">
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="e.g. alex@company.com"
                    class="field-input"
                    required
                    id="reg-email"
                  />
                </div>
              </div>

              <!-- Company -->
              <div class="field-group">
                <label class="field-label" for="reg-company">Company</label>
                <div class="input-wrap">
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="e.g. Tech Global Inc."
                    class="field-input"
                    required
                    id="reg-company"
                  />
                </div>
              </div>

              <!-- I am attending as (2-col radio dropdown matching Image 2) -->
              <div class="field-group">
                <label class="field-label">I am attending as</label>
                <div class="select-wrap" @click="toggleDropdown('category')" :class="{ open: openDropdown === 'category' }" id="reg-category">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.category }">
                      {{ form.category || 'Select category...' }}
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
                <label class="field-label">How did you hear about us?</label>
                <div class="select-wrap" @click="toggleDropdown('source')" :class="{ open: openDropdown === 'source' }" id="reg-source">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.source }">
                      {{ form.source || 'Select source...' }}
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
              <div class="field-group">
                <label class="field-label">Country</label>
                <div class="select-wrap" @click="toggleDropdown('country')" :class="{ open: openDropdown === 'country' }" id="reg-country">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.country }">
                      {{ form.country || 'Select country...' }}
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
              <div class="field-group">
                <label class="field-label" for="reg-phone">Phone number</label>
                <div class="input-wrap">
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    class="field-input"
                    required
                    id="reg-phone"
                  />
                </div>
              </div>

              <!-- Position -->
              <div class="field-group">
                <label class="field-label" for="reg-position">Position</label>
                <div class="input-wrap">
                  <input
                    v-model="form.position"
                    type="text"
                    placeholder="e.g. Managing Director"
                    class="field-input"
                    required
                    id="reg-position"
                  />
                </div>
              </div>

              <!-- Event track(s) you plan to attend (Multi-select WITHOUT sub-pages) -->
              <div class="field-group">
                <label class="field-label">Event track(s) you plan to attend (Select all that apply)</label>
                <div class="select-wrap" @click="toggleDropdown('tracks')" :class="{ open: openDropdown === 'tracks' }" id="reg-tracks">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.tracks.length }">
                      {{ form.tracks.length ? form.tracks.join(', ') : 'Select track(s)...' }}
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
                          <path d="M2 6.2L4.5 8.7L10 3" stroke="#0B0F13" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="option-text">{{ tName }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Name of focal point in IT Park (if available) - SELECT DROPDOWN WITH SUB-PAGES matching user screenshot! -->
              <div class="field-group">
                <label class="field-label">Name of focal point in IT Park (if available)</label>
                <div class="select-wrap" @click="toggleDropdown('focal')" :class="{ open: openDropdown === 'focal' }" id="reg-focal">
                  <div class="select-display">
                    <span :class="{ placeholder: !form.focalPoint }">
                      {{ form.focalPoint || 'e.g. Contact person or team member name' }}
                    </span>
                    <svg class="chevron" :class="{ open: openDropdown === 'focal' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <!-- Dropdown Menu WITH Left Sub-pages Flyout matching screenshot -->
                  <div class="dropdown-menu tracks-menu" v-if="openDropdown === 'focal'" @click.stop>
                    <div
                      class="track-menu-row"
                      v-for="track in focalTracksList"
                      :key="track.id"
                      @mouseenter="hoveredFocalTrack = track.id"
                      @mouseleave="hoveredFocalTrack = null"
                    >
                      <!-- Main Option Item -->
                      <div
                        class="checkbox-option-item"
                        @click="selectFocal(track.title)"
                        :class="{ selected: form.focalPoint === track.title || hoveredFocalTrack === track.id }"
                      >
                        <div class="custom-checkbox" :class="{ checked: isFocalChecked(track) }">
                          <svg v-if="isFocalChecked(track)" width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6.2L4.5 8.7L10 3" stroke="#0B0F13" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <span class="option-text">{{ track.title }}</span>
                      </div>

                      <!-- Sub-page / Sub-menu Flyout (opens to the LEFT matching screenshot) -->
                      <div
                        class="subtracks-flyout"
                        v-if="track.subtracks && track.subtracks.length && hoveredFocalTrack === track.id"
                        @mouseenter="hoveredFocalTrack = track.id"
                      >
                        <div
                          class="checkbox-option-item sub-item"
                          v-for="sub in track.subtracks"
                          :key="sub"
                          @click="selectFocal(sub)"
                          :class="{ selected: form.focalPoint === sub }"
                        >
                          <div class="custom-checkbox" :class="{ checked: form.focalPoint === sub }">
                            <svg v-if="form.focalPoint === sub" width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6.2L4.5 8.7L10 3" stroke="#0B0F13" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <span class="option-text">{{ sub }}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Consent & Submit Row matching Image 1 -->
          <div class="form-bottom">
            <!-- Consent Checkbox -->
            <label class="consent-label" @click="form.consent = !form.consent">
              <div class="custom-checkbox consent-box" :class="{ checked: form.consent }">
                <svg v-if="form.consent" width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="consent-text">
                Yes, I agree that IT Park Uzbekistan team may contact me by e-mail to inquire about my request, and I am aware that my shared personal data will be saved. This consent can be withdrawn at any time.
              </span>
            </label>

            <!-- Submit Button with top-right arrow ↗ -->
            <button type="submit" class="btn-register-submit" :disabled="submitting" id="reg-submit-btn">
              <span>{{ submitting ? 'Submitting...' : 'Register now' }}</span>
              <svg v-if="!submitting" width="18" height="18" viewBox="0 0 24 24" fill="none" class="submit-arrow">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0B0F13" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div v-else class="spinner"></div>
            </button>
          </div>

        </form>
      </div>

      <!-- Thank You State -->
      <div class="reg-card thank-you" v-if="submitted">
        <div class="ty-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="31" stroke="#1BDB86" stroke-width="2"/>
            <path d="M20 32l8 8 16-16" stroke="#1BDB86" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="ty-title">Registration Submitted!</h2>
        <p class="ty-desc">Thank you for registering for ICTWEEK Uzbekistan 2026. A confirmation email with your registration details has been sent to your inbox.</p>
        <button class="btn-register-submit" @click="submitted = false; resetForm()" id="reg-another-btn">
          <span>Register Another Attendee</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

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

// 6 Categories matching Image 2
const categoryList = [
  'Investor',
  'Corporate Delegate',
  'Startup Founder',
  'Ecosystem Builder',
  'IT Outsourcing',
  'Media',
]

// 4 Sources matching Image 1
const sourceList = [
  'Online Advertisement (Instagram, Facebook, LinkedIn, Google)',
  'Partner Network',
  'IT Park Representative',
  'Organic Search / Website',
]

// Countries
const countryList = [
  'Uzbekistan',
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Japan',
  'Germany',
  'Singapore',
  'Kazakhstan',
  'Turkey',
  'South Korea',
  'China',
  'Saudi Arabia',
  'Qatar',
  'India',
  'Other',
]

// Simple tracks (no sub-pages) for Event track(s)
const simpleTracksList = [
  'Enterprise Uzbekistan Summit',
  'Startup & Venture Summit',
  'Tech & Service outsourcing conference',
  'Global Bridge (International Partnerships)',
  'GameGap: GameDev Conference',
  'AI Native: Ideas to innovation',
]

// Focal point tracks with left sub-pages matching user screenshot
const focalTracksList = [
  {
    id: 'enterprise',
    title: 'Enterprise Uzbekistan Summit',
  },
  {
    id: 'startup',
    title: 'Startup & Venture Summit',
    subtracks: [
      'Startup & Venture Summit',
      'Startup blink Awards',
      'Startup World Cup - Uzbekistan Regional Final',
      'Ignyte Challenge',
      'Taqdimot (Startup pitches)',
    ],
  },
  {
    id: 'service',
    title: 'Tech & Service outsourcing conference',
  },
  {
    id: 'bridge',
    title: 'Global Bridge (International Partnerships)',
    subtracks: [
      'Uzbek-Japan Digital Community Forum',
      'OTS Technology forum',
      'Uzbekistan - Middle east tech summit',
      'Sabriya: Women in Digital Economy',
      'AWS Community Day',
    ],
  },
  {
    id: 'gamedev',
    title: 'GameGap: GameDev Conference',
  },
  {
    id: 'ai',
    title: 'AI Native: Ideas to innovation',
  },
]

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
  hoveredFocalTrack.value = null
}

function selectCategory(cat) {
  form.category = cat
  openDropdown.value = null
}

function selectSource(src) {
  form.source = src
  openDropdown.value = null
}

function selectCountry(c) {
  form.country = c
  openDropdown.value = null
}

function toggleSimpleTrack(title) {
  const idx = form.tracks.indexOf(title)
  if (idx === -1) {
    form.tracks.push(title)
  } else {
    form.tracks.splice(idx, 1)
  }
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

async function handleSubmit() {
  if (!form.consent) {
    alert('Please agree to the terms to continue.')
    return
  }
  submitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  submitting.value = false
  submitted.value = true
}

function resetForm() {
  Object.assign(form, {
    name: '', email: '', company: '', category: '',
    source: '', country: '', phone: '', position: '',
    tracks: [], focalPoint: '', consent: false,
  })
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
  height: 46px;
  padding: 0 16px;
  border-radius: 8px;
  background: #1F2732;
  border: 1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

/* When select is OPEN - clean neutral styling without green hover glow */
.select-wrap.open .select-display {
  border-color: rgba(255, 255, 255, 0.28);
  background: #252F3D;
  box-shadow: none;
}

.select-display .placeholder {
  color: rgba(255, 255, 255, 0.40);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chevron {
  flex-shrink: 0;
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

/* Sub-page / Subtracks Flyout Submenu - positioned above when in dropup */
.subtracks-flyout {
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
  width: 320px;
  background: #151e29;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 8px;
  z-index: 600;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 240px;
  overflow-y: auto;
}

#reg-focal .subtracks-flyout {
  top: auto;
  bottom: 0;
}

.sub-item {
  padding: 8px 10px;
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

/* Thank You State */
.thank-you {
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 70px 48px;
  justify-content: center;
}

.ty-title {
  font-family: 'Manrope', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.ty-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  max-width: 560px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .reg-card {
    padding: 32px 24px 40px 24px;
    gap: 24px;
  }
  .reg-title {
    font-size: 30px;
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
