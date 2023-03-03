<template>
  <div class="flex flex-col">
    <div class="">
      <p v-show="viewRangeStatus" class="bg-custom-purple-300 uppercase text-sm text-custom-orange-50 p-3 inline-block cursor-pointer" @click="viewRangeStatus = false">
        {{ `<` }} volver atras
      </p>
      <p v-show="!viewRangeStatus" class="bg-custom-purple-300 uppercase text-sm text-custom-orange-50 p-3 px-5 inline-block">nivel : {{ level }}</p>
    </div>
    <div class="bg-custom-orange-50 border-4 border-custom-purple-300 font-Press-Start-2P flex min-w-[20rem]">
      <div v-show="viewRangeStatus" class="bg-custom p-8 w-full mr-40 flex items-center flex-col">
        <div class="flex gap-5 items-center justify-around rounded-sm bg-custom-orange-300 p-4 min-w-[30.5rem]">
          <template v-if="level === 'normal'">
            <div v-for="(rangeLevel, index) in rangesLevelNormal" :key="index" class="flex flex-col items-center justify-center bg-custom-orange-50">
              <div class="image p-4">
                <img class="w-24" :src="rangeLevel.imageUrl" alt="image-medalla" />
              </div>
              <div class="bg-custom-orange-100 flex flex-col justify-start p-4 text-sm w-full py-2 items-center text-custom-purple-100">
                <p>{{ rangeLevel.minPoint }} - {{ rangeLevel.maxPoint }}</p>
                <p>{{ rangeLevel.range }}</p>
              </div>
            </div>
          </template>
          <template v-if="level === 'dificil'">
            <div v-for="(rangeLevel, index) in rangesLevelHard" :key="index" class="flex flex-col items-center justify-center bg-custom-orange-50">
              <div class="image p-4">
                <img class="w-24" :src="rangeLevel.imageUrl" alt="image-medalla" />
              </div>
              <div class="bg-custom-orange-100 flex flex-col justify-start p-4 text-sm w-full py-2 items-center text-custom-purple-100">
                <p>{{ rangeLevel.minPoint }} - {{ rangeLevel.maxPoint }}</p>
                <p>{{ rangeLevel.range }}</p>
              </div>
            </div>
          </template>
          <template v-if="level === 'extremo'">
            <div v-for="(rangeLevel, index) in rangesLevelExtreme" :key="index" class="flex flex-col items-center justify-center bg-custom-orange-50">
              <div class="image p-4">
                <img class="w-24" :src="rangeLevel.imageUrl" alt="image-medalla" />
              </div>
              <div class="bg-custom-orange-100 flex flex-col justify-start p-4 text-sm w-full py-2 items-center text-custom-purple-100">
                <p>{{ rangeLevel.minPoint }} - {{ rangeLevel.maxPoint }}</p>
                <p>{{ rangeLevel.range }}</p>
              </div>
            </div>
          </template>
        </div>
        <div class="text-center text-sm text-custom-purple-100 pt-3">
          <p>tu puntaje se basa en:</p>
          <p>{{ totalCard }} / total de movimientos * 10</p>
        </div>
      </div>
      <div v-show="!viewRangeStatus" class="bg-custom p-8 pb-1 w-full mr-28 flex items-center flex-col">
        <div class="flex items-center rounded-sm bg-custom-orange-300">
          <div class="image p-5">
            <div class="info absolute cursor-pointer" @click="viewRangeStatus = true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.8833 27.4058H1.52255C1.11874 27.4058 0.731476 27.2454 0.445943 26.9599C0.160411 26.6743 0 26.2871 0 25.8833V1.52255C0 1.11874 0.160411 0.731476 0.445943 0.445943C0.731476 0.160411 1.11874 0 1.52255 0H25.8833C26.2871 0 26.6743 0.160411 26.9599 0.445943C27.2454 0.731476 27.4058 1.11874 27.4058 1.52255V25.8833C27.4058 26.2871 27.2454 26.6743 26.9599 26.9599C26.6743 27.2454 26.2871 27.4058 25.8833 27.4058ZM10.6578 12.1804V15.2255H12.1804V21.3156H16.748V18.2705H15.2255V12.1804H10.6578ZM12.1804 6.09018V9.13527H15.2255V6.09018H12.1804Z"
                  fill="#493F4F" />
              </svg>
            </div>
            <img class="w-44" :src="rangeStatus.imageUrl" alt="image-medalla" />
          </div>
          <div class="w-80 flex flex-col justify-start p-4 items-center text-custom-purple-100">
            <p class="w-full">
              rango <span>{{ rangeStatus.range }}</span
              >,
            </p>
            <p class="w-full">felicidades tu puntaje es de:</p>
            <p class="w-full h-full py-5">
              <span class="bg-custom-orange-100 px-6 py-4 text-lg"> {{ point }} de 10 </span>
            </p>
          </div>
        </div>
        <div class="py-3">
          <TheButton @click="$emit('close')">continuar</TheButton>
        </div>
      </div>

      <img class="absolute -right-20 bottom-0 w-72" src="https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/ash_lc2ljf.png" alt="" />
    </div>
  </div>
</template>

<script setup>
  import TheButton from './TheButton.vue'
  import { computed, ref } from 'vue'
  const props = defineProps({
    level: String,
    totalMoves: Number,
    numberCard: Number,
  })
  defineEmits(['close'])
  const viewRangeStatus = ref(false)

  const rangesLevelNormal = ref([
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla2_ron77c.png',
      range: 'maestro',
      minPoint: 6,
      maxPoint: 10,
    },
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla1_spaffo.png',
      range: 'campeón',
      minPoint: 1,
      maxPoint: 5,
    },
  ])

  const rangesLevelHard = ref([
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla5_ioxrkg.png',
      range: 'leyenda',
      minPoint: 7,
      maxPoint: 10,
    },
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla4_e4hti2.png',
      range: 'maestro',
      minPoint: 4,
      maxPoint: 6,
    },

    {
      range: 'campeón',
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla3_pvqg29.png',
      minPoint: 1,
      maxPoint: 3,
    },
  ])
  const rangesLevelExtreme = ref([
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426458/medalla8_pqnpdo.png',
      range: 'divine',
      minPoint: 7,
      maxPoint: 10,
    },
    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426458/medalla7_icoops.png',
      range: 'leyenda',
      minPoint: 4,
      maxPoint: 6,
    },

    {
      imageUrl: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla6_esgkeb.png',
      range: 'maestro',
      minPoint: 1,
      maxPoint: 3,
    },
  ])

  const totalCard = computed(() => {
    return parseInt(props.numberCard / 2)
  })
  const point = computed(() => {
    return parseFloat((totalCard.value / props.totalMoves) * 10).toFixed(1)
  })
  const rangeStatus = computed(() => {
    if (props.level === 'normal') {
      return rangesLevelNormal.value.find((rangeLevel) => point.value >= rangeLevel.minPoint)
    }
    if (props.level === 'dificil') {
      return rangesLevelHard.value.find((rangeLevel) => point.value >= rangeLevel.minPoint)
    }
    if (props.level === 'extremo') {
      return rangesLevelExtreme.value.find((rangeLevel) => point.value >= rangeLevel.minPoint)
    }
    return ''
  })
</script>

<style scoped></style>
