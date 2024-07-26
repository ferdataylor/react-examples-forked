import React from 'react';
import './style.css';

export default function OnChangeExample() {
  const handleCapture = (event) => {
    console.log('Capturing phase:', event.target.value);
  };

  const handleChange = (event) => {
    console.log('Bubbling phase:', event.target.value);
  };

  return (
    <div style={{ paddingTop: '1em' }}>
      <hr></hr>
      <h3>onChange Example w/TextField</h3>
      <input
        type="text"
        onChangeCapture={handleCapture}
        onChange={handleChange}
      />
    </div>
  );
}
