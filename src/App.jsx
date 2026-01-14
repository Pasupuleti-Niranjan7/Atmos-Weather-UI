import Container from "./components/Container";
import { useState } from "react";
import Weather from "./components/WeatherForecast";

function App() {
    let [Theme, setTheme] = useState("");

  return (
    <>
      <div className={`bg-blue-300/30 py-10 ${Theme} dark:bg-gray-800 overflow-y-hidden`}>
        <Container Theme={Theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
