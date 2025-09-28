import { useState, useEffect } from "react";

export function App() {
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [showSpeed, setShowSpeed] = useState(undefined);

  useEffect(() => {
    const interval_id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, speed);

    return () => {
      clearInterval(interval_id);
    };
  }, [speed]);

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
            {showSpeed && <p>{speed}</p>}
          </div>

          <div>
            <h1>{timer}</h1>
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
            {showSpeed === "" ? <p>{speed}</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
