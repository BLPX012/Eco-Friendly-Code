import './App.css'
import { useState } from 'react'
// Componentes
import Terminos from './components/TerminosCondiciones/TerminosCondiciones.jsx'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Cards from './components/Cards.jsx'
import Oni_Chan from './components/Tuki.jsx'
import Rewards from './components/Rewards.jsx'
import Register from './components/Register/Register.jsx'
import Footer from './components/Footer.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import RewardsPage from './components/RewardsPage/RewardsPage.jsx'
 
function TerminosPage(){
  return(
    <>
    <NavBar />
    <Terminos />
    <Footer />
    </>

  )
}

function RewardsPageNoSesion(){
  return(
    <>
    <NavBar />
    <RewardsPage />
    <Footer />
    </>
  )
}

function LogInPage(){
  return (
    <>
      <NavBar />
      <LogIn />
      <Footer />
    </>
  )
}

function RegisterPage(){
  return (
    <>
      <NavBar />
      <Register />
      <Footer />
    </>
  )
}

function HomePage(){
  return (
    <>
      <NavBar />
      <HeroSection />

      <h2>Cómo Funciona</h2>
      <Cards />

      <h2>Beneficios de Reciclar</h2>

      <Oni_Chan />

      <h2>Recompensas Destacadas</h2>
      <Rewards />

      <Footer />
    </>
  )
}

function App() {

  const [isHomePage] = useState(window.location.pathname);

  return (
    <>
      {isHomePage === '/' && <HomePage /> 
      }
      {isHomePage === '/register' && <RegisterPage />}

      {isHomePage === '/log-in' && <LogInPage />}

      {isHomePage === '/rewards' && <RewardsPageNoSesion />}

      {isHomePage === '/terminos' && <TerminosPage />}

    </>
  )
}



export default App
