import React, { useState, useEffect } from "react";
import CustomList from "./CustomeList";
import "./styles.css";
import RenderListOfMovies from "./RenderMovieList";
const URL = "https://www.omdbapi.com/?s=action&apikey=4640ef30&page=1";

const MovieList = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => setListOfMovies(result.Search));
  };

  return (
    <>
      <div className="headContainer">
        {listOfMovies &&
          listOfMovies.map((item, index) => {
            return (
              <div className="renderMovies">
                <RenderListOfMovies item={item} index={index} />
                <div className="buttonToAdd">
                <button
                className="addingMovie"
                  onClick={(event) => {
                    setStoreData([...storeData, item]);
                  }}
                >
                  Add To Queue
                </button>
                </div>
              </div>
            );
          })}
        {storeData && storeData.length > 0 && (
          <CustomList data={storeData} setStoreData={setStoreData} />
        )}
      </div>
    </>
  );
};
export default MovieList;
