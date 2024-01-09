import React, { useCallback, useState } from 'react'

import FavIcon from './FavIcon'
import '../styles/PhotoFavButton.scss'
import { useFavContext } from './FavContext'

function PhotoFavButton(props) {
  const { favorites, handleFav } = useFavContext()
  let isFavorited = favorites.includes(props.photoId) ? true : false

  const handleIconClick = () => {
    handleFav(props.photoId)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        {isFavorited ? <FavIcon selected={isFavorited}/> : <FavIcon />}
      </div>
    </div>
  )
}

export default PhotoFavButton;