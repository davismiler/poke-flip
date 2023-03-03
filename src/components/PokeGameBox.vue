<template>
  <div class="flex justify-center w-full">
    <transition-group name="flip-list" tag="div" class="grid grid-cols-4 gap-4 w-fit">
      <slot />
    </transition-group>
  </div>
</template>

<script setup></script>
