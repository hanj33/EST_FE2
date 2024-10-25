import React from "react";
// import "../App.css";

function Homepage({ setLogin }) {
  return (
    <div>
      Homepage
      <button
        onClick={() => {
          setLogin(false);
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Homepage;
