import './Styles/Tuki.css';
import Mar from "../img/Mar.png";
import Ambiente from "../img/Ambiente.png";

function Oni_Chan(){
    return (
        <div className="Container">
            <div className="Card">
                    <img src={Mar} alt="Mar" />
                    <h3>Cuida al Medio Ambiente</h3>
                    <p>Redula la contaminacion, conserva los recursos naturales y portege la biodiversidad.</p>
            </div>
            <div className="Card">
                    <img src={Ambiente} alt="Ambiente" />
                    <h3>Apoya a tu Comunidad</h3>
                    <p>Genera empleos locales y apoya negocios que se preocupan por la sostenibilidad.</p>
            </div>
        </div>
    )
}

export default Oni_Chan