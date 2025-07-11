//import { name, version } from '../../package.json';
/**
 * This file can be replaced during build by using the `fileReplacements` array.
 * `ng build` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.  
 */


export const environment = {
  production: false,
  SERVER_TW: "http://localhost:8081", // "http://159.234.148.6:8081",
  OPEN_WEATHER_URL: "https://api.openweathermap.org/data/2.5/",
  OPEN_WEATHER_API_KEY: "782eb688539bf4fafb8434a7f9dc99d9"
  /* name,
  version */
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
