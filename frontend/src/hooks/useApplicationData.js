import { useReducer } from 'react'

const initialState = {
  photos: [],
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        photos: state.photos.map(photo => 
          photo.id === action.payload ? { ...photo, favorite: true } : photo),
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        photos: state.photos.map(photo => 
          photo.id === action.payload ? { ...photo, favorite: false } : photo),
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      }
    default:
      return state
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
  }

  const removeFavorite = (photoId) => {
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
  }

  const selectedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoId })
  }

  const setPhotoDate = (newPhotoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: newPhotoData })
  }

  return {
    state,
    addFavorite,
    removeFavorite,
    selectedPhoto,
    setPhotoDate
  }
}

export default useApplicationData