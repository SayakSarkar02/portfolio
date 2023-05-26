"use client"

import { useState, useEffect } from "react";

const Debug = () => {

  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [kill, setKill] = useState(false);

  const startGame = () => {
    setScore(0);
    setGameStarted(true);
    setTimeLeft(30);
  };

  const stopGame = () => {
    setGameStarted(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleRelease = () => {
    setIsClicked(false);
  };

  const handleClick = () => {
    setScore(score + 1);
    setIsClicked(true);
  };


  useEffect(() => {
    let timer;
    if (gameStarted && (timeLeft > 0)) {
      timer = setTimeout(() => {
        setTimeLeft(prev=>prev-1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
      // TODO: End the game, display the final score
    }

    return () => clearTimeout(timer);
  }, [gameStarted, timeLeft]);

  const terminalWidth = 800;
  const terminalHeight = 100;
  const bugSize = 40;

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * (terminalWidth - bugSize)),
    y: Math.floor(Math.random() * (terminalHeight - bugSize))
  });
  const getRandomRotation = () => ({
    x: Math.floor(Math.random() * (terminalWidth - bugSize)),
    y: Math.floor(Math.random() * (terminalHeight - bugSize))
  });

  

  const renderBugs = () => {
    if (gameStarted && timeLeft > 0) {
      const position = getRandomPosition();
      return (
        <div
          className={`absolute top-0 left-0 ${ isClicked? " text-red-600 " : " text-vs-white-1"}`}
          style={{ top: position.y, left: position.x, rotate: 90 }}
          onClick={handleClick}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
        >
          <svg className="text-vs-white-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H6V6H7V5H8V4H7V3H6V2H7V1H8V2H9V3H10V4H12V3H13V2H14V1H15V2H16V3H15V4H14V5H15V6H16V7H19V9H17V11H19V13H17V15H19V17H16V18H15V19H14V20H8V19H7V18H6V17H3V15H5V13H3V11H5V9H3V7ZM13 18V17H14V16H15V8H14V7H13V6H9V7H8V8H7V16H8V17H9V18H13ZM9 13H13V15H9V13ZM9 9H13V11H9V9Z" fill="currentColor"/>
          </svg>
        </div>
      );
    }
  };

  return (
    <div className={"flex flex-row items-center " + (gameStarted && " cursor-crosshair ")}>
      <div className="bg-white/10 p-3 px-5 mt-5 rounded-lg flex flex-col">
        <h3 className="font-bold text-yellow-500">Tap to kill bugs</h3>
        <h3>Score: {score}</h3>
        <h3>Time Left: {timeLeft}s</h3>
        <div className="flex flex-row w-full gap-2">
        <button className="bg-white/20 p-1 rounded-lg mt-2 grow w-10" onClick={startGame}>{"Start"}</button>
        {gameStarted && <button className="bg-white/20 p-1 grow rounded-lg mt-2 w-10" onClick={stopGame}>{"Stop"}</button>}
        </div>
      </div>
      <div className="relative">
        {renderBugs()}
      </div>
      
    </div>
  )
}

export default Debug
