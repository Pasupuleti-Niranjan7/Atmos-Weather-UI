import { TiWeatherCloudy } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

function Header({
  Theme,
  setTheme,
  updateCityName,
  cityName,
  MouseEvent,
}) {
  return (
    <>
      <header
        className={`flex flex-col items-center justify-between md:flex-row pb-7 px-4 gap-2`}
      >
        <section className="flex gap-2 items-center">
          <TiWeatherCloudy
            className="font-bold dark:text-white text-black"
            size={30}
          />
          <h2 className="text-2xl text-black dark:text-white ">Weather</h2>
        </section>
        <form action="" className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Enter location"
            value={cityName}
            onChange={updateCityName}
            onKeyDown={MouseEvent}
            className="border-2 dark:border-2 px-4 py-1 sm:w-100 dark:shadow-sm dark:shadow-blue-900/50 rounded-3xl border-blue-300/70 dark:border-gray-400/20 placeholder:text-gray-500 placeholder:text-lg placeholder:text-center text-left dark:text-white text-lg outline-none"
          />
        </form>

        <div className="flex justify-center gap-2 bg-white shadow-[0_0_1px_2px_#f0f0f0] dark:shadow-none dark:bg-gray-600 px-2 py-1 rounded-full">
          <button
            className={` ${
              Theme == "dark" ? "" : "bg-blue-500/50"
            } rounded-full px-1 py-1 text-white cursor-pointer`}
            onClick={() => setTheme("")}
          >
            <MdOutlineLightMode size={20} />
          </button>
          <button
            className={` ${
              Theme == "dark" ? "bg-gray-800/80 text-white" : "text-black"
            } rounded-full px-1 py-1 cursor-pointer font-bold`}
            onClick={() => setTheme("dark")}
          >
            <CiDark size={20} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
