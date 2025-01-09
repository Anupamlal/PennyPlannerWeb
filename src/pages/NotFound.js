import React from "react";

export const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <title>Not Found!</title>
      <h1 style={{ fontSize: "72px", color: "#E74C3C" }}>404</h1>
      <h2 style={{ fontSize: "24px", color: "#2C3E50" }}>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#3498DB", textDecoration: "none" }}>
        Go back to Home
      </a>
    </div>
  );
};
