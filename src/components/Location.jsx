import CityName from "./CityName";
import CurrentTemp from "./CurrentTemp";
import OtherData from "./OtherData";
import SunriseSunset from "./SunriseSunset";
import WeatherForecast from "./WeatherForecast";

function Weather({
  error,
  loading,
  weather,
  location,
  currentYear,
  currentDay,
  currentMonth,
  secondAPICall,
}) {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-4 py-6 bg-white dark:bg-gray-700 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[700px]">
        {!weather && !error && (
          <div className="col-span-2 text-4xl flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        )}
        {weather && !error ? (
          <>
            <CityName
              location={location}
              currentYear={currentYear}
              currentDay={currentDay}
              currentMonth={currentMonth}
            />
            <CurrentTemp weather={weather} location={location} />
            <OtherData weather={weather} />
            <SunriseSunset weather={weather} />
            <div className="md:col-span-2">
              <WeatherForecast
                location={location}
                weather={weather}
                secondAPICall={secondAPICall}
              />
            </div>
          </>
        ) : (
          <div className="col-span-2 text-4xl flex items-center justify-center h-full">
            <p className="text-center">{error}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Weather;
