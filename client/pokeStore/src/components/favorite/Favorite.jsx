import { useNavigate } from "react-router-dom";
import './favorite.css'

function Favorite({ id, name, image, deleteToFavarite }) {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }
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
