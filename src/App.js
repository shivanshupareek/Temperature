import { useState } from "react";

function App() {
  const [slider, setSlider] = useState(23);
  const [fahrenheitSlider, setFahrenheitSlider] = useState(78);
  const [showCelsius, setShowCelsius] = useState(true);

  const toggleTemperature = () => {
    setShowCelsius((prev) => !prev);
  };

  return (
    <div>
      <div className="temperature">
        <div className="conversionBackground">
          <button
            type="button"
            className={`celcius ${showCelsius ? "active" : ""}`}
            onClick={toggleTemperature}
          >
            &#8451;
          </button>
          <button
            type="button"
            className={` fahrenheit ${!showCelsius ? "active" : ""}`}
            onClick={toggleTemperature}
          >
            &#8457;
          </button>
        </div>
        {showCelsius ? (
          <Celsius slider={slider} setSlider={setSlider} />
        ) : (
          <Fahrenheit
            fahrenheitSlider={fahrenheitSlider}
            setFahrenheitSlider={setFahrenheitSlider}
          />
        )}
      </div>
    </div>
  );
}

function Celsius({ slider, setSlider }) {
  return (
    <div>
      <div className="card">
        <div
          className={`
          ${slider <= -1 ? "temperatureMinus" : " "}
          ${slider >= 0 ? "temperatureZero" : " "} 
          ${slider >= 10 ? "temperatureTen" : " "} 
          ${slider >= 20 ? "temperatureTwenty" : " "} 
          ${slider >= 30 ? "temperatureThirty" : " "}
          ${slider >= 40 ? "temperatureForty" : " "} 
          ${slider >= 50 ? "temperatureFifty" : " "}
          `}
        >
          <h1>{Number(slider)}&#8451;</h1>
        </div>
        <div>
          <input
            type="range"
            max={60}
            min={-20}
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="slider"
          />
        </div>
        <div className="controls">
          <div className="buttons">
            <button type="button" onClick={() => setSlider(slider - 1)}>
              {" - "}
            </button>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => setSlider(slider + 1)}>
              {" + "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fahrenheit({ fahrenheitSlider, setFahrenheitSlider }) {
  return (
    <div className="card">
      <div
        className={`
            ${fahrenheitSlider <= 30 ? "temperatureMinus" : " "}
            ${fahrenheitSlider >= 32 ? "temperatureZero" : " "}
            ${fahrenheitSlider >= 50 ? "temperatureTen" : " "}
            ${fahrenheitSlider >= 68 ? "temperatureTwenty" : " "}
            ${fahrenheitSlider >= 86 ? "temperatureThirty" : " "}
            ${fahrenheitSlider >= 104 ? "temperatureForty" : " "}
            ${fahrenheitSlider >= 122 ? "temperatureFifty" : " "}
            `}
      >
        <h1>{Number(fahrenheitSlider)}&#8457;</h1>
      </div>
      <div>
        <input
          type="range"
          max={140}
          min={-4}
          value={fahrenheitSlider}
          onChange={(e) => setFahrenheitSlider(Number(e.target.value))}
          className="slider"
        />
      </div>
      <div className="controls">
        <div className="buttons">
          <button
            type="button"
            onClick={() => setFahrenheitSlider(fahrenheitSlider - 1)}
          >
            {" - "}
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => setFahrenheitSlider(fahrenheitSlider + 1)}
          >
            {" + "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
