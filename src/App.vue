<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import DaySection from "./components/DaySection.vue";
import HourSection from "./components/HourSection.vue";
import { getWeather } from "./utils/getWeather";
const loading = ref(true);
import { weatherData } from "./assets/weatherStore";

onMounted(async () => {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      const currentWeather = await getWeather(
        latitude,
        longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      ).catch(() => {
        alert("Error fetching weather data:");
        loading.value = false;
        return null;
      });
      loading.value = false;
      weatherData.value = currentWeather;
    },
    (error) => {
      alert(
        "There was an error fetching your location. Please allow us to use your location and refresh the page."
      );
      console.error(error);
    }
  );
});
</script>

<template>
  <div :class="{ blurred: loading }">
    <Header />
    <DaySection />
    <HourSection />
  </div>
</template>

<style scoped></style>
