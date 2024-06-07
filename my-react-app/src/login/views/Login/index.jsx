// LoginView.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/auth";
import { setUser } from "../../slices/user";
import "./LoginView.css";

const LoginView = () => {
  
  const autenticado = useSelector((state) => state.auth.autenticado);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
    console.log("Form Data:", form);

    if (form.username) {
      dispatch(setUser(form.username));
      dispatch(login());
    } else {
      console.log("El nombre de usuario no puede estar vacío.");
    }
  };

  const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [inputName]: inputValue,
    }));
  };

  return (
    <div className="login-view">
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      {autenticado ? (
        <p>Bienvenido, {username}! Has iniciado sesión.</p>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleFormChange}
            value={form.username}
          />
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleFormChange}
            value={form.password}
          />
          <button className="login-button" type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginView;