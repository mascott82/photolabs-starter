import { useReducer } from 'react'

const initialState = {
  photos: [],
}

const ADD_FAVORITE = 'ADD_FAVORITE'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        photos: state.photos.map(photo => 
          photo.id === action.payload ? { ...photo, favorite: true } : photo),
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        photos: state.photos.map(photo => 
          photo.id === action.payload ? { ...photo, favorite: false } : photo),
      }
    default:
      return state
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFavorite = (photoId) => {
    dispatch({ type: ADD_FAVORITE, payload: photoId })
  }

  const removeFavorite = (photoId) => {
    dispatch({type: REMOVE_FAVORITE, payload: photoId })
  }

  return {
    state,
    addFavorite,
    removeFavorite,
  }
}

export default useApplicationData