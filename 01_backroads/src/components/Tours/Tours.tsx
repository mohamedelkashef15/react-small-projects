import SectionTitle from "../SectionTitle";
import styles from "./Tours.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { ITours } from "../interfaces";
import Tour1 from "../../images/tour-1.jpeg";
import Tour2 from "../../images/tour-2.jpeg";
import Tour3 from "../../images/tour-3.jpeg";
import Tour4 from "../../images/tour-4.jpeg";

const toursData: ITours[] = [
  {
    id: 1,
    img: Tour1,
    title: "Tibet Adventure",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: (
      <div>
        <FontAwesomeIcon icon={faMap} /> <span>China</span>
      </div>
    ),
    initialPrice: "From $2100",
    time: "6 Days",
    date: "August 26th, 2020",
  },
  {
    id: 2,
    img: Tour2,
    title: "Best Of Java",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: (
      <div>
        <FontAwesomeIcon icon={faMap} /> <span>Indonesia</span>
      </div>
    ),
    initialPrice: "From $1400",
    time: "11 Days",
    date: "August 1th, 2020",
  },
  {
    id: 3,
    img: Tour3,
    title: "Explore Hong Kong",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: (
      <div>
        <FontAwesomeIcon icon={faMap} /> <span>Hong Kong</span>
      </div>
    ),
    initialPrice: "From $5000",
    time: "8 Days",
    date: "September 15th, 2020",
  },
  {
    id: 4,
    img: Tour4,
    title: "Kenya Highlights",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: (
      <div>
        <FontAwesomeIcon icon={faMap} /> <span>Kenya</span>
      </div>
    ),
    initialPrice: "From $3300",
    time: "20 Days",
    date: "December 5th, 2019",
  },
];

function Tours() {
  return (
    <section id="tours" className={styles.tours}>
      <div className="container">
        <SectionTitle name1="FEATURED" name2="TOURS" />
        <Items />
      </div>
    </section>
  );
}

function Items() {
  return (
    <div className={styles.items}>
      {toursData.map((item) => {
        return (
          <Item
            key={item.id}
            img={item.img}
            date={item.date}
            title={item.title}
            content={item.content}
            location={item.location}
            initialPrice={item.initialPrice}
            time={item.time}
          />
        );
      })}
    </div>
  );
}

function Item({ img, date, title, content, location, initialPrice, time }: ITours) {
  return (
    <div className={styles.item}>
      <div className={styles.itemImg}>
        <img src={img} alt={title} />
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.itemContent}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.itemInfo}>
          <span>{location}</span>
          <span>{initialPrice}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Tours;
