import { ref, computed } from 'vue'
import { messages, supportedLocales, defaultLocale } from '@/locales'

const STORAGE_KEY = 'ictweek_lang'

// Get initial locale from localStorage or browser navigator or fallback to defaultLocale
function getInitialLocale() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && messages[saved]) {
      return saved
    }
    const navLang = navigator.language?.slice(0, 2)
    if (navLang && messages[navLang]) {
      return navLang
    }
  }
  return defaultLocale
}

// Global reactive state
export const currentLanguage = ref(getInitialLocale())

// Apply html lang attribute on boot
if (typeof document !== 'undefined') {
  document.documentElement.lang = currentLanguage.value
}

/**
 * Set active language and persist to localStorage
 * @param {'en' | 'uz' | 'ru'} lang
 */
export function setLanguage(lang) {
  if (messages[lang]) {
    currentLanguage.value = lang
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    }
  }
}

/**
 * Resolve translation key safely with fallback to English
 * @param {string} path - Dot notation key (e.g. 'nav.home')
 * @param {Record<string, string|number>} [params] - Optional interpolation params
 */
export function translate(path, params = {}) {
  if (!path) return ''

  const keys = path.split('.')
  const currentLang = currentLanguage.value

  // 1. Try in current language
  let result = getNestedValue(messages[currentLang], keys)

  // 2. Fallback to default (English) if missing
  if (result === undefined && currentLang !== defaultLocale) {
    result = getNestedValue(messages[defaultLocale], keys)
  }

  // 3. If still not found, return key path
  if (result === undefined) {
    return path
  }

  // 4. Parameter interpolation if provided
  if (typeof result === 'string' && Object.keys(params).length > 0) {
    return Object.entries(params).reduce((str, [paramKey, paramVal]) => {
      return str.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramVal))
    }, result)
  }

  return result
}

function getNestedValue(obj, keys) {
  if (!obj) return undefined
  let current = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return undefined
    }
  }
  return current
}

// Composable function
export function useI18n() {
  const currentLocaleInfo = computed(() => {
    return supportedLocales.find(l => l.code === currentLanguage.value) || supportedLocales[0]
  })

  return {
    lang: currentLanguage,
    currentLanguage,
    currentLocaleInfo,
    locales: supportedLocales,
    setLanguage,
    t: translate
  }
}

export const translations = messages
export default useI18n
