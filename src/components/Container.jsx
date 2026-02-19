import Header from "./Header";
import Location from "./Location";
import { useState, useEffect } from "react";

function Container({ Theme, setTheme }) {

  let [cityName, setCityName] = useState("Ongole");
  let [location, setLocation] = useState("");
  let [weather, setWeather] = useState('')
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  let [currentMonth, setCurrentMonth] = useState(null);
  let [currentYear, setCurrentYear] = useState(null);
  let [currentDay, setCurrentDay] = useState(null);

  const API_key = import.meta.env.VITE_API_KEY;

  let [secondAPICall, setsecondAPICall] = useState(null);
  useEffect(() => {
      setCityName("");
    if (cityName) { 
      fetchData();
    }
  }, []);

  const MouseEvent = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      fetchData();
      setCityName('')
    }
  }

  const fetchData = async (e, lat = null, lon = null) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      let url;
      if (lat !== null && lon !== null) {
        // Fetch by coordinates
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`;
      } else {
        // Fetch by city name
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_key}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
      }

      const data = await response.json(); // Current weather (has timezone too)

      const secondResp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${API_key}`
      );

      const forecastData = await secondResp.json();
      setsecondAPICall(forecastData);
      setLocation(forecastData); // Fixed: Use current data for location
      setWeather(data);

      console.log("Current:", data);
      console.log("Forecast:", forecastData);

      const timezoneOffset = forecastData.city.timezone; // e.g., 19800 for Ongole/IST
      const currentUTC = Math.floor(Date.now() / 1000);
      const cityLocalTimestamp = currentUTC + timezoneOffset;

      const dateStamp = new Date(cityLocalTimestamp * 1000);

      const year = dateStamp.getUTCFullYear();
      const month = dateStamp.toLocaleString("en-US", { month: "short" });
      const day = dateStamp.getUTCDate();

      setCurrentMonth(month);
      setCurrentDay(day);
      setCurrentYear(year);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  };

  function updateCityName(e) {
    setCityName(e.target.value);
  }

  return (
    <>
      <main className="max-w-[1200px] mx-auto px-4">
        <Header
          Theme={Theme}
          setTheme={setTheme}
          updateCityName={updateCityName}
          setCityName={setCityName}
          cityName={cityName}
          fetchData={fetchData}
          MouseEvent={MouseEvent}
        />
        <Location
          error={error}
          loading={loading}
          location={location}
          weather={weather}
          currentYear={currentYear}
          currentDay={currentDay}
          currentMonth={currentMonth}
          secondAPICall={secondAPICall}
          timezone={secondAPICall?.city?.timezone}
        />
      </main>
    </>
  );
}

export default Container;
