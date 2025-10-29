import { useState } from 'react'
import './Register.css'
import eyeOpen from '../../assets/showPassword.svg'
import eyeClosed from '../../assets/noShowPassword.svg'

function Register(){
    const [showPassword ,setShowPassword] = useState (false);

    return(
        <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Crea tu cuenta</h2>
        <p className="register-subtitle">
          Únete a nuestra comunidad y empieza a reciclar.
        </p>

        <form className="register-form">
          <label>Nombre de usuario</label>
          <input type="text" placeholder="Elige un nombre de usuario" />

          <label>Correo electrónico</label>
          <input type="email" placeholder="tu.correo@ejemplo.com" />

          <label>Contraseña</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Crea una contraseña segura"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={showPassword ? eyeOpen : eyeClosed } alt="Alternar Visibilidad" />
            </span>
          </div>

          <label>Confirmar contraseña</label>
          <input type="password" placeholder="Confirma tu contraseña" />

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Acepto los{" "}
              <a href="#" className="terms-link">
                Términos y Condiciones
              </a>
            </label>
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <p className="login-text">
          ¿Ya tienes una cuenta?{" "}
          <a href="/log-in" className="login-link">
            Inicia sesión.
          </a>
        </p>
      </div>
    </div>
    )
}

export default Register;