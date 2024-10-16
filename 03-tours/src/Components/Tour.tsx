import { useState } from "react";
import { ITour } from "../interfaces";
import styles from "./Tour.module.scss";

function Tour({ id, name, info, image, price, onDeleteItem }: ITour) {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className={styles.tour}>
      <img src={image} alt={name} />
      <span className={styles.price}>{price}</span>
      <div className={styles.tourContent}>
        <h2>{name}</h2>
        <p>
          {isExtended ? `${info} ` : `${info.substring(0, 200)} `}
          <button
            className="btn-link"
            onClick={() => {
              setIsExtended(!isExtended);
            }}
          >
            {isExtended ? " Read Less" : "Read More..."}
          </button>
        </p>

        <button className="btn btn-primary" onClick={() => onDeleteItem(id)}>
          Not intersted
        </button>
      </div>
    </div>
  );
}

export default Tour;
