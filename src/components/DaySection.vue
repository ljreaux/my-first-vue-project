<script setup lang="ts">
import { ref } from "vue";
import { icons } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dayCards as dummyData } from "../assets/dummyData";

const dayCards = ref(dummyData);
</script>

<template>
  <section class="day-section">
    <div v-for="day in dayCards" class="day-card">
      <FontAwesomeIcon
        :icon="icons[day.icon]"
        class="weather-icon"
      ></FontAwesomeIcon>
      <div class="day-card-day">{{ day.day }}</div>
      <div>{{ day.temp }}</div>
    </div>
  </section>
</template>
