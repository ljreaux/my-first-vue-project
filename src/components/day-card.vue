<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { icons } from "../assets/icons";

const { dayCards } = defineProps<{
  dayCards: {
    icon: string;
    day: string;
    temp: number;
  }[];
}>();
</script>

<template>
  <div v-for="day in dayCards" class="day-card">
    <FontAwesomeIcon
      :icon="icons[day.icon]"
      class="weather-icon"
    ></FontAwesomeIcon>
    <div class="day-card-day">{{ day.day }}</div>
    <div>{{ day.temp }}</div>
  </div>
</template>
