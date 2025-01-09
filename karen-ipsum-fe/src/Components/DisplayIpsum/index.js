import React from "react";
const DisplayIpsum = ({ ipsum }) => {
    return (React.createElement("div", null, ipsum.length > 0 ? (ipsum.map((paragraph, index) => (React.createElement("p", { key: index, className: "w-1/4 m-auto mb-6 text-center" }, paragraph)))) : (React.createElement("p", { className: "text-center" }, "Make your selection and click generate."))));
};
export default DisplayIpsum;
