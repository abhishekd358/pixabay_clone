import React from "react";
import "./ShowImages.css";

import { useContext } from "react";
import PixabayContext from "../Context/PixabayContext";
const ShowImages = () => {
  const { imageData, setQueryParam, fetchByCategory, categories}= useContext(PixabayContext);
  // create a variable for the state that contain the data



  return (
    <>
    

<div className="logo">
        <h1>PixabayClone</h1>
    </div>
     {/* creating NavBar */}
  <ul>

    {categories.map((category) => (
      <li key={category}>
        <a href={`#${category}`} onClick={() => fetchByCategory(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </a>
      </li>
    ))}
  </ul>




      {/* here we creatge input box for searching result based on query , it update  the queryParam using set method*/}
      {/* Search Box */}
      <div className="search-box">
        <input
          style={{ width: "800px" }}
          type="text"
          placeholder="Search Here"
          onChange={(e) => setQueryParam(e.target.value)}
        />
      </div>

      <div className="container">
        {imageData.map((data) => (
          <div key={data.id}>
            <div className="items">
              <img src={data.largeImageURL} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowImages;
