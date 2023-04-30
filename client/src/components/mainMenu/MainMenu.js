import React from "react";

function MainMenu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 0 10px 0",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "90%",
        }}
      >
        <img src="menu.png" alt="menu" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default MainMenu;
