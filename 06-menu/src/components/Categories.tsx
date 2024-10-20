import styles from "./Categories.module.scss";
function Categories() {
  return (
    <div className={styles.categories}>
      <button className={styles.btnCat}>All</button>
      <button className={styles.btnCat}>Breakfast</button>
      <button className={styles.btnCat}>Lunch</button>
      <button className={styles.btnCat}>Shakes</button>
    </div>
  );
}

export default Categories;
