import { useState, useEffect } from "react";

export function App() {
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [isStart, setisStart] = useState(false);
  const [isStopped, setisStopped] = useState(true);
  const [showSpeed, setShowSpeed] = useState(undefined);

  useEffect(() => {
    let interval_id = undefined;
    if (!isStopped && isStart) {
      interval_id = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, speed);
    }

    return () => {
      clearInterval(interval_id);
    };
  }, [speed, isStopped, isStart]);

  return (
    <>
      <div className="flex justify-around items-center mt-50">
        <div
          className="flex justify-around items-center"
          style={{ width: "700px" }}
        >
          <div>
            <button
              className="myBtn text-blue-400"
              onClick={() => {
                setSpeed(speed / 2);
                setShowSpeed(true);
              }}
            >
              Increase speed
            </button>
            {showSpeed && <p>{1000 / speed}x</p>}
          </div>

          <div>
            <button
              className="myBtn text-green-400"
              onClick={() => {
                setisStart(true);
                setisStopped(false);
              }}
            >
              Start
            </button>
          </div>

          <div>
            <h1>{timer}</h1>
          </div>

          <div>
            <button
              className="myBtn text-red-400"
              onClick={() => {
                setisStopped(true);
                setisStart(false);
              }}
            >
              Stop{" "}
            </button>
          </div>
          <div>
            <button
              className="myBtn text-yellow-400"
              onClick={() => {
                setSpeed(speed * 2);
                setShowSpeed("");
              }}
            >
              Decrease speed
            </button>
            {showSpeed === "" ? <p>- {1000 / speed}x</p> : ""}
          </div>
          <div>
            <button className="myBtn text-red-400" onClick={() => setTimer(0)}>
              Reset{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
