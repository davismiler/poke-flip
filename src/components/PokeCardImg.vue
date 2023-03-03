<template>
  <img :src="pokeImage" :alt="`image-${imgId}`" />
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    imgId: [String, Number],
  })
  const pokeImage = computed(() => {
    if (props.imgId.toString().length === 1) return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${props.imgId}.png`
    if (props.imgId.toString().length === 2) return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${props.imgId}.png`
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.imgId}.png`
  })
</script>
