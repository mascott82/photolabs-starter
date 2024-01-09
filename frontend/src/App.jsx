import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import { FavProvider } from 'components/FavContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false)
  return (
    <div className="App">
      <FavProvider>
        <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal}/>
        {displayModal && <PhotoDetailsModal />}
      </FavProvider>
    </div>
  )
}

export default App
