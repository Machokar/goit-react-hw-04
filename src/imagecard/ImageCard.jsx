import { useState } from 'react';
import css from './ImageCard.module.css';
import Modal from 'react-modal';
export const ImageCard = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(prevModal => !prevModal);
  };
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
  if (image === '') {
    console.log('Error');
    return;
  }
  Modal.setAppElement('#root');
  return (
    <li>
      <img
        onClick={handleClick}
        className={css.box}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <Modal
        className={css.area}
        isOpen={showModal}
        onRequestClose={handleClick}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </li>
  );
};
