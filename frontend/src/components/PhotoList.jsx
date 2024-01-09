import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <PhotoListItem key={ photo.id + index } photo={ photo } /> 
      ))}
    </ul>
  );
};

export default PhotoList;
