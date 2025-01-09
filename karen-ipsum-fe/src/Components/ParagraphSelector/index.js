import React from "react";
const ParagraphSelector = ({ value, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "paragraphs" }, "Paragraphs:"),
        React.createElement("select", { id: "paragraphs", value: value, onChange: (e) => onChange(Number(e.target.value)) }, [1, 2, 3, 4, 5].map((num) => (React.createElement("option", { key: num, value: num }, num))))));
};
export default ParagraphSelector;
