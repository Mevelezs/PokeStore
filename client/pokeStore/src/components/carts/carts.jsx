import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/useContext'
import { Cart } from '../cart/cart'
import './carts.css'

function Carts() {

  const { state, checkFavorite} = useContext(CartContext)

  return (
    <main className='carts'>
      <Link to='/favorites'><h3>Favorites</h3></Link>
      <ul>
        {
          state?.map(poke => {
            const isInFavorite = checkFavorite(poke)
            return (
              <Cart
                key={poke.id}
                id={poke.id}
                name={poke.name}
                height={poke.height}
                weight={poke.weight}
                image={poke.image}
                url={poke.url}
                isInFavorite={isInFavorite}
              />
            )
          }
          )
        }
      </ul>
    </main>
  )
}

export { Carts };
