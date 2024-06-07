import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/auth";

const LoginView = () => {
  const autenticado = useSelector((state) => state.auth.autenticado);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
    dispatch(login());
  };

  const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      {autenticado ? (
        <p>Has iniciado sesión</p>
      ) : (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleFormChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleFormChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginView;