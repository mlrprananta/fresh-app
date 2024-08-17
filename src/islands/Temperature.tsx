import { useState, useEffect } from "preact/hooks";

const API_URL = 'https://polite-seal-20.deno.dev/temperatures';

export default function Temperature() {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(`${API_URL}?lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        setTemperature(data.temperature);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error('Error getting user location:', error);
    };

    navigator.geolocation.getCurrentPosition(fetchTemperature, handleError);
  }, []);

  const getWeatherEmoji = (temp: number | null) => {
    if (temp === null) return '👋';
    if (temp <= 0) return '❄️';
    if (temp <= 10) return '🥶';
    if (temp <= 20) return '😎';
    if (temp <= 30) return '☀️';
    return '🔥';
  };

  const emoji = getWeatherEmoji(temperature);
 
  return (
    <div class="flex items-center gap-2 py-6 text-2xl">
      {temperature !== null ? `${temperature}°C` : 'Have a nice day!'}
      <span>{emoji}</span>
    </div>
  );
}