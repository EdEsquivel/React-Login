// PerfilView.jsx
import { useSelector } from "react-redux";

const PerfilView = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h1>Perfil de Usuario</h1>
      <p>Bienvenido, {username}. Esta es tu página de perfil.</p>
    </div>
  );
};

export default PerfilView;
