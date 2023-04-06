import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/useContext'
import { Cart } from '../cart/cart'
import { Favorites } from '../favorites/Favorites'
import './carts.css'

function Carts() {

  const { state, checkFavorite, showFavorites, showFavoritesContainer } = useContext(CartContext);

  return (
    <main className='carts'>
      <button
        className={showFavoritesContainer ? 'button-favorite-off' :'button-favorite-on' }
        onClick={showFavorites}>{ showFavoritesContainer ? 'Quit Favorites' : 'Show Favorites'}
      </button>
      {
        showFavoritesContainer? <Favorites />: null
      }
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
