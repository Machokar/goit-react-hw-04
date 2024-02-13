import Modal from 'react-modal';
import css from './ImageModal.module.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
export const ImageModal = ({ image, alt_description, modalIsOpen, closeModal }) => {
  return (
    <Modal
      className={css.model}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={image} alt={alt_description} />
    </Modal>
  );
};
