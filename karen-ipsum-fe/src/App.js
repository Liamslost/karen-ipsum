var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AllMoods } from "./Components/AllMoods/index.js";
import { useState } from "react";
import DisplayIpsum from "./Components/DisplayIpsum/index.js";
import ParagraphSelector from "./Components/ParagraphSelector/index.js";
import SentenceSelector from "./Components/SentenceSelector/index.js";
import useFetchIpsum from "./Components/UseFetchIpsum/index.js";
import React from "react";
import { ChevronDown, Sparkles, } from "lucide-react";
import ContactModal from "./Components/ContactModal/ContactModal.js";
function App() {
    const [moodId, setMoodId] = useState("");
    const [sentences, setSentences] = useState(1);
    const [paragraphs, setParagraphs] = useState(1);
    const { ipsum, loading, error, fetchIpsum } = useFetchIpsum();
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = document.getElementById("my-form");
    const status = document.getElementById("my-form-status");
    function handleFormSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const form = event.target;
            const status = document.getElementById("my-form-status");
            const data = new FormData(form);
            try {
                const response = yield fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        Accept: "application/json",
                    },
                });
                if (response.ok) {
                    status.innerHTML = "Thanks! I'll be in touch soon!";
                    form.reset();
                }
                else {
                    const errorData = yield response.json();
                    if (errorData.errors) {
                        status.innerHTML = errorData.errors
                            .map((error) => error.message)
                            .join(", ");
                    }
                    else {
                        status.innerHTML = "Oops! There was a problem submitting your mail.";
                    }
                }
            }
            catch (error) {
                status.innerHTML = "Oops! That didn't work.";
            }
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchIpsum(moodId, sentences, paragraphs);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-full min-h-[80vh] bg-rose-50" },
            React.createElement("nav", { className: "w-full bg-white shadow-sm p-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto flex justify-between items-center" },
                    React.createElement("h1", { className: "text-2xl font-bold text-rose-600" }, "KarenIpsum\u2122"),
                    React.createElement("div", null,
                        React.createElement("button", { onClick: () => setIsModalOpen(true), className: "px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors" }, "Speak to Manager")))),
            React.createElement("main", { className: "max-w-4xl mx-auto p-6" },
                React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6 mb-6" },
                    React.createElement("h2", { className: "text-xl font-semibold mb-4 flex items-center gap-2" },
                        React.createElement(Sparkles, { className: "h-5 w-5 text-rose-600" }),
                        "Generate Karen-ipsum"),
                    React.createElement("form", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", onSubmit: handleSubmit },
                        React.createElement("div", null,
                            React.createElement(AllMoods, { onChange: setMoodId })),
                        React.createElement("div", null,
                            React.createElement(SentenceSelector, { value: sentences, onChange: setSentences })),
                        React.createElement("div", null,
                            React.createElement(ParagraphSelector, { value: paragraphs, onChange: setParagraphs })),
                        React.createElement("button", { type: "submit", className: "w-full md:w-auto px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center gap-2" },
                            React.createElement(Sparkles, null),
                            "Generate"))),
                React.createElement("section", null,
                    loading && React.createElement("p", { className: "text-center" }, "Loading Ipsum..."),
                    error && (React.createElement("p", { className: "text-center", style: { color: "red" } }, error)),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                        React.createElement(DisplayIpsum, { ipsum: ipsum })))),
            React.createElement(ContactModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })),
        React.createElement("footer", { className: "w-full bg-white mt-12 py-4" },
            React.createElement("div", { className: "max-w-4xl mx-auto px-6" },
                React.createElement("p", { className: "text-center text-sm text-gray-500 mb-3" }, "\u00A9 2023 KarenIpsum\u2122 - All Rights Reserved (And We WILL Speak to Your Manager About Them)"),
                React.createElement("div", { className: "flex flex-col items-center" },
                    React.createElement("button", { onClick: () => setIsDisclaimerOpen(!isDisclaimerOpen), className: "flex items-center gap-1 text-xs text-gray-400 hover:text-gray-500 transition-colors mb-2" },
                        React.createElement("span", { className: "underline" }, "Read disclaimer"),
                        React.createElement(ChevronDown, { className: `h-3 w-3 transition-transform duration-200 ${isDisclaimerOpen ? "rotate-180" : ""}` })),
                    React.createElement("div", { className: `overflow-hidden transition-all duration-1000 ease-in-out ${isDisclaimerOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}` },
                        React.createElement("p", { className: "text-center text-xs text-gray-400 italic max-w-2xl mx-auto" },
                            "KarenIpsum\u2122 is a parody lorem ipsum generator meant for entertainment purposes only. ",
                            React.createElement("br", null),
                            "It playfully references internet culture and is not intended to mock or offend any individuals. ",
                            React.createElement("br", null),
                            "Remember, the best humor brings people together!")))))));
}
export default App;
