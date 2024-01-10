import { useReducer, useEffect } from 'react'

const initialState = {
  photos: [],
  displayModal: false,
  photoData: [],
  topicData: []
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
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
        photoData: action.payload,
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      }
    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        displayModal: true,
      }
    case ACTIONS.HIDE_MODAL:
      return {
        ...state,
        displayModal: false,
      }
    default:
      return state
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, [])

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
      .catch(error => {
        console.error('Error fetching photos by topic: ', error)
      });
  }

  const addFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
  }

  const removeFavorite = (photoId) => {
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
  }

  const selectedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoId })
  }

  const setPhotoData = (newPhotoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: newPhotoData })
  }

  const setTopicData = (newTopicData) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: newTopicData })
  }

  const showModal = () => {
    dispatch({ type: ACTIONS.SHOW_MODAL })
  }

  const hideModal = () => {
    dispatch({ type: ACTIONS.HIDE_MODAL })
  }

  return {
    state,
    addFavorite,
    removeFavorite,
    selectedPhoto,
    setPhotoData,
    setTopicData,
    showModal,
    hideModal,
    fetchPhotosByTopic,
  }
}

export default useApplicationData