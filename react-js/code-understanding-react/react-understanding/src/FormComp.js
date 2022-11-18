import React, { useState } from "react";

export const FormComp = ({ addUsers }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setName(value);
    // console.log(users);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    addUsers(name);
  };

  return (
    <div>
      <form method="" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleOnChange} type="text" name="name" id="name" />
        </div>
        <button>
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};
