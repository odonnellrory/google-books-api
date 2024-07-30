import axios, { isCancel, AxiosError } from "axios";
import { useState, useEffect } from "react";
import ErrorCard from "./ErrorCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // fetch books from google API
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => {
        setBooks(response.data.items || []);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);

        // Error Handling
        if (error.response) {
          // request is made, server gives us status code, anything outside of 200s is an error
          setError(`Server error: ${error.response.status}`);
        } else if (error.request) {
          //request is made and no status code is recieved
          setError("No response received from server");
        } else {
          // anything else goes here
          setError(`Error: ${error.message}`);
        }
        console.error("Error fetching books:", error);
      });
  }, [searchTerm]);

  if (error) {
    // show error card
    return <ErrorCard message={error} />;
  }

  //setError changes the message in the error card and sets isError to true, which makes the ErrorCard display with this message
  if (searchTerm !== "cats" && books.length === 0) {
    setError("No Books Found");
  }

  return (
    <section
      ref={ref}
      className="grid gap-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {books.map((book, index) => (
        <motion.div
          className="card card-compact bg-base-100 w-96 shadow-xl"
          key={book.id}
          // book card animation
          initial={{ opacity: 0, y: 50, rotateY: 50 }}
          animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
        >
          <figure>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={`Book Cover for ${book.volumeInfo.title}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href={book.volumeInfo.infoLink}>View on Google Books</a>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default BookList;
