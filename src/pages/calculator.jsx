import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [action, setAction] = useState("");
  const [answer, setAnswer] = useState("");

  const handleDigitInput = (digit) => {
    setInput(input + digit);
  };

  const handleActionInput = (action) => {
    setInput(input + action);
  };

  const handleClearInput = () => {
    setInput("");
    setAnswer("");
  };

  const handleBackSpaceClick = () => {
    setInput(input.slice(0, input.length - 1));
  };

  const handleAnswerClick = () => {
    console.log("Answer clicked");
    try {
      let ans = eval(input);
      ans = Math.round(ans * 10000) / 10000;
      setAnswer(ans);
    } catch (e) {
      console.log("Invalid input");
    }
  };

  return (
    <div className="calc_container">
      <div className="calc_main calc_main_light">
        <div className="calc_input">{input}</div>
        <div className="calc_ans">={answer}</div>
        <div className="action_line_1">
          <span className="action_font_dark" onClick={handleClearInput}>
            Ac
          </span>
          <span onClick={handleBackSpaceClick}>&#9224;</span>
          <span
            className="action_font_blue_dark"
            onClick={() => handleActionInput("/")}
          >
            /
          </span>
          <span
            className="action_font_blue_dark"
            onClick={() => handleActionInput("*")}
          >
            *
          </span>
        </div>
        <div className="digit_n_action_line">
          <div className="digit_group">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((item) => (
              <span key={item} onClick={() => handleDigitInput(item)}>
                {item}
              </span>
            ))}
            <span className="digit_zero" onClick={() => handleDigitInput(0)}>
              0
            </span>
            <span onClick={() => handleDigitInput(".")}>.</span>
          </div>
          <div className="action_line_2">
            <span
              className="action_font_blue_dark"
              onClick={() => handleActionInput("-")}
            >
              -
            </span>
            <span
              className="action_font_blue_dark long_btn"
              onClick={() => handleActionInput("+")}
            >
              +
            </span>
            <span
              className="action_font_blue_gloss long_btn"
              onClick={handleAnswerClick}
            >
              =
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
