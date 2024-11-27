import React from 'react';
import './toggleswitch.css';

const ToggleSwitch = ({ isActive, onChange, label }) => {
  return (
    <div className="toggle-container">
      {label && <span className="toggle-label">{label}</span>}
      <label className="switch">
        <input
          type="checkbox"
          checked={isActive}
          onChange={onChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
