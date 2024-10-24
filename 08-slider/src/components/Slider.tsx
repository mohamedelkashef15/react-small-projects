import { useEffect, useState } from "react";
import { longList } from "../data";
import styles from "./Slider.module.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  function handleNext() {
    if (currentIndex < longList.length - 1) setCurrentIndex(currentIndex + 1);
    if (currentIndex === longList.length - 1) setCurrentIndex(0);
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(longList.length - 1);
  }

  useEffect(
    function () {
      const slideId = setInterval(() => {
        handleNext();
      }, 3000);

      return function () {
        clearInterval(slideId);
      };
    },
    [handleNext]
  );

  const { name, image, title, quote } = longList[currentIndex];
  return (
    <div className={styles.slider}>
      <div className="container">
        {/* {shortList.map((item) => {
          const { name, image, title, quote } = item;
          return (
            <div className={styles.item}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p className={styles.title}>{title}</p>
              <p className={styles.desc}>{quote}</p>
              <button type="button" className={styles.btnLeft}>
                <FaChevronLeft />
              </button>
              <button type="button" className={styles.btnRight}>
                <FaChevronRight />
              </button>
            </div>
          );
        })} */}

        <div className={styles.item}>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{quote}</p>
          <button type="button" className={styles.btnLeft} onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button type="button" className={styles.btnRight} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
