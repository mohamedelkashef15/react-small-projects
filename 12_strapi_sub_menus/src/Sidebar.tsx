import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./useGlobalContext";
import sublinks from "./data";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-container">
        <button className="btn-close" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { page, pageId, links } = item;
            return (
              <article key={pageId}>
                <h3>{page}</h3>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { icon, id, label, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
