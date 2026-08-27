<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    class="base-btn"
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      { 'is-loading': loading, 'is-disabled': disabled || loading, 'is-block': block }
    ]"
    :disabled="tag === 'button' ? (disabled || loading) : undefined"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="btn-spinner" aria-hidden="true"></span>
    
    <!-- Prefix Icon Slot -->
    <span v-if="$slots.prefix" class="btn-icon prefix">
      <slot name="prefix"></slot>
    </span>

    <!-- Button Text Content -->
    <span class="btn-label">
      <slot></slot>
    </span>

    <!-- Suffix Icon Slot -->
    <span v-if="$slots.suffix" class="btn-icon suffix">
      <slot name="suffix"></slot>
    </span>
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: undefined
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'glass', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (s) => ['sm', 'md', 'lg'].includes(s)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

function handleClick(e) {
  if (props.disabled || props.loading) {
    e.preventDefault()
    return
  }
  emit('click', e)
}
</script>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 9999px;
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
  user-select: none;
  white-space: nowrap;
  outline: none;
}

.base-btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(132, 255, 193, 0.4);
}

/* Sizes */
.size-sm {
  padding: 8px 16px;
  font-size: 13px;
}

.size-md {
  padding: 12px 24px;
  font-size: 14px;
}

.size-lg {
  padding: 16px 32px;
  font-size: 15px;
}

.is-block {
  width: 100%;
}

/* Variants */
.variant-primary {
  background: linear-gradient(135deg, #1bd97b 0%, #00bc68 100%);
  color: #061019;
  box-shadow: 0 0 24px rgba(27, 217, 123, 0.35);
}

.variant-primary:hover:not(.is-disabled) {
  background: linear-gradient(135deg, #24f08a 0%, #02d174 100%);
  box-shadow: 0 0 32px rgba(27, 217, 123, 0.55);
  transform: translateY(-1px);
}

.variant-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
}

.variant-secondary:hover:not(.is-disabled) {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.variant-outline {
  background: transparent;
  color: #84ffc1;
  border-color: rgba(132, 255, 193, 0.4);
}

.variant-outline:hover:not(.is-disabled) {
  background: rgba(132, 255, 193, 0.1);
  border-color: #84ffc1;
}

.variant-glass {
  background: rgba(10, 20, 30, 0.6);
  border-color: rgba(132, 255, 193, 0.2);
  color: #ffffff;
  backdrop-filter: blur(16px);
}

.variant-glass:hover:not(.is-disabled) {
  border-color: rgba(132, 255, 193, 0.5);
  box-shadow: 0 0 20px rgba(132, 255, 193, 0.15);
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
