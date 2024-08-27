import { returnType } from "../utils/getWeather";
import { keys } from "./icons";

export const dayCards = [
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
  {
    icon: keys[Math.floor(Math.random() * keys.length)],
    day: "Monday",
    temp: 25,
  },
];

export const dummyCurrentData: {
  label: string,
  valueKey: keyof returnType["current"],
  unit: string,
}[] = [{
  label: "High",
  valueKey: "highTemp",
  unit: "&deg;",
},
{ label: "FL High", valueKey: "highFeelsLike", unit: "&deg;" },
{ label: "Wind", valueKey: "windSpeed", unit: "mph" },
{ label: "Low", valueKey: "lowTemp", unit: "&deg;" },
{
  label: "FL Low",
  valueKey: "lowFeelsLike",
  unit: "&deg;",
},
{ label: "Precip", valueKey: "precip", unit: "in" },]

export const dummyHourData = [
  { time: '12pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '1pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '2pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '3pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '4pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '5pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
]