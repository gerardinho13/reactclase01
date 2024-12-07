import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import Contactos from './pages/Contactos'

const App = () => {
  return (
    
    <BrowserRouter>
    
      <Header/>

        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/contactos' element={<Contactos/>}/>
          <Route path='*' element={<Inicio/>}/>

        </Routes>

   
      <Footer/>
        
      

    </BrowserRouter>
    
  )
}

export default App