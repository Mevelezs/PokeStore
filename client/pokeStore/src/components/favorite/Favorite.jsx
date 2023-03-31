function CartItem({ name, image }) {
  return(
  <article>
    <li>
        <strong>Name: {name}</strong>
        <img src={image}></img>
    </li>
  </article>)
}

export { CartItem };
