import styles from "./Category.module.scss";

function Category({ category, onSelect }: { category: string; onSelect: () => void }) {
  return (
    <button className={styles.btnCat} onClick={onSelect}>
      {category}
    </button>
  );
}

export default Category;
