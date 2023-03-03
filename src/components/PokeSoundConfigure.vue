<template>
  <div class="w-96 bg-custom-orange-50 p-5 rounded-lg font-Press-Start-2P">
    <p class="uppercase text-center text-lg pt-2">configuracion</p>
    <div class="settings pt-3">
      <div class="py-2">
        <h3>sonido:</h3>
        <div class="vol h-8 flex items-center mt-2.5">
          <TheButton size="sm" variant="secondary" @click="handleSound(0)">mute</TheButton>
          <div class="flex gap-3 ml-4 h-7">
            <span
              v-for="level in levelSound"
              :key="level"
              class="cursor-pointer w-3 h-full block"
              :class="[level <= sound ? 'bg-custom-green-100' : 'bg-custom-orange-300']"
              @click="handleSound(level)"></span>
          </div>
        </div>
      </div>
      <div class="py-2">
        <h3>música:</h3>
        <div class="vol h-8 flex items-center mt-2.5">
          <TheButton size="sm" variant="secondary" @click="handleMusic(0)">mute</TheButton>
          <div class="flex gap-3 ml-4 h-7">
            <span
              v-for="level in levelSound"
              :key="level"
              class="cursor-pointer w-3 h-full block"
              :class="[level <= music ? 'bg-custom-green-100' : 'bg-custom-orange-300']"
              @click="handleMusic(level)"></span>
          </div>
        </div>
      </div>
    </div>
    <p class="divide-x-2 divide-custom-purple-200 divide-solid"></p>
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
