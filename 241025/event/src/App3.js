import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  // 유저 정보
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  //   const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((item, index) => {
          return (
            <li key={item.id}>
              <ListItem data={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
