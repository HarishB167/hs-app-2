import { Link } from "react-router-dom";
import "./inBuiltApps.css";

const InBuiltApps = () => {
  return (
    <div className="iba_main">
      <h1>In Built Apps</h1>
      <ul>
        <li>
          <Link to="/apps/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/apps/rock-paper-scissor">Rock Paper Scissor Game</Link>
        </li>
        <li>
          <Link to="/apps/stopwatch">Stopwatch</Link>
        </li>
        <li>
          <Link to="/apps/password-generator">Password Generator</Link>
        </li>
      </ul>
    </div>
  );
};

export default InBuiltApps;
