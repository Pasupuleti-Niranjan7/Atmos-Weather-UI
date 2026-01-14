import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function CityName({location, currentMonth, currentDay, currentYear}) {
  return (
    <>
      {location && (
              <section className="bg-blue-300/30 rounded-md flex flex-col items-center justify-center dark:text-white dark:bg-gray-600 py-12 sm:py-15 shadow-md">
                <div className="flex items-center gap-2 text-2xl sm:text-4xl font-bold py-1">
                  <FaLocationDot />
                  <h1>
                    {location?.city?.name}, {location?.city?.country}
                  </h1>
                </div>
                <div className="flex gap-3 py-2 text-gray-500 dark:text-gray-200 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {currentMonth} {currentDay}, {currentYear}
                  </div>
                </div>
              </section>
            )}
    </>
  )
}

export default CityName