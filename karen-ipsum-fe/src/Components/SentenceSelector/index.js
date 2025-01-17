import React from "react";
const SentenceSelector = ({ value, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "sentences", className: "block text-sm font-medium text-gray-700 mb-1" }, "Sentences per Paragraph"),
        React.createElement("select", { id: "sentences", value: value, onChange: (e) => onChange(Number(e.target.value)), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500" }, [1, 2, 3, 4, 5].map((num) => (React.createElement("option", { key: num, value: num },
            num,
            " ",
            num > 1 ? "sentences" : "sentence"))))));
};
export default SentenceSelector;
