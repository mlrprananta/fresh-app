import Temperature from "../islands/Temperature.tsx";
import Frame from "../components/Frame.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-purple-200 text-purple-900">
      <div class="px-4 mx-auto">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <Temperature />
          <div class="w-full grid md:grid-cols-2 gap-2">
            <Frame source="https://www.youtube.com/embed/PyNuRpZOtAY?si=fP3-ekTVRJkRTNJw" />
            <Frame source="https://www.youtube.com/embed/Gd9d4q6WvUY?si=FpBGh9vBc4znKWun" />
            <Frame source="https://www.youtube.com/embed/zvx4y0BL50Q?si=BDgI8sWCJY8iuaeh" />
            <Frame source="https://www.youtube.com/embed/1phWWCgzXgM?si=46mUE4sUY-ITKMsa" />
          </div>
        </div>
      </div>
    </div>
  );
}
