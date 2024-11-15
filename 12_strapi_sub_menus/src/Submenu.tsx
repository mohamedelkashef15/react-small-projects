import sublinks from "./data";
import useGlobalContext from "./useGlobalContext";

function Submenu() {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  console.log(currentPage);

  return (
    currentPage && (
      <div className="submenu">
        <h3>{currentPage?.page}</h3>
        <div
          className="submenu-links"
          style={{
            display: "grid",
            gridTemplateColumns: `${currentPage && currentPage?.links.length > 3 ? "1fr 1fr" : "1fr"}`,
          }}
        >
          {currentPage &&
            currentPage?.links.map((link) => {
              const { icon, id, label, url } = link;
              return (
                <a href={url} key={id}>
                  {icon} {label}
                </a>
              );
            })}
        </div>
      </div>
    )
  );
}

export default Submenu;

/*
Set up a Submenu component with some general CSS. In the global context, set up a pageId with a default value of null and make it available in the app. In the NavLinks component, once the user moves the mouse over the link, set the pageId with the specific page ID. In the Submenu component, grab the pageId from the global context. Based on that ID, get the specific page from sublinks and render the page and links in the submenu. Add CSS to the Submenu component.
*/

/*

    <div className="submenu">
      <h3>{currentPage?.page}</h3>
      <div
        className="submenu-links"
        style={{
          display: "grid",
          gridTemplateColumns: `${currentPage && currentPage?.links.length > 3 ? "1fr 1fr" : "1fr"}`,
        }}
      >
        {currentPage &&
          currentPage?.links.map((link) => {
            const { icon, id, label, url } = link;
            return (
              <a href={url} key={id}>
                {icon} {label}
              </a>
            );
          })}
      </div>
    </div>

*/
