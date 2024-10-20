import Category from "./Categories";
import styles from "./Menu.module.scss";
import MenuItems from "./MenuItems";
import Title from "./Title";

function Menu() {
  return (
    <section className={styles.menu}>
      <Title />
      <Category />
      <MenuItems />
    </section>
  );
}

export default Menu;
