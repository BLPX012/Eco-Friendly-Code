import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Cards from './components/Cards.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Cómo funciona</h2>
            <Cards />
          </>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
