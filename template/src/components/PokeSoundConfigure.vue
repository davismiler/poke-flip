<template>
  <div class="w-96 bg-card p-5 rounded-lg">
    <p class="uppercase text-center text-lg pt-2">configuration</p>
    <div class="settings pt-3">
      <div class="py-2">
        <h3>sound:</h3>
        <div class="vol h-8 flex items-center mt-2.5">
          <TheButton size="sm" variant="secondary" @click="handleSound(0)">mute</TheButton>
          <div class="flex gap-3 ml-4 h-7">
            <span
              v-for="level in levelSound"
              :key="level"
              class="cursor-pointer w-3 h-full block transition-all duration-200 hover:scale-110 hover:opacity-80 active:scale-95"
              :class="[level <= sound ? 'bg-primary' : 'bg-muted']"
              @click="handleSound(level)"></span>
          </div>
        </div>
      </div>
      <div class="py-2">
        <h3>music:</h3>
        <div class="vol h-8 flex items-center mt-2.5">
          <TheButton size="sm" variant="secondary" @click="handleMusic(0)">mute</TheButton>
          <div class="flex gap-3 ml-4 h-7">
            <span
              v-for="level in levelSound"
              :key="level"
              class="cursor-pointer w-3 h-full block transition-all duration-200 hover:scale-110 hover:opacity-80 active:scale-95"
              :class="[level <= music ? 'bg-primary' : 'bg-muted']"
              @click="handleMusic(level)"></span>
          </div>
        </div>
      </div>
    </div>
    <p class="divide-x-2 divide-border divide-solid"></p>
  </div>
</template>

<script setup>
  import TheButton from './TheButton.vue'
  import { ref } from 'vue'

  const levelSound = ref([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])

  defineProps({
    sound: Number,
    music: Number,
  })
  const emit = defineEmits(['configSound'])

  function handleMusic(level) {
    emit('configSound', { type: 'base', level })
  }
  function handleSound(level) {
    emit('configSound', { type: 'action', level })
  }
</script>

<style scoped></style>
