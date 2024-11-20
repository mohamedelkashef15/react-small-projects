import { useContext } from "react";
import AppContext from "./Context";

function useGlobalContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("There are an Error while fetching data");
  }
  return context;
}

export default useGlobalContext;
