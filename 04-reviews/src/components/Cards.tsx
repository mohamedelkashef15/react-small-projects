import { useState } from "react";
import styles from "./Cards.module.scss";
import people from "../data";
import Card from "./Card";

function Cards() {
  const [index, setIndex] = useState(0);
  const { id, name, job, text, image } = people[index];

  return (
    <section className={styles.cards}>
      <Card img={image} name={name} job={job} text={text} key={id} index={index} setIndex={setIndex} />
    </section>
  );
}

export default Cards;
