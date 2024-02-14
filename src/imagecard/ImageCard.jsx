import css from './ImageCard.module.css';

export const ImageCard = ({ image, handleClick }) => {
  return (
    <li onClick={() => handleClick(image.urls.regular, image.alt_description)}>
      <img className={css.box} src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};
