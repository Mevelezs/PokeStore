import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../context/useContext'
import { useParams, Link } from 'react-router-dom';
import { Favorites } from '../favorites/Favorites';
import './detail.css'



function Detail() {

  const objectIdParam = useParams()
  const [pokemon, setPokemon] = useState(null);

  const {
    getFavorites,
    deleteToFavarite,
    checkFavorite,
    showFavorites,
    showFavoritesContainer,
  } = useContext(CartContext)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/pokemons/${objectIdParam.id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, []);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  const isInFavorite = checkFavorite(pokemon);

  return (
    <>
      <button
        style={{ backgroundColor: showFavoritesContainer ? 'rgba(133, 32, 32, 0.904)':'rgb(83, 91, 242)' }}
        onClick={showFavorites}>{showFavoritesContainer ? 'Quit Favorites' : 'Show Favorites'}
      </button>
      <Link to='/'>Home</Link>
      {
        showFavoritesContainer ? <Favorites /> : null
      }
      <main className='mainDetail'>

        <div className='buttonDetail'>
          <button
            className={isInFavorite ? 'button-check' : 'button-uncheck'}
            onClick={() => isInFavorite ? deleteToFavarite(pokemon.id) : getFavorites(pokemon.id)}>
            
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/130px-Heart_coraz%C3%B3n.svg.png?20110326231420' />
          </button>
        </div>

        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} />

        <div className='details'>
          <p>ID: {pokemon.id}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
          <a href={pokemon.url}>Url: {pokemon.url} </a>
        </div>
      </main>
    </>
  )
}

export { Detail };
