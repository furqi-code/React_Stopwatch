import { useState, useEffect } from "react";

export function App() {
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval_id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, speed);

    return () => {
      clearInterval(interval_id);
    };
  }, [speed, isRunning]);

  const blueBtnClass =
    "px-4 py-2 rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-50 cursor-grab";

  const greenBtnClass =
    "px-4 py-2 rounded border-2 border-green-500 text-green-500 hover:bg-green-50 cursor-grab";

  const yellowBtnClass =
    "px-4 py-2 rounded border-2 border-yellow-400 text-yellow-500 hover:bg-yellow-50 cursor-grab";

  const redBtnClass =
    "px-4 py-2 rounded border-2 border-red-500 text-red-500 hover:bg-red-50 cursor-grab";

  const greyBtnClass =
    "px-4 py-2 rounded border-2 border-gray-500 text-gray-700 hover:bg-gray-100 cursor-grab";

  return (
    <>
      <div className="flex justify-center items-center mt-24 p-4">
        <div className="flex items-center justify-around w-[720px] gap-6">
          <button className={blueBtnClass} onClick={() => setSpeed(speed / 2)}>
            Increase Speed
          </button>
          <h1 className="text-4xl font-semibold select-none">
            {timer} <span className="text-2xl">sec</span>
          </h1>
          <button
            className={yellowBtnClass}
            onClick={() => setSpeed(speed * 2)}
          >
            Decrease Speed
          </button>

          {!isRunning ? (
            <button
              className={greenBtnClass}
              onClick={() => setIsRunning(true)}
            >
              Start
            </button>
          ) : (
            <button className={redBtnClass} onClick={() => setIsRunning(false)}>
              Pause
            </button>
          )}

          <button
            className={greyBtnClass}
            onClick={() => {
              setTimer(0);
              setSpeed(1000);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 text-lg font-medium select-none">
        {speed !== 1000 ? `${1000 / speed}x` : ""}
      </div>
    </>
  );
}
