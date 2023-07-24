import Joi from "joi-browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import chatService from "../../services/chatService";
import "./login_signup.css";

const schema = {
  username: Joi.string().required().label("Username"),
  password: Joi.string().required().label("Password"),
};

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    const input = e.target;
    const er = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) er[input.name] = errorMessage;
    else delete er[input.name];

    setErrors(er);
  };

  const handleLogin = () => {
    console.log("Logging in ", data);
    const v = validate();
    console.log("v :>> ", v);

    const errors = validate();
    errors ? setErrors({ ...errors }) : setErrors({});

    if (errors) return;
    doSubmit();
  };

  const doSubmit = async () => {
    try {
      await chatService.login(data.username, data.password);
      window.location = "/apps/chat-app";
    } catch (ex) {
      if (ex.response && [400, 401].includes(ex.response.status)) {
        const errors = { ...errors };
        errors.username = ex.response.data.username;
        errors.password = ex.response.data.password;
        if (ex.response.data.detail) errors.username = ex.response.data.detail;
        setErrors({ ...errors });
      }
    }
  };

  const validate = () => {
    const result = Joi.validate(data, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const sch = { [name]: schema[name] };
    const { error } = Joi.validate(obj, sch);
    return error ? error.details[0].message : null;
  };

  return (
    <>
      <div className="ca_form">
        <div className="ca_pageTitle">Chat App</div>
        <input
          name="username"
          className="ca_formInput"
          type="text"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          autoFocus
        />
        {errors.username && (
          <label className="ca_inputErrorLabel">{errors.username}</label>
        )}
        <input
          name="password"
          className="ca_formInput"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && (
          <label className="ca_inputErrorLabel">{errors.password}</label>
        )}
        <button
          className="ca_formInput ca_button"
          onClick={handleLogin}
          disabled={validate()}
        >
          Login
        </button>
        <a
          className="ca_link"
          onClick={() => navigate("/apps/chat-app/signup")}
        >
          Signup
        </a>
      </div>
    </>
  );
};

export default Login;
