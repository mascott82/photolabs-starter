import React, { useEffect } from 'react'

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg'
import PhotoList from 'components/PhotoList'
import PhotoFavButton from 'components/PhotoFavButton'
import { useFavContext } from 'components/FavContext'

const PhotoDetailsModal = (props) => {
  const { handleFav } = useFavContext()

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
      <div className="photo-details-modal__image">
        <PhotoFavButton handleFav={handleFav} photoId={props.singlePhotoDetail.id}/>
        <img src={props.singlePhotoDetail.urls.full} alt="photo detail" />
        <div className="photo-details-modal__header">
          <div className="photo-list__user-info">
            <div className="photo-list__user-profile-info">
              <img className="photo-list__user-profile" src={props.singlePhotoDetail.user.profile} alt={`Profile of ${props.singlePhotoDetail.user.name}`} />
              <div>{props.singlePhotoDetail.user.name}</div>
            </div>
            <div className="photo-list__user-location">{`${props.singlePhotoDetail.location.city}, ${props.singlePhotoDetail.location.country}`}</div>
          </div>
        </div>
      </div>
      <div className='photo-details-modal__images'>
        <h3>Similar Photos</h3>
        <PhotoList photos={props.singlePhotoDetail.similar_photos} />
      </div>
    </div>
  )
}

export default PhotoDetailsModal
