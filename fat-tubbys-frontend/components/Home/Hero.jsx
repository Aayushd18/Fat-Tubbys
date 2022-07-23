import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-2/4 h-2/4 flex flex-col justify-center items-center space-y-6">
          <h1 className="font-medium text-5xl dark:gray-200">Hello World!</h1>
          <button className="btn btn-primary" onClick={() => setTheme("light")}>
            Light Mode
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </button>
        </div>
      </div>
    </>
  );
}
