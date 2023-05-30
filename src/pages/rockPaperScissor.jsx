import "./rockPaperScissor.css";
import mainPic from "../assets/images/rps/rps_main_picture.svg";
import handOpponentImg from "../assets/images/rps/hand_opponent.svg";
import { useEffect, useState } from "react";

const RockPaperScissor = () => {
  const gameStates = { HOME_PAGE: 0, STARTED: 1, RESULT_PAGE: 2 };
  const actions = { ACTION_STONE: 0, ACTION_PAPER: 1, ACTION_SCISSOR: 2 };
  const results = {
    DRAW: "IT'S A DRAW 😐",
    WIN: "YOU WIN! 😄",
    LOSE: "YOU LOSE 😭",
  };

  const [gameState, setGameState] = useState(gameStates.HOME_PAGE);
  const [userAction, setUserAction] = useState(null);
  const [opponentAction, setOpponentAction] = useState(null);

  const handleStart = () => {
    setGameState(gameStates.STARTED);
  };

  const goToPage = (page, usrAction = null, oppAction = null) => {
    setGameState(page);
    setUserAction(usrAction);
    setOpponentAction(oppAction);
  };

  const handleBack = () => {
    goToPage(gameStates.HOME_PAGE);
  };

  const handleAction = (action) => {
    const oppAction = [0, 1, 2][Math.floor(Math.random() * 3)];
    goToPage(gameStates.RESULT_PAGE, action, oppAction);
  };

  const handleCrossClick = () => {
    goToPage(gameStates.HOME_PAGE);
  };

  const handleReplay = () => {
    goToPage(gameStates.STARTED);
  };

  const getComputerAction = () => {
    if (opponentAction === actions.ACTION_STONE) return "rps_opponent_stone";
    else if (opponentAction === actions.ACTION_PAPER)
      return "rps_opponent_paper";
    else if (opponentAction === actions.ACTION_SCISSOR)
      return "rps_opponent_scissor";
  };

  const getUserActionClass = () => {
    if (userAction === actions.ACTION_STONE) return "rps_userAction_stone";
    else if (userAction === actions.ACTION_PAPER) return "rps_userAction_paper";
    else if (userAction === actions.ACTION_SCISSOR)
      return "rps_userAction_scissor";
  };

  const getResult = () => {
    if (userAction === opponentAction) return results.DRAW;
    else if (
      (userAction === actions.ACTION_STONE &&
        opponentAction === actions.ACTION_SCISSOR) ||
      (userAction === actions.ACTION_PAPER &&
        opponentAction === actions.ACTION_STONE) ||
      (userAction == actions.ACTION_SCISSOR &&
        opponentAction === actions.ACTION_PAPER)
    )
      return results.WIN;

    return results.LOSE;
  };

  return (
    <div className="rps_container">
      {gameState === gameStates.HOME_PAGE && (
        <div className="rps_main rps_main__home">
          <div className="rps_title">ROCK / PAPER / SCISSORS</div>
          <img className="rps_image" src={mainPic} alt="Hand picture" />
          <button className="rps_startBtn" onClick={handleStart}>
            START
          </button>
        </div>
      )}
      {gameState === gameStates.STARTED && (
        <div className="rps_main rps_main__gameStarted">
          <span className="rps_back_icon" onClick={handleBack}>
            <span className="fa-sharp fa-solid fa-chevron-left"></span>
          </span>
          <img
            src={handOpponentImg}
            alt="Opponent hands"
            className="rps_handOpponent"
          />
          <span className="rps_letsPlay">LET'S PLAY</span>
          <span className="rps_pickAnOption">PICK AN OPTION:</span>
          <div className="rps_action_container">
            <span
              className="rps_action"
              onClick={() => handleAction(actions.ACTION_STONE)}
            >
              <span className="rps_action_icon rps_action_stone"></span>
            </span>
            <span
              className="rps_action"
              onClick={() => handleAction(actions.ACTION_PAPER)}
            >
              <span className="rps_action_icon rps_action_paper"></span>
            </span>
            <span
              className="rps_action"
              onClick={() => handleAction(actions.ACTION_SCISSOR)}
            >
              <span className="rps_action_icon rps_action_scissor"></span>
            </span>
          </div>
        </div>
      )}
      {gameState === gameStates.RESULT_PAGE && (
        <div className="rps_main rps_main_resultPage">
          <span className="rps_back_icon" onClick={handleCrossClick}>
            <span class="fa-sharp fa-solid fa-xmark"></span>
          </span>
          <span className={"rps_opponent " + getComputerAction()}></span>
          <span className="rps_result">{getResult()}</span>
          <button className="rps_btnPlayAgin" onClick={handleReplay}>
            PLAY AGAIN
          </button>
          <span className={"rps_userAction " + getUserActionClass()}></span>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissor;
