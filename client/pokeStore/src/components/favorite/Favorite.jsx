import './favorite.css'

function Favorite({ id, name, image, deleteToFavarite }) {

  return(
    <article className="favorite-container">
    <li>
        <strong>{name}</strong>
        <img src={image}></img>
        <button onClick={() => deleteToFavarite(id)}>X</button>
    </li>
  </article>)
}

export { Favorite };
