import React, { useState, useEffect } from "react";
import CustomList from "./CustomeList";
import "./styles.css";
import RenderListOfMovies from "./RenderMovieList";
const URL = "https://www.omdbapi.com/?s=action&apikey=4640ef30&page=1";

const MovieList = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [storeData, setStoreData] = useState([]);
  let [newListOfMovies, setNewListOfMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        setNewListOfMovies(
          result.Search.map((item) => {
            return { ...item, disabled: false };
          })
        );
        setListOfMovies(
          result.Search.map((item) => {
            return { ...item, disabled: false };
          })
        );
      });
  };

  return (
    <>
      <div className="headContainer">
        {listOfMovies &&
          listOfMovies.map((item, index) => {
            return (
              <div className="renderMovies">
                <RenderListOfMovies
                  item={item}
                  index={index}
                  storeData={storeData}
                  setStoreData={setStoreData}
                  listOfMovies={listOfMovies}
                  setListOfMovies={setListOfMovies}
                />
              </div>
            );
          })}
        <br />
        <div className="customMovieList">
          {storeData && storeData.length > 0 && (
            <CustomList
              storeData={storeData}
              setStoreData={setStoreData}
              listOfMovies={listOfMovies}
              setListOfMovies={setListOfMovies}
              newListOfMovies={newListOfMovies}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default MovieList;
