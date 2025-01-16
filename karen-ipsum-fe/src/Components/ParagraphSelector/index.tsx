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
      <label htmlFor="paragraphs" className="block text-sm font-medium text-gray-700 mb-1">Number of Paragraphs</label>
      <select
        id="paragraphs"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
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
