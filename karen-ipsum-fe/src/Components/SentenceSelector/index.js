import React from "react";
const SentenceSelector = ({ value, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "sentences" }, "Sentences:"),
        React.createElement("select", { id: "sentences", value: value, onChange: (e) => onChange(Number(e.target.value)) }, [1, 2, 3, 4, 5].map((num) => (React.createElement("option", { key: num, value: num }, num))))));
};
export default SentenceSelector;
