import { useState } from "react";
import Checkbox from "../components/checkbox";
import "./passwordGenerator.css";
import "./passwordGenerator-slider.css";

const PasswordGenerator = () => {
  const [charCount, setCharCount] = useState(10);
  const [currentPwd, setCurrentPwd] = useState("");
  const [passOptions, setPassOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const [passHistory, setPassHistory] = useState([]);

  const handleCharCountChange = (e) => {
    setCharCount(e.target.value);
  };

  const generatePassword = (length) => {
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWZYX";
    let numbersChars = "0123456789";
    let symbolsChars = "!@#$%^&*()-_=+`~<>?:'\"[]{}";
    let charset = "";
    if (passOptions.lowercase) charset += lowercaseChars;
    if (passOptions.uppercase) charset += uppercaseChars;
    if (passOptions.numbers) charset += numbersChars;
    if (passOptions.symbols) charset += symbolsChars;

    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  const handlePwdGenerate = () => {
    if (!Object.entries(passOptions).some((item) => item[1])) {
      alert("Please select at least one character type");
      return;
    }
    const pass = generatePassword(charCount);
    setCurrentPwd(pass);
    setPassHistory([
      { password: pass, date: new Date().toISOString() },
      ...passHistory,
    ]);
  };

  const handlePassOptionsChange = (option) => {
    setPassOptions({ ...passOptions, ...option });
  };

  const handleClearHistory = () => {
    setPassHistory([]);
  };

  const handleCopyPassword = async (pwd = null) => {
    if (pwd !== null) await navigator.clipboard.writeText(pwd);
    else await navigator.clipboard.writeText(currentPwd);
    alert("Password copied to clipboard");
  };

  return (
    <div className="pg_container">
      <div className="pg_generator">
        <h1 className="pg_heading">
          PASSWORD
          <br />
          GENERATOR
        </h1>
        <span className="pg_password_output">
          <span className="pg_password_output_text">{currentPwd}</span>
          <span
            className="pg_password_output_refresh pg_btn"
            onClick={handlePwdGenerate}
          >
            <span className="fa-sharp fa-solid fa-rotate"></span>
          </span>
        </span>
        <button
          className="pg_copyPassword pg_btn"
          onClick={() => handleCopyPassword()}
        >
          COPY PASSWORD_
          <span className="pg_right_arrow">
            <span className="fa-sharp fa-solid fa-arrow-right"></span>
          </span>
        </button>
        <span className="pg_charCountValue">{charCount}</span>
        <input
          className="pg_charCountSlider slider-boxThumb"
          min="5"
          max="25"
          type="range"
          value={charCount}
          onChange={handleCharCountChange}
        />
        <div className="pg_options">
          <Checkbox
            label="Uppercase letters"
            className="pg_options_option"
            checked={passOptions.uppercase}
            onChange={() =>
              handlePassOptionsChange({ uppercase: !passOptions.uppercase })
            }
          />
          <Checkbox
            label="Lowercase letters"
            className="pg_options_option"
            checked={passOptions.lowercase}
            onChange={() =>
              handlePassOptionsChange({ lowercase: !passOptions.lowercase })
            }
          />
          <Checkbox
            label="Numbers"
            className="pg_options_option"
            checked={passOptions.numbers}
            onChange={() =>
              handlePassOptionsChange({ numbers: !passOptions.numbers })
            }
          />
          <Checkbox
            label="Symbols"
            className="pg_options_option"
            checked={passOptions.symbols}
            onChange={() =>
              handlePassOptionsChange({ symbols: !passOptions.symbols })
            }
          />
        </div>
      </div>
      <div className="pg_history">
        <h2 className="pg_heading2">PASSWORD HISTORY</h2>
        <div className="pg_pwdRecords">
          {passHistory.map((item, idx) => (
            <div key={idx} className="pg_pwdRecordLine">
              <div className="pg_pwdRecordSet">
                <span className="pg_pwdRecord">{item.password}</span>
                <span className="pg_pwdRecordDate">{item.date}</span>
              </div>
              <div
                className="pg_pwdRecordCopy pg_btn"
                onClick={() => handleCopyPassword(item.password)}
              >
                <span className="fa-sharp fa-regular fa-clone fa-flip-vertical"></span>
              </div>
            </div>
          ))}
        </div>
        <button className="pg_clearHistory pg_btn" onClick={handleClearHistory}>
          Clear History
        </button>
      </div>
      <div className="pg_footer"></div>
    </div>
  );
};

export default PasswordGenerator;
