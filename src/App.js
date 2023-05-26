import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
