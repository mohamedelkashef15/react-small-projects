import { useEffect, useState } from "react";
import styles from "./Tours.module.scss";
import Loading from "./Loading";
import Tour from "./Tour";
import { ITour } from "../interfaces";
import NoTours from "./NoTours";

const url = "https://www.course-api.com/react-tours-project";
function Tours() {
  const [tours, setTours] = useState<ITour[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteItem(id: string) {
    setTours(tours.filter((tour: ITour) => tour.id !== undefined && tour.id !== id));
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <NoTours fetchData={fetchData} />;
  }

  return (
    <section className={styles.tours}>
      <div className="container">
        <h1>Our Tours</h1>
        <div className={styles.lineThrough}></div>
        <div className={styles.row}>
          {tours.map((tour: ITour) => {
            return (
              <Tour
                key={tour.id}
                id={tour.id}
                name={tour.name}
                info={tour.info}
                image={tour.image}
                price={tour.price}
                onDeleteItem={handleDeleteItem}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tours;
