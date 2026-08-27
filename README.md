# ICT WEEK UZBEKISTAN 2026

ICT WEEK Uzbekistan 2026 xalqaro axborot-kommunikatsiya texnologiyalari haftaligi uchun ishlab chiqilgan zamonaviy, tezkor va responsiv veb-platforma.

---

## 🏗 Arxitektura (Architecture)

Loyiha **Feature-Driven** va modulli arxitektura asosida qurilgan:

```text
ICT WEEK 2026/
├── public/                 # Statik resurslar (shriftlar, rasmlar, SEO fayllari)
├── src/
│   ├── assets/             # Global stillar, dizayn tokenlari, logotiplar va rasmlar
│   ├── components/         # Umumiy va layout komponentlar (Header, Footer)
│   ├── composables/        # Reaktiv biznes mantiq va xizmatlar (useI18n)
│   ├── features/           # Sahifa bo‘limlari (Hero, Bento, Tracks, Partners, Registration)
│   ├── locales/            # Ko‘p tillilik lug‘atlari (UZ, RU, EN)
│   ├── App.vue             # Asosiy ildiz komponent va dynamic code splitting
│   └── main.js             # Dastur kirish nuqtasi
├── index.html              # Asosiy HTML va resurslarni preload qilish
└── vite.config.js          # Build va chunk splitting konfiguratsiyasi
```

### Asosiy texnologik yechimlar:
- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite (Rollup chunk splitting)
- **Styling**: Vanilla CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism)
- **Internationalization**: Yengil va reaktiv `useI18n` composable (UZ / RU / EN)
- **Performance**: Self-hosted shriftlar, WebP format, resurslarni kechiktirib yuklash (Deferred Loading)

---

## 💻 Komandalar (Commands)

### 1. Bog‘liqliklarni o‘rnatish:
```bash
npm install
```

### 2. Dasturchi rejimida ishga tushirish (Development):
```bash
npm run dev
```

### 3. Production uchun yig‘ish (Build):
```bash
npm run build
```

### 4. Yig‘ilgan loyihani tekshirish (Preview):
```bash
npm run preview
# yoki
npx serve dist --listen 5050
```
