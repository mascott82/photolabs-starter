import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([])
  
  const toggleFav = (photoId) => {
    setFavorites((prevFavorites) => [...prevFavorites, photoId])
  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics}/>
      <PhotoList photos={props.photos} handleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;
