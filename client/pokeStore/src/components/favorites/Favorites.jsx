import React, { useContext } from 'react'
import { CartContext } from '../../context/useContext'
import { CartItem } from '../favorite/Favorite'
import './favorites.css'


function Favorites() {
  const { favoritePokes } = useContext(CartContext)
  return (
    <div className='nav-favoritos'>
      <aside>
        <ul>
          {
            favoritePokes?.map(poke => (
              <CartItem
                name={poke.name}
                key={poke.id}
                image={poke.image}
              />
            )
            )
          }
        </ul>
      </aside>

    </div>
  )
}

export { Favorites };

