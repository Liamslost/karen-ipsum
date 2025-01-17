import { AllMoods } from "./Components/AllMoods/index.js";
import { useState } from "react";
import DisplayIpsum from "./Components/DisplayIpsum/index.js";
import ParagraphSelector from "./Components/ParagraphSelector/index.js";
import SentenceSelector from "./Components/SentenceSelector/index.js";
import useFetchIpsum from "./Components/UseFetchIpsum/index.js";
import React from "react";
import {
  MessageSquare,
  Coffee,
  Star,
  UserCircle,
  X,
  ChevronDown,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import ContactModal from "./Components/ContactModal/ContactModal.js";

function App() {
  const [moodId, setMoodId] = useState("");
  const [sentences, setSentences] = useState(1);
  const [paragraphs, setParagraphs] = useState(1);
  const { ipsum, loading, error, fetchIpsum } = useFetchIpsum();
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = document.getElementById("my-form") as HTMLFormElement;
  const status = document.getElementById("my-form-status") as HTMLElement;

  async function handleFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const status = document.getElementById("my-form-status") as HTMLElement;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.innerHTML = "Thanks! I'll be in touch soon!";
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          status.innerHTML = errorData.errors
            .map((error: { message: string }) => error.message)
            .join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your mail.";
        }
      }
    } catch (error) {
      status.innerHTML = "Oops! That didn't work.";
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchIpsum(moodId, sentences, paragraphs);
  };

  return (
    <>
    <div className="w-full min-h-[80vh] bg-rose-50">
      <nav className="w-full bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-rose-600">KarenIpsum™</h1>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
            >
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
          >
            <div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DisplayIpsum ipsum={ipsum} />
          </div>
        </section>
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
          <footer className="w-full bg-white mt-12 py-4">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-center text-sm text-gray-500 mb-3">
              © 2023 KarenIpsum™ - All Rights Reserved (And We WILL Speak to Your
              Manager About Them)
            </p>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-500 transition-colors mb-2"
              >
                <span className="underline">Read disclaimer</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isDisclaimerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  isDisclaimerOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-center text-xs text-gray-400 italic max-w-2xl mx-auto">
                  KarenIpsum™ is a parody lorem ipsum generator meant for
                  entertainment purposes only. <br />
                  It playfully references internet culture and is not intended to
                  mock or offend any individuals. <br />
                  Remember, the best humor brings people together!
                </p>
              </div>
            </div>
          </div>
        </footer>
        </>
  );
}

export default App;
