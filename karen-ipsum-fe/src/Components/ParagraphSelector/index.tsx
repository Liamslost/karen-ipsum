import React from "react";

interface ParagraphSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const ParagraphSelector: React.FC<ParagraphSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="paragraphs">Paragraphs:</label>
      <select
        id="paragraphs"
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

export default ParagraphSelector;
