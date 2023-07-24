import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFile from "./common/inputFile";
import Joi from "joi-browser";
import chatService from "../../services/chatService";
import "./login_signup.css";

const schema = {
  username: Joi.string().required().label("Username"),
  password: Joi.string().required().label("Password"),
  confirmPassword: Joi.string().required().label("Password Confirmation"),
  profilePhoto: Joi.string().required().label("Profile Photo"),
};

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    profilePhoto: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="ca_form">
        <div className="ca_pageTitle">Chat App</div>
        <input
          className="ca_formInput"
          type="text"
          placeholder="Username"
          name="username"
          autoFocus
          onChange={handleChange}
          value={data.username}
        />
        <input
          className="ca_formInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <input
          className="ca_formInput"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={handleChange}
          value={data.confirmPassword}
        />
        <InputFile
          label="Upload a photo..."
          onChange={handleChange}
          name="profilePhoto"
          value={data.profilePhoto}
        />
        <button className="ca_formInput ca_button">Sign Up</button>
        <a className="ca_link" onClick={() => navigate("/apps/chat-app/login")}>
          Login
        </a>
      </div>
    </>
  );
};

export default SignUp;
