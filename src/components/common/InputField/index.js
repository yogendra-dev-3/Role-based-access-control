import React, { useState } from "react";
import "./inputfield.css";
import { Eye, EyeSlash } from "phosphor-react";

export const InputField = (props) => {
  const {
    type = "text",
    placeholder = "",
    value,
    onChange = () => {},
    clasName = "",
    onBlur = () => {},
    label = "",
    error = "",
  } = props;

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="textfield-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        <input
          type={type === "password" && !isPasswordVisible ? "password" : "text"}
          className={clasName}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
        />
        {type === "password" && (
          <span
            className="toggle-password"
            onClick={handlePasswordVisibility}
            role="button"
          >
            {!isPasswordVisible ? <Eye size={16} color="#f8f7f7" /> : <EyeSlash size={16} color="#f8f7f7" />}
          </span>
        )}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};
