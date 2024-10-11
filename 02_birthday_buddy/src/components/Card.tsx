import { useState } from "react";
import { personData } from "../data";
import styles from "./Card.module.scss";
import Persons from "./Persons";

function Card() {
  const [persons, setPersons] = useState(personData);
  const numberOfPersons = persons.length;

  function handleClearItems() {
    setPersons([]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{numberOfPersons} Birthdays Today</h1>
        <Persons persons={persons} />
        <button type="button" className={styles.btn} onClick={handleClearItems}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Card;
