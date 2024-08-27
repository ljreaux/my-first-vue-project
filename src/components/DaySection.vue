<script setup lang="ts">
import { ref, computed } from "vue";
import { dayCards as dummyData } from "../assets/dummyData";
import DayCard from "./day-card.vue";
import { dayFormater } from "../utils/getWeather";
import { getIconName } from "../assets/icons";
import { weatherData } from "../assets/weatherStore";

const dailyCards = computed(() =>
  weatherData.value?.daily?.map((day) => {
    return {
      icon: getIconName(day.iconCode),
      day: dayFormater.format(day.timestamp),
      temp: day.maxTemp,
    };
  })
);

const dayCards = ref(dummyData);
</script>

<template>
  <section class="day-section">
    <DayCard :dayCards="dayCards" v-if="!dailyCards"></DayCard>
    <DayCard :dayCards="dailyCards" v-else></DayCard>
  </section>
</template>
