import { Link } from 'react-router-dom';
import './HomeView.css'; // Asegúrate de crear este archivo CSS en la misma carpeta

const HomeView = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Parquesoft</h1>
        <p>Explora tus cursos</p>
      </header>
      <div className="home-content">
        <p>
          Si ya eres parte de Parquesoft, inicia sesión para acceder a tu cuenta.
        </p>
        <Link to="/login" className="login-button">Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default HomeView;
