// import toast from 'react-hot-toast';
import css from './Searchbar.module.css';
export const SearchBars = ({ onsearch }) => {
  const hundelbutton = event => {
    event.preventDefault();
    // if (event.target.elements.query.value.trim() === '') {
    //   toast.error('EMPTY STRING');

    //   return;
    // }
    onsearch(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={hundelbutton} className={css.form}>
        <input
          type="text"
          className={css.input}
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button_header} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
