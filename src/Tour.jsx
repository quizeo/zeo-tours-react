import { useState } from "react";
import { useAppContext } from "./App";

const Tour = (props) => {
  const [toggle, setToggle] = useState(false);
  const value = useAppContext();
  const { tours, setTours } = value;

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const { id, image, info, name, price } = props;
  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {toggle ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setToggle(!toggle)}>
            {toggle ? " Show Less" : " Read More"}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
