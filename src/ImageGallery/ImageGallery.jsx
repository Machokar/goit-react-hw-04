import css from './ImageGallery.module.css';
import { ImageCard } from '../imagecard/ImageCard';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.box}>
      {pictures.map(pictures => (
        <ImageCard pictures={pictures} key={pictures.id} />
      ))}
    </ul>
  );
};
