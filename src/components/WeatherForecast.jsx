
let WeatherForecast = ({ location, weather, secondAPICall, timezone = 0 }) => {
  if (!secondAPICall?.list?.length) return null;

  const formatDateTime = (dt) => {
    const localSeconds = dt + timezone;
    const localDate = new Date(localSeconds * 1000);
    const hour = localDate.getHours();

    let period;
    if (hour >= 5 && hour < 12) {
      period = "🌅 Morning";
    } else if (hour >= 12 && hour < 17) {
      period = "☀️ Afternoon";
    } else if (hour >= 17 && hour < 21) {
      period = "🌆 Evening";
    } else {
      period = "🌙 Night";
    }

    return {
      hour,
      period,
      date: localDate.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }), // e.g., "Mon, Jan 12, 2026"
      time: localDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }), // e.g., "6:00 PM"
    };
  };

  return (
    <>
      <section className="forecast-scroll bg-blue-300/30 rounded-md py-4 px-4 flex gap-2 items-center dark:text-white dark:bg-gray-600 overflow-x-auto shadow-lg">
        {secondAPICall.list.map((day) => {
          const { date, time, period } = formatDateTime(day.dt);
          const weatherIcon = day.weather[0].icon;
          const weatherDesc = day.weather[0].description;
          return (
            <section
              key={day.dt}
              className="bg-white/90 px-8 py-4 w-55 flex flex-col items-center shrink-0 rounded-md mx-1 shadow-md dark:bg-gray-800/40"
            >
              <div className="text-sm flex flex-col font-medium text-center">
                <p className="pl-5">{date}</p>
                <div className="flex flex-col items-center">
                  <p>{period}</p>
                  <p>{time}</p>
                </div>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt={weatherDesc}
                className="w-20 h-20 sm:w-30 sm:h-30"
              />
              <p className="text-xs text-gray-600 capitalize mt-2 font-medium dark:text-white">
                {weatherDesc}
              </p>
              <div className="mt-2">
                <p className="text-base font-medium">
                  <span className="text-sm text-gray-500 font-normal">max</span>{" "}
                  {day.main.temp_max}°
                </p>
                <p className="text-base font-medium">
                  <span className="text-sm text-gray-500 font-normal">min</span>{" "}
                  {day.main.temp_min}°
                </p>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default WeatherForecast;
