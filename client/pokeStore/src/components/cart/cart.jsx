import React, { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../context/useContext'


function Cart({ id, name, image, url, isInFavorite }) {
  const { getFavorites, handleNavigate, deleteToFavarite } = useContext(CartContext)
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
          <button style={{ backgroundColor: isInFavorite ? '#f5505073' : '#535bf2'}} onClick={() => isInFavorite ? deleteToFavarite(id) : getFavorites(id) } >+</button>
        </div>
      </li>
    </article>
  )
}

export { Cart }
