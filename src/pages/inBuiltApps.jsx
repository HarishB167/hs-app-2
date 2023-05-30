import { Link } from "react-router-dom";

const InBuiltApps = () => {
  return (
    <div>
      <h1>In Built Apps</h1>
      <ul>
        <li>
          <Link to="/apps/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/apps/rock-paper-scissor">Rock Paper Scissor Game</Link>
        </li>
      </ul>
    </div>
  );
};

export default InBuiltApps;
