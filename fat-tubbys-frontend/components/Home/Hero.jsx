import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
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

const Mockup = () => {
  return (
    <div className="mockup-phone border-blue-300">
      <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1 flex flex-col justify-evenly items-center">
            <div className=" border-b-2 border-b-slate-400">
              <br></br>
              <h1 className=" font-extrabold text-3xl pb-4">Pay, Rent & Stay</h1>
            </div>
            <div>
            <ul className="steps steps-vertical">
              <li className="step step-info"><h1 className=" font-extrabold text-3xl my-8">Rent NFT</h1></li>
              <li className="step step-info"><h1 className=" font-extrabold text-3xl">Receive QR Code</h1></li>
              <li className="step step-info"><h1 className=" font-extrabold text-3xl">Enjoy your Stay!</h1></li>
            </ul>
            </div>                
          </div>
        </div>
    </div>
  )
}