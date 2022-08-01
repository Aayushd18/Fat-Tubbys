import Link from "next/link";
import ModalForAvailableRooms from "../Modal/ModalForAvailableRooms";
import ModalForRentedRooms from "../Modal/ModalForRentedRooms";

const _card = ({ title, description, button, link, image, available }) => {
  return (
    <div className="card w-96 glass shadow-md">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className=" flex justify-end pt-5">
          {
            available ? <ModalForAvailableRooms title={title} description={description} image={image} />
            : <ModalForRentedRooms title={title} description={description} image={image} />
          }
        </div>
      </div>
    </div>
  );
};

export default _card;
