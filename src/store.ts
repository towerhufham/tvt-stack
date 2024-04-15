import { defineStore } from "pinia"
import { ref } from "vue"

export const useGameStore = defineStore("game", () => {
  const count = ref(0)
  const add = () => count.value++

  return { count, add }
})