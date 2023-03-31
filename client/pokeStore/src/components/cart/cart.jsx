import React, { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../context/useContext'


function Cart({ id, name, image, url }) {
  const { getFavorites, handleNavigate } = useContext(CartContext)
  return (
    <article className='cart'>
      <li>
        <div className='Cart'>
          <strong>Name: {name}</strong>
          <p>id: {id} </p>
          <img src={image} alt={name} />
        </div>
        <div className='parrafo'>
          <a href={`detail/${id}`}> Url: {url}</a>
        </div>
        <div className='buttons'>
        <button onClick={() => { handleNavigate(id) }}>Detail</button>
          <button onClick={() => { getFavorites(id) }}>+</button>
        </div>
      </li>
    </article>
  )
}

export { Cart }
