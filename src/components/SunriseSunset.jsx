import { WiSunrise, WiSunset } from "react-icons/wi";

const formatSunTime = (timestamp, timezoneOffset) => {
  const localMillis = (timestamp + timezoneOffset) * 1000;

  return new Date(localMillis).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

const SunriseSunset = ({ weather }) => {
  if (!weather?.sys || weather.timezone == null) return null;

  const sunrise = formatSunTime(weather.sys.sunrise, weather.timezone);

  const sunset = formatSunTime(weather.sys.sunset, weather.timezone);

  return (
    <section className="bg-[url('/suntime.png')] bg-center bg-cover w-full rounded-2xl overflow-hidden shadow-lg">
      <div className="flex justify-between items-center px-8 py-10 text-white">
        <div className="flex flex-col items-center gap-1">
          <WiSunrise size={60} />
          <p className="text-xl font-semibold">Sunrise</p>
          <p className="text-lg">{sunrise}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <WiSunset size={60} />
          <p className="text-xl font-semibold">Sunset</p>
          <p className="text-lg">{sunset}</p>
        </div>
      </div>
    </section>
  );
};

export default SunriseSunset;
