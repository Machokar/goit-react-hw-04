import { ImageModal } from '../Imagem/ImageModal';
import { useState } from 'react';
import css from './ImageCard.module.css';
export const ImageCard = ({ pictures }) => {
  const [showModal, setShowModal] = useState(false);
  const button = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <div>
      <img
        onClick={button}
        className={css.box}
        src={pictures.urls.small}
        alt={pictures.alt_description}
      />

      <ImageModal image={pictures.urls.regular} modalIsOpen={showModal} closeModal={button} />
    </div>
  );
};
