import css from './ImageGallery.module.css';
import { ImageCard } from '../imagecard/ImageCard';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.box}>
      {images.map(images => (
        <ImageCard image={images} key={images.id} />
      ))}
    </ul>
  );
};
