<template>
  <transition leave-active-class="duration-200">
    <div v-show="show" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 flex items-center" scroll-region>
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-show="show" class="fixed inset-0 transform transition-all" @click="closeModal">
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
      </transition>

      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div v-show="show" class="shadow-xl transform transition-all sm:mx-auto">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
  const props = defineProps({
    show: {
      type: Boolean,
      default: true,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
  })
  const emit = defineEmits(['close'])

  const closeModal = () => {
    if (props.closeable) {
      emit('close')
    }
  }
</script>
