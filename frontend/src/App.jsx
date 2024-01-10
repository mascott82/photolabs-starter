import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import { FavProvider } from 'components/FavContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null)
  const [favorites, setFavorites] = useState([])

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const openModal = (photo) => {
    setSinglePhotoDetail(photo)
    setDisplayModal(true)
  }
  return (
    <div className="App">
      <FavProvider>
        <HomeRoute 
          topics={topics} 
          photos={state.photoData} 
          setDisplayModal={setDisplayModal} 
          openModal={openModal} 
          favorites={favorites}
          setFavorites={setFavorites}
        />
        {displayModal && (
          <PhotoDetailsModal 
            setDisplayModal={setDisplayModal} 
            displayModal={displayModal}
            singlePhotoDetail={singlePhotoDetail}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </FavProvider>
    </div>
  )
}

export default App
