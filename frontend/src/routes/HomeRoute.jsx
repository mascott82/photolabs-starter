import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useFavContext } from 'components/FavContext';

const HomeRoute = (props) => {
  const { favorites, handleFav } = useFavContext();
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favorites={favorites}/>
      <PhotoList photos={props.photos} />
    </div>
  );
};

export default HomeRoute;
