import './App.css'
import { Carts } from './components/carts/carts'
import { Detail } from './components/detail/Detail'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  return (
    <main className='mainApp'>
      <Link to='/'><h1>Poke Store</h1></Link>
        <Routes>
          <Route path='/' element={<Carts />} /> 
          <Route path='detail/:id' element={<Detail />} /> 
      </Routes>
    </main >
 )
}

export default App
