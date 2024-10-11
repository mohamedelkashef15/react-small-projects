import { IPerson } from "../interfaces";
import styles from "./Person.module.scss";

function Person({ img, age, name }: IPerson) {
  return (
    <div className={styles.person}>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </div>
  );
}
export default Person;
