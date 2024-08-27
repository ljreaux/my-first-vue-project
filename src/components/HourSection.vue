<script setup lang="ts">
import { computed, ref } from "vue";
import { dummyHourData } from "../assets/dummyData";
import HourCards from "./hour-cards.vue";

import { weatherData } from "../assets/weatherStore";
import { getIconName } from "../assets/icons";
import { dayFormater, hourFormater } from "../utils/getWeather";

const hourCards = computed(() =>
  weatherData.value?.hourly
    ?.map((hour) => {
      return {
        icon: getIconName(hour.iconCode),
        day: dayFormater.format(hour.timestamp),
        temp: hour.temp,
        FLTemp: hour.feelsLike,
        wind: hour.windSpeed,
        precip: hour.precip,
        time: hourFormater.format(hour.timestamp),
      };
    })
    .filter((_, i) => i < 24)
);

const hours = ref(dummyHourData);
</script>

<template>
  <table class="hour-section">
    <HourCards :hours="hours" v-if="!hourCards"></HourCards>
    <HourCards :hours="hourCards" v-else />
  </table>
</template>
