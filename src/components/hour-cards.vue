<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { icons } from "../assets/icons";

const { hours } = defineProps<{
  hours: {
    day: string;
    time: string;
    icon: string;
    temp: number;
    FLTemp: number;
    wind: number;
    precip: number;
  }[];
}>();
</script>

<template>
  <tbody>
    <tr v-for="hour in hours" class="hour-row">
      <td>
        <div class="info-group">
          <div class="label">
            {{ hour.day }}
          </div>
        </div>
        <div>{{ hour.time }}</div>
      </td>
      <td>
        <FontAwesomeIcon :icon="icons[hour.icon]" class="weather-icon" />
      </td>
      <td>
        <div class="label">Temp</div>
        <div>{{ hour.temp }}&deg;</div>
      </td>
      <td>
        <div class="label">FL Temp</div>
        <div>{{ hour.FLTemp }}&deg;</div>
      </td>
      <td>
        <div class="label">Wind</div>
        <div>{{ hour.wind }}<span class="value-sub-info"> mph </span></div>
      </td>
      <td>
        <div class="label">Precip</div>
        <div>{{ hour.precip }}<span class="value-sub-info">in</span></div>
      </td>
    </tr>
  </tbody>
</template>
