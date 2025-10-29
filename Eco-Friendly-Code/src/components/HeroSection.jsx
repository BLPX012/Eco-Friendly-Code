import './Styles/HeroSection.css';

function HeroSection(){
    return(
        <section>
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