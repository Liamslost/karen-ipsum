import { AllMoods } from "./Components/AllMoods";
import { useState } from "react";
import DisplayIpsum from "./Components/DisplayIpsum";
import ParagraphSelector from "./Components/ParagraphSelector";
import SentenceSelector from "./Components/SentenceSelector";
import useFetchIpsum from "./Components/UseFetchIpsum";
import React from 'react';
function App() {
    const [moodId, setMoodId] = useState("");
    const [sentences, setSentences] = useState(1);
    const [paragraphs, setParagraphs] = useState(1);
    const { ipsum, loading, error, fetchIpsum } = useFetchIpsum();
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchIpsum(moodId, sentences, paragraphs);
    };
    return (React.createElement("div", { className: "" },
        React.createElement("h1", { className: "text-center text-7xl" }, "KAREN - IPSUM"),
        React.createElement("form", { className: "text-center pt-10 pb-8", onSubmit: handleSubmit },
            React.createElement("div", { className: "flex justify-center pb-8 gap-6" },
                React.createElement("div", null,
                    React.createElement(AllMoods, { onChange: setMoodId })),
                React.createElement("div", null,
                    React.createElement(SentenceSelector, { value: sentences, onChange: setSentences })),
                React.createElement("div", null,
                    React.createElement(ParagraphSelector, { value: paragraphs, onChange: setParagraphs }))),
            React.createElement("input", { className: "border py-2 px-4", type: "submit", value: "Generate" })),
        React.createElement("section", null,
            loading && React.createElement("p", { className: "text-center" }, "Loading Ipsum..."),
            error && React.createElement("p", { style: { color: "red" } }, error),
            React.createElement(DisplayIpsum, { ipsum: ipsum }))));
}
export default App;
