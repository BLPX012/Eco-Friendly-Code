import './App.css'
import { useState } from 'react'
// Componentes
import HeroSection from './components/HeroSection.jsx'
import Cards from './components/Cards.jsx'
import Oni_Chan from './components/Tuki.jsx'
import Rewards from './components/Rewards.jsx'
import Register from './components/Register/Register.jsx'
 

function RegisterPage(){
  return (
    <>
      <Register />
    </>
  )
}

function HomePage(){
  return (
    <>
      <HeroSection />

      <h2>Cómo Funciona</h2>
      <Cards />

      <h2>Beneficios de Reciclar</h2>

      <Oni_Chan />

      <h2>Recompensas Destacadas</h2>
      <Rewards />
    </>
  )
}

function App() {

  const [isRegisterPage] = useState(window.location.pathname);

  return (
    <>
      {isRegisterPage === '/' && <HomePage />}
      {isRegisterPage === '/register' && <RegisterPage />}
    </>
  )
}



export default App
