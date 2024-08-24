export type OptionType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

export type ForeCastType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        feels_like: number;
        humidity: string;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [{ main: string; icon: string; description: string }];
      wind: { deg: number; gust: number; speed: number };
      clouds: { all: number };
      pop: number;
      visibility: number;
    }
  ];
};

export type ForecastCardType = {
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [{ main: string; icon: string; description: string }];
  wind: { deg: number; gust: number; speed: number };
  clouds: { all: number };
  pop: number;
  visibility: number;
};
