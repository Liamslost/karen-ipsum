import { useState } from "react";
import BASE_URL from "../../settings";

function useFetchIpsum() {
  const [ipsum, setIpsum] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIpsum = async (
    moodId: string,
    sentences: number,
    paragraphs: number
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${BASE_URL}/ipsum/?id=${moodId}&sentences=${sentences}&parragraphs=${paragraphs}`
      );
      const data = await response.json();
      setIpsum(data.data || []);
    } catch (err) {
      setError("Failed to fetch Ipsum. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { ipsum, loading, error, fetchIpsum };
}

export default useFetchIpsum;
