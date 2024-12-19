import { useState } from "react";

export default function BookEdit({ book, editTitle }) {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editTitle(updatedTitle);
    setUpdatedTitle("");
  };

  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleFormSubmit}>
        <input
          className="input"
          value={updatedTitle}
          type="text"
          onChange={handleChange}
        />
        <button className="button is-primary"> Save </button>
      </form>
    </div>
  );
}
