<template>
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

          <!-- Form Fields Grid -->
          <div class="form-cols">

            <!-- 1. Full name -->
            <div class="field-group field-name" :class="{ 'has-error': errors.name }">
              <label class="field-label" for="reg-fullname">{{ t('form.fullName') }}</label>
              <div class="input-wrap" :class="{ 'error-wrap': errors.name }">
                <input
                  v-model="form.name"
                  @input="formatName"
                  @blur="validateField('name')"
                  type="text"
                  :placeholder="t('form.fullNamePlaceholder') || 'e.g. John Doe'"
                  class="field-input"
                  id="reg-fullname"
                />
              </div>
            </div>

            <!-- 2. Country (Row 1 Right on Desktop / Step 2 on Mobile) -->
            <div class="field-group field-country" :class="{ 'has-error': errors.country }">
              <label class="field-label">{{ t('form.country') }}</label>
              <div class="select-wrap" @click="handleOpenCountry" :class="{ open: openDropdown === 'country', 'error-wrap': errors.country }" id="reg-country">
                <div class="select-display">
                  <span :class="{ placeholder: !form.country }">
                    {{ form.country || t('form.countryPlaceholder') || 'Select country...' }}
                  </span>
                  <svg class="chevron" :class="{ open: openDropdown === 'country' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Desktop Country Dropdown Menu -->
                <div class="dropdown-menu country-menu desktop-only-dropdown" v-if="openDropdown === 'country'" @click.stop>
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

            <!-- 3. Email (Row 2 Left on Desktop / Step 3 on Mobile) -->
            <div class="field-group field-email" :class="{ 'has-error': errors.email }">
              <label class="field-label" for="reg-email">{{ t('form.email') }}</label>
              <div class="input-wrap" :class="{ 'error-wrap': errors.email }">
                <input
                  v-model="form.email"
                  @input="errors.email = ''"
                  @blur="validateField('email')"
                  type="email"
                  :placeholder="t('form.emailPlaceholder') || 'e.g. alex@company.com'"
                  class="field-input"
                  id="reg-email"
                />
              </div>
            </div>

            <!-- 4. Phone number (Row 2 Right on Desktop / Step 4 on Mobile) -->
            <div class="field-group field-phone" :class="{ 'has-error': errors.phone }">
              <label class="field-label" for="reg-phone">{{ t('form.phone') }}</label>
              <div class="input-wrap" :class="{ 'error-wrap': errors.phone }">
                <input
                  v-model="form.phone"
                  @input="formatPhone"
                  @blur="validateField('phone')"
                  type="tel"
                  :placeholder="t('form.phonePlaceholder') || 'e.g. +1 (555) 019-2834'"
                  class="field-input"
                  id="reg-phone"
                />
              </div>
            </div>

            <!-- 5. Company (Row 3 Left on Desktop / Step 5 on Mobile) -->
            <div class="field-group field-company" :class="{ 'has-error': errors.company }">
              <label class="field-label" for="reg-company">{{ t('form.company') }}</label>
              <div class="input-wrap" :class="{ 'error-wrap': errors.company }">
                <input
                  v-model="form.company"
                  @input="errors.company = ''"
                  @blur="validateField('company')"
                  type="text"
                  :placeholder="t('form.companyPlaceholder') || 'e.g. Tech Global Inc.'"
                  class="field-input"
                  id="reg-company"
                />
              </div>
            </div>

            <!-- 6. Position (Row 3 Right on Desktop / Step 6 on Mobile) -->
            <div class="field-group field-position">
              <label class="field-label" for="reg-position">{{ t('form.position') }}</label>
              <div class="input-wrap">
                <input
                  v-model="form.position"
                  type="text"
                  :placeholder="t('form.positionPlaceholder') || 'e.g. Managing Director'"
                  class="field-input"
                  id="reg-position"
                />
              </div>
            </div>

            <!-- 7. I am attending as (Row 4 Left on Desktop / Step 7 on Mobile) -->
            <div class="field-group field-category" :class="{ 'has-error': errors.category }">
              <label class="field-label">{{ t('form.category') }}</label>
              <div class="select-wrap" @click="handleOpenCategory" :class="{ open: openDropdown === 'category', 'error-wrap': errors.category }" id="reg-category">
                <div class="select-display">
                  <span :class="{ placeholder: !form.category }">
                    {{ form.category || t('form.categoryPlaceholder') || 'Select category...' }}
                  </span>
                  <svg class="chevron" :class="{ open: openDropdown === 'category' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Desktop 2-column grid dropdown menu -->
                <div class="dropdown-menu category-grid-menu desktop-only-dropdown" v-if="openDropdown === 'category'" @click.stop>
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

            <!-- 8. Event track(s) you plan to attend (Row 4 Right on Desktop / Step 8 on Mobile) -->
            <div class="field-group field-tracks" :class="{ 'has-error': errors.tracks }">
              <label class="field-label">{{ t('form.tracks') }} (Select all that apply)</label>
              <div class="select-wrap" @click="handleOpenTracks" :class="{ open: openDropdown === 'tracks', 'error-wrap': errors.tracks }" id="reg-tracks">
                <div class="select-display" :title="form.tracks.length ? form.tracks.join(', ') : ''">
                  <span :class="{ placeholder: !form.tracks.length }">
                    {{ form.tracks.length ? form.tracks.join(', ') : (t('form.tracksPlaceholder') || 'Select track(s)...') }}
                  </span>
                  <svg class="chevron" :class="{ open: openDropdown === 'tracks' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Desktop Simple Tracks dropdown -->
                <div class="dropdown-menu tracks-menu desktop-only-dropdown" v-if="openDropdown === 'tracks'" @click.stop>
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

            <!-- 9. How did you hear about us? (Row 5 Left on Desktop / Step 9 on Mobile) -->
            <div class="field-group field-source">
              <label class="field-label">{{ t('form.source') }}</label>
              <div class="select-wrap" @click="handleOpenSource" :class="{ open: openDropdown === 'source' }" id="reg-source">
                <div class="select-display">
                  <span :class="{ placeholder: !form.source }">
                    {{ form.source || t('form.sourcePlaceholder') || 'Select source...' }}
                  </span>
                  <svg class="chevron" :class="{ open: openDropdown === 'source' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Desktop Source radio list dropdown -->
                <div class="dropdown-menu source-menu desktop-only-dropdown" v-if="openDropdown === 'source'" @click.stop>
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

            <!-- 10. Name of focal point in IT Park (Row 5 Right on Desktop / Step 10 on Mobile) -->
            <div class="field-group field-focal">
              <label class="field-label">{{ t('form.focalPoint') }}</label>
              
              <!-- On Mobile: Direct text input matching Image 1 -->
              <div class="input-wrap mobile-focal-input">
                <input
                  v-model="form.focalPoint"
                  type="text"
                  :placeholder="t('form.focalPointPlaceholder') || 'e.g. Contact person or team member name'"
                  class="field-input"
                  id="reg-focal-mobile"
                />
              </div>

              <!-- On Desktop: Dropdown menu with subtracks -->
              <div class="select-wrap desktop-focal-select" @click="toggleDropdown('focal')" :class="{ open: openDropdown === 'focal' }" id="reg-focal">
                <div class="select-display">
                  <span :class="{ placeholder: !form.focalPoint }">
                    {{ form.focalPoint || t('form.focalPointPlaceholder') || 'e.g. Contact person or team member name' }}
                  </span>
                  <svg class="chevron" :class="{ open: openDropdown === 'focal' }" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Desktop Focal Dropdown -->
                <div class="focal-main-menu" v-if="openDropdown === 'focal'" @click.stop>
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

          <!-- Bottom Consent & Submit Row matching Image 1 -->
          <div class="form-bottom" :class="{ 'has-error': errors.consent }">
            <!-- Consent Checkbox -->
            <label class="consent-label" @click="toggleConsent">
              <div class="custom-checkbox consent-box" :class="{ checked: form.consent, 'error-box': errors.consent }">
                <svg v-if="form.consent" width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.2L4.5 8.7L10 3" stroke="#041A12" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="consent-text">
                {{ t('form.consent') }}
              </span>
            </label>

            <!-- Submit Button (Desktop version with arrow / Mobile version full width 'Submit Application' matching Image 1) -->
            <button type="submit" class="btn-register-submit" :disabled="submitting" id="reg-submit-btn">
              <span class="desktop-btn-text">{{ submitting ? t('form.submitting') : t('form.submitBtn') }}</span>
              <span class="mobile-btn-text">{{ submitting ? 'Submitting...' : 'Submit Application' }}</span>
              <svg v-if="!submitting" width="18" height="18" viewBox="0 0 24 24" fill="none" class="submit-arrow desktop-arrow-only">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0B0F13" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div v-if="submitting" class="spinner"></div>
            </button>
          </div>

        </form>
      </div>

      <!-- Thank You State -->
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

    <!-- ========================================================================== -->
    <!-- MOBILE BOTTOM SHEET MODAL FOR TRACKS (Matching Image 2 exactly)           -->
    <!-- ========================================================================== -->
    <transition name="sheet-anim">
      <div class="mobile-sheet-backdrop" v-if="mobileTracksModalOpen" @click="closeMobileTracks">
        <div class="mobile-bottom-sheet" @click.stop>
          <!-- Top drag handle -->
          <div class="sheet-drag-handle"></div>

          <!-- 1. MAIN TRACKS LIST (when mobileTracksSubpage is null) -->
          <div class="sheet-view-content" v-if="!mobileTracksSubpage">
            <div class="sheet-header">
              <h3 class="sheet-title">Event track(s) you plan to attend</h3>
              <p class="sheet-subtitle">Choose multiple summits or conferences to attend</p>
            </div>

            <div class="sheet-items-list">
              <div
                class="sheet-track-row"
                v-for="track in mobileTracksData"
                :key="track.id"
                @click="handleTrackRowClick(track)"
              >
                <!-- Checkbox -->
                <div
                  class="sheet-checkbox"
                  :class="{ checked: isTrackSelected(track) }"
                  @click.stop="toggleMainTrack(track)"
                >
                  <svg v-if="isTrackSelected(track)" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Label -->
                <span class="sheet-row-label">{{ track.title }}</span>

                <!-- Chevron Right (for items with subtracks) -->
                <div class="sheet-chevron-wrap" v-if="track.hasSubtracks" @click.stop="openTracksSubpage(track.id)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Confirm Selection Button matching Image 2 -->
            <div class="sheet-footer">
              <button class="sheet-btn-confirm-main" @click="closeMobileTracks">
                Confirm selection ({{ form.tracks.length }})
              </button>
            </div>
          </div>

          <!-- 2. SUBPAGE TRACKS LIST (when mobileTracksSubpage is active, matching Image 2 Right) -->
          <div class="sheet-view-content" v-else>
            <div class="sheet-header">
              <h3 class="sheet-title">{{ currentSubpageTrack?.title }}</h3>
              <p class="sheet-subtitle">Choose multiple summits or conferences to attend</p>
            </div>

            <div class="sheet-items-list">
              <div
                class="sheet-track-row"
                v-for="sub in currentSubpageTrack?.subtracks || []"
                :key="sub"
                @click="toggleSubtrack(sub)"
              >
                <!-- Checkbox -->
                <div class="sheet-checkbox" :class="{ checked: form.tracks.includes(sub) }">
                  <svg v-if="form.tracks.includes(sub)" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.2L4.5 8.7L10 3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <!-- Label -->
                <span class="sheet-row-label">{{ sub }}</span>
              </div>
            </div>

            <!-- Subpage Bottom Row: [Go back] and [Confirm] matching Image 2 Right -->
            <div class="sheet-footer sheet-footer-dual">
              <button class="sheet-btn-back" @click="mobileTracksSubpage = null">
                Go back
              </button>
              <button class="sheet-btn-confirm-sub" @click="mobileTracksSubpage = null">
                Confirm
              </button>
            </div>
          </div>

        </div>
      </div>
    </transition>

    <!-- ========================================================================== -->
    <!-- MOBILE BOTTOM SHEET MODAL FOR CATEGORY                                     -->
    <!-- ========================================================================== -->
    <transition name="sheet-anim">
      <div class="mobile-sheet-backdrop" v-if="mobileCategoryModalOpen" @click="mobileCategoryModalOpen = false">
        <div class="mobile-bottom-sheet" @click.stop>
          <div class="sheet-drag-handle"></div>
          <div class="sheet-header">
            <h3 class="sheet-title">{{ t('form.category') }}</h3>
            <p class="sheet-subtitle">Select your attendee category</p>
          </div>
          <div class="sheet-items-list">
            <div
              class="sheet-radio-row"
              v-for="cat in categoryList"
              :key="cat"
              @click="selectCategoryMobile(cat)"
              :class="{ selected: form.category === cat }"
            >
              <div class="sheet-radio-circle" :class="{ checked: form.category === cat }">
                <div class="sheet-radio-dot" v-if="form.category === cat"></div>
              </div>
              <span class="sheet-row-label">{{ cat }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ========================================================================== -->
    <!-- MOBILE BOTTOM SHEET MODAL FOR SOURCE                                       -->
    <!-- ========================================================================== -->
    <transition name="sheet-anim">
      <div class="mobile-sheet-backdrop" v-if="mobileSourceModalOpen" @click="mobileSourceModalOpen = false">
        <div class="mobile-bottom-sheet" @click.stop>
          <div class="sheet-drag-handle"></div>
          <div class="sheet-header">
            <h3 class="sheet-title">{{ t('form.source') }}</h3>
            <p class="sheet-subtitle">How did you hear about ICTWEEK 2026?</p>
          </div>
          <div class="sheet-items-list">
            <div
              class="sheet-radio-row"
              v-for="src in sourceList"
              :key="src"
              @click="selectSourceMobile(src)"
              :class="{ selected: form.source === src }"
            >
              <div class="sheet-radio-circle" :class="{ checked: form.source === src }">
                <div class="sheet-radio-dot" v-if="form.source === src"></div>
              </div>
              <span class="sheet-row-label">{{ src }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ========================================================================== -->
    <!-- MOBILE BOTTOM SHEET MODAL FOR COUNTRY                                      -->
    <!-- ========================================================================== -->
    <transition name="sheet-anim">
      <div class="mobile-sheet-backdrop" v-if="mobileCountryModalOpen" @click="mobileCountryModalOpen = false">
        <div class="mobile-bottom-sheet" @click.stop>
          <div class="sheet-drag-handle"></div>
          <div class="sheet-header">
            <h3 class="sheet-title">{{ t('form.country') }}</h3>
            <p class="sheet-subtitle">Select your country</p>
          </div>
          <div class="sheet-search-wrap">
            <input
              v-model="countrySearchQuery"
              type="text"
              placeholder="Search country..."
              class="sheet-search-input"
            />
          </div>
          <div class="sheet-items-list sheet-country-scroll">
            <div
              class="sheet-country-row"
              v-for="c in filteredCountries"
              :key="c"
              @click="selectCountryMobile(c)"
              :class="{ selected: form.country === c }"
            >
              <span class="sheet-row-label">{{ c }}</span>
              <svg v-if="form.country === c" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="#73fbb3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const emit = defineEmits(['submitted', 'backToHome'])

const submitted = ref(false)
const submitting = ref(false)
const openDropdown = ref(null)
const hoveredFocalTrack = ref(null)

// Mobile Modals State
const mobileTracksModalOpen = ref(false)
const mobileTracksSubpage = ref(null)
const mobileCategoryModalOpen = ref(false)
const mobileSourceModalOpen = ref(false)
const mobileCountryModalOpen = ref(false)
const countrySearchQuery = ref('')

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

// Mobile Tracks Data Structure matching Image 2
const mobileTracksData = [
  {
    id: 'enterprise',
    title: 'Enterprise Uzbekistan Summit',
    hasSubtracks: false,
  },
  {
    id: 'startup',
    title: 'Startup & Venture Summit',
    hasSubtracks: true,
    subtracks: [
      'Startup & Venture Summit',
      'Startup blink Awards',
      'Startup World Cup - Uzbekistan Regional Final',
      'Ignyte Challenge',
      'Taqdimot (Startup pitches)',
    ]
  },
  {
    id: 'service',
    title: 'Tech & Service outsourcing conference',
    hasSubtracks: false,
  },
  {
    id: 'bridge',
    title: 'Global Bridge (International Partnerships)',
    hasSubtracks: true,
    subtracks: [
      'Uzbekistan – Japan IT Bridge',
      'OTS Forum',
      'Middle East Forum',
      'Sabriya: Central Asian Women in Tech',
      'AWS Community Day'
    ]
  },
  {
    id: 'gamedev',
    title: 'GameGap: GameDev Conference',
    hasSubtracks: false,
  },
  {
    id: 'ai',
    title: 'AI Native: Ideas to innovation',
    hasSubtracks: false,
  }
]

const currentSubpageTrack = computed(() => {
  return mobileTracksData.find(t => t.id === mobileTracksSubpage.value)
})

function isTrackSelected(track) {
  if (track.hasSubtracks) {
    return (track.subtracks || []).some(s => form.tracks.includes(s))
  }
  return form.tracks.includes(track.title)
}

function handleTrackRowClick(track) {
  if (track.hasSubtracks) {
    openTracksSubpage(track.id)
  } else {
    toggleMainTrack(track)
  }
}

function openTracksSubpage(id) {
  mobileTracksSubpage.value = id
}

function toggleMainTrack(track) {
  if (track.hasSubtracks) {
    const allSelected = (track.subtracks || []).every(s => form.tracks.includes(s))
    if (allSelected) {
      form.tracks = form.tracks.filter(t => !(track.subtracks || []).includes(t))
    } else {
      track.subtracks.forEach(s => {
        if (!form.tracks.includes(s)) form.tracks.push(s)
      })
    }
  } else {
    const idx = form.tracks.indexOf(track.title)
    if (idx === -1) {
      form.tracks.push(track.title)
    } else {
      form.tracks.splice(idx, 1)
    }
  }
  if (form.tracks.length > 0) errors.tracks = ''
}

function toggleSubtrack(sub) {
  const idx = form.tracks.indexOf(sub)
  if (idx === -1) {
    form.tracks.push(sub)
  } else {
    form.tracks.splice(idx, 1)
  }
  if (form.tracks.length > 0) errors.tracks = ''
}

function handleOpenTracks() {
  if (window.innerWidth < 768) {
    mobileTracksModalOpen.value = true
    mobileTracksSubpage.value = null
  } else {
    toggleDropdown('tracks')
  }
}

function closeMobileTracks() {
  mobileTracksModalOpen.value = false
  mobileTracksSubpage.value = null
}

function handleOpenCategory() {
  if (window.innerWidth < 768) {
    mobileCategoryModalOpen.value = true
  } else {
    toggleDropdown('category')
  }
}

function selectCategoryMobile(cat) {
  form.category = cat
  errors.category = ''
  mobileCategoryModalOpen.value = false
}

function handleOpenSource() {
  if (window.innerWidth < 768) {
    mobileSourceModalOpen.value = true
  } else {
    toggleDropdown('source')
  }
}

function selectSourceMobile(src) {
  form.source = src
  mobileSourceModalOpen.value = false
}

function handleOpenCountry() {
  if (window.innerWidth < 768) {
    countrySearchQuery.value = ''
    mobileCountryModalOpen.value = true
  } else {
    toggleDropdown('country')
  }
}

function selectCountryMobile(c) {
  form.country = c
  errors.country = ''
  mobileCountryModalOpen.value = false
}

// Lock body scroll on modal open
watch([mobileTracksModalOpen, mobileCategoryModalOpen, mobileSourceModalOpen, mobileCountryModalOpen], (vals) => {
  const anyOpen = vals.some(v => v)
  if (anyOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Formatting and mask helpers
function formatName(e) {
  const val = e.target.value
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
    let res = '+998'
    const rest = digits.slice(3)
    if (rest.length > 0) res += ' (' + rest.slice(0, 2)
    if (rest.length >= 2) res += ') ' + rest.slice(2, 5)
    if (rest.length >= 5) res += '-' + rest.slice(5, 7)
    if (rest.length >= 7) res += '-' + rest.slice(7, 9)
    form.phone = res
  } else {
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
      errors.name = t('form.errors.name') || 'Please enter your full name'
      return false
    }
    errors.name = ''
    return true
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errors.email = t('form.errors.email') || 'Please enter a valid email'
      return false
    }
    errors.email = ''
    return true
  }

  if (field === 'company') {
    if (!form.company.trim()) {
      errors.company = t('form.errors.company') || 'Please enter your company'
      return false
    }
    errors.company = ''
    return true
  }

  if (field === 'phone') {
    const digitsOnly = form.phone.replace(/\D/g, '')
    if (!form.phone.trim() || digitsOnly.length < 7) {
      errors.phone = t('form.errors.phone') || 'Please enter a valid phone number'
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

const categoryList = computed(() => {
  const list = t('form.categories')
  return Array.isArray(list) ? list : []
})

const sourceList = computed(() => {
  const list = t('form.sources')
  return Array.isArray(list) ? list : []
})

const countryList = computed(() => {
  const list = t('form.countries')
  return Array.isArray(list) ? list : []
})

const filteredCountries = computed(() => {
  if (!countrySearchQuery.value.trim()) return countryList.value
  const q = countrySearchQuery.value.toLowerCase()
  return countryList.value.filter(c => c.toLowerCase().includes(q))
})

const simpleTracksList = computed(() => {
  const list = t('form.simpleTracks')
  return Array.isArray(list) ? list : []
})

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
    errors.category = t('form.errors.category') || 'Please select a category'
    valid = false
  } else {
    errors.category = ''
  }

  if (!form.country) {
    errors.country = t('form.errors.country') || 'Please select a country'
    valid = false
  } else {
    errors.country = ''
  }

  if (!form.tracks || form.tracks.length === 0) {
    errors.tracks = t('form.errors.tracks') || 'Please select at least one track'
    valid = false
  } else {
    errors.tracks = ''
  }

  if (!form.consent) {
    errors.consent = t('form.errors.consent') || 'Please agree to the terms'
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
onUnmounted(() => {
  document.removeEventListener('click', closeOnOutside)
  document.body.style.overflow = ''
})
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

/* Outer Card */
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
  max-width: 780px;
}

/* Form Layout */
.reg-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Desktop 2-column grid mapping */
.form-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.field-name     { grid-column: 1; grid-row: 1; }
.field-country  { grid-column: 2; grid-row: 1; }
.field-email    { grid-column: 1; grid-row: 2; }
.field-phone    { grid-column: 2; grid-row: 2; }
.field-company  { grid-column: 1; grid-row: 3; }
.field-position { grid-column: 2; grid-row: 3; }
.field-category { grid-column: 1; grid-row: 4; }
.field-tracks   { grid-column: 2; grid-row: 4; }
.field-source   { grid-column: 1; grid-row: 5; }
.field-focal    { grid-column: 2; grid-row: 5; }

.mobile-focal-input {
  display: none;
}

.desktop-focal-select {
  display: block;
}

.mobile-btn-text {
  display: none;
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

/* Input */
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
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.chevron.open {
  transform: rotate(180deg);
}

/* Dropdown menus (desktop) */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #18222d;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 8px;
  z-index: 600;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95);
  box-sizing: border-box;
}

.country-menu {
  max-height: 240px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 10px 14px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.dropdown-item:hover,
.dropdown-item.selected {
  background: rgba(255, 255, 255, 0.08);
}

/* Radio & Checkbox options inside dropdowns */
.radio-option-item,
.checkbox-option-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease;
  color: #FFFFFF;
}

.radio-option-item:hover,
.checkbox-option-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.category-grid-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  min-width: 440px;
}

.radio-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.radio-circle.checked {
  border-color: #00E575;
}

.radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00E575;
}

.custom-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.custom-checkbox.checked {
  background: #00E575;
  border-color: #00E575;
}

.option-text {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.35;
}

/* Focal Menu */
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  background: #1F2732;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.2s ease;
}

.consent-box.checked {
  background: #73fbb3;
  border-color: #73fbb3;
}

.consent-text {
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.45;
}

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

.error-wrap {
  border-color: #FF5E5E !important;
  box-shadow: 0 0 14px rgba(255, 94, 94, 0.35) !important;
}

.error-box {
  border: 1.5px solid #FF5E5E !important;
  box-shadow: 0 0 10px rgba(255, 94, 94, 0.35) !important;
}

/* Thank You State */
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

/* ==========================================================================
   TABLET RESPONSIVENESS (768px - 1024px)
   ========================================================================== */
@media (max-width: 1024px) and (min-width: 768px) {
  .reg-card {
    padding: 36px 32px 44px 32px;
    gap: 28px;
  }
  .reg-title {
    font-size: 34px;
  }
  .form-cols {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .form-bottom {
    gap: 20px;
  }
  .focal-sub-flyout-left {
    right: auto;
    left: 0;
    top: calc(100% + 4px);
    width: 100%;
    min-width: 100%;
  }
}

/* ==========================================================================
   MOBILE RESPONSIVENESS (< 768px) - MATCHING USER SCREENSHOT IMAGE 1 & 2
   ========================================================================== */
@media (max-width: 767px) {
  .page-container {
    padding: 0 16px;
  }
  .reg-card {
    padding: 28px 16px 32px 16px;
    gap: 20px;
    border-radius: 18px;
  }
  .reg-title {
    font-size: 26px;
    line-height: 1.2;
  }
  .reg-subtitle {
    font-size: 13.5px;
    line-height: 1.45;
  }
  .form-cols {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .field-name,
  .field-country,
  .field-email,
  .field-phone,
  .field-company,
  .field-position,
  .field-category,
  .field-tracks,
  .field-source,
  .field-focal {
    grid-column: auto !important;
    grid-row: auto !important;
  }
  .mobile-focal-input {
    display: block;
  }
  .desktop-focal-select {
    display: none;
  }
  .desktop-only-dropdown {
    display: none !important;
  }
  .field-input {
    height: 48px;
    font-size: 14px;
    background: #1a232c;
    border-radius: 8px;
    border-color: rgba(255, 255, 255, 0.12);
  }
  .select-display {
    min-height: 48px;
    font-size: 14px;
    background: #1a232c;
    border-radius: 8px;
    border-color: rgba(255, 255, 255, 0.12);
  }
  .form-bottom {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    margin-top: 6px;
  }
  .consent-text {
    font-size: 12px;
    line-height: 1.4;
  }
  .btn-register-submit {
    width: 100%;
    justify-content: center;
    height: 50px;
    border-radius: 10px;
    background: #73fbb3;
    color: #041A12;
    font-size: 15px;
    font-weight: 700;
    box-shadow: 0 4px 16px rgba(115, 251, 179, 0.35);
  }
  .desktop-btn-text,
  .desktop-arrow-only {
    display: none;
  }
  .mobile-btn-text {
    display: inline;
  }
  .thank-you-view {
    padding: 40px 16px;
  }
  .desktop-br {
    display: none;
  }
}

/* ==========================================================================
   MOBILE BOTTOM SHEET STYLES (Matching Image 2 exactly)
   ========================================================================== */
.mobile-sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: fadeInBackdrop 0.2s ease;
}

.mobile-bottom-sheet {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #17202a;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 18px 24px 18px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.7);
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  animation: slideUpSheet 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

.sheet-drag-handle {
  width: 38px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 auto 16px auto;
  flex-shrink: 0;
}

.sheet-view-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}

.sheet-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sheet-title {
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.25;
}

.sheet-subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.35;
}

.sheet-items-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 52vh;
  overflow-y: auto;
  padding-right: 2px;
}

.sheet-track-row,
.sheet-radio-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;
  user-select: none;
}

.sheet-track-row:active,
.sheet-radio-row:active {
  background: rgba(255, 255, 255, 0.06);
}

.sheet-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
  background: transparent;
}

.sheet-checkbox.checked {
  background: #1BDB86;
  border-color: #1BDB86;
}

.sheet-row-label {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  flex: 1;
  line-height: 1.35;
}

.sheet-chevron-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
}

.sheet-radio-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sheet-radio-circle.checked {
  border-color: #73fbb3;
}

.sheet-radio-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #73fbb3;
}

.sheet-footer {
  margin-top: 8px;
  flex-shrink: 0;
}

.sheet-btn-confirm-main {
  width: 100%;
  height: 48px;
  border-radius: 10px;
  background: #73fbb3;
  border: none;
  color: #041A12;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  box-shadow: 0 4px 16px rgba(115, 251, 179, 0.35);
}

.sheet-btn-confirm-main:active {
  transform: scale(0.98);
}

.sheet-footer-dual {
  display: flex;
  gap: 12px;
}

.sheet-btn-back {
  flex: 1;
  height: 48px;
  border-radius: 10px;
  background: #1e2832;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  font-family: 'Manrope', sans-serif;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.sheet-btn-confirm-sub {
  flex: 1;
  height: 48px;
  border-radius: 10px;
  background: #73fbb3;
  border: none;
  color: #041A12;
  font-family: 'Manrope', sans-serif;
  font-size: 14.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}

.sheet-btn-back:active,
.sheet-btn-confirm-sub:active {
  transform: scale(0.98);
}

/* Country sheet search */
.sheet-search-wrap {
  margin-bottom: 8px;
}

.sheet-search-input {
  width: 100%;
  height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  background: #1e2832;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #FFFFFF;
  font-family: 'Manrope', sans-serif;
  font-size: 13.5px;
  outline: none;
  box-sizing: border-box;
}

.sheet-country-scroll {
  max-height: 45vh;
}

.sheet-country-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
  border-radius: 6px;
  cursor: pointer;
}

.sheet-country-row:active,
.sheet-country-row.selected {
  background: rgba(255, 255, 255, 0.08);
}

.sheet-anim-enter-active,
.sheet-anim-leave-active {
  transition: opacity 0.25s ease;
}

.sheet-anim-enter-from,
.sheet-anim-leave-to {
  opacity: 0;
}

@keyframes fadeInBackdrop {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUpSheet {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>
