<template>
  <div class="flex flex-col w-full">
    <div class="h-[4.5rem] text-foreground bg-gradient-to-t from-secondary via-muted to-secondary">
      <slot name="header"></slot>
    </div>
    <div class="flex-1 h-full flex items-center justify-center py-4 px-4 bg-card">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup></script>
