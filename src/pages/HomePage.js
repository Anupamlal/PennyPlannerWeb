import "../App.css";
import React from "react";

export const HomePage = () => {
  return (
    <div className="App">
      <title>PennyPlanner</title>
      <header className="App-header">
        <h1>Welcome to PennyPlanner</h1>
        <p>Download our app from Appstore & Playstore</p>
        <p>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Terms and Conditions
          </a>
        </p>
      </header>
    </div>
  );
};
