import { ref } from 'vue'
import { defineStore } from 'pinia'
import juegosData from "../data/juegos.json"

export const useJuegosStore = defineStore('juegos', () => {

  const juegos = ref(juegosData);

  const incrementar = (index) => {
    juegos.value[index].stock++;
  }

  const decrementar = (index) => {
    if (juegos.value[index].stock > 0) {
      juegos.value[index].stock--;
    }
  }

  return { juegos, incrementar, decrementar }
})