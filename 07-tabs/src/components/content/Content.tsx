import { IContent } from "../../interfaces";
import styles from "./content.module.scss";

function Content({ jobs, index }: IContent) {
  const { title, company, dates, duties, order, id } = jobs[index];

  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <p className={styles.company}>{company}</p>
      <p className={styles.dates}>{dates}</p>
      <ul>
        {duties.map((duty, i) => {
          return <li key={i}>{duty}</li>;
        })}
      </ul>
    </div>
  );
}

export default Content;
