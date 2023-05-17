import React, { memo } from "react";

const CustomList = ({ data, setStoreData, listOfMovies, setListOfMovies }) => {
  const handleRemoveItems = (event, ind) => {
    event.preventDefault();
    let removedData = data.filter((item, index) => index !== ind);
    setStoreData(removedData);

    // if(removedData&&removedData.length===0){
    //   return
    // }
    // let s=listOfMovies.map((item)=>{
    //   return removedData.map((removeItem)=>{
    //     if (item.imdbID !== removeItem.imdbID) {
    //       return { ...item, disabled: false };
    //     }
    //     return item;
    //   })

    // })
    // console.log(s,'array >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    // // setListOfMovies(array)
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
                    onClick={(event) => {
                      handleRemoveItems(event, ind);
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
