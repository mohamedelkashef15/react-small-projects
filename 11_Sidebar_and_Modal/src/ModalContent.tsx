import { FaXmark } from "react-icons/fa6";

function ModalContent({ handleModalClick }: { handleModalClick: () => void }) {
  return (
    <div className="modal-content">
      <h2>Modal Content</h2>
      <button type="button" className="btn-xmark" onClick={handleModalClick}>
        <FaXmark />
      </button>
    </div>
  );
}
export default ModalContent;
