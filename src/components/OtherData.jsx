import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { FaWind } from "react-icons/fa";

let OtherData = ({weather}) => {
  return (
    <>
      <section className="flex justify-center bg-blue-300/30 rounded-md py-4 sm:px-4 gap-2 sm:gap-6 items-center dark:text-white dark:bg-gray-600 shadow-lg">
        <section className="grid grid-cols-1 gap-6">
          <div className="bg-white/90 px-8 py-4 flex flex-col items-center rounded-md shadow-md dark:bg-gray-800/40 w-30 sm:w-55 md:w-35 lg:w-55">
            <div className="flex flex-col items-center">
              <WiHumidity size={32} />
              <span className="text-base">Humidity</span>
              <span className="text-[1rem] font-light">
                {weather?.main?.humidity}%
              </span>
            </div>
          </div>

          <div className="bg-white/90 px-8 py-4  flex flex-col items-center rounded-md shadow-md dark:bg-gray-800/40 w-30 sm:w-55 md:w-35 lg:w-55">
            <div className="flex flex-col items-center">
              <FaCloud size={32} />
              <span className="text-base">Cloud</span>
              <span className="text-[1rem] font-light">
                {weather?.clouds?.all} %
              </span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6">
          <div className="bg-white/90 px-8 py-4 flex flex-col items-center rounded-md shadow-md dark:bg-gray-800/40 w-30 sm:w-55 md:w-35 lg:w-55">
            <div className="flex flex-col items-center">
              <MdSpeed size={32} />
              <span className="text-base">Pressure</span>
              <span className="text-[1rem] font-light">
                {weather?.main?.pressure}hPa
              </span>
            </div>
          </div>

          <div className="bg-white/90 px-8 py-4 flex flex-col items-center rounded-md shadow-md dark:bg-gray-800/40 w-30 sm:w-55 md:w-35 lg:w-55">
            <div className="flex flex-col items-center">
              <FaWind size={32} />
              <span className="text-base">Wind</span>
              <span className="text-[1rem] font-light">
                {weather?.wind?.speed}m/s
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OtherData;
