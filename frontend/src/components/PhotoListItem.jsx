import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" key={props.photo.id}>
      <img src = {props.photo.imageSource} alt={`Photo by ${props.photo.username}`}/>
      <div className="PhotoDetail">
        <h2>{props.photo.id}</h2>
        <p>{`Location: ${props.photo.location.city}, ${props.photo.location.country}`}</p>
        <div className="UserInfo">
          <img src={props.photo.profile} alt={`Profile of ${props.photo.username}`} />
          <p>{`Upload by ${props.photo.username}`}</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
