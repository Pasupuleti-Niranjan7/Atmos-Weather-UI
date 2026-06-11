# Atmos Weather App

A responsive weather dashboard built with React, Vite, and Tailwind CSS. The app displays current weather, forecast details, and atmospheric data using the OpenWeatherMap API.

## Features

- **Current weather conditions**: temperature, humidity, wind speed, pressure, and cloud coverage.
- **City search**: search weather by city name.
- **Forecast view**: multi-day weather forecast.
- **Sunrise & sunset**: display sunrise and sunset times.
- **Responsive design**: works on desktop, tablet, and mobile devices.
- **Modern UI**: styled with Tailwind CSS and React Icons.

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **React Icons**
- **OpenWeatherMap API**
- **ESLint**

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Pasupuleti-Niranjan7/Atmos-Weather-UI.git
cd Weather_App
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_open_weather_map_api_key
```

4. Start the development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Environment Variables

- `VITE_API_KEY` — your OpenWeatherMap API key

> Do not commit `.env` or API keys to source control.

## Project Structure

```
src/
├── assets/
├── components/
│   ├── CityName.jsx
│   ├── Container.jsx
│   ├── CurrentTemp.jsx
│   ├── Header.jsx
│   ├── Location.jsx
│   ├── OtherData.jsx
│   ├── SunriseSunset.jsx
│   └── WeatherForecast.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Deployment

For platforms like Vercel, Netlify, or Render:

1. Build the app:

```bash
npm run build
```

2. Deploy the `dist` folder.
3. Add the environment variable `VITE_API_KEY` in your hosting settings.

## Notes

- The app depends on the OpenWeatherMap API.
- API rate limits and plan restrictions apply.
- Keep your API key private.

## Contributing

Contributions are welcome. Open an issue or submit a pull request.

## License

This project is open source and available under the MIT License.
