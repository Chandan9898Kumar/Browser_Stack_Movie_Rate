import "./styles.css";
import React, { useState } from "react";
import MovieList from "./MoviesList";
export default function App() {
  const [condition, setCondition] = useState(false);
  return (
    
    <div className={!condition ? "App" : "AppTwo"}>
      {!condition && (
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
      )}
      {condition && <MovieList />}
    </div>
  );
}
