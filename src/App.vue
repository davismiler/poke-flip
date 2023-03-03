<template>
  <Modal :show="modalView" class="pokemons-view">
    <PokeEndGameResults :totalMoves="pokeStatus.totalMoves" :level="difficultySelected" :numberCard="numberCardSelected" @close="closeModal" />
  </Modal>

  <div class="contain mx-auto flex min-h-screen items-center p-4 text-custom-purple-300 tracking-widest">
    <div class="musics hidden">
      <audio id="sound-base" ref="soundBaseRef">
        <source src="./assets/sounds/music-base.mp3" />
      </audio>
      <audio id="sound-failed" ref="soundFailedRef">
        <source src="./assets/sounds/noup-sound.mp3" />
      </audio>
      <audio id="sound-acert" ref="soundAcertRef">
        <source src="./assets/sounds/wuaw-girl.mp3" />
      </audio>
    </div>
    <div class="card-not-pokemons justify-center w-full">
      <div class="flex flex-col justify-center items-center max-w-md">
        <img class="rounded-lg" src="https://c.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif" alt="pikachu" />
        <span class="text-custom-orange-50 mt-6 block text-center text-base"> actualmente no esta disponible para los dispositivos moviles </span>
      </div>
    </div>
    <div class="w-full pokemons-view flex-col">
      <div class="flex justify-end">
        <PokeHelper :sound="soundLevelActions" :music="soundLevelBase" @sound="changeLevelSound" />
      </div>
      <div class="pokemons-view relative z-10 justify-center bg-custom-orange-50 min-h-[35rem] border-[3px] border-custom-purple-300">
        <PokeSidebar>
          <template #header>
            <PokeLogo />
          </template>
          <template #body>
            <div class="">
              <PokeSidebarSelect
                label="dificultad"
                :optionSelected="difficultySelected"
                :options="difficultyOptions"
                :isGameStart="isGameStart"
                @change="(option) => (difficultySelected = option)" />
              <PokeSidebarSelect
                label="cantidad"
                :optionSelected="numberCardSelected"
                :options="numberCardOptions"
                :isGameStart="isGameStart"
                @change="(option) => (numberCardSelected = option)" />
            </div>
            <PokeSidebarControls :isGameStart="isGameStart" @game-start="gameStart" @game-restart="gameRestart" @game-finish="gameFinish" />
          </template>
        </PokeSidebar>

        <PokeGameContain>
          <template #header>
            <PokeGameStatus :completes="pokeStatus.totalAcerts" :moves="pokeStatus.totalMoves" :totalPokemonsNums="pokeStatus.totalPokemons" />
          </template>
          <template #body>
            <PokeGameBox v-if="pokemons.length > 0">
              <PokeCard v-for="pokemon in pokemons" :key="pokemon.identifier" :pokemon="pokemon" @view="selectPokemon" />
            </PokeGameBox>
            <PokeCardNotData v-else />
          </template>
        </PokeGameContain>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Modal from './components/ui/Modal.vue'
  import { onMounted, ref } from 'vue'
  import { launchConfetti } from './utils/confetti'
  import { pokemonsData } from './data/pokemonData'

  import PokeCard from './components/PokeCard.vue'
  import PokeGameBox from './components/PokeGameBox.vue'
  import PokeGameContain from './components/PokeGameContain.vue'
  import PokeGameStatus from './components/PokeGameStatus.vue'
  import PokeSidebar from './components/PokeSidebar.vue'
  import PokeLogo from './components/PokeLogo.vue'
  import PokeSidebarControls from './components/PokeSidebarControls.vue'
  import PokeSidebarSelect from './components/PokeSidebarSelect.vue'
  import PokeCardNotData from './components/PokeCardNotData.vue'
  import PokeHelper from './components/PokeHelper.vue'
  import PokeEndGameResults from './components/PokeEndGameResults.vue'

  onMounted(() => {
    let sound = localStorage.getItem('sound')
    let music = localStorage.getItem('music')
    if (sound) soundLevelActions.value = parseFloat(sound)
    if (music) soundLevelBase.value = parseFloat(music)
  })

  const interval = ref(null)
  const modalView = ref(false)

  const soundBaseRef = ref(null)
  const soundFailedRef = ref(null)
  const soundAcertRef = ref(null)
  const soundLevelBase = ref(0.6)
  const soundLevelActions = ref(0.2)

  // actions select
  const difficultySelected = ref('normal')
  const difficultyOptions = ref(['normal', 'dificil', 'extremo'])
  const numberCardSelected = ref(8)
  const numberCardOptions = ref([8, 12, 16])
  // data pokemons
  const pokemons = ref([])
  const isGameStart = ref(false)

  const pokeStatus = ref({
    totalPokemons: 0,
    totalAcerts: 0,
    totalMoves: 0,
  })
  // evaluate
  const isComparing = ref(false)
  const evaluatePokemons = ref([])

  const createPokemons = () => {
    const totalCards = numberCardSelected.value / 2
    const pokemonData = pokemonsData(totalCards)
    const doublePokemonData = [...pokemonData, ...pokemonData]
    let pokeData = addParamsToArrayPokemons(doublePokemonData)
    pokeData = shuffleArrayPokemons(pokeData)
    pokemons.value = pokeData
    pokeStatus.value.totalPokemons = pokemonData.length
  }

  const selectPokemon = (pokemon) => {
    if (pokemon.visible) return
    if (isComparing.value) return

    evaluatePokemons.value.push(pokemon)
    viewPokemon(pokemon)
    if (evaluatePokemons.value.length >= 2) {
      comparePokemons(evaluatePokemons.value[0], evaluatePokemons.value[1])
    }
  }

  const comparePokemons = (pokemon1, pokemon2) => {
    isComparing.value = true
    pokeStatus.value.totalMoves++

    if (pokemon1.id === pokemon2.id) {
      acertSound()
      pokeStatus.value.totalAcerts++
      // evalua si aun existen pokemones para terminar el juego
      const existPokemons = pokemons.value.find((pokemon) => pokemon.visible === false)
      if (!existPokemons) {
        gameWinner()
        return
      }
      setTimeout(() => {
        evaluatePokemons.value = []
        isComparing.value = false

        if (difficultySelected.value !== 'normal') {
          shuffleArrayPokemons(pokemons.value)
        }
      }, 1000)
    }
    if (pokemon1.id !== pokemon2.id) {
      failedSound()
      setTimeout(() => {
        hiddenPokemons()
        evaluatePokemons.value = []
        isComparing.value = false
        if (difficultySelected.value === 'extremo') {
          shuffleArrayPokemons(pokemons.value)
        }
      }, 1000)
    }
  }

  const viewPokemon = (pokemon) => {
    const indexPokemon = pokemons.value.findIndex(({ key }) => key === pokemon.key)
    pokemons.value[indexPokemon].visible = true
  }

  const hiddenPokemons = () => {
    const indexPokemon1 = pokemons.value.findIndex(({ key }) => key === evaluatePokemons.value[0].key)
    const indexPokemon2 = pokemons.value.findIndex(({ key }) => key === evaluatePokemons.value[1].key)

    pokemons.value[indexPokemon1].visible = false
    pokemons.value[indexPokemon2].visible = false
  }

  const gameStart = () => {
    baseSound()
    pokeStatus.value.totalAcerts = 0
    pokeStatus.value.totalMoves = 0
    isGameStart.value = true
    isComparing.value = false
    createPokemons()
  }

  const gameFinish = () => {
    restartStatus()
    stopBaseSound()
    pokeStatus.value.totalPokemons = 0
    isGameStart.value = false
    pokemons.value = []
    isComparing.value = false
  }

  const gameWinner = () => {
    modalView.value = true
    stopBaseSound(300)
    setTimeout(() => {
      launchConfetti()
    }, 300)
  }

  const gameRestart = () => {
    if (soundBaseRef.value.paused) {
      baseSound()
    }
    restartStatus()
    pokemons.value = pokemons.value.map((poke) => ({ ...poke, visible: false }))
    shuffleArrayPokemons(pokemons.value)
    isComparing.value = false
  }

  const restartStatus = () => {
    evaluatePokemons.value = []
    pokeStatus.value.totalAcerts = 0
    pokeStatus.value.totalMoves = 0
  }

  const addParamsToArrayPokemons = (arr) => arr.map((pokemon, index) => ({ ...pokemon, identifier: index, key: index, visible: false }))

  const shuffleArrayPokemons = (arr) => arr.sort(() => Math.random() - 0.5)

  const baseSound = () => {
    clearInterval(interval.value)
    if (soundBaseRef.value.paused) {
      soundBaseRef.value.play()
      soundBaseRef.value.volume = soundLevelBase.value
    } else {
      soundBaseRef.value.currentTime = 0
      soundBaseRef.value.play()
    }
  }

  const stopBaseSound = (timeDelay = 100) => {
    let volume = soundLevelBase.value
    if (!soundBaseRef.value.paused) {
      interval.value = setInterval(() => {
        if (volume > 0) {
          volume = parseFloat((volume - 0.1).toFixed(1))
          soundBaseRef.value.volume = volume
        } else {
          clearInterval(interval.value)
          soundBaseRef.value.currentTime = 0
          soundBaseRef.value.pause()
        }
      }, timeDelay)
    }
  }

  const acertSound = () => {
    if (soundAcertRef.value.paused) {
      soundAcertRef.value.play()
      soundAcertRef.value.volume = soundLevelActions.value
    } else {
      soundAcertRef.value.currentTime = 0
      soundAcertRef.value.play()
      soundAcertRef.value.volume = soundLevelActions.value
    }
  }

  const failedSound = () => {
    if (soundFailedRef.value.paused) {
      soundFailedRef.value.play()
      soundFailedRef.value.volume = soundLevelActions.value
    } else {
      soundFailedRef.value.currentTime = 0
      soundFailedRef.value.play()
      soundFailedRef.value.volume = soundLevelActions.value
    }
  }

  const closeModal = () => {
    modalView.value = false
  }

  const changeLevelSound = (value) => {
    if (value.type === 'base') {
      soundLevelBase.value = value.level
      localStorage.setItem('music', value.level)
      if (!soundBaseRef.value.paused) {
        soundBaseRef.value.volume = soundLevelBase.value
      }
    }
    if (value.type === 'action') {
      localStorage.setItem('sound', value.level)
      soundLevelActions.value = value.level
    }
  }
</script>

<style>
  .flip-list-move {
    transition: transform 0.8s;
  }
  .contain {
    max-width: 1200px;
    font-family: 'Press Start 2P';
    font-size: 13.5px;
  }
  #app {
    min-height: 100vh;
    font-family: 'Press Start 2P';
    background: rgb(50, 40, 56);
    background: linear-gradient(180deg, rgba(50, 40, 56, 1) 0%, #8e3b4c 52%, rgba(50, 40, 56, 1) 100%);
  }

  /* view desktop */
  .pokemons-view {
    display: none;
  }
  .card-not-pokemons {
    display: flex;
  }
  @media (min-width: 942px) {
    .pokemons-view {
      display: flex;
    }
    .card-not-pokemons {
      display: none;
    }
  }
</style>
