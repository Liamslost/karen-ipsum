var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import BASE_URL from "../../settings";
import React from "react";
export function AllMoods({ onChange }) {
    const [moods, setMoods] = useState([]);
    const [error, setError] = useState(null);
    function getMoods() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${BASE_URL}/moods`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = yield response.json();
                setMoods(result.data);
            }
            catch (error) {
                console.error("Failed to fetch moods:", error);
                setError("Failed to load moods. Please try again.");
            }
        });
    }
    useEffect(() => {
        getMoods();
    }, []);
    if (error) {
        return React.createElement("p", { style: { color: "red" } }, error);
    }
    if (moods.length === 0) {
        return React.createElement("p", null, "Loading moods...");
    }
    return (React.createElement("select", { name: "moods", id: "moods", onChange: (e) => onChange(e.target.value) },
        React.createElement("option", { value: "" }, "Select a mood"),
        moods.map((mood) => (React.createElement("option", { key: mood._id, value: mood._id }, mood.name)))));
}
