function ModalBtn({ handleModalClick }: { handleModalClick: () => void }) {
  return (
    <button type="button" className="modal-btn" onClick={handleModalClick}>
      Show Modal
    </button>
  );
}

export default ModalBtn;
