import _card from "./Card/_card";

const Latest = () => {
  return (
    <>
      <div className="w-11/12 h-auto p-6 mx-auto">
        <div className="form-control w-6/12 mx-auto mt-3 mb-8">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className=" flex flex-col items-center my-5">
          <div className="tabs tabs-boxed">
            <a className="tab tab-lg tab-bordered mx-6">Available</a>
            <a className="tab tab-lg tab-bordered tab-active text-white">Rented</a>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-4 items-center">
          <_card
            title="Room 55"
            description="Top Floor Room at Jackson Avenue"
            button="Book Now"
            image="https://placeimg.com/400/225/arch"
            link="#"
          />
          <_card
            title="Gregory House Lake"
            description="Beautiful, peaceful house at Gregory Avenue"
            button="Book Now"
            image="https://placeimg.com/400/225/arch"
            link="#"
          />
          <_card
            title="Room A"
            description="Best place to enjoy a stay"
            button="Book Now"
            image="https://placeimg.com/400/225/arch"
            link="#"
          />
          <_card
            title="House"
            description="Comfortable House at Bevel Street"
            button="Book Now"
            image="https://placeimg.com/400/225/arch"
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default Latest;
