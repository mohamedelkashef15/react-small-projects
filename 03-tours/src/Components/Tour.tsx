import { useState } from "react";
import { ITour } from "../interfaces";
import styles from "./Tour.module.scss";

function Tour({ image, info, name, price }: ITour) {
  const [isExtended, setIsExtended] = useState(true);
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
        <button className="btn">Not Intersted</button>
      </div>
    </div>
  );
}

export default Tour;
