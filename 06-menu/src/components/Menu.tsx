import { useState } from "react";
import Category from "./Category";
import styles from "./Menu.module.scss";
import Title from "./Title";
import menuData from "../data";

const categories = ["All", "Breakfast", "Lunch", "Shakes"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategory =
    selectedCategory === "All" ? menuData : menuData.filter((menu) => selectedCategory === menu.category);

  /*
    for example if selectedCategory equals "shakes"
    then we will loop through menuData and check if shakes equals menu.category then condition will be true and it will be added to "filteredCategory"
  */
  return (
    <section className={styles.menu}>
      <Title />

      <div className={styles.categories}>
        {categories.map((category) => {
          return <Category key={category} category={category} onSelect={() => setSelectedCategory(category)} />;
        })}
      </div>
      <div className="container">
        <div className={styles.menuItems}>
          <div className={styles.row}>
            {filteredCategory.map((item) => {
              return (
                <div className={styles.item}>
                  <img src={item.img} alt={item.title} />
                  <div className={styles.itemContent}>
                    <h3>
                      {item.title} <span>{item.price}</span>
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
