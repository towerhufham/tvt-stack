<template>
  <div>
    <p>{{ store.count }}</p>
    <button @click="store.add">+1</button>
  </div>
</template>

<script setup lang="ts">
  import { useGameStore } from '../store'

  const store = useGameStore()
</script>