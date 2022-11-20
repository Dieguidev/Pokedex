import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom'
import InputNameTrainer from './components/InputNameTrainer'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'
import footerimage from './assets/footer-image.svg'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputNameTrainer />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexId />} />
        </Route>
      </Routes>
      <footer>

      </footer>
    </HashRouter>
    
  )
}

export default App
