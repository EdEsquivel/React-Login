import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth";

const LogoutView = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const autenticado = useSelector((state) => state.auth.autenticado);

  const handleLogout = () => {
    dispatch(logout());
    console.log("Logout");
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      {autenticado ? (
        <>
          <p>Adiós, {username}. Has cerrado sesión.</p>
          <button onClick={handleLogout} style={{ padding: "0.5rem 1rem", borderRadius: "0.25rem", border: "none", backgroundColor: "#B22222", color: "white", cursor: "pointer" }}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>Ya has cerrado sesión.</p>
      )}
    </div>
  );
};

export default LogoutView;