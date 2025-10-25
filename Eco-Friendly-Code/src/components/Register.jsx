import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <h1><span>ECO</span> FRIENDLY</h1>
          <p>CODE</p>
        </Link>

        <nav>
          <ul>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register" className="active">Registrarse</Link></li>
          </ul>
        </nav>
      </header>

      <main className="register-container">
        <div className="register-box">
          <h2>Crear cuenta de estudiante</h2>
          <p className="subtitle">
            Únete a <strong>Eco Friendly Code</strong>
          </p>

          <form>
            <label htmlFor="id">ID Estudiantil</label>
            <input type="text" id="id" name="id" placeholder="Ingresa tu ID estudiantil" required />

            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />

            <label htmlFor="lastname">Apellido</label>
            <input type="text" id="lastname" name="lastname" placeholder="Ingresa tu apellido" required />

            <label htmlFor="gender">Género</label>
            <select id="gender" name="gender" required>
              <option value="">Selecciona tu género</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
              <option value="prefer_not_say">Prefiero no decirlo</option>
            </select>

<label htmlFor="career">Carrera</label>
<select id="career" name="career" required>
  <option value="">Selecciona tu carrera</option>

  {/* ---- PROGRAMAS PROFESIONALES ---- */}
  <optgroup label="Programas Profesionales">
    <option value="bilingual_english">Licenciatura en Bilingüismo con Énfasis en Inglés</option>
    <option value="administration">Administración de Empresas</option>
    <option value="tourism_management">Administración de Empresas Turísticas y Hoteleras</option>
    <option value="public_accounting">Contaduría Pública</option>
    <option value="law">Derecho</option>
    <option value="systems_engineering">Ingeniería de Sistemas</option>
    <option value="industrial_engineering">Ingeniería Industrial</option>
  </optgroup>

  {/* ---- PROGRAMAS TECNOLÓGICOS ---- */}
  <optgroup label="Programas Tecnológicos">
    <option value="tech_software_systems">Tecnología en Sistemas de Información y Software</option>
    <option value="tech_tourism_services">Tecnología en Gestión de Servicios Turísticos y Hoteleros</option>
    <option value="tech_accounting">Tecnología en Gestión Contable y Financiera</option>
    <option value="tech_business_management">Tecnología en Gestión Empresarial</option>
    <option value="tech_logistics">Tecnología en Gestión Logística</option>
  </optgroup>

  {/* ---- PROGRAMAS TÉCNICOS ---- */}
  <optgroup label="Programas Técnicos Laborales">
    <option value="tech_assistant_tourism">Técnico Laboral en Servicios Turísticos y Hoteleros</option>
    <option value="tech_assistant_accounting">Técnico Laboral en Auxiliar Contable y Financiero</option>
    <option value="tech_assistant_admin">Técnico Laboral en Auxiliar Administrativo</option>
    <option value="tech_assistant_systems">Técnico Laboral en Sistemas Informáticos</option>
  </optgroup>

  {/* ---- POSGRADOS ---- */}
  <optgroup label="Posgrados">
    <option value="specialization_finance">Especialización en Finanzas</option>
    <option value="specialization_project_management">Especialización en Gerencia de Proyectos</option>
    <option value="specialization_environmental_management">Especialización en Gerencia Ambiental</option>
  </optgroup>

  {/* ---- CURSOS DE INGLÉS ---- */}
  <optgroup label="Cursos de Inglés (Centro Colombo Americano)">
    <option value="english_regular">Curso Regular de Inglés (Niños, Jóvenes y Adultos)</option>
  </optgroup>
</select>


            <label htmlFor="email">Correo institucional</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@universidad.edu" required />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Crea una contraseña" required />

            <button type="submit" className="btn">Registrarse</button>

            <p className="text-small">
              ¿Ya tienes una cuenta?
              <Link to="/login"> Inicia sesión aquí</Link>
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

export default Register;
