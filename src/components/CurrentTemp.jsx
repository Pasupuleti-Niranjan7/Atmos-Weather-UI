import { FaTemperatureEmpty } from "react-icons/fa6";

let CurrentTemp = ({location, weather, }) => {
  return (
    <>
      {location && (
        <section className="bg-blue-300/30 rounded-md py-6 flex flex-col items-center dark:text-white dark:dark:bg-gray-600 shadow-lg px-1 sm:px-4">
          <div className="w-full flex justify-between px-2 sm:px-5 gap-4">
            <div className="flex flex-col items-center text-[1.3rem] sm:text-[1.8rem] md:text-[2rem] font-bold">
              <div className="flex items-center">
                <FaTemperatureEmpty className="size-7 sm:size-8 md:size-12" />
                {weather.main.temp}°C
              </div>
              <p className="text-[1rem] mt-1">
                <span className="text-gray-600 text-[0.8rem] font-normal dark:text-gray-400">
                  Feels like
                </span>{" "}
                {weather.main.feels_like}°C
              </p>
            </div>

            <div className="flex flex-col font-bold text-sm sm:text-xl text-gray-800 dark:text-white">
              <h4 className="text-[1rem]">
                <span className="text-gray-600 text-[0.8rem] font-normal dark:text-gray-400">
                  Max{" "}
                </span>
                {weather.main.temp_max}°C
              </h4>
              <h4 className="text-[1rem]">
                <span className="text-gray-600 text-[0.8rem] font-normal dark:text-gray-400">
                  Min{" "}
                </span>
                {weather.main.temp_min}°C
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center text-lg">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-35 h-35 md:w-40 md:h-40"
            />

            <span className="-mt-5 font-bold tracking-wide">
              {weather.weather[0].description}
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default CurrentTemp;
