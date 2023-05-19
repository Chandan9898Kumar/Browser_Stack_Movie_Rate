import React, { memo } from "react";

const CustomList = ({
  storeData,
  setStoreData,
  listOfMovies,
  setListOfMovies,
}) => {
  const handleRemoveItems = (event, ind, item) => {
    event.preventDefault();
    setListOfMovies(
      listOfMovies.map((movieItem, index) => {
        if (movieItem.imdbID === item.imdbID) {
          return { ...movieItem, disabled: false };
        } else {
          return movieItem;
        }
      })
    );
    setStoreData(storeData.filter((item, index) => index !== ind));
  };
  return (
    <>
      <div className="textList">My Queue</div>
      <div className="customListOfMovies">
        {storeData &&
          storeData.map((item, ind) => {
            return (
              <div className="imagesOfMovie" key={ind}>
                <div className="MovieTitles">{item.Title.slice(0, 20)}</div>
                <img
                  className="myMovieImage"
                  src={item.Poster}
                  alt={item.Title}
                  width="60%"
                  height="50%"
                />
                <div className="starsInCustomList">
                  {[...Array(item.starCount)].map((item, index) => {
                    return <p key={index}>⭐</p>;
                  })}
                </div>
                <div>
                  <button
                    className="removeButton"
                    onClick={(event) => {
                      handleRemoveItems(event, ind, item);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default memo(CustomList);
