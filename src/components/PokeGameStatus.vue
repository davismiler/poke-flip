<template>
  <div class="flex items-center px-5 justify-between h-full">
    <div class="">
      <p>completados:</p>
      <div class="flex items-center">
        <progress :max="totalPokemonsNums" :value="completes"></progress>
        <div class="bg-custom-orange-50 text-custom-purple-300 px-2">
          <p>{{ completes }}/{{ totalPokemonsNums }}</p>
        </div>
      </div>
    </div>
    <div class="">
      <p>movimientos</p>
      <div class="bg-custom-orange-50 text-custom-purple-300 inline-block px-5">
        <p>{{ moves }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    completes: Number,
    moves: Number,
    totalPokemonsNums: [String, Number],
  })
</script>
<style scoped>
  progress[value] {
    width: 250px;
    height: 20px;
  }
</style>
