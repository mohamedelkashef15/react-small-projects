import { FaXmark } from "react-icons/fa6";
import { FaCalendarAlt, FaCalendar, FaFolderOpen, FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="heading">
        <h2>
          Mohamed <span className="text-primary"> Elkashef</span>
        </h2>
        <button className="btn" type="button">
          <FaXmark />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <FaHome />
            <a href="#">Home</a>
          </li>
          <li>
            <HiUsers />
            <a href="#">Team</a>
          </li>
          <li>
            <FaFolderOpen />
            <a href="#">Project</a>
          </li>
          <li>
            <FaCalendar />
            <a href="#">Calender</a>
          </li>
          <li>
            <FaCalendarAlt />
            <a href="#">Documents</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
