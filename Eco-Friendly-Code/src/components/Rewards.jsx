import './Styles/Rewards.css'
import Imagenes from '../img/Imagenes.js';

const rewards = [
    {
        id: 1,
        title: "Descuento en Tienda Orgánica",
        points: "1500 Puntos",
        color: "#e6b800",
        image: Imagenes.Frutas
    }, 
    {
        id: 2,
        title: "Botella de Agua Reutilizable",
        points: "1000 Puntos",
        color: "#0099cc",
        image: Imagenes.Botella_de_Agua
    },
    {
        id: 3,
        title: "Reforestación del medio ambiente",
        points: "2000 Puntos",
        color: "#33cc33",
        image: Imagenes.Reforestacion
    }
]

function Rewards(){
    return(
        <section className="RewardsSection">
      <div className="RewardsContainer">
        {rewards.map((reward) => (
          <div key={reward.id} className="RewardsCards">
            <img
              src={reward.image}
              alt={reward.title}
              className="reward-image"
            />
            <div className="reward-info">
              <h3 className="reward-title">{reward.title}</h3>
              <p className="reward-points" style={{ color: reward.color }}>
                {reward.points}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    )
}

export default Rewards