import { IContent } from "../../interfaces";
import styles from "./content.module.scss";
import { v4 as uuidv4 } from "uuid";
function Content({ jobs, index }: IContent) {
  const { title, company, dates, duties } = jobs[index];

  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <p className={styles.company}>{company}</p>
      <p className={styles.dates}>{dates}</p>
      <ul>
        {duties.map((duty) => {
          const id = uuidv4();
          return <li key={id}>{duty}</li>;
        })}
      </ul>
    </div>
  );
}

export default Content;
