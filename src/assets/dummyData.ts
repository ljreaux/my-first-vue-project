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

export const dummyHeader = [
  {
    label: "High",
    value: 32,
    unit: "&deg;",
  },
  { label: "FL High", value: 27, unit: "&deg;" },
  { label: "Wind", value: 9, unit: "mph" },
  { label: "Low", value: 19, unit: "&deg;" },
  {
    label: "FL Low",
    value: 12,
    unit: "&deg;",
  },
  { label: "Precip", value: 0.1, unit: "in" },
]

export const dummyHourData = [
  { time: '12pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '1pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '2pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '3pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '4pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
  { time: '5pm', day: 'Monday', temp: 25, icon: keys[Math.floor(Math.random() * keys.length)], FLTemp: 40, wind: 10, precip: 0 },
]