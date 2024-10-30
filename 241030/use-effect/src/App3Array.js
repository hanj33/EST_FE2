import React from "react";
import styled from "styled-components";

const ItemList = styled.div`
  margin: 60px auto;

  ul {
    display: flow-root;
    padding: 10px;
  }

  li {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    list-style: none;
    margin: 20px 0;
  }

  .options {
    display: flow-root;
    padding: 10px;
  }
  button {
    float: right;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #fff;

    cursor: pointer;
  }

  strong {
    display: block;
  }
`;

function App3() {
  const nationList = [
    {
      title: "France",
      population: "200",
      id: "1",
      loc: "europe",
    },
    {
      title: "Italy",
      population: "300",
      id: "2",
      loc: "europe",
    },
    {
      title: "England",
      population: "400",
      id: "3",
      loc: "europe",
    },
    {
      title: "America",
      population: "500",
      id: "4",
      loc: "north-america",
    },
    {
      title: "Korea",
      population: "600",
      id: "5",
      loc: "asia",
    },
  ];
  return (
    <>
      <ItemList>
        <ul>
          {nationList.map((nation) => {
            return (
              <li key={nation.id}>
                <strong>{nation.title}</strong>
                <data value={nation.population}>{nation.population}</data>
              </li>
            );
          })}
        </ul>
        <div className="options">
          <button>전체 목록</button>
          <button>유럽 목록</button>
        </div>
      </ItemList>
    </>
  );
}

export default App3;
