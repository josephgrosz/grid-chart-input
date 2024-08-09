import React from "react";
const Input = ({ value, label = "A", onChange, className }) => {
  return (
    <div className={" input-container col-3 p-0" + className}>
      <div className="border border-dark d-flex">
        <div className="d-flex justify-content-center align-content-center">
          <input
            className="control-label  border-0"
            type="text"
            value={label}
          />
        </div>
        <div className="flex-grow-1">
          <input
            type="text"
            value={value}
            className="control-input border-0 w-100 text-center"
            placeholder="-"
            onChange={(e) => onChange(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Input;
