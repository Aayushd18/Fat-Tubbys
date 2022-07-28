export default function Modal() {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-6" className="btn modal-button">open modal</label>

      {/* <!-- Put this part before </body> tag --> */}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="flex justify-end items-end space-x-6">
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Close</label>
            </div>
            <div>
              <button className="btn btn-primary">Rent</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}