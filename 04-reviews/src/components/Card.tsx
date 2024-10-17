import { ICard } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.scss";
import reviews from "../data";

function Card({ img, name, job, text, index, setIndex }: ICard) {
  const random = Math.trunc(Math.random() * 4);

  function handleNextItem() {
    if (index < reviews.length - 1) setIndex(index + 1);
  }

  function handlePrevItem() {
    if (index > 0) setIndex(index - 1);
  }

  function handleRandomItem() {
    console.log(random);
    setIndex(random);
  }

  return (
    <div className={styles.card}>
      <img src={img} alt={name} />

      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevItem} />

        <FontAwesomeIcon icon={faChevronRight} onClick={handleNextItem} />
      </div>
      <button type="button" className="btn" onClick={handleRandomItem}>
        Surpirse Me
      </button>
    </div>
  );
}

export default Card;
