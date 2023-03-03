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
    if (props.variant === 'secondary') return 'bg-custom-red-100 text-custom-orange-50'
    return 'bg-custom-green-100 text-custom-orange-50'
  })
  const classSize = computed(() => {
    return {
      sm: 'h-8 text-xs px-3',
      base: 'py-2 h-11 px-4',
    }[props.size]
  })
</script>
