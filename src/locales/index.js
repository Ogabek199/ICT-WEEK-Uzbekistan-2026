import en from './en.json'
import uz from './uz.json'
import ru from './ru.json'

export const messages = {
  en,
  uz,
  ru
}

export const supportedLocales = [
  { code: 'en', label: 'ENG', title: 'English' },
  { code: 'uz', label: 'UZB', title: "O'zbekcha" },
  { code: 'ru', label: 'RUS', title: 'Русский' }
]

export const defaultLocale = 'en'
