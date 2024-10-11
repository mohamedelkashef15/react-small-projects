import { IServicesItem } from "../interfaces";
import SectionTitle from "../SectionTitle";
import styles from "./Services.module.scss";
import { servicesData } from "../../data";

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <SectionTitle name1="OUR" name2="SERVICES" />
        <Items />
      </div>
    </section>
  );
}

function Items() {
  return (
    <div className={styles.items}>
      {servicesData.map((item) => {
        return <Item icon={item.icon} heading={item.heading} content={item.content} key={item.id} />;
      })}
    </div>
  );
}

function Item({ icon, heading, content }: IServicesItem) {
  return (
    <div className={styles.item}>
      {icon}
      <div className="itemContent">
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Services;
