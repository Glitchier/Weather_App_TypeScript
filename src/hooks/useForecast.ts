import { ChangeEvent, useEffect, useState } from "react";
import { OptionType, ForeCastType } from "../types/model";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<OptionType | null>(null);
  const [forecast, setForecast] = useState<ForeCastType | null>(null);

  const fetchData = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const inpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTerm(value);
    if (value === "") return;
    fetchData(value);
  };

  const fetchForecast = (opt: OptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${opt.lat}&lon=${
        opt.lon
      }&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const trimForecastData = { ...data.city, list: data.list.slice(0, 16) };
        setForecast(trimForecastData);
      });
  };

  const onSubmitForecast = () => {
    if (!city) return;
    fetchForecast(city);
  };

  const onOptionSelect = (opt: OptionType) => {
    setCity(opt);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);
  return {
    term,
    options,
    forecast,
    inpChange,
    onOptionSelect,
    onSubmitForecast,
  };
};

export default useForecast;
