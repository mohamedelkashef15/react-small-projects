import { useState } from "react";
import styles from "./Categories.module.scss";
import Category from "./Category";

const categories = ["All", "Breakfast", "Lunch", "Shakes"];

function Categories() {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return <Category key={category} category={category} onSelect={() => setSelectedCategory(category)} />;
      })}
    </div>
  );
}

export default Categories;
