import React from "react";
import "./MenuListItem.css";

function MenuListItem({ mood, setMood, isSelected }) {
  return (
    <li className={isSelected ? "selected" : null}>
      <button onClick={() => setMood(mood)}>기분이: {mood}</button>
    </li>
  );
}

export default MenuListItem;
