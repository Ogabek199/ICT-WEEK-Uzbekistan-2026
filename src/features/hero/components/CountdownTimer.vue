<template>
  <div class="countdown-3boxes-row">
    <div class="countdown-box">
      <span class="count-num">{{ days }}</span>
      <span class="count-unit">{{ t('hero.days') }}</span>
    </div>
    <div class="countdown-box">
      <span class="count-num">{{ formatTime(hours) }}</span>
      <span class="count-unit">{{ t('hero.hours') }}</span>
    </div>
    <div class="countdown-box">
      <span class="count-num">{{ formatTime(minutes) }}</span>
      <span class="count-unit">{{ t('hero.minutes') }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const targetDate = new Date('2026-09-22T09:00:00+05:00').getTime()
let timer = null

function updateCountdown() {
  const now = Date.now()
  const diff = Math.max(0, targetDate - now)

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

function formatTime(val) {
  return String(val).padStart(2, '0')
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.countdown-3boxes-row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.countdown-box {
  flex: 1;
  height: 64px;
  background: rgba(1, 18, 24, 0.7);
  border: 1px solid rgba(132, 255, 193, 0.16);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.count-num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.count-unit {
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #84FFC1;
  letter-spacing: 0.08em;
  margin-top: 4px;
}
</style>
