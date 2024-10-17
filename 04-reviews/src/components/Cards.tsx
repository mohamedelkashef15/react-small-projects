import { useState } from "react";
import styles from "./Cards.module.scss";
import reviews from "../data";
import Card from "./Card";

function Cards() {
  const [index, setIndex] = useState(0);
  return (
    <section className={styles.cards}>
      <Card
        img={reviews[index].image}
        name={reviews[index].name}
        job={reviews[index].job}
        text={reviews[index].text}
        key={reviews[index].id}
        index={index}
        setIndex={setIndex}
      />
    </section>
  );
}

export default Cards;
