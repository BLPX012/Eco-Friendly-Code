import './Styles/HeroSection.css';

function HeroSection(){
    return(
        <section>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-text">
            Eco Friendly<span className="highlight"> Code</span>
          </span>
        </div>

        <ul className="navbar-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a href="#">Recompensas</a></li>
          <li><a href="#">Iniciar Sesión</a></li>
          <li>
            <a href="/register" className="btn-register">Regístrate Gratis</a>
          </li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="overlay"></div>
        <div className="text-container">
          <h1>Recicla, Gana Puntos y Ayuda al Planeta</h1>
          <p>
            Únete a nuestra comunidad y sé recompensado por cada residuo que reciclas.
          </p>
          <button className="btn-primary">Comienza a Reciclar Ahora</button>
        </div>
      </div>

    </section>
    )
}

export default HeroSection;