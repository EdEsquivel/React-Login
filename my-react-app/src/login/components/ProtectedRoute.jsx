import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const autenticado = useSelector((state) => state.auth.autenticado);

  return autenticado ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;