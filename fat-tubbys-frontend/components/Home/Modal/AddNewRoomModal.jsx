export default function AddNwwRoomModal({ title, description, image }) {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor="add-room" className="modal-button">Add A Room</label>

      {/* <!-- Put this part before </body> tag --> */}

      <input type="checkbox" id="add-room" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <ModalContent />
          <div className="flex justify-end items-end space-x-6">
            <div className="modal-action">
              <label htmlFor="add-room" className="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ModalContent = () => {
  return (
    <div className="flex flex-col justify-evenly items-start">
      <h1 className=" font-extrabold text-2xl">Add / Mint a Room</h1>
      <form>
        <div className="flex justify-start items-center my-4">
          <label htmlFor="room-name">Room Name: </label>
          <input type="text" id="room-name" className=" bg-transparent outline-none rounded-md p-1 border-2 border-blue-400 active:bg-transparent ml-2"/>
        </div>
        <div className="flex justify-start items-center my-4">
          <label htmlFor="room-desc">Room Description: </label>
          <input type="text" id="room-desc" className=" bg-transparent outline-none rounded-md p-1 border-2 border-blue-400 active:bg-transparent ml-2"/>
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <label htmlFor="image-file" className="mb-1 underline">Select an Image:</label>
          <input id="image-file" type="file" />
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary" >Add / Mint</button>
        </div>
      </form>
    </div>
  )
}