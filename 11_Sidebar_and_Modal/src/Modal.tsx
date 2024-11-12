import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./useGlobalContext";

function Modal() {
  const { closeModal, isModalOpen } = useGlobalContext();

  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </div>
  );
}

export default Modal;
