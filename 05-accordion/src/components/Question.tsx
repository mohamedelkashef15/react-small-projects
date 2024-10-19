import { useState } from "react";
import { IQuestion } from "../interfaces";
import styles from "./Question.module.scss";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

function Question({ id, title, info }: IQuestion) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const isActive = activeId === id;

  function handleActiveId(id: number) {
    const newActiveId = isActive ? null : id;
    setActiveId(newActiveId);
  }

  return (
    <div className={styles.question}>
      <div className={styles.title} onClick={() => id !== undefined && handleActiveId(id)}>
        <h2>{title}</h2>
        <button className={styles.btn}>{isActive ? <FaCircleMinus /> : <FaCirclePlus />}</button>
      </div>
      {isActive && <p>{info}</p>}
    </div>
  );
}

export default Question;
