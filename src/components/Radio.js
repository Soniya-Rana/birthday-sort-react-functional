import React, { useState } from "react";

const Radio = ({ compareParameter }) => {
  const [checkedName, setCheckedName] = useState(false);
  const [checkedAge, setCheckedAge] = useState(false);
  const onChange = (e) => {
    if (e.target.name === "name") {
      setCheckedAge(false);
      setCheckedName(true);
    } else {
      setCheckedName(false);
      setCheckedAge(true);
    }
    compareParameter(e.target.name);
  };

  return (
    <div className="radioButtons d-flex justify-content-center">
      <div className="left">
        <input
          name="name"
          checked={checkedName}
          onChange={onChange}
          type="radio"
        />
        <label className="fw-bold">
          &nbsp;&nbsp;Sort by name &nbsp;&nbsp;&nbsp;&nbsp;
        </label>
      </div>
      <div className="right">
        <input
          name="birth"
          checked={checkedAge}
          onChange={onChange}
          type="radio"
        />
        <label className="fw-bold">&nbsp;&nbsp;Sort by age</label>
      </div>
    </div>
  );
};

export default Radio;
