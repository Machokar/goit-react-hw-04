export const ImageGal = ({ pictures }) => {
  return (
    <ul>
      {pictures.map((pictures) => (
        <li key={pictures.id}>
          <img
            src={pictures.urls.small}
            alt={pictures.description}
            width="300px"
          />
        </li>
      ))}
    </ul>
  );
};
