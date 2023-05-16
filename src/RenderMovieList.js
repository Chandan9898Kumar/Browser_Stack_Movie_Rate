import React, { useState, useEffect, memo } from "react";
import "./styles.css";
const RenderListOfMovies = ({ item, key, storeData, setStoreData }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="ChildRenderMovie">
      <div className="movieTitle">{item.Title}</div>
      <div className="imageOfMovie">
        <img src={item.Poster} alt={item.Title} width="100%" height="400" />
      </div>

      <div className="buttonStar">
        <button
          className="buttonIncDec"
          onClick={(event) => {
            event.preventDefault();
            if (count > 0) {
              setCount((count) => count - 1);
            }
          }}
        >
          -
        </button>
        {[...Array(count)].map((item, index) => {
          return <p key={index}>⭐</p>;
        })}
        <button
          className="buttonIncDec"
          onClick={(event) => {
            event.preventDefault();
            if (count < 5) {
              setCount((count) => count + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <div>
        <div className="buttonToAdd">
          <button
            disabled={""}
            className="addingMovie"
            onClick={(event) => {
              setStoreData([
                ...storeData,
                { ...item, starCount: count, disabled: true },
              ]);
            }}
          >
            Add To Queue
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(RenderListOfMovies);
