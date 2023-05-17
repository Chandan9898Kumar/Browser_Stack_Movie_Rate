import "./styles.css";
import React, { useState } from "react";
import MovieList from "./MoviesList";
import movieImg from "./Assets/movie.jpg";
export default function App() {
  const [condition, setCondition] = useState(false);
  return (
    <div className={!condition ? "App" : "AppTwo"}>
      <div className="movieHeading">Welcome to Movie Zone</div>
      {condition && <MovieList />}
      {!condition && (
        <>
          <div className="movieImage">
            <img src={movieImg} alt={"movie"} />
          </div>

          <div className={"buttonOnDiv"}>
            <button
              className="mainPageButton"
              onClick={(event) => {
                setCondition(true);
              }}
            >
              Fetch Movies
            </button>
          </div>
        </>
      )}
    </div>
  );
}
