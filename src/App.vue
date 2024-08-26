<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import DaySection from "./components/DaySection.vue";
import HourSection from "./components/HourSection.vue";
const loading = ref(false);
</script>

<template>
  <div :class="{ blurred: loading }">
    <Header />
    <DaySection />
    <HourSection />
  </div>
</template>

<style scoped></style>
