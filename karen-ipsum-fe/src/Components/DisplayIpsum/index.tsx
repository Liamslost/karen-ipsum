import React from "react";

interface DisplayIpsumProps {
  ipsum: string[];
}

const DisplayIpsum: React.FC<DisplayIpsumProps> = ({ ipsum }) => {
  return (
    <>
      {ipsum.length > 0
        ? ipsum.map((paragraph, index) => (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            </div>
          ))
        : ""}
    </>
  );
};

export default DisplayIpsum;
