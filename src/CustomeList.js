import React,{memo} from "react";

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
                    onClick={(event) => handleRemoveItems(event, ind)}
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
