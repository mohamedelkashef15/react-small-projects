import { ICard } from "../interfaces";
import styles from "./Card.module.scss";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import people from "../data";

function Card({ img, name, job, text, index, setIndex }: ICard) {
  function checkNumber(number: number) {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  }

  function handlePrevItem() {
    setIndex(() => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }
  function handleNextItem() {
    setIndex(() => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  // if we setIndex(randomNumber) it will show bug becasue random number may be duplicated
  function handleRandomItem() {
    const randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    setIndex(() => {
      if (randomNumber === index) return checkNumber(randomNumber);
      return randomNumber;
    });
  }

  return (
    <div className={styles.card}>
      <img src={img} alt={name} />

      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <div className={styles.icons}>
        <FaChevronLeft onClick={handlePrevItem} />
        <FaChevronRight onClick={handleNextItem} />
      </div>
      <button type="button" className="btn" onClick={handleRandomItem}>
        Surpirse Me
      </button>
    </div>
  );
}

export default Card;
