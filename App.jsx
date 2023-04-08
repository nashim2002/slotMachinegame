import React from "react";
import styles from "./index.css";
import SlotM from "./SlotM";
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>🎰
      </h1>
      <div className="sloteMachine">
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="😄" y="🐄" z="🐐" />
        <SlotM x="💞" y="💔" z="❤️" />
      </div>
    </>
  );
};
export default App;
