<template>
  <div class="flex flex-col min-w-[16rem] border-r-[3px] border-custom-purple-300">
    <div class="h-[4.5rem] text-custom-orange-50 bg-gradient-to-t from-custom-purple-300 via-custom-purple-200 to-custom-purple-300">
      <slot name="header"></slot>
    </div>
    <div class="p-5 flex flex-1 flex-col justify-between h-full bg-custom-orange-100">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
