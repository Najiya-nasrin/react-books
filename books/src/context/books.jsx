import { useState, createContext } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const createBook = async (newBook) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: newBook,
    });

    console.log("response", response.data);
    setBooks([...books, response.data]);
  };

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    console.log("response =>", response.data);
    setBooks(response.data);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = async (editedBook) => {
    const response = await axios.put(
      `http://localhost:3001/books/${editedBook.id}`,
      {
        title: editedBook.title,
      }
    );
    setBooks(
      books.map((book) =>
        book.id === editedBook.id ? { ...book, ...response.data } : book
      )
    );
  };

  return <BooksContext.Provider value={{ books, fetchBooks, handleDelete, handleEdit, createBook }}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
