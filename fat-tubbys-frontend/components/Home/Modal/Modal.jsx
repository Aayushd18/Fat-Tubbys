export default function Modal({ title, description, image }) {
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
            <div>
              <button
                className="btn btn-primary"
                onClick={() => { console.log("Rent") }}
              >
               Rent
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ModalContent = ({ title, description, image }) => {
  return (
    <div className="p-3 flex flex-col">
      <h1 className=" text-2xl font-bold p-2">{title}</h1>
      <p className="mt-2 p-2">{description}</p>
      <figure>
        <img src={image} alt={title} />
      </figure>
    </div>
  )
}