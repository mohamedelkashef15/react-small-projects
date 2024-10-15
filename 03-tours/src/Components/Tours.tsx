import { useEffect, useState } from "react";
import styles from "./Tours.module.scss";
import Tour from "./Tour";
import { ITour } from "../interfaces";

const url = "https://www.course-api.com/react-tours-project";
function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(function () {
    async function getTours() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
      } catch (err) {
        alert(`There are an error while fetching data ${err}`);
      }
    }

    getTours();
  }, []);

  function handleDeleteItems(id: string) {
    setTours(tours.filter((tour: ITour) => tour.id !== id));
  }

  return (
    <section className={styles.tours}>
      <div className="container">
        <h1>Our Tours</h1>
        <span className="line"></span>
        <div className={styles.row}>
          {tours.map((tour: ITour) => {
            return (
              <Tour
                id={tour.id}
                key={tour.id}
                image={tour.image}
                info={tour.info}
                name={tour.name}
                price={tour.price}
                deleteItem={handleDeleteItems}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tours;
