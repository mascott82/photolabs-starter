import { useState } from 'react'

const useApplicationData = () => {
  const [state, setState] = useState({
    favPhotoIds: [],
    selectedPhoto:  null,
    isPhotoDetailsModalOpen:  false,
  })

  const updateToFavPhotoIds = (newFavPhotoIds) => {
    setState((prev) => ({...prev, favPhotoIds: newFavPhotoIds}))
  }

  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }))
  }

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, isPhotoDetailsModalOpen: false }))
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  }
}

export default useApplicationData