import { useEffect, useState } from "react";
import crossRed from "../assets/images/ttt/cross_red.svg";
import circleGreen from "../assets/images/ttt/circle_green.svg";
import "./ticTacToe.css";

const TicTacToe = () => {
  const gameStates = { HOME_PAGE: 0, STARTED: 1, RESULT_PAGE: 2 };
  const players = { CROSS: 0, CIRCLE: 1 };
  const [gameState, setGameState] = useState(gameStates.HOME_PAGE);
  const [currentTurnPlayer, setCurrentTurnPlayer] = useState(null);
  const [playersActionsState, setPlayersActionsState] = useState([
    ..."-".repeat(9),
  ]);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [result, setResult] = useState(null);

  const handleFirstGoerSelect = (goer) => {
    setCurrentTurnPlayer(goer);
    setGameState(gameStates.STARTED);
    setStartTime(new Date());
  };

  const resetGame = () => {
    setPlayersActionsState([..."-".repeat(9)]);
    setStartTime(new Date());
    setResult(null);
  };

  const getCurrentPlayer = () => {
    return currentTurnPlayer === players.CROSS ? "1" : "2";
  };

  const getImageForItem = (item) => {
    if (item === "-") return " ";
    else if (item === "o") return <img src={circleGreen}></img>;
    else if (item === "x") return <img src={crossRed}></img>;
  };

  const isPlayerWon = (state, player) => {
    const toCompare = player.repeat(3);
    if (
      [
        state.slice(0, 3).join("") === toCompare,
        state.slice(3, 6).join("") === toCompare,
        state.slice(6).join("") === toCompare,
        [state[0], state[4], state[8]].join("") === toCompare,
        [state[2], state[4], state[6]].join("") === toCompare,
        [state[0], state[3], state[6]].join("") === toCompare,
        [state[1], state[4], state[7]].join("") === toCompare,
        [state[2], state[5], state[8]].join("") === toCompare,
      ].some((r) => r)
    )
      return true;
    return false;
  };

  const checkForResult = (state) => {
    console.log("Checking for result: " + state);
    if (isPlayerWon(state, "x")) {
      console.log("Player X won");
      setResult("Player X won");
    } else if (isPlayerWon(state, "o")) {
      console.log("Player O won");
      setResult("Player O won");
    } else if (!state.some((item) => item === "-")) {
      console.log("Draw");
      setResult("Draw");
    }
  };

  const handlePlayerAction = (idx) => {
    const actionState = [...playersActionsState];
    if (actionState[idx] !== "-") return;
    if (currentTurnPlayer === players.CROSS) actionState[idx] = "x";
    else if (currentTurnPlayer === players.CIRCLE) actionState[idx] = "o";
    setPlayersActionsState(actionState);
    setCurrentTurnPlayer(
      currentTurnPlayer === players.CROSS ? players.CIRCLE : players.CROSS
    );
    checkForResult(actionState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameState === gameStates.STARTED) {
        const dur = (new Date().getTime() - startTime.getTime()) / 1000;
        setDuration(dur);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, startTime]);

  const getFormattedDuration = () => {
    const hours = Math.floor(duration / 3600);
    const minutes = String(Math.floor(duration / 60)).padStart(2, "0");
    const seconds = String(Math.floor(duration % 60)).padStart(2, "0");
    return `${hours ? hours + ":" : ""}${minutes}:${seconds}`;
  };

  return (
    <div className="ttt_container">
      {gameState === gameStates.HOME_PAGE && (
        <div className="ttt_main ttt_main__home">
          <h1 className="ttt_title">TIC-TAC-TOE</h1>
          <h2 className="ttt_pickTurn">Pick who goes first?</h2>
          <div className="ttt_symbolChooseFirst">
            <div
              className="ttt_symbolOption ttt_btn"
              onClick={() => handleFirstGoerSelect(players.CROSS)}
            >
              <img src={crossRed} alt="Cross Red" />
            </div>
            <div
              className="ttt_symbolOption ttt_btn"
              onClick={() => handleFirstGoerSelect(players.CIRCLE)}
            >
              <img src={circleGreen} alt="Circle Green" />
            </div>
          </div>
        </div>
      )}
      {gameState === gameStates.STARTED && (
        <div className="ttt_main">
          <div className="ttt_timer">{getFormattedDuration()}</div>
          <div className="ttt_playersTurnInfo">
            Player {getCurrentPlayer()}'s Turn
          </div>
          <div className="ttt_gameArea">
            <div className="ttt_gameArea__containerGridMaker">
              {[...playersActionsState].map((item, idx) => (
                <span
                  key={idx}
                  className="ttt_gameAreaUnit"
                  onClick={() => handlePlayerAction(idx)}
                >
                  {getImageForItem(item)}
                </span>
              ))}
            </div>
          </div>
          {result && (
            <div
              className="ttt_gameResultContainer"
              onClick={() => resetGame()}
            >
              <div className="ttt_gameResult">{result}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
