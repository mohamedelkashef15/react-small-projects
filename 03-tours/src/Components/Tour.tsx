import { ITour } from "../interfaces";
import styles from "./Tour.module.scss";

function Tour({ image, info, name, price }: ITour) {
  return (
    <div className={styles.tour}>
      <span className={styles.price}>{price}</span>
      <img src={image} alt={name} />
      <div className={styles.tourContent}>
        <h2>{name}</h2>
        <p>{info}</p>
        <button className="btn">Not Intersted</button>
      </div>
    </div>
  );
}

export default Tour;
