import css from './ErrorMessage.module.css';
export const ErrorMessage = ({ errorText }) => {
  return (
    <div>
      <p className={css.error_message}>{errorText}</p>
    </div>
  );
};
