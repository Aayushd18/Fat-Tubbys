import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-start pt-16">
        <div className="w-3/4 h-2/4 flex flex-col justify-center items-center space-y-6 border-2 border-gray-800/10">
          <h1 className="font-medium text-5xl dark:gray-200">Fat Tubbys</h1>
          <p className="text-base dark:gray-200">A NFT Marketplace</p>
        </div>
      </div>
    </>
  );
}
