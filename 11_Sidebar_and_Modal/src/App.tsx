import { createContext, useState } from "react";
import { Bars } from "./bars";
import Sidebar from "./Sidebar";
import ModalContent from "./ModalContent";
import ModalBtn from "./ModalBtn";

export interface IActive {
  isActive: boolean;
  setIsActive: (val: boolean) => void;
}

type CrossContextType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CrossContext = createContext<CrossContextType>({
  isActive: false,
  setIsActive: () => {},
});

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleModalClick() {
    setShowModal(!showModal);
  }

  return (
    <CrossContext.Provider value={{ isActive, setIsActive }}>
      <main>
        {isActive ? <Sidebar /> : <Bars />}

        <div className="modal">
          {showModal ? (
            <ModalContent handleModalClick={handleModalClick} />
          ) : (
            <ModalBtn handleModalClick={handleModalClick} />
          )}
        </div>
      </main>
    </CrossContext.Provider>
  );
}

export default App;
