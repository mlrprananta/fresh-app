import Temperature from "../islands/Temperature.tsx";
import Frame from "../components/Frame.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-purple-200 text-purple-900">
      <div class="px-4 mx-auto">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <Temperature />
          <div class="w-full grid md:grid-cols-2 gap-2">
            <Frame source="https://www.youtube.com/embed/Gd9d4q6WvUY?si=FpBGh9vBc4znKWun" />
            <Frame source="https://www.youtube.com/embed/JzaUBmxubSg?si=pb5XW16G9owEI4mJ" />
            <Frame source="https://www.youtube.com/embed/1phWWCgzXgM?si=46mUE4sUY-ITKMsa" />
            <Frame source="https://www.youtube.com/embed/ju0y6u6sWOM?si=0s-DLCZr5b_2vwGW" />
          </div>
        </div>
      </div>
    </div>
  );
}
