import { Audio } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div>
      <Audio
        height="40"
        width="40"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
