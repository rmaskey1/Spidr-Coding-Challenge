import { useState } from 'react';

interface PricePickerProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

function PricePickerForm({ value, onChange, max = 300 }: PricePickerProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);
    setInputValue(val.toString());
    onChange(val);
  }

  return (
    <div className="price-picker">
      <div className="form-title">Guess the price,<br/>Get the air fryer!</div>
      <div className="price-display">${value}</div>
      <label className="price-label">Adjust your guess:</label>
      <div className="slider-container">
        <input
          type="range"
          min={0}
          max={max}
          value={value}
          onChange={handleSliderChange}
          className="slider"
        />
        <div
          className="price-bubble"
          style={{ left: `${(value / max) * 100}%` }}
        >
          ${value}
        </div>
      </div>
    </div>
  );
}

export default PricePickerForm;

