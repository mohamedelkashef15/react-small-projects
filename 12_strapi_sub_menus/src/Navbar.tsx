import { FaBars } from "react-icons/fa";
import sublinks from "./data";
import useGlobalContext from "./useGlobalContext";

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();

  return (
    <div className="navbar">
      <nav>
        <h3>strapi</h3>
        <div className="nav-links">
          {sublinks.map((item) => {
            const { page, pageId } = item;
            return (
              <button key={pageId} onMouseEnter={() => setPageId(pageId)}>
                {page}
              </button>
            );
          })}
        </div>
        <button className="btn-bars" onClick={openSidebar}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
