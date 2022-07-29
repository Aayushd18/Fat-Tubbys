import _card from "./Card/_card";
import { useState } from "react";

const avaRooms = [
  {
    id: 1,
    title: "Room 55",
    description: "Bottom Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 2,
    title: "Room 45",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 3,
    title: "Room 35",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 4,
    title: "Room 12",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 5,
    title: "Room 25",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 6,
    title: "Room 53",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
];

const renRooms = [
  {
    id: 1,
    title: "Room 99",
    description: "Rented Room",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 2,
    title: "Room 87",
    description: "Rented Room",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 3,
    title: "Room 99",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 4,
    title: "Room 82",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 5,
    title: "Room 15",
    description: "Top Floor",
    image: "https://placeimg.com/400/225/arch",
  },
  {
    id: 6,
    title: "Room 43",
    description: "Rented",
    image: "https://placeimg.com/400/225/arch",
  },
];

const Latest = () => {
  const [search, setSearch] = useState(""); // Search Name
  const [availRooms, setAvailRooms] = useState(avaRooms); // Contains all the Available rooms
  const [rentRooms, setRentRooms] = useState(renRooms); // Contains all the Rented rooms
  const [tab, setTab] = useState("avail"); // which tab is active?

  function switchTabs(e) {
    const availElem = document.getElementById("avail");
    const rentElem = document.getElementById("rent");
    if (e.target.id == "avail") {
      rentElem.classList.remove("tab-active");
      availElem.classList.add("tab-active");
      setTab("avail");
      setSearch("");
    } else if (e.target.id == "rent") {
      rentElem.classList.add("tab-active");
      availElem.classList.remove("tab-active");
      setTab("rent");
      setSearch("");
    }
  }

  return (
    <>
      <div className="w-11/12 h-auto p-6 mx-auto">
        <div className="form-control w-6/12 mx-auto mt-3 mb-8">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className=" flex flex-col items-center my-5">
          <div className="tabs tabs-boxed">
            <a
              id="avail"
              onClick={switchTabs}
              className="tab tab-lg tab-bordered tab-active mx-6"
            >
              Available
            </a>
            <a
              id="rent"
              onClick={switchTabs}
              className="tab tab-lg tab-bordered text-white"
            >
              Rented
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center content-center gap-x-6 gap-y-12 w-full mx-auto">
          {tab == "avail"
            ? availRooms
                .filter((room) => {
                  if (search.toLowerCase() == "") {
                    return room;
                  } else {
                    return (
                      room.title.toLowerCase().includes(search.toLowerCase()) ||
                      room.description
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    );
                  }
                })
                .map((room) => {
                  return (
                    <_card
                      key={room.id}
                      title={room.title}
                      description={room.description}
                      button="Book Now"
                      image={room.image}
                      link="#"
                      available={true}
                    />
                  );
                })
            : rentRooms
                .filter((room) => {
                  if (search.toLowerCase() == "") {
                    return room;
                  } else {
                    return (
                      room.title.toLowerCase().includes(search.toLowerCase()) ||
                      room.description
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    );
                  }
                })
                .map((room) => {
                  return (
                    <_card
                      key={room.id}
                      title={room.title}
                      description={room.description}
                      button="Book Now"
                      image={room.image}
                      link="#"
                      available={false}
                    />
                  );
                })}
        </div>
      </div>
    </>
  );
};

export default Latest;
