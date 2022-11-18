import React from "react";

export const TableComp = ({ users }) => {
  //   console.log(users);
  return (
    <div>
      <ul>
        {/* <li>kjhzsdf</li>
        <li>sdfgrdfg</li>
        <li>sdfghjk</li> */}
        {users.map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
      </ul>
    </div>
  );
};
