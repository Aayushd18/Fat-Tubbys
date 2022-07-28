import Mockup from "./Mockup";

export default function Hero() {
  return (
    <>
      <div className="w-screen h-auto p-12 flex justify-around items-start pt-12">
        <div className="title-container w-3/4 h-2/4 flex flex-col p-36  space-y-6 border-2 border-base-200/20">
          <h1 className="font-medium text-7xl dark:gray-200">Fat Tubby's</h1>
          <p className="text-3xl dark:gray-200">
            Decentralized Room Rental Service
          </p>
        </div>
        <div className="mr-36">
          <Mockup />
        </div>
      </div>
    </>
  );
}
