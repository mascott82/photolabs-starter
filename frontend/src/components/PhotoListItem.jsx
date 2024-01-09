import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" key={props.photo.id}>
      <img src = {props.photo.imageSource} alt={`Photo by ${props.photo.username}`}/>
      <div className="photo-list__user-details">
        <h2>{props.photo.id}</h2>
        <p className="photo-list__user-location">{`Location: ${props.photo.location.city}, ${props.photo.location.country}`}</p>
        <div className="photo-list__user-info">
          <img src={props.photo.profile} alt={`Profile of ${props.photo.username}`} />
          <p>{`Upload by ${props.photo.username}`}</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
