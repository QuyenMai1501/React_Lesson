import React from "react";

function Title() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "15px",
        marginBottom: "20px",
      }}>
      <span style={{ marginRight: "20px", cursor: "pointer" }}>Title</span>
      <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
      <span style={{ cursor: "pointer" }}>Link</span>
    </div>
  );
}

export default Title;
