import toast from "react-hot-toast";

export const SearchBars = ({ onsearch }) => {
  const hundelbutton = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING");

      return;
    }
    onsearch(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={hundelbutton}>
        <input
          type="text"
          autocomplete="off"
          name="query"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
