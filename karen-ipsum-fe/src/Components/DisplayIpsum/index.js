import React from "react";
const DisplayIpsum = ({ ipsum }) => {
    return (React.createElement(React.Fragment, null, ipsum.length > 0
        ? ipsum.map((paragraph, index) => (React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" },
            React.createElement("p", { key: index, className: "text-gray-600 mb-4" }, paragraph))))
        : ""));
};
export default DisplayIpsum;
