import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./components/Slider.module.scss";
import { list } from "./data";

function Slider2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, name, image, title, quote } = person;
          return (
            <div className={styles.slider} key={id}>
              <div className={styles.item}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{quote}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Slider2;
