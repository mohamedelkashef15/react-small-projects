import { shortList } from "../data";
import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.slider}>
      <div className="container">
        {shortList.map((item) => {
          const { name, image, title, quote } = item;
          return (
            <div className={styles.item}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p className={styles.title}>{title}</p>
              <p className={styles.desc}>{quote}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
