import React, { useEffect, useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
const CartContext = createContext()

const CartPovider = ({ children }) => {
  const navigate = useNavigate();
  const [state, setState] = useState()
  const [favoritePokes, setFavoritePokes] = useState([])
   
  function getpokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
      .then(res => res.json())
      .then(data => setState(data))
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
    console.log(validate)
    if (validate.includes(productsInCart)) {
      return;
    }
    const copyFavorites = [...favoritePokes, productsInCart];
    setFavoritePokes(copyFavorites)
    return;
    
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
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartPovider, CartContext }

