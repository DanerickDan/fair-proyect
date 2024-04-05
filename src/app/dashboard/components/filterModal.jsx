import Modal from "react-modal";
import FilterComponent from "../components/filterComponent";

function FilterModal({ isOpen, onRequestClose, filters, onFilterChange }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filter Modal"
    >
      <FilterComponent filters={filters} onFilterChange={onFilterChange} />
      <button onClick={onRequestClose}>Cerrar Modal</button>
    </Modal>
  );
}

export default FilterModal;
