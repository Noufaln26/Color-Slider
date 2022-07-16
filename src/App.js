import React, { useState, useEffect } from 'react';
import './style.css';
import Slider from './components/Slider';
import Color from './components/Color';
import { FullColorHex } from './util/FullColorHex';

export default function App() {
  const [green, setGreen] = useState(0);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hexvalue, setHexValue] = useState('#000000');

  const onColorTypeChange = (color, colorType) => {
    switch (colorType) {
      case 'red':
        setRed(color);
        break;
      case 'green':
        setGreen(color);
        break;
      case 'blue':
        setBlue(color);
        break;
      default:
        console.error(`Invalid color type: ${colorType}`);
        break;
    }
  };

  useEffect(() => {
    setHexValue(FullColorHex(red, green, blue));
  }, [red, green, blue]);

  return (
    <div className="App">
      <h1>Color Slider {hexvalue}</h1>

      <Slider onColorChange={onColorTypeChange} color={red} colorType="red" />
      <br />
      <Slider
        onColorChange={onColorTypeChange}
        color={green}
        colorType="green"
      />
      <br />
      <Slider onColorChange={onColorTypeChange} color={blue} colorType="blue" />
      <br />

      <Color hex={hexvalue} />
        <p>Made with &hearts; Noufal<p>
    </div>
    
  );
}
