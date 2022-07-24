import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-screen h-screen flex items-start">
        <div className="title-container w-3/4 h-5/6 flex flex-col justify-center items-center">
          <h1 className="font-medium text-5xl text-white dark:gray-200 pr-96">Fat Tubbys</h1>
          <p className=" text-2xl text-white dark:gray-200 pr-96 pt-3">Put, Rent & Stay </p>
        </div>
      </div>
    </>
  );
}
