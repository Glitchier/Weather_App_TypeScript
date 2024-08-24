import { ForecastCardType } from "../types/model";

type Props = {
  item: ForecastCardType;
  i: number;
};

const ForecastCard = ({ item, i }: Props) => {
  const date = item.dt_txt;
  const hrs = date.slice(-8, -6);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.slice(8, 10);
  const mon = Number(date.slice(5, 7));
  const month = months[mon - 1];

  return (
    <div className="min-w-[100px] flex text-nowrap flex-col justify-between items-center text-sm rounded-lg p-2 bg-[#fff]/10">
      <p className="font-semibold">{i === 0 ? "Now" : hrs + ":00"}</p>
      <p className="font-semibold">{`${day} ${month}`}</p>
      <img
        className="h-2/3 w-2/3"
        src={`./src/assets/animated/${item.weather[0].icon}.svg`}
      />
      <p className="font-semibold">{Math.round(item.main.temp)} °C</p>
    </div>
  );
};

export default ForecastCard;
