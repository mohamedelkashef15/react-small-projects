import menu from "../data";
import MenuItem from "./MenuItem";
import styles from "./MenuItems.module.scss";

function MenuItems() {
  return (
    <div className={styles.menuItems}>
      <div className="container">
        <div className={styles.row}>
          {menu.map((item) => {
            return <MenuItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
