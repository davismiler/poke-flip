<template>
  <div 
    tabindex="0"
    class="py-2 px-4 rounded text-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-transparent" 
    :class="[
      isActive ? getActiveColor() : getInactiveColor(),
      !isActive && 'cursor-pointer hover:opacity-80',
      'focus:border focus:border-white'
    ]">
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    isActive: Boolean,
    content: [String, Number],
    label: String,
  })

  const getActiveColor = () => {
    // Apply difficulty colors if label is 'difficulty'
    if (props.label === 'difficulty') {
      if (props.content === 'normal') return 'bg-green-600 text-white'
      if (props.content === 'hard') return 'bg-yellow-600 text-white'
      if (props.content === 'extreme') return 'bg-red-600 text-white'
    }
    // Apply quantity colors if label is 'quantity'
    if (props.label === 'quantity') {
      if (props.content === 8) return 'bg-blue-600 text-white'
      if (props.content === 12) return 'bg-purple-600 text-white'
      if (props.content === 16) return 'bg-pink-600 text-white'
    }
    return 'bg-secondary text-foreground'
  }

  const getInactiveColor = () => {
    // Apply difficulty colors if label is 'difficulty'
    if (props.label === 'difficulty') {
      if (props.content === 'normal') return 'bg-green-600/30 text-green-300'
      if (props.content === 'hard') return 'bg-yellow-600/30 text-yellow-300'
      if (props.content === 'extreme') return 'bg-red-600/30 text-red-300'
    }
    // Apply quantity colors if label is 'quantity'
    if (props.label === 'quantity') {
      if (props.content === 8) return 'bg-blue-600/30 text-blue-300'
      if (props.content === 12) return 'bg-purple-600/30 text-purple-300'
      if (props.content === 16) return 'bg-pink-600/30 text-pink-300'
    }
    return 'bg-destructive text-destructive-foreground'
  }
</script>
