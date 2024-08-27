import axios from "axios"

const baseUrl = "https://api.open-meteo.com/v1/forecast?current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime"

export async function getWeather(latitude: number, longitude: number, timezone: string): Promise<returnType> {
  const res = axios.get(baseUrl, { params: { latitude, longitude, timezone } }).then(({ data }) => {
    return {
      current: parseCurrentWeather(data),
      hourly: parseHourlyWeather(data),
      daily: parseDailyWeather(data),
    }
  })
  return res;
}

function parseCurrentWeather({ current, daily }: { current: currentWeatherType, daily: dailyWeatherType }) {

  const { temperature_2m: currentTemp, wind_speed_10m: windSpeed, weather_code: iconCode } = current;
  const { temperature_2m_max: [highTemp], temperature_2m_min: [lowTemp],
    apparent_temperature_max: [highFeelsLike], apparent_temperature_min: [lowFeelsLike],
    precipitation_sum: [precip],
  } = daily;

  return {
    currentTemp,
    highTemp,
    lowTemp,
    highFeelsLike,
    lowFeelsLike,
    windSpeed,
    precip,
    iconCode
  }

}

type currentWeatherType = {
  temperature_2m: number,
  wind_speed_10m: number,
  weather_code: number,
  time: number,
}

type dailyWeatherType = {
  weather_code: number[],
  time: number[],
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  apparent_temperature_max: number[],
  apparent_temperature_min: number[],
  precipitation_sum: number[],
}

type hourlyWeatherType = {
  time: number[],
  temperature_2m: number[],
  apparent_temperature: number[],
  precipitation: number[],
  weather_code: number[],
  wind_speed_10m: number[],
}

export type returnType = {
  current: {
    currentTemp: number,
    highTemp: number,
    lowTemp: number,
    highFeelsLike: number,
    lowFeelsLike: number,
    windSpeed: number,
    precip: number,
    iconCode: number,
  },
  hourly: {
    timestamp: number,
    iconCode: number,
    temp: number,
    feelsLike: number,
    windSpeed: number,
    precip: number,
  }[],
  daily: {
    timestamp: number,
    iconCode: number,
    maxTemp: number,
  }[],
}

function parseDailyWeather({ daily }: { daily: dailyWeatherType }) {

  return daily.time.map((time, i) => ({
    timestamp: time * 1000,
    iconCode: daily.weather_code[i],
    maxTemp: Math.round(daily.temperature_2m_max[i]),
  }))
}

function parseHourlyWeather({ hourly, current }: { hourly: hourlyWeatherType, current: currentWeatherType }) {
  return hourly.time.map((time, i) => ({
    timestamp: time * 1000,
    iconCode: hourly.weather_code[i],
    temp: Math.round(hourly.temperature_2m[i]),
    feelsLike: Math.round(hourly.apparent_temperature[i]),
    windSpeed: hourly.wind_speed_10m[i],
    precip: hourly.precipitation[i],

  })).filter(({ timestamp }) => {
    return timestamp >= current.time * 1000;
  })
}

export const dayFormater = new Intl.DateTimeFormat(undefined, { weekday: 'long', })
export const hourFormater = new Intl.DateTimeFormat(undefined, { hour: 'numeric' })