<template>
  <button class="rounded uppercase flex justify-center items-center" :class="[classStyle, classSize]" :type="typeBtn">
    <span><slot /></span>
  </button>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    typeBtn: {
      type: String,
      default: 'button',
    },
    content: {
      type: String,
      default: 'enviar',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'base',
    },
  })

  const classStyle = computed(() => {
    if (props.variant === 'secondary') return 'bg-secondary text-secondary-foreground hover:opacity-80 hover:scale-105 transition-all duration-200 active:scale-95'
    if (props.variant === 'destructive') return 'bg-destructive text-destructive-foreground hover:opacity-80 hover:scale-105 transition-all duration-200 active:scale-95'
    return 'bg-primary text-primary-foreground hover:opacity-80 hover:scale-105 transition-all duration-200 active:scale-95'
  })
  const classSize = computed(() => {
    return {
      sm: 'h-8 text-xs px-3',
      base: 'py-2 h-11 px-4',
    }[props.size]
  })
</script>
