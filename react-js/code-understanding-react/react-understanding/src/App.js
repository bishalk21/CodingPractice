import { useState } from "react";
import "./App.css";
import { FormComp } from "./FormComp";
import { TableComp } from "./TableComp";

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = (newUsers) => {
    setUsers([...users, newUsers]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {/* form  */}
        <FormComp addUsers={addUsers} />
        <hr />
        {/* list */}
        <TableComp users={users} />
      </div>
    </div>
  );
}

export default App;
