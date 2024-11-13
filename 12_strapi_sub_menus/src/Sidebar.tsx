import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./useGlobalContext";
import sublinks from "./data";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-container">
        <button type="button" className="btn-close" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <div key={pageId}>
                <h3>{page}</h3>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, icon, label, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

/*
  In the Sidebar component, import sublinks from data.jsx, iterate over the list, and display links in the component. Set up the Sidebar CSS. Use the isSidebarOpen and closeSidebar functions from the global context to show/hide the sidebar.
*/
