import React, { useEffect, useState } from 'react'
import { Cart } from '../cart/cart';
import './carts.css'

function Carts() {
  const [state, setState] = useState()
  async function getpokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
      .then(res => res.json())
      .then(data => setState(data))
  }

  useEffect(() => {
    getpokemons()
  }, [])
  return (
    <main className='carts'>
      <div>carts</div>
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
