import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-screen h-auto p-12 flex justify-center items-start pt-12">
        <div className="w-3/4 h-2/4 flex flex-col p-36 justify-center items-center space-y-6 border-2 border-base-200/20">
          <h1 className="font-medium text-7xl dark:gray-200">Fat Tubbys</h1>
          <p className="text-xl dark:gray-200">
            A Decentralised token based House/Room renting service
          </p>
        </div>
      </div>
    </>
  );
}
