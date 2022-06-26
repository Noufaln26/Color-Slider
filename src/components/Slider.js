import React from 'react';
import '../style.css';

export default function Slider({ color, colorType, onColorChange }) {
  const newColor = (e) => onColorChange(e.target.value, colorType);

  return (
    <div>
      <label>
        {colorType} - {color}
      </label>
      <input min="0" max="255" type="range" value={color} onChange={newColor} />
    </div>
  );
}
