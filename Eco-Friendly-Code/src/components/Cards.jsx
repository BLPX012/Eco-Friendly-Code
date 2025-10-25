import './Styles/Cards.css'
import { FaPen, FaStar, FaGift } from "react-icons/fa";
import star from '../assets/star.svg';
import register from '../assets/register.svg';
import redeem from '../assets/redeem.svg';

function Cards(){
    return(
        <div className="card-container">
            <div className="card">
                <span>
                    <img src={register} alt="Registra" style={{ width: "40px", height: "40px" }} />
                </span>
                <h3>Registra</h3>
                <p>Usa nuestra plataforma para registrar facilmente los residuos que reciclas.</p>
            </div>
            <div className="card">
                <span>
                    <img src={star} alt="Acumula" style={{ width: "40px", height: "40px" }} />
                </span>
                <h3>Acumula</h3>
                <p>Gana puntos por cada articulo que reciclas a traves de nuestra plataforma </p>
            </div>
            <div className="card">
                <span>
                    <img src={redeem} alt="Canjea" style = {{width: "40px", height: "40px"}} />
                </span>
                <h2>Canjea</h2>
                <p>Usa tus puntos para canjear increibles recompensas y descuentos</p>
            </div>
        </div>
    )
}

export default Cards