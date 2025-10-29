import './TerminosCondiciones.css';

function TerminosCondiciones(){
    return (
        <main className="contenido">
            <aside className="sidebar">
          <h3>Navegación</h3>
          <ul>
            <li className="activo">Aceptación de Términos</li>
            <li>Descripción del Servicio</li>
            <li>Registro de Usuario</li>
            <li>Sistema de Puntos</li>
            <li>Canje de Recompensas</li>
            <li>Conducta del Usuario</li>
            <li>Política de Privacidad</li>
            <li>Propiedad Intelectual</li>
            <li>Limitación de Responsabilidad</li>
            <li>Modificaciones</li>
            <li>Contacto</li>
          </ul>
        </aside>

        {/* Contenido principal de los Términos y Condiciones */}
        <section className="texto">
          <h1>Términos y Condiciones de Uso</h1>
          <p className="fecha">Última actualización: 18 de Octubre, 2023</p>

          <h2>1. Aceptación de los Términos</h2>
          <p>
            Bienvenido a EcoRecompensa. Al acceder o utilizar nuestra plataforma,
            usted acepta estar sujeto a estos Términos y Condiciones. Si no está
            de acuerdo con alguna parte de los términos, no podrá acceder al
            servicio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2>2. Descripción del Servicio</h2>
          <p>
            EcoRecompensa proporciona una plataforma que permite a los usuarios
            registrar sus actividades de reciclaje a cambio de puntos, que luego
            pueden ser canjeados por recompensas.
          </p>

          <h2>3. Registro de Usuario y Cuenta</h2>
          <p>
            Para utilizar ciertas funciones de la plataforma, debe registrarse y
            crear una cuenta. Usted es responsable de mantener la
            confidencialidad de su contraseña.
          </p>
        </section>
        </main>
    );
}

export default TerminosCondiciones;