import React, { useEffect, useState } from "react";
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

function App4JSON() {
  const [nationList, setNationList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  useEffect(() => {
    //     fetch("http://localhost:3000/nations")
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error("다운로드 실패");
    //         }
    //         return <>response.json()</>;
    //       })
    //       .then((json) => {
    //         return setNationList(json);
    //       })
    //       .catch((error) => console.error(error));
    //
    async function fetchData() {
      try {
        // const response = await fetch("http://localhost:3000/nations");
        const response = await fetch(url);
        // 위에서 url 등록해서 url이라고 써도 됨

        if (!response.ok) {
          throw new Error("다운로드 실패");
        }

        const json = await response.json();
        setNationList(json);
      } catch (error) {
        console.error("다운로드에 실패", error);
      }
    }

    fetchData();
  }, [url]);

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
          <button onClick={() => setUrl("http://localhost:3000/nations")}>
            전체 목록
          </button>
          <button
            onClick={() => setUrl("http://localhost:3000/nations?loc=europe")}
          >
            유럽 목록
          </button>
        </div>
      </ItemList>
    </>
  );
}

export default App4JSON;
