<template>
  <div class="flex flex-col min-w-[16rem] border-r-[3px] border-border">
    <div class="h-[4.5rem] text-foreground bg-gradient-to-t from-secondary via-muted to-secondary">
      <slot name="header"></slot>
    </div>
    <div class="p-5 flex flex-1 flex-col justify-between h-full bg-card">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
