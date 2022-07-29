import QRImage from "react-qr-image";

export default function ModalForRentedRooms({ title, description, image }) {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor={title} className="btn modal-button">open modal</label>

      {/* <!-- Put this part before </body> tag --> */}

      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <ModalContent title={title} description={description} image={image}/>
          <div className="flex justify-end items-end space-x-6">
            <div className="modal-action">
              <label htmlFor={title} className="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ModalContent = ({ title, description, image }) => {
  const owner = "0x123444040404040000"
  const rentedBy = "0x2f142646Fd3363e6476b52259739a650C605A692"
  return (
    <div className="p-3 flex flex-col space-y-4">
      <h1 className=" text-2xl font-bold p-2">{title}</h1>
      <p className="mt-2 p-2">{description}</p>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{`Owned by - ${owner}`}</p>
      <p>{`Rented by - ${rentedBy}`}</p>
      { rentedBy === "0x8Ac7Dac1cA30b28cc6491C59f0620a35C89a5a91" && <QRContent />}
    </div>
  )
}

const QRContent = () => {
  return (
    <QRImage text="hello" color="white" background="#111" />
  )
}