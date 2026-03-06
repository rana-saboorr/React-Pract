export default function WeatherCard({ data }) {
  if (!data) return <div className="text-gray-700">No data yet</div>;

  return (
    <div className="w-full bg-blue-50 rounded-lg p-4 text-gray-800 shadow-inner">
      <h2 className="text-lg font-bold mb-2">
        {data.city.name}, {data.city.country}
      </h2>
      <p>Weather: {data.list[0].weather[0].description}</p>
      <p>Temp: {data.list[0].main.temp} °C</p>
      <p>Humidity: {data.list[0].main.humidity}%</p>
    </div>
  );
}
