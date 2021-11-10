import React, { useRef } from "react";
import { searchMovie } from "../../api/movies";

const Search = (props) => {
  const keyWord = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await searchMovie(keyWord.current.value);
    if (data.Response === "True") {
      props.setMovies(data);
      props.setErrorMessage("");
    } else {
      props.setErrorMessage(data.Error);
    }
  };
  return (
    <>
      <form className="search">
        <input type="text" ref={keyWord} />
        <input
          type="submit"
          onClick={(event) => onSubmit(event)}
          value={"SEARCH"}
        />
      </form>
    </>
  );
};

export default Search;
