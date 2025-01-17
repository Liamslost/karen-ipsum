import React from "react";
const ParagraphSelector = ({ value, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "paragraphs", className: "block text-sm font-medium text-gray-700 mb-1" }, "Number of Paragraphs"),
        React.createElement("select", { id: "paragraphs", value: value, onChange: (e) => onChange(Number(e.target.value)), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500" }, [1, 2, 3, 4, 5].map((num) => (React.createElement("option", { key: num, value: num },
            num,
            " ",
            num > 1 ? "Paragraphs" : "Paragraph"))))));
};
export default ParagraphSelector;
