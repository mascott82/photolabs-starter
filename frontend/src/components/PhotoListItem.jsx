import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavContext } from "./FavContext";

const PhotoListItem = (props) => {
  const { handleFav } = useFavContext()

  const handlePhotoClick = () => {
    props.openModal(props.photo)
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton handleFav={handleFav} photoId={props.photo.id}/>
      <img className="photo-list__image" src = {props.photo.urls.regular} alt={`Photo by ${props.photo.user.name}`}  onClick={handlePhotoClick}/>
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <div className="photo-list__user-profile-info">
            <img className="photo-list__user-profile" src={props.photo.user.profile} alt={`Profile of ${props.photo.user.name}`} />
            <div>{props.photo.user.name}</div>
          </div>
          <div className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</div>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
