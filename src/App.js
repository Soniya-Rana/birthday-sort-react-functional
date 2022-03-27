import React, { useState } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";

const App = () => {
  const [parameterSelected, setParameterSelected] = useState("");

  const compareParameter = (parameter) => {
    if (parameter === "name") {
      setParameterSelected("name");
    } else {
      setParameterSelected("birth");
    }
  };

  return (
    <div className="container">
      <center>
        <h1>Birthday Records</h1>
      </center>
      <Radio
        parameterSelected={parameterSelected}
        compareParameter={compareParameter}
      />
      <Table parameterSelected={parameterSelected} />
    </div>
  );
};

export default App;
