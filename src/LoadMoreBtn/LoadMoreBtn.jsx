import css from './LoadMoreBtn.module.css';
export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={css.onLoadMore}>
        Load more
      </button>
    </div>
  );
};
