import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleIconClick = () => {
    setIsFavorited(isFavorited ? false : true)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        {isFavorited ? <FavIcon selected={true}/> : <FavIcon />}
      </div>
    </div>
  )
}

export default PhotoFavButton;