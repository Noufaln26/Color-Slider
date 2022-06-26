import React from 'react';
import '../style.css';

export default function Color({ hex }) {
  return <div className="container" style={{ backgroundColor: hex }}></div>;
}
