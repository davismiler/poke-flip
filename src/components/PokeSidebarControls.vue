<template>
  <div class="">
    <TheButton v-if="!isGameStart" class="w-full" variant="primary" @click="$emit('game-start')">empezar</TheButton>
    <div v-if="isGameStart" class="flex">
      <TheButton class="w-full" variant="secondary" @click="$emit('game-restart')">
        <svg class="h-5 w-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_807_1980)">
            <path
              d="M13 0C6.93208 0 1.87519 4.49703 0.739562 10.4609H4.20942C5.27854 6.45138 8.80423 3.50391 13 3.50391C15.5223 3.50391 17.8015 4.5698 19.4514 6.29053L15.4414 10.4609H25.5V0L21.8379 3.80859C19.5761 1.45559 16.452 0 13 0ZM0.5 15.5391V26L4.1621 22.1914C6.42388 24.5444 9.54796 26 13 26C19.0679 26 24.1248 21.503 25.2604 15.5391H21.7906C20.7215 19.5486 17.1958 22.4961 13 22.4961C10.4777 22.4961 8.19846 21.4302 6.54858 19.7095L10.5586 15.5391H0.5V15.5391Z"
              fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_807_1980">
              <rect width="25" height="26" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
      </TheButton>
      <TheButton class="ml-3 w-full" variant="secondary" @click="$emit('game-finish')">terminar</TheButton>
    </div>
  </div>
</template>

<script setup>
  import TheButton from './TheButton.vue'
  defineProps({
    isGameStart: Boolean,
  })
  defineEmits(['game-start', 'game-restart', 'game-finish'])
</script>

<style scoped></style>
