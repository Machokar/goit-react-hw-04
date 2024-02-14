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
export const ImageModal = ({ image, altText, modalIsOpen, closeModal }) => {
  if (image === '') {
    console.log('Error');
    return;
  }
  return (
    <Modal
      className={css.area}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={image} alt={altText} />
    </Modal>
  );
};
