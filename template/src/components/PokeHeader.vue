<template>
  <header class="w-full py-4 px-6 bg-card/80 backdrop-blur-sm border-b-2 border-border">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img 
          class="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-12" 
          src="/images/icon.png" 
          alt="Pokeball logo" 
        />
        <div class="flex flex-col">
          <h1 class="text-xl font-bold uppercase tracking-wide">Pokeflip</h1>
          <p class="text-xs text-muted-foreground">Memory Card Game</p>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <span>Daily Challenge</span>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>

