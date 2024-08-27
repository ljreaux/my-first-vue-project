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

const ICON_MAP = new Map();

const addMappings = (values: number[], key: string) => {
  values.forEach((value) => {
    ICON_MAP.set(value, key);
  });
}

addMappings([0, 1], "faSun");
addMappings([2], 'faCloudSun');
addMappings([3], 'faCloud');
addMappings([45, 48], 'faSmog');
addMappings([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], 'faCloudShowersHeavy');
addMappings([71, 73, 75, 77, 85, 86], 'faSnowflake')
addMappings([95, 96, 99], 'faCloudBolt');

export const getIconName = (code: number = 0): string => {
  return ICON_MAP.get(code) || 'faSun';
}