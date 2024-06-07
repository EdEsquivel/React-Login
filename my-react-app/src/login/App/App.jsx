import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeView from "../views/Home";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store";
import LoginView from "../views/Login";
import NotFoundView from "../views/404";

const appOptions = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "Login",
    to: "login",
  },
  {
    title: "Perfil",
    to: "perfil",
  },
];
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout options={appOptions} />}>
              <Route path="home" element={<HomeView />} />
              <Route path="login" element={<LoginView />} />
              <Route path="perfil" element={<div>Perfil</div>} />
              <Route path="/" element={<Navigate to="home" />} />
              <Route path="*" element={<NotFoundView />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;