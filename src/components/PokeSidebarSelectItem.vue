<template>
  <div class="py-2 px-4 rounded text-center" :class="[isActive ? 'bg-custom-purple-200 text-custom-orange-50' : 'bg-custom-red-100']">
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  defineProps({
    isActive: Boolean,
    content: [String, Number],
  })
</script>
