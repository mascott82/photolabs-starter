import React, { createContext, useContext, useState } from "react";

const FavContext = createContext()

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const handleFav = (photoId) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.includes(photoId)
      if (isFavorited) {
        return prevFavorites.filter((id) => id !== photoId)
      } else {
        return [...prevFavorites, photoId]
      }
    })
  }

  return (
    <FavContext.Provider value={{ favorites, handleFav }}>
      {children}
    </FavContext.Provider>
  )
}

export const useFavContext = () => useContext(FavContext)