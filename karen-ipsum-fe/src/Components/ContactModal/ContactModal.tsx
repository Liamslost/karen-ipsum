import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Star, X, AlertTriangle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm("meoowlod");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold text-rose-600 flex items-center gap-2">
              <Star className="h-6 w-6" />
              Demand Manager's Attention
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {state.succeeded ? (
            <>
            <p className="text-rose-400 text-center py-4">
            Alright, I’ve listened to your concerns, but let’s be clear here— <br /> <br />
            I’m not going to tolerate this tone much longer and I will have to ask you to leave.<br />
            </p>
            
            </>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://formspree.io/f/meoowlod"
              method="POST"
            >
              <div>
                <label
                  htmlFor="grievance"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type of Grievance
                </label>
                <select
                  id="grievance"
                  name="grievance"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  required
                >
                  <option value="complaint">
                    😤 Unacceptable Service Experience
                  </option>
                  <option value="suggestion">
                    💅 Things That Need Immediate Improvement
                  </option>
                  <option value="feature">
                    ✨ Features That Should Have Been Here Already
                  </option>
                  <option value="other">
                    🙄 Other Issues That Require Manager's Attention
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Detailed Description of Your Experience
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Please describe your completely justified complaints in detail. Remember, the customer is ALWAYS right! 💅"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Contact Information (Optional)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  placeholder="So we can update you about your complaints 24/7"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <p>
                  Your feedback will be treated with the utmost importance it
                  deserves!
                </p>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 px-6 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
              >
                <Star className="h-4 w-4" />
                {state.submitting ? "Submitting..." : "Demand Immediate Attention"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
