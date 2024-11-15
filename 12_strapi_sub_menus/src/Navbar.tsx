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
          {sublinks.map((link) => {
            const { pageId, page } = link;
            return (
              <button key={pageId} onMouseEnter={() => setPageId(pageId)} onMouseLeave={() => setPageId(null)}>
                {page}
              </button>
            );
          })}
        </div>
        <button type="button" className="btn-bars" onClick={openSidebar}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
/*

In the Navbar, for now, set up a logo (h3) and a button to open the sidebar. Grab the openSidebar function from the global context. Optionally, you can install and set up an icon from react-icons in the toggle button. Add CSS for the Navbar.

*/
