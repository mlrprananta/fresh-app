import Temperature from "../islands/Temperature.tsx";
import Frame from "../components/Frame.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-purple-200 text-purple-900">
      <div class="px-4 py-6 mx-auto">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Amsterdam Live</h1>
          <Temperature />
          <div class="w-full flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-1/2">
              <Frame source="https://www.youtube.com/embed/PyNuRpZOtAY?si=fP3-ekTVRJkRTNJw" />
            </div>
            <div class="w-full md:w-1/2">
              <Frame source="https://www.youtube.com/embed/Gd9d4q6WvUY?si=FpBGh9vBc4znKWun" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}