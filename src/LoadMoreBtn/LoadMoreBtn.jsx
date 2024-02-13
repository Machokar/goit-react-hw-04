import css from './LoadMoreBtn.module.css';
export const LoadMoreBtn = ({ loadmaor }) => {
  return (
    <div>
      <button onClick={loadmaor} className={css.loadmorebutton}>
        Load more
      </button>
    </div>
  );
};
