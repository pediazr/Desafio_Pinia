<script setup>
import { useJuegosStore } from '@/stores/piniaStore';
import { storeToRefs } from 'pinia';

const juegosStore = useJuegosStore();
const { juegos } = storeToRefs(juegosStore);
const { incrementar, decrementar } = juegosStore;

</script>
<template>
  <div class="container">

    <h1 class="text-center p-4">Tienda 32 Bits</h1>
    <h3 class="text-center p-3">Lista de juegos</h3>
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, i) in juegos" :key="juego.codigo">
          <th scope="row">{{ juego.codigo }}</th>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="decrementar(i)">-</button>
            <button @click="incrementar(i)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

</template>