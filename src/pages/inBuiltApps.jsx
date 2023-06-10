import { Link } from "react-router-dom";
import "./inBuiltApps.css";

const InBuiltApps = () => {
  const apps = [
    { link: "/apps/calculator", name: "Calculator" },
    { link: "/apps/rock-paper-scissor", name: "Rock Paper Scissor Game" },
    { link: "/apps/stopwatch", name: "Stopwatch" },
    { link: "/apps/password-generator", name: "Password Generator" },
    { link: "/apps/tic-tac-toe", name: "Tic-Tac-Toe Game" },
    { link: "/apps/note-app", name: "Note App" },
  ];
  return (
    <div className="iba_main">
      <h1>In Built Apps</h1>
      <div class="list-group">
        {apps.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="list-group-item list-group-item-action"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InBuiltApps;
