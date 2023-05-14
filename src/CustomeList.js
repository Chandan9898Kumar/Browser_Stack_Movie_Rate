import React from "react";

const CustomList = ({ data, setStoreData }) => {
  const handleRemoveItems = (event, ind) => {
    event.preventDefault();
    let removedData = data.filter((item, index) => index !== ind);
    setStoreData(removedData);
  };
  return (
    <>
        <div className="textList">My Queue</div>
        <div className="customListOfMovies">
          {data &&
            data.map((item, ind) => {
              return (
                <div
                className="imagesOfMovie"
                  key={ind}>
                  <div className="MovieTitles">{item.Title.slice(0,20)}</div>
                  <img
                  className="myMovieImage"
                    src={item.Poster}
                    alt={item.Title}
                    width="60%"
                    height="50%"
                  />
                  <div>
                    <button
                    className="removeButton"
                    onClick={(event) => handleRemoveItems(event, ind)}>
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
export default CustomList;
