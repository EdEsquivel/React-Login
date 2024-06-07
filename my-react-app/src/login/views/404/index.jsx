import { Link } from 'react-router-dom';
import './NotFoundView.css'; // Si deseas agregar estilos personalizados

const NotFoundView = () => {
  return (
    <div className="not-found">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, pero la página que estás buscando no existe.</p>
      <Link to="/" className="back-home-link">Volver a la Página Principal</Link>
    </div>
  );
};

export default NotFoundView;
