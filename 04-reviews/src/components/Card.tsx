import { ICard } from "../interfaces";
import styles from "./Card.module.scss";
import reviews from "../data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Card({ img, name, job, text, index, setIndex }: ICard) {
  const random = Math.trunc(Math.random() * 4);

  function handleNextItem() {
    if (index < reviews.length - 1) setIndex(index + 1);
  }

  function handlePrevItem() {
    if (index > 0) setIndex(index - 1);
  }

  function handleRandomItem() {
    setIndex(random);
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
