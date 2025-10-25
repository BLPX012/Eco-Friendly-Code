import './Login.css';
import { Link } from 'react-router-dom'; // ✅ importa Link

function Login() {
  return (
    <>
      <header className="navbar">
       
        <Link to="/" className="logo">
          <h1><span>ECO</span> FRIENDLY</h1>
          <p>CODE</p>
        </Link>

        <nav>
          <ul>
            <li><a href="#" className="active">Iniciar Sesión</a></li>
            <li><Link to="/register">Registrarse</Link></li>

          </ul>
        </nav>
      </header>

      <main className="login-container">
        <div className="login-box">
          <h2>Inicia Sesión</h2>
          <p className="subtitle">
            Bienvenido a <strong>Eco Friendly Code</strong>
          </p>

          <form>
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" name="user" placeholder="Ingresa tu usuario" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" />

            <button type="submit" className="btn">Entrar</button>

                    <p className="text-small">
            ¿No tienes cuenta?
            <Link to="/register"> Regístrate aquí</Link>
            </p>

          </form>
        </div>
      </main>

      <footer>
        <p>© 2025 Eco Friendly Code. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Login;
