import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { useFavContext } from "./FavContext";

const PhotoList = (props) => {
  const { handleFav } = useFavContext();

  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => (
        <PhotoListItem key={ photo.id + index } photo={ photo } handleFav={handleFav}/> 
      ))}
    </ul>
  );
};

export default PhotoList;
