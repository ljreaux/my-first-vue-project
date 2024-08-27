<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref, watchEffect } from "vue";
import { dummyCurrentData } from "../assets/dummyData";
import { getIconName, icons } from "../assets/icons";
import { weatherData } from "../assets/weatherStore";

const current = ref(weatherData?.value?.current);

watchEffect(() => {
  current.value = weatherData.value?.current;
});

const icon = computed(() => icons[getIconName(current.value?.iconCode)]);

const metrics = ref(dummyCurrentData);
</script>

<template>
  <header>
    <div class="header-left">
      <FontAwesomeIcon :icon="icon" class="weather-icon large" />
      <div class="header-current-temp">
        <span>{{ current?.currentTemp || 32 }}</span
        >&deg; F
      </div>
    </div>
    <div class="header-right">
      <div class="info-group" v-for="m of metrics">
        <div class="label">{{ m.label }}</div>
        <div>
          <span>{{ current?.[m.valueKey] || 32 }}</span>
          <span class="value-sub-info" v-html="m.unit"></span>
        </div>
      </div>
    </div>
  </header>
</template>
