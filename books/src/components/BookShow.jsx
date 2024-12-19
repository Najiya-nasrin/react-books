import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteBook = () => {
    onDelete(book.id);
  };

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const editTitle = (title) => {
    onEdit({ id: book.id, title });
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? <BookEdit book={book} editTitle={editTitle} /> : book.title}
      <div className="actions">
        <button className="delete" onClick={deleteBook}>
          Delete
        </button>
        <button className="edit" onClick={toggleShowEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}
