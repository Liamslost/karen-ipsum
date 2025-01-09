var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState } from "react";
import BASE_URL from "../../settings";
function useFetchIpsum() {
    const [ipsum, setIpsum] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchIpsum = (moodId, sentences, paragraphs) => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        setError(null);
        try {
            const response = yield fetch(`${BASE_URL}/ipsum/?id=${moodId}&sentences=${sentences}&parragraphs=${paragraphs}`);
            const data = yield response.json();
            setIpsum(data.data || []);
        }
        catch (err) {
            setError("Failed to fetch Ipsum. Please try again.");
        }
        finally {
            setLoading(false);
        }
    });
    return { ipsum, loading, error, fetchIpsum };
}
export default useFetchIpsum;
