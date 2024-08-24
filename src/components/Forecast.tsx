import { ForeCastType } from "../types/model";
import { IoLocationOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { TbSunrise } from "react-icons/tb";
import { TbSunset } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { CiDroplet } from "react-icons/ci";
import { TbGauge } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";

import ForecastCard from "./ForecastCard";

type Props = {
  data: ForeCastType;
};

const Forecast = ({ data }: Props) => {
  const today = data.list[0];

  const getSunTime = (timeStamp: number): string => {
    const date = new Date(timeStamp * 1000);
    let hrs = date.getHours().toString();
    let min = date.getMinutes().toString();
    if (hrs.length <= 1) {
      hrs = `0${hrs}`;
    }
    if (min.length <= 1) {
      min = `0${min}`;
    }
    return `${hrs}:${min}`;
  };
  return (
    <section className="flex flex-col items-center justify-center text-center bg-white/20 backdrop-blur-lg lg:w-2/3 w-full drop-shadow-lg rounded-lg p-8 border-[1px] border-white/20 gap-2">
      <div
        className="absolute left-5 bg-white/20 drop-shadow-md cursor-pointer rounded-full top-5 p-2"
        onClick={() => {
          window.location.reload();
        }}
      >
        <IoArrowBack />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <IoLocationOutline size={"1.5rem"} className="leading-tight" />
          <h1 className="font-black text-2xl">
            {data.name},<span className="font-light">{` ${data.country}`}</span>
          </h1>
        </div>
        <div className="flex justify-center items-start leading-tight">
          <h1 className="text-[3.5rem] font-semibold">
            {Math.round(today.main.temp)}
          </h1>
          <h1 className="font-thin text-[2rem] mt-2">°C</h1>
        </div>
        <div className="flex justify-evenly items-center gap-2 rounded-lg">
          <img
            src={`./src/assets/animated/${today.weather[0].icon}.svg`}
            className="h-full w-full"
          />
          <div className="flex flex-col justify-between text-nowrap items-start leading-tight">
            <p className="capitalize text-[1.2rem] font-bold">
              {today.weather[0].main}
            </p>
            <p className="capitalize">{today.weather[0].description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center leading-tight gap-4 font-semibold">
          <p>Min: {Math.floor(today.main.temp_min)}°C</p>
          <p>Max: {Math.ceil(today.main.temp_max)}°C</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-1 gap-2 overflow-x-scroll">
        {data.list.map((item, i) => (
          <ForecastCard item={item} i={i} key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 justify-center items-stretch gap-2 max-h-[200px] w-full overflow-y-scroll">
        <div className="bg-white/20 flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Sunrise</p>
          <TbSunrise size={"2.5rem"} />
          <p className="font-bold">{getSunTime(data.sunrise)}</p>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Sunset</p>
          <TbSunset size={"2.5rem"} />
          <p className="font-bold">{getSunTime(data.sunset)}</p>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Wind</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <FaWind size={"1.8rem"} />
            <p className="font-bold text-lg">{data.list[0].wind.speed} km/h</p>
          </div>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Feels Like</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <TbTemperatureSun size={"2rem"} />
            <p className="font-bold text-xl">
              {Math.round(data.list[0].main.feels_like)} °C
            </p>
          </div>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Humidity</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <WiHumidity size={"2rem"} />
            <p className="text-lg font-bold">{data.list[0].main.humidity} %</p>
          </div>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Precipitation</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <CiDroplet size={"2rem"} />
            <p className="text-lg font-bold">{data.list[0].pop * 100} %</p>
          </div>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Pressure</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <TbGauge size={"2rem"} />
            <p className="text-lg font-bold">
              {data.list[0].main.pressure} hPa
            </p>
          </div>
        </div>
        <div className="bg-white/20 min-w-[150px] flex flex-col justify-center items-center gap-2 p-4 rounded-lg">
          <p className="font-medium">Visibility</p>
          <div className="flex text-nowrap justify-center items-center gap-4">
            <MdOutlineVisibility size={"2rem"} />
            <p className="text-lg font-bold">
              {data.list[0].visibility / 1000} Km
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
