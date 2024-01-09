import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="PhotoListItem" key={props.id}>
      <img src = {props.imageSource} alt={`Photo by ${props.username}`}/>
      <div className="PhotoDetail">
        <h2>{props.id}</h2>
        <p>{`Location: ${props.city}, ${props.country}`}</p>
        <div className="UserInfo">
          <img src={props.profile} alt={`Profile of ${props.username}`} />
          <p>{`Upload by ${props.username}`}</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
