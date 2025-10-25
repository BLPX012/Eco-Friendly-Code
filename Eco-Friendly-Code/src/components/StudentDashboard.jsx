import "./StudentDashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function StudentDashboard() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destruir gráfico anterior si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Crear nuevo gráfico
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Plástico", "Vidrio", "Papel", "Metal", "Orgánico", "Otros"],
        datasets: [
          {
            label: "Kg reciclados",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: "#00b05080",
            borderColor: "#00b050",
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/" className="logo">
          <h1>
            <span>ECO</span> FRIENDLY
          </h1>
          <p>CODE</p>
        </Link>

        <div className="user-info">
          <img src="Img/9434619.jpg" alt="Usuario" className="avatar" />
          <h3 className="username">Ana López</h3>
          <p className="email">ana.lopez@email.com</p>
        </div>

        <nav className="menu">
          <Link to="/dashboard" className="active">📊 Panel</Link>
          <Link to="/redeem">🎁 Canjear Premios</Link>
          <Link to="/history">♻️ Historial</Link>
          <Link to="/profile">👤 Perfil</Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="top-bar">
          <Link to="/recycle" className="btn-reciclar">
            ➕ Registrar Reciclaje
          </Link>
        </header>

        {/* Métricas */}
        <section className="stats">
          <div className="card">
            <h4>Tus Puntos</h4>
            <p className="value green">0</p>
          </div>
          <div className="card">
            <h4>Total Reciclado (Kg)</h4>
            <p className="value">0</p>
          </div>
          <div className="card">
            <h4>Nivel de Reciclador</h4>
            <p className="value green">Principiante</p>
          </div>
        </section>

        {/* Impacto */}
        <section className="impacto">
          <h3>Tu Impacto (Últimos 6 meses)</h3>
          <canvas id="impactChart" ref={chartRef}></canvas>
        </section>

        {/* Acciones rápidas */}
        <section className="acciones">
          <div className="acciones-card">
            <Link to="/redeem" className="btn blue">🎁 Canjear Premios</Link>
            <Link to="/profile" className="btn orange">⚙️ Actualizar Perfil</Link>
          </div>
        </section>

        {/* Historial */}
        <section className="historial">
          <h3>Historial de Reciclaje Reciente</h3>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo de Residuo</th>
                <th>Puntos Ganados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  Sin registros
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Insignias */}
        <section className="insignias">
          <h3>Insignias Obtenidas</h3>
          <div className="badges">
            <div className="badge">
              🌱 <p>Nuevo Recolector</p>
            </div>
          </div>
        </section>

        <footer>© 2025 Eco Friendly Code. Todos los derechos reservados.</footer>
      </main>
    </div>
  );
}

export default StudentDashboard;
