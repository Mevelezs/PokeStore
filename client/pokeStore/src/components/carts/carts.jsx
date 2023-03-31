import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/useContext'
import {Cart} from '../cart/cart'
import './carts.css'

function Carts() {

  const { state } = useContext(CartContext)
  
  return (
    <main className='carts'>
      <Link to='/favorites'><h3>Favorites</h3></Link>
        <ul>
          {
            state?.map(poke =>
              <Cart
                key={poke.id}
                id={poke.id}
                name={poke.name}
                height={poke.height}
                weight={poke.weight}
                image={poke.image}
                url={poke.url}
              />
            )
          }
        </ul>
    </main>
  )
}

export { Carts };
