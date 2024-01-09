import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavContext } from "./FavContext";

const PhotoListItem = (props) => {
  const { handleFav } = useFavContext()
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openModal = (photo) => {
    setSelectedPhoto(photo)
    props.setDisplayModal(true)
    console.log(photo)
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton handleFav={handleFav} photoId={props.photo.id}/>
      <img className="photo-list__image" src = {props.photo.urls.regular} alt={`Photo by ${props.photo.user.name}`}  onClick={() => openModal(props.photo)}/>
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
