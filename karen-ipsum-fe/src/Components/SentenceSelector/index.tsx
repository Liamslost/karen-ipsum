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
      <label htmlFor="sentences" className="block text-sm font-medium text-gray-700 mb-1">Sentences per Paragraph</label>
      <select
        id="sentences"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} {num > 1 ? "sentences" : "sentence"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SentenceSelector;
