import BookShow from "./BookShow";

export default function BookList({ books, handleDelete, onEdit }) {
  const onDelete = (id) => {
    handleDelete(id);
  };

  const handleEdit = (book) => {
    onEdit(book);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
