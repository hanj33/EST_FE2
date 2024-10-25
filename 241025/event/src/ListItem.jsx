import React, { useState } from "react";

function ListItem({ data }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {/* false였다면 true로, true였다면 false로 토글 시키기(!isActive) */}
        {data.name}
      </button>

      {isActive ? (
        <dl>
          <dt>Email: </dt>
          <dd>{data.email}</dd>
          <dt>Job: </dt>
          <dd>{data.job}</dd>
        </dl>
      ) : null}
    </>
  );
}

export default ListItem;
