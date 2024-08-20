import React, { useState } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";

function App() {
 

  return (
    <>
      <header className="first_page" id="landing">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">Conference Expense Planner</h1>
            <p className="budget_sentence">
              {" "}
              Plan your next major event with us!
            </p>
            <div className="getstarted_btn">
              <a href="#content">
                <button
                  onClick={() => handleGetStarted()}
                  className="get-started-btn"
                >
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container `}>
        <ConferenceEvent />
      </div>
    </>
  );
}

export default App;
