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

  return (
    <>
      <div className="flex justify-around items-center mt-50">
        <div
          className="flex justify-around items-center"
          style={{ width: "700px" }}
        >
          <div>
            <button
              className="myBtn text-lg text-blue-400"
              onClick={() => setSpeed(speed / 2)}
            >
              Increase speed
            </button>
            
          </div>

          <div>
            <h1>{timer} sec</h1>
          </div>

          <div>
            <button
              className="myBtn text-lg text-yellow-400"
              onClick={() => setSpeed(speed * 2)}
            >
              Decrease speed
            </button>
            
          </div>

          {!isRunning && (
            <div>
              <button
                className="myBtn text-lg text-green-400"
                onClick={() => setIsRunning(true)}
              >
                Start
              </button>
            </div>
          )}

          {isRunning && (
            <div>
              <button
                className="myBtn text-lg text-red-400"
                onClick={() => setIsRunning(false)}
              >
                Pause
              </button>
            </div>
          )}
          <div>
            <button
              className="myBtn text-lg"
              onClick={() => {
                setTimer(0);
                setSpeed(1000);
                setIsRunning(false);
              }}
            >
              Reset
            </button>
          </div>
        <div>{speed !== 1000 ? <p>{1000 / speed}x</p> : ""}</div>
        </div>
      </div>
    </>
  );
}
