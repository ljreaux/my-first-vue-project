import {
  FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome";
import { faSnowflake, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloud,
  faCloudBolt,
  faCloudShowersHeavy,
  faCloudSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export const icons: {
  [key: string]: FontAwesomeIconProps;
} = {
  faSun,
  faCloud,
  faCloudBolt,
  faCloudShowersHeavy,
  faSmog,
  faSnowflake,
  faCloudSun,
};

export const keys = Object.keys(icons);