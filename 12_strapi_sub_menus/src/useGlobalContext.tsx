import { useContext } from "react";
import AppContext from "./Context";

function useGlobalContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("There is an Error occured");
  }

  return context;
}

export default useGlobalContext;
