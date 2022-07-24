import Link from "next/link";

const _card = ({ title, description, button, link, image }) => {
  return (
    <div className="card w-96 glass shadow-md">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end pt-5">
          <button className="btn btn-primary">
            <Link href={link}>{button}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default _card;
