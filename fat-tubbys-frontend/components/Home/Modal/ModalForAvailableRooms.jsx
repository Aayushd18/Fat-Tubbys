export default function ModalForAvailableRooms({ title, description, image }) {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor={title} className="btn modal-button">open modal</label>

      {/* <!-- Put this part before </body> tag --> */}

      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
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
  return (
    <div className="p-3 flex flex-col space-y-4">
      <h1 className=" text-2xl font-bold p-2">{title}</h1>
      <p className="mt-2 p-2">{description}</p>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{`Owned by - ${owner}`}</p>
      <div className="mt-4 border-2 border-blue-500 p-3 rounded-lg">
        <h1 className=" font-semibold">Rent Form</h1>
        <div className="divider"></div> 
        <ModalForm />
      </div>
    </div>
  )
}

const ModalForm = () => {
  return (
    <div className="flex flex-col justify-evenly items-start">
      <form 
        onSubmit={(e) => {e.preventDefault(); console.log(e.target.duration.value)}}
        className="space-y-4"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Duration of Stay: </span>
          </label>
          <label className="input-group">
            <input type="number" placeholder="hours" name="duration" className="input input-bordered" />
            <span>Hours</span>
          </label>
        </div>
        <div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => { console.log("Rent") }}
          >
            Rent
          </button>
        </div>
      </form>
    </div>
  )
}