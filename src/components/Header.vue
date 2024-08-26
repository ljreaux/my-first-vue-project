<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { ref } from "vue";
import { dummyHeader } from "../assets/dummyData";

const metrics = ref(dummyHeader);
</script>

<template>
  <header>
    <div class="header-left">
      <FontAwesomeIcon :icon="faSun" class="weather-icon large" />
      <div class="header-current-temp"><span>31</span>&deg;</div>
    </div>
    <div class="header-right">
      <div class="info-group" v-for="m of metrics">
        <div class="label">{{ m.label }}</div>
        <div>
          <span>{{ m.value }}</span>
          <span class="value-sub-info" v-html="m.unit"></span>
        </div>
      </div>
    </div>
  </header>
</template>
