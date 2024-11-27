import React from "react";
import "./select.css";

export const SelectField = (props) => {
  const {
    label = "",
    value,
    onChange = () => {},
    options = [],
    error = "",
    clasName = "",
  } = props;

  return (
    <div className="selectfield-container">
      {label && <label>{label}</label>}
      <div className="select-wrapper">
        <select
          className={`select-field ${clasName}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">-</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};
