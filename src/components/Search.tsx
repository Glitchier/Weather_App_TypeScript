import { ChangeEvent } from "react";
import { OptionType } from "../types/model";

type Props = {
  term: string;
  opt: [];
  inpChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (opt: OptionType) => void;
  onSubmitForecast: () => void;
};

const Search = ({
  term,
  opt,
  inpChange,
  onOptionSelect,
  onSubmitForecast,
}: Props) => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-white/20 backdrop-blur-lg w-[500px] drop-shadow-lg rounded-lg p-8 border-[1px] border-white/20">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>
      <p className="text-sm mt-2">Enter a city name to know the weather.</p>
      <div className="relative flex justify-center items-center mt-6">
        <input
          value={term}
          onChange={inpChange}
          type="text"
          className="px-4 py-1 rounded-l-full border-2 border-white"
        />
        <ul className="absolute flex flex-col -z-10 items-start justify-center left-3 top-8 bg-white ml-1 w-[72%] rounded-b-md">
          {opt.map((opt: OptionType, idx: number) => (
            <li
              key={opt.name + "-" + idx}
              className="flex items-start w-full border-b-[1px] border-[#888]/30"
            >
              <button
                className="h-full w-full flex items-start p-2 hover:text-white hover:bg-[#888]"
                onClick={() => onOptionSelect(opt)}
              >
                {`${opt.name}, ${opt.country}`}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onSubmitForecast}
          className="px-2 py-1 text-white rounded-r-full border-2 hover:border-[#111] hover:text-[#111] border-white"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
