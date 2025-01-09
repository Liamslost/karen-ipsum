import React from "react";

interface SentenceSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const SentenceSelector: React.FC<SentenceSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="sentences">Sentences:</label>
      <select
        id="sentences"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SentenceSelector;
