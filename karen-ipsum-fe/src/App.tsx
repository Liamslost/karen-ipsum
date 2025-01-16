import { AllMoods } from "./Components/AllMoods";
import { useState } from "react";
import DisplayIpsum from "./Components/DisplayIpsum";
import ParagraphSelector from "./Components/ParagraphSelector";
import SentenceSelector from "./Components/SentenceSelector";
import useFetchIpsum from "./Components/UseFetchIpsum";
import React from "react";
import {
  MessageSquare,
  Coffee,
  Star,
  UserCircle,
  Sparkles,
} from "lucide-react";

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
    <div className="w-full min-h-screen bg-rose-50">
      <nav className="w-full bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-rose-600">KarenIpsum™</h1>
          <div>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
              Speak to Manager
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-rose-600" />
            Generate Karen-ipsum
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
            onSubmit={handleSubmit}
          ><div>
            <AllMoods onChange={setMoodId} />
            </div>
            <div>
            <SentenceSelector value={sentences} onChange={setSentences} />
            </div>
            <div>
            <ParagraphSelector value={paragraphs} onChange={setParagraphs} />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles />
              Generate
            </button>
          </form>
        </div>
        <section>
            {loading && <p className="text-center">Loading Ipsum...</p>}
            {error && (
              <p className="text-center" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <DisplayIpsum ipsum={ipsum} />
          </section>
      </main>
      <footer className="w-full bg-white relative bottom-0 py-4 mt-12 text-center text-sm text-gray-500">
        © 2024 KarenIpsum™ - All Rights Reserved (And We WILL Speak to Your
        Manager About Them)
      </footer>
    </div>
  );
}

export default App;
