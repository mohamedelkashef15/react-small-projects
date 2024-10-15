import { useState } from "react";
import { ITour } from "../interfaces";
import styles from "./Tour.module.scss";

function Tour({ id, image, info, name, price, deleteItem }: ITour) {
  const [isExtended, setIsExtended] = useState(false);
  const words = info.split(" ");
  const limit = 30;

  return (
    <div className={styles.tour}>
      <span className={styles.price}>{price}</span>
      <img src={image} alt={name} />
      <div className={styles.tourContent}>
        <h2>{name}</h2>
        <div>
          <p>{isExtended ? words.join(" ") : words.slice(0, limit).join(" ")}</p>

          <button type="button" className="btn-link" onClick={() => setIsExtended(!isExtended)}>
            {isExtended ? "Read Less" : "Read More"}
          </button>
        </div>
        <button className="btn" onClick={() => deleteItem(id)}>
          Not Intersted
        </button>
      </div>
    </div>
  );
}

export default Tour;
