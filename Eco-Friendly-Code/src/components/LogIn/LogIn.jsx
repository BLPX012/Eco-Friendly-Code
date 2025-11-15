
import './LogIn.css'
import { useState } from 'react'
import eyeOpen from '../../assets/showPassword.svg'
import eyeClosed from '../../assets/noShowPassword.svg'

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };


  const handleLogIn = async (e) =>{
    e.preventDefault();

    const res = await fetch('http://localhost/Eco-Friendly-Code/Backend/Api/login.php',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'},
        body: JSON.stringify({
          usuario: usuario,
          password: password
        })
    });

    const data = await res.json();
    setMensaje(data.mensaje);
    console.log(data)
    if(data.exito){
      localStorage.setItem('usuario', usuario);
      window.location = '/pra';
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">¡Bienvenido de nuevo!</h2>
        <p className="login-subtitle">
          Inicia sesión para continuar reciclando.
        </p>

        <form onSubmit={handleLogIn} className="login-form">
          <label className="login-label">Correo electrónico</label>
          <input
            type="email"
            className="login-input"
            placeholder="tu.correo@ejemplo.com"
            required
          />

          <label className="login-label">Contraseña</label>
          <div className="login-password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="login-input password-input"
              placeholder="Introduce tu contraseña"
              required
            />
            <span className="password-toggle" onClick={togglePassword}>
                <img src={showPassword ? eyeOpen : eyeClosed } alt="Alternar Visibilidad" />
            </span>
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="login-links">
          <a href="#" className="link">¿Olvidaste tu contraseña?</a>
          <a href="/register" className="link">Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;