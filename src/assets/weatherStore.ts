import { ref } from "vue";
import { returnType } from "../utils/getWeather";

export const weatherData = ref<null | returnType>(null);