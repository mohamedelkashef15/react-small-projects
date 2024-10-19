import { useState } from "react";
import { IQuestion } from "../interfaces";
import styles from "./Question.module.scss";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

function Question({ title, info }: IQuestion) {
  const [isExtended, setIsExtended] = useState(false);

  function hadnleToggle() {
    setIsExtended(!isExtended);
  }

  return (
    <div className={styles.question}>
      <div className={styles.title} onClick={hadnleToggle}>
        <h2>{title}</h2>
        <button className={styles.btn}>{isExtended ? <FaCircleMinus /> : <FaCirclePlus />}</button>
      </div>
      {isExtended ? <p>{info}</p> : ""}
    </div>
  );
}

export default Question;
