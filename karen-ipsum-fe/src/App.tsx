import { AllMoods } from "./Components/AllMoods";
import { useState } from "react";
import DisplayIpsum from "./Components/DisplayIpsum";
import ParagraphSelector from "./Components/ParagraphSelector";
import SentenceSelector from "./Components/SentenceSelector";
import useFetchIpsum from "./Components/UseFetchIpsum";

function App() {
  const [moodId, setMoodId] = useState("");
  const [sentences, setSentences] = useState(1);
  const [paragraphs, setParagraphs] = useState(1);
  const { ipsum, loading, error, fetchIpsum } = useFetchIpsum();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchIpsum(moodId, sentences, paragraphs);
  };

  return (
    <div className="">
      <h1 className="text-center text-7xl">KAREN - IPSUM</h1>
      <form className="text-center pt-10 pb-8" onSubmit={handleSubmit}>
        <div className="flex justify-center pb-8 gap-6">
          <div>
            <AllMoods onChange={setMoodId} />
          </div>
          <div>
            <SentenceSelector value={sentences} onChange={setSentences} />
          </div>
          <div>
            <ParagraphSelector value={paragraphs} onChange={setParagraphs} />
          </div>
        </div>
        <input className="border py-2 px-4" type="submit" value="Generate" />
      </form>
      <section>
        {loading && <p className="text-center">Loading Ipsum...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <DisplayIpsum ipsum={ipsum} />
      </section>
    </div>
  );
}

export default App;
