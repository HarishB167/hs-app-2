import { useNavigate } from "react-router-dom";
import InputFile from "./common/inputFile";
import "./login_signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="ca_main ca_main--center">
      <div className="ca_form">
        <div className="ca_pageTitle">Chat App</div>
        <input
          className="ca_formInput"
          type="text"
          placeholder="Username"
          autoFocus
        />
        <input
          className="ca_formInput"
          type="password"
          placeholder="Password"
        />
        <input
          className="ca_formInput"
          type="password"
          placeholder="Confirm password"
        />
        <InputFile label="Upload a photo..." />
        <button className="ca_formInput ca_button">Sign Up</button>
        <a className="ca_link" onClick={() => navigate("/apps/chat-app/login")}>
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUp;
