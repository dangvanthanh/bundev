<script setup lang="ts">
import { ref } from 'vue'
import { css } from "../../styled-system/css";

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 :class="css({ fontSize: '5xl', fontWeight: 'bold' })">{{ msg }}</h1>

  <div :class="css({padding: '3'})">
    <button type="button" @click="count++">Count is {{ count }}</button>
  </div>
</template>

<style scoped>
</style>
