import css from './ImageGallery.module.css';
import { ImageCard } from '../imagecard/ImageCard';

export const ImageGal = ({ pictures }) => {
  return (
    <ul className={css.box}>
      {pictures.map(pictures => (
        <li key={pictures.id}>
          <ImageCard pictures={pictures} />
        </li>
      ))}
    </ul>
  );
};
