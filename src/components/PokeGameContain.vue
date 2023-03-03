<template>
  <div class="flex flex-col w-full">
    <div class="h-[4.5rem] text-custom-orange-50 bg-gradient-to-t from-custom-purple-300 via-custom-purple-200 to-custom-purple-300">
      <slot name="header"></slot>
    </div>
    <div class="flex-1 h-full flex items-center justify-center py-4 px-4 bg-custom-orange-100">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup></script>
