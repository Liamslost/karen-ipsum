import { useEffect, useState } from "react";
import BASE_URL from "../../settings";

interface Moods {
  _id: string;
  name: string;
}

interface AllMoodsProps {
  onChange: (value: string) => void;
}

export function AllMoods({ onChange }: AllMoodsProps) {
  const [moods, setMoods] = useState<Moods[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function getMoods() {
    try {
      const response = await fetch(`${BASE_URL}/moods`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setMoods(result.data);
    } catch (error) {
      console.error("Failed to fetch moods:", error);
      setError("Failed to load moods. Please try again.");
    }
  }

  useEffect(() => {
    getMoods();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (moods.length === 0) {
    return <p>Loading moods...</p>;
  }

  return (
    <select name="moods" id="moods" onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a mood</option>
      {moods.map((mood) => (
        <option key={mood._id} value={mood._id}>
          {mood.name}
        </option>
      ))}
    </select>
  );
}
