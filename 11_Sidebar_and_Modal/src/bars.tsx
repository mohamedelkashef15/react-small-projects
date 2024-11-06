import { FaBars } from "react-icons/fa6";
import { CrossContext } from "./App";
import { useContext } from "react";

export function Bars() {
  const { isActive, setIsActive } = useContext(CrossContext);
  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div className="bars" onClick={handleClick}>
      <FaBars />
    </div>
  );
}
