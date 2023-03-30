import React from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'


const usePoke = () => {
  const navigate = useNavigate()

  async function getPokeId(id) {
    const detail = await fetch(`http://localhost:3000/api/v1/pokemons/${id}`)
      .then(res => res.json())
      .then(data => data);
    return detail
  }
  const handleNavigate = (id) => {
    navigate(`/detail/${id}`)
  }
  return {
    handleNavigate,
    getPokeId,
  }
}

function Cart({ id, name, image, url }) {

  const { handleNavigate } = usePoke();
  
  return (
    <article className='cart'>
      <li>
        <div className='Cart'>
          <strong>Name: {name}</strong>
          <p>id: {id} </p>
          <img src={image} alt={name} />
        </div>
        <div className='parrafo'>
          <p>Url: {url}</p>
        </div>
        <button onClick={() => { handleNavigate(id) }}>Detail</button>
      </li>
    </article>
  )
}

export { Cart, usePoke }
