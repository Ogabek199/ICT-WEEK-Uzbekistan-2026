<template>
  <div
    class="base-card"
    :class="[
      `variant-${variant}`,
      { 'is-hoverable': hoverable, 'has-glow': glow }
    ]"
  >
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'glass',
    validator: (v) => ['glass', 'gradient', 'dark', 'outline'].includes(v)
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  glow: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.base-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.variant-glass {
  background: rgba(10, 20, 32, 0.65);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.variant-gradient {
  background: linear-gradient(180deg, rgba(16, 28, 44, 0.7) 0%, rgba(6, 14, 24, 0.9) 100%);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(132, 255, 193, 0.15);
}

.variant-dark {
  background: #080d16;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.variant-outline {
  background: transparent;
  border: 1px solid rgba(132, 255, 193, 0.2);
}

.has-glow {
  box-shadow: 0 0 40px rgba(27, 217, 123, 0.08);
}

.is-hoverable:hover {
  transform: translateY(-4px);
  border-color: rgba(132, 255, 193, 0.35);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(27, 217, 123, 0.12);
}

.card-header {
  padding: 24px 24px 0 24px;
}

.card-body {
  padding: 24px;
}

.card-footer {
  padding: 0 24px 24px 24px;
}
</style>
