<script setup lang="ts">
import { css } from "../styled-system/css";
import { flex } from "../styled-system/patterns"
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div :class="flex({ align: 'center', justify: 'center' })">
    <a :class="css({
      height: '6rem',
      padding: '1.5rem',
      willChange: 'filter',
      transition: 'filter 300ms'
    })" href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a :class="css({
      height: '6rem',
      padding: '1.5rem',
      willChange: 'filter',
      transition: 'filter 300ms'
    })" href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite 🐼 Vue" />
</template>

<style scoped></style>
