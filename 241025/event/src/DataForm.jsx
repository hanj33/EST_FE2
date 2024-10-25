import React from "react";
import { useState } from "react";

function DataForm({ setPetList }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //     console.log({ name, species, age });

    //     setPetList();
    // 이제 기존 데이터에 새로운 데이터를 추가해야 함...

    // 함수형 업데이트를 사용해야 하는 경우: 새롭게 업데이트되는 값이 기존값을 기반으로 하는 경우
    setPetList((prev) => {
      // 함수로 넣는 건 처음이지...? 콜백함수로,,, 뭐,,,???
      // prev는 이전 결과.. 일단 [...prev] 해서 이전 데이터 먼저 넣어줌
      return [...prev, { name, species, age, id: Date.now() }];
    });

    setName("");
    setSpecies("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <label>
          이름:{" "}
          <input
            type="text"
            placeholder="이름"
            onChange={(event) => setName(event.target.value)}
            value={name}
          ></input>
        </label>
        <label>
          종:{" "}
          <input
            type="text"
            placeholder="종"
            onChange={(event) => setSpecies(event.target.value)}
            value={species}
          ></input>
        </label>
        <label>
          나이:{" "}
          <input
            type="text"
            placeholder="나이"
            onChange={(event) => setAge(event.target.value)}
            value={age}
          ></input>
        </label>
        <button type="submit">추가하기</button>
      </fieldset>
    </form>
  );
}

export default DataForm;
