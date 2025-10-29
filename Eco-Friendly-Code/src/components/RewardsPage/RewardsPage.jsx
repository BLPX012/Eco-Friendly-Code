import './RewardsPage.css';
import Rewards from '../Rewards.jsx';
import Footer from '../Footer.jsx';
import Imagenes from '../../img/Imagenes.js';
import LockIcon from '../../assets/LockIcon.svg';


const RewardsData = [
    { image: Imagenes.CafeRewards, title: "€10 Starbucks Voucher", points: "500 Points" },
    { image: Imagenes.Termo, title: "Reusable Water Bottle", points: "750 Points" },
    { image: Imagenes.Bolso, title: "Local Cinema Ticket", points: "1000 Points" },
    { image: Imagenes.Cine, title: "Plant a Tree Donation", points: "250 Points" },
    { image: Imagenes.SubSpotify, title: "€15 Amazon Gift Card", points: "800 Points" },
    { image: Imagenes.TarjetaRegalo, title: "Eco-friendly Tote Bag", points: "600 Points" },
    { image: Imagenes.Frutas, title: "€20 Spotify Subscription", points: "1200 Points", locked: true },
    { image: Imagenes.Reforestacion, title: "Discount at Local Eco-Shop", points: "900 Points", locked: true },
]

function RewardsPage() {
  return (
    <>
    {/* Hero Section Modificada para la página de Recompensas */}
      <div className="hero-rewards">
        <div className="overlay"></div>
        <div className="text-container">
          <h1>Recicla, Gana Asombrosos Premios</h1>
          <p>
            Únete a nuestra comunidad y sé recompensado por cada residuo que reciclas.
          </p>
          <button className="btn-primary">Comienza a Reciclar Ahora</button>
        </div>
      </div>

      {/* Sección de Recompensas */}
      <div className="rewards-container">
      <div className="rewards-grid">
        {RewardsData.map((reward, index) => (
          <div key={index} className={`reward-card ${reward.locked ? "locked" : ""}`}>
            <img src={reward.image} alt={reward.title} className="reward-image" />
            {reward.locked && (
              <div className="reward-overlay">
                <div className="lock-icon">
                  <img src={LockIcon} alt="lock" />
                </div>
                <p>Resgitrar para Desbloquear</p>
              </div>
            )}
            <div className="reward-info">
              <h4>{reward.title}</h4>
              <p>{reward.points}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-banner">
        <div className="cta-text">
          <h3>¿Estas Listo para Empezar a Reciclar y Ganar?</h3>
          <p>Es gratis, fácil y bueno para el planeta. ¡Únete al movimiento hoy!</p>
        </div>
        <button className="cta-button">Crea tu Cuenta Gratuita</button>
      </div>
    </div>
    </>
  );
}

export default RewardsPage;