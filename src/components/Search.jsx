import { useState } from "react";

const Search = ({ setSearchTerm }) => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

  const handleChange = (event) => {
    setCurrentSearchTerm(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(currentSearchTerm);
    setCurrentSearchTerm("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <label
        htmlFor="search-term"
        className="input input-bordered flex items-center gap-2"
      >
        <input
          id="search-term"
          type="text"
          className="grow"
          placeholder="Search here ..."
          onChange={handleChange}
          value={currentSearchTerm}
        />
        <button
          type="submit"
          className="btn btn-wide btn-primary absolute right-12 input-bordered rounded-l-none"
        >
          Search
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
};

export default Search;
