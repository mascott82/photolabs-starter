import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleIconClick = () => {
    setIsFavorited(prevIsFavorited => !prevIsFavorited)
    props.handleFav(props.photoId)
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