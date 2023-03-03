<template>
  <div class="playing-card cursor-pointer">
    <div class="flip-card cursor-pointer" :class="{ 'flip-card--active cursor-auto': pokemon.visible }" @click="selectPokemon(pokemon)">
      <div class="card-front flex flex-col justify-center items-center">
        <PokeCardImg :imgId="pokemon.imgId" />
        <svg class="w-full absolute -z-10 right-0 bottom-0" viewBox="0 0 157 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M156.612 0.443039V53.4997H0.612488V9.0432C10.9358 9.45266 21.713 12.5135 32.6747 15.6266C45.808 19.3566 59.206 23.1617 72.4051 22.5721C86.6393 21.9363 100.887 16.503 114.846 11.1798C129.182 5.71308 143.213 0.3624 156.612 0.443039Z"
            fill="#836F6A" />
        </svg>
      </div>
      <!--  -->
      <div class="card-back p-5 flex justify-center items-center bg-[#E7B184]">
        <svg class="" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M43.5 15.0834C58.12 15.0834 70.1958 26.0125 71.9517 40.1667H57.4033C55.7908 33.9675 50.165 29.4167 43.5 29.4167C36.835 29.4167 31.2092 33.9675 29.6325 40.1667H15.0483C16.8042 26.0125 28.88 15.0834 43.5 15.0834Z"
              fill="#C6AAD2" />
            <path
              d="M43.5 7.91675C23.72 7.91675 7.66663 23.9701 7.66663 43.7501C7.66663 63.5301 23.72 79.5834 43.5 79.5834C63.28 79.5834 79.3333 63.5301 79.3333 43.7501C79.3333 23.9701 63.28 7.91675 43.5 7.91675ZM43.5 15.0834C58.12 15.0834 70.1958 26.0126 71.9516 40.1667H57.4033C55.7908 33.9676 50.165 29.4167 43.5 29.4167C36.835 29.4167 31.2091 33.9676 29.6325 40.1667H15.0483C16.8041 26.0126 28.88 15.0834 43.5 15.0834ZM50.6666 43.7501C50.6666 47.6917 47.4416 50.9167 43.5 50.9167C39.5583 50.9167 36.3333 47.6917 36.3333 43.7501C36.3333 39.8084 39.5583 36.5834 43.5 36.5834C47.4416 36.5834 50.6666 39.8084 50.6666 43.7501ZM43.5 72.4168C28.88 72.4168 16.8041 61.4876 15.0483 47.3334H29.5966C31.1733 53.5326 36.7991 58.0834 43.4641 58.0834C50.1291 58.0834 55.755 53.5326 57.3316 47.3334H71.88C70.1958 61.4876 58.12 72.4168 43.5 72.4168V72.4168Z"
              fill="#94869A" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
  import PokeCardImg from './PokeCardImg.vue'
  const emit = defineEmits(['compare', 'view'])
  defineProps({
    isActive: Boolean,
    pokemon: Object,
  })
  const selectPokemon = ({ ...pokemon }) => {
    emit('view', pokemon)
  }
</script>

<style scoped>
  .playing-card {
    background: transparent;
    width: 9rem;
    height: 9rem;
    display: inline-block;
    perspective: 1000px;
  }
  .flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card--active {
    transform: rotateY(-180deg);
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    backface-visibility: hidden;
  }
  .card-front {
    background-color: #af937c;
    transform: rotateY(180deg);
    overflow: hidden;
  }
</style>
