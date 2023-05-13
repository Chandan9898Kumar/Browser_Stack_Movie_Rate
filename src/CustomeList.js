import React from "react";

const CustomList = ({ data, setStoreData }) => {
  const handleRemoveItems = (event, ind) => {
    event.preventDefault();
    let removedData = data.filter((item, index) => index !== ind);
    setStoreData(removedData);
  };
  return (
    <>
      <div className="customList">
        <div className="textList">My Queue</div>
        <div className="customListOfMovies">
          {data &&
            data.map((item, ind) => {
              return (
                <div key={ind}>
                  <div>{item.Title}</div>
                  <img
                    src={item.Poster}
                    alt={item.Title}
                    width="60%"
                    height="50%"
                  />
                  <div>
                    <button onClick={(event) => handleRemoveItems(event, ind)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default CustomList;
