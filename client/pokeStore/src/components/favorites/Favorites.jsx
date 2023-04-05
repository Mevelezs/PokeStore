import React, { useContext } from 'react'
import { CartContext } from '../../context/useContext'
import { Favorite } from '../favorite/Favorite'
import './favorites.css'


function Favorites() {
  const { favoritePokes, deleteToFavarite, handleResetFavorites } = useContext(CartContext)
  return (
    <aside className='favorites'>
      <h3>Favorites</h3>
      <div className='favorite-list'>
        <ul>
          {
            favoritePokes?.map(poke => (
              <Favorite
                name={poke.name}
                key={poke.id}
                id={poke.id}
                image={poke.image}
                deleteToFavarite={deleteToFavarite}
              />
            )
            )
          }
        </ul>
      </div>
      <button onClick={handleResetFavorites}>Clean All Favorites</button>
    </aside>
  )
}

export { Favorites };

