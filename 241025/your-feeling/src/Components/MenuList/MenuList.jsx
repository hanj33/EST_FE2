import React from "react";
// import "../App.css";
import MenuListItem from "../MenuListItem/MenuListItem";

function MenuList({ setMood, mood }) {
  // 기분 상태 리스트
  const menus = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고예요! 😄",
    "미쳤어요!!!!!!! 🤪",
  ];
  return (
    <ul className="container-list">
      {menus.map((moodEl, index) => {
        return (
          <MenuListItem
            isSelected={mood === moodEl}
            key={index}
            mood={moodEl}
            setMood={setMood}
          />
        );
      })}
    </ul>
  );
}

export default MenuList;
