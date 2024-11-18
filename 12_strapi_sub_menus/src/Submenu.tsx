import sublinks from "./data";
import useGlobalContext from "./useGlobalContext";

function Submenu() {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  console.log(currentPage);
  return (
    <div className="submenu">
      <h3>{currentPage?.page}</h3>
      <div
        className="submenu-links"
        style={{
          display: "grid",
          gridTemplateColumns: `${currentPage && currentPage?.links.length > 3 ? "1fr 1fr" : "1fr"}`,
        }}
      >
        {currentPage?.links.map((link) => {
          const { icon, id, label, url } = link;
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
