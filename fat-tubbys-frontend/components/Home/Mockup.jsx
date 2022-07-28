export default function Mockup() {
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
              <li className="step step-info">
                <h1 className=" font-extrabold text-3xl my-8">Rent NFT</h1>
              </li>
              <li className="step step-info">
                <h1 className=" font-extrabold text-3xl">Receive QR Code</h1>
              </li>
              <li className="step step-info">
                <h1 className=" font-extrabold text-3xl">Enjoy your Stay!</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
