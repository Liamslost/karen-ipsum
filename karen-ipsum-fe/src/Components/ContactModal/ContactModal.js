import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Star, X, AlertTriangle } from "lucide-react";
function ContactModal({ isOpen, onClose }) {
    const [state, handleSubmit] = useForm("meoowlod");
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" },
        React.createElement("div", { className: "bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" },
            React.createElement("div", { className: "p-6" },
                React.createElement("div", { className: "flex justify-between mb-6" },
                    React.createElement("h2", { className: "text-2xl font-bold text-rose-600 flex items-center gap-2" },
                        React.createElement(Star, { className: "h-6 w-6" }),
                        "Demand Manager's Attention"),
                    React.createElement("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600" },
                        React.createElement(X, { className: "h-6 w-6" }))),
                state.succeeded ? (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "text-rose-400 text-center py-4" },
                        "Alright, I\u2019ve listened to your concerns, but let\u2019s be clear here\u2014 ",
                        React.createElement("br", null),
                        " ",
                        React.createElement("br", null),
                        "I\u2019m not going to tolerate this tone much longer and I will have to ask you to leave.",
                        React.createElement("br", null)))) : (React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6", action: "https://formspree.io/f/meoowlod", method: "POST" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "grievance", className: "block text-sm font-medium text-gray-700 mb-1" }, "Type of Grievance"),
                        React.createElement("select", { id: "grievance", name: "grievance", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500", required: true },
                            React.createElement("option", { value: "complaint" }, "\uD83D\uDE24 Unacceptable Service Experience"),
                            React.createElement("option", { value: "suggestion" }, "\uD83D\uDC85 Things That Need Immediate Improvement"),
                            React.createElement("option", { value: "feature" }, "\u2728 Features That Should Have Been Here Already"),
                            React.createElement("option", { value: "other" }, "\uD83D\uDE44 Other Issues That Require Manager's Attention"))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1" }, "Detailed Description of Your Experience"),
                        React.createElement("textarea", { id: "message", name: "message", rows: 4, className: "w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500", placeholder: "Please describe your completely justified complaints in detail. Remember, the customer is ALWAYS right! \uD83D\uDC85", required: true }),
                        React.createElement(ValidationError, { prefix: "Message", field: "message", errors: state.errors })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1" }, "Your Contact Information (Optional)"),
                        React.createElement("input", { id: "email", name: "email", type: "email", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500", placeholder: "So we can update you about your complaints 24/7" }),
                        React.createElement(ValidationError, { prefix: "Email", field: "email", errors: state.errors })),
                    React.createElement("div", { className: "flex items-center gap-2 text-sm text-gray-500" },
                        React.createElement(AlertTriangle, { className: "h-4 w-4 text-rose-600" }),
                        React.createElement("p", null, "Your feedback will be treated with the utmost importance it deserves!")),
                    React.createElement("button", { type: "submit", disabled: state.submitting, className: "w-full py-3 px-6 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center gap-2" },
                        React.createElement(Star, { className: "h-4 w-4" }),
                        state.submitting ? "Submitting..." : "Demand Immediate Attention")))))));
}
export default ContactModal;
