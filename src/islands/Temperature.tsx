import { useEffect, useState } from "preact/hooks";

const API_URL = "https://polite-seal-20.deno.dev/temperatures";

export default function Temperature() {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(
          `${API_URL}?lat=${latitude}&lon=${longitude}`,
        );
        const data = await response.json();
        setTemperature(data.temperature);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error("Error getting user location:", error);
    };

    navigator.geolocation.getCurrentPosition(fetchTemperature, handleError);
  }, []);

  const getWeatherEmoji = (temp: number | null) => {
    if (temp === null) return "👋"; // No temperature available
    if (temp <= -10) return "🥶"; // Extreme cold
    if (temp <= 0) return "❄️"; // Freezing
    if (temp <= 5) return "🧊"; // Very cold
    if (temp <= 10) return "🌬️"; // Cold
    if (temp <= 15) return "🧥"; // Chilly
    if (temp <= 20) return "🌤️"; // Mild
    if (temp <= 25) return "😎"; // Warm
    if (temp <= 30) return "☀️"; // Hot
    if (temp <= 35) return "🌡️"; // Very hot
    return "🔥"; // Extreme heat
  };

  const emoji = getWeatherEmoji(temperature);

  return (
    <div class="flex items-center gap-2 my-4 text-2xl">
      {temperature !== null
        ? `${temperature.toFixed(1)}°C`
        : "Have a nice day!"}
      <span>{emoji}</span>
    </div>
  );
}
