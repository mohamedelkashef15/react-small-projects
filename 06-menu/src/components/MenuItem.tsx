import { IMenu } from "../interfaces";
import styles from "./MenuItem.module.scss";
function MenuItem({ img, title, desc, price, category }: IMenu) {
  return (
    <div className={styles.item}>
      <img src={img} alt={title} />
      <div className={styles.itemContent}>
        <h3>
          {title} <span>{price}</span>
        </h3>

        <p>{desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
