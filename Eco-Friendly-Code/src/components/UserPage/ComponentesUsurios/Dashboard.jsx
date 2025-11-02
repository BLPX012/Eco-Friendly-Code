import '../Styles/Dashboard.css';

function DashboardUsers(){
    return(
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className='dashboard-title'>Bienvenido al Panel de Usuario</h2>
                <button className="btn-green">
                    <span>+</span> Registrar Nuevo Reciclaje
                </button>
            </div>
            {/* Metricas */}

            <div className="metrics">
                <div className="metric-card">
                    <p className="matric-label"> Tu Puntos
                        <h2 className='matric-value green'>3,290</h2>
                    </p>
                </div>

                <div className="metric-card">
                    <p className="metric-label">Total Reciclado (Kg)</p>
                        <h2 className="metric-value">127.5</h2>
                </div>
                <div className="metric-card">
                    <p className="metric-label">Nivel de Reciclador</p>
                        <h2 className="metric-value green">Experto</h2>
                </div>
            </div>

        </div>
    )
}

export default DashboardUsers;