import '../Styles/AsideUsers.css';
import Recycle from '../../../assets/Recycle.svg'; 
import Avatar from '../../../assets/User-avatar.jpg';

function AsideUsers(){
    return(
        <aside className="AsideContainers">
            <div className="logo">
                <img src={Recycle} alt="ReciclaYa" className="logo-icon"/>
                <span className="logo-text">
                Eco Friendly<span className="highlight"> Code</span>
                </span>
            </div>

            {/* Perfil de usuario */}
            <div className="perfil">
                <img src={Avatar} alt="Foto de perfil" className="perfil-foto"
                />
                <div className="perfil-info">
                <h4>Elmas Capito</h4>
                <p>elmas.capito@gmail.com</p>
                </div>
            </div>

            {/* Navegación del usuario */}
            <nav className="navegacion-usuario">
                    <ul>
                        <li className="activo">
                            <span>Panel</span>
                        </li>
                        <li>
                            <span>
                                Canjear Premios
                            </span>
                        </li>
                        <li>
                            <span>
                                Historial de Reciclaje
                            </span>
                        </li>
                        <li>
                            <span>Perfil</span>
                        </li>
                        </ul>
            </nav>
        </aside>
    )
}

export default AsideUsers;