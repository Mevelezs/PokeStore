import React, { useEffect, useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
const CartContext = createContext()

const CartPovider = ({ children }) => {
  const navigate = useNavigate();
  const [state, setState] = useState()
  const [favoritePokes, setFavoritePokes] = useState([])
  const [showFavoritesContainer, setShowFavoritesContainer] = useState(false)
  
  async function getpokemons() {
    const data = await fetch('http://localhost:3000/api/v1/pokemons')
      .then(res => res.json())
      .then(data => setState(data))
    return data;
  }


  async function getPokeId(id) {
    const detail = await fetch(`http://localhost:3000/api/v1/pokemons/${id}`)
      .then(res => res.json())
      .then(data => data);
    return detail
  }
  const handleNavigate = (id) => {
    navigate(`/detail/${id}`)
  }

  const getFavorites = async (id) => {
    const productsInCart = state.find(item => item.id === id);
    const validate = [...favoritePokes]
    if (validate.includes(productsInCart)) {
      return;
    }
    const copyFavorites = [...favoritePokes, productsInCart];
    setFavoritePokes(copyFavorites);
    return;
    
  }

  const deleteToFavarite = (id )  => {
    const copyFavorites = structuredClone(favoritePokes)
    const newFavorites = copyFavorites.filter(poke => poke.id !== id);
    setFavoritePokes(newFavorites);
    return;
  }

  const checkFavorite = (poke) => {
    return favoritePokes.some(item => item.id === poke.id)
  }

  const handleResetFavorites = () => {
    setFavoritePokes([])
    return;
  }


  const showFavorites = () => {
    setShowFavoritesContainer(!showFavoritesContainer)
  }
  
  useEffect(() => {
    getpokemons()
  }, [])

  return (
    <CartContext.Provider value={{
      state,
      getFavorites,
      favoritePokes,
      handleNavigate,
      getPokeId,
      deleteToFavarite,
      checkFavorite,
      handleResetFavorites,
      showFavoritesContainer,
      showFavorites
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartPovider, CartContext }

