import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  useEffect(() => {
    props.singlePhotoDetail && console.log('Single Photo Detail: ', props.singlePhotoDetail)
  }, [props.singlePhotoDetail])

  const closeModal = () => {
    props.setDisplayModal(false)
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
