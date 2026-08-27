<template>
  <div class="base-badge" :class="[`variant-${variant}`, { 'has-dot': dot }]">
    <span v-if="dot" class="badge-dot" aria-hidden="true"></span>
    <span v-if="$slots.icon" class="badge-icon">
      <slot name="icon"></slot>
    </span>
    <span class="badge-text">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'green',
    validator: (v) => ['green', 'cyan', 'blue', 'purple', 'glass'].includes(v)
  },
  dot: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  user-select: none;
  width: fit-content;
}

.variant-green {
  background: rgba(27, 217, 123, 0.1);
  color: #84ffc1;
  border: 1px solid rgba(27, 217, 123, 0.3);
  box-shadow: 0 0 12px rgba(27, 217, 123, 0.15);
}

.variant-cyan {
  background: rgba(0, 217, 255, 0.1);
  color: #70eeff;
  border: 1px solid rgba(0, 217, 255, 0.3);
}

.variant-blue {
  background: rgba(56, 139, 253, 0.12);
  color: #58a6ff;
  border: 1px solid rgba(56, 139, 253, 0.3);
}

.variant-purple {
  background: rgba(163, 113, 247, 0.12);
  color: #d2a8ff;
  border: 1px solid rgba(163, 113, 247, 0.3);
}

.variant-glass {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
  box-shadow: 0 0 8px currentColor;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}
</style>
