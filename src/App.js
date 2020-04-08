//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(14);
  const [tigersScore, setTigersScore] = useState(14);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">3</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionsScore(lionsScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(lionsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigersScore(tigersScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigersScore(tigersScore + 3)}>Away Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="nextQuarterButton" onClick={() => setQuarter(quarter + 1)}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
