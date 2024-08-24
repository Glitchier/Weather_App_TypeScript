import useForecast from "./hooks/useForecast";
import Search from "./components/Search";
import Forecast from "./components/Forecast";

const App = () => {
  const {
    term,
    options,
    forecast,
    inpChange,
    onOptionSelect,
    onSubmitForecast,
  } = useForecast();
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-[#4158d0] via-[#C850C0] to-[#FFCC70] h-screen w-full p-6">
      {forecast ? (
        <>
          <Forecast data={forecast} />
        </>
      ) : (
        <Search
          term={term}
          opt={options}
          inpChange={inpChange}
          onOptionSelect={onOptionSelect}
          onSubmitForecast={onSubmitForecast}
        />
      )}
    </main>
  );
};

export default App;
