import './App.css'
import { Carts } from './components/carts/carts'
import { Detail } from './components/detail/Detail'
import {Routes, Route, Router} from 'react-router-dom'
function App() {
  return (
    <>
      <h1>Poke Store</h1>
      <Routes>
        <Route path='home' element={<Carts />} /> 
        <Route path='detail/:id' element={<Detail />}/> 
      </Routes>
    </>
 )
}

export default App
