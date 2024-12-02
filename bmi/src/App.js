import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMsg] = useState("");
  const [bmi, setBmi] = useState(0);

  function calcBmi(e) {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Empty input fields!");
      return;
    }

    let b = (weight / height ** 2) * 703;
    setBmi(b);

    if (b < 25) {
      setMsg("You are skinny, eat some 🥩");
    } else if (b >= 25 && b < 30) {
      setMsg("You are healthy, 💪");
    } else {
      setMsg("You are overweight, lift some 🏋️");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                setWeight(0);
                setHeight(0);
                setMsg("");
                setBmi(0);
              }}
            >
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h1>Your BMI is: {bmi.toFixed(2)}</h1>
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
