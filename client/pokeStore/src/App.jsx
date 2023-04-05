import './App.css'
import { Carts } from './components/carts/carts'
import { Detail } from './components/detail/Detail'
import {Routes, Route, Router} from 'react-router-dom'
import { Favorites } from './components/favorites/Favorites'

function App() {
  return (
    <main className='mainApp'>
      <h1>Poke Store</h1>
        <Favorites />
        <Routes>
          <Route path='/' element={<Carts />} /> 
          <Route path='detail/:id' element={<Detail />} /> 
      </Routes>
    </main >
 )
}

export default App
