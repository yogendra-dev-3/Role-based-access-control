import React from "react";
import "./checkbox.css"; // Custom styling file

export const Checkbox = ({ label, checked, onChange, error }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
      {error && <span className="checkbox-error">{error}</span>}
    </div>
  );
};
