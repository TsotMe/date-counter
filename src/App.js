import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function addDays() {
    const result = new Date();
    result.setDate(result.getDate() + count);

    return result.toDateString();
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <span>{step}</span>
      </div>

      <div className="count">
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>

      <p>
        {count > 0 && `${count} days from today is ${addDays()}`}
        {count < 0 && `${Math.abs(count)} days ago was ${addDays()}`}
        {count === 0 && `Today is ${addDays()}`}
      </p>

      {(step !== 1 || count !== 0) && (
        <button onClick={handleReset}>reset</button>
      )}
    </div>
  );
}
