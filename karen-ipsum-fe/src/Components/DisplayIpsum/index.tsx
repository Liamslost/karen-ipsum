import React from "react";

interface DisplayIpsumProps {
  ipsum: string[];
}

const DisplayIpsum: React.FC<DisplayIpsumProps> = ({ ipsum }) => {
  return (
    <div className="rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {ipsum.length > 0 ? (
        ipsum.map((paragraph, index) => (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p key={index} className="text-gray-600 mb-4" >
            {paragraph}
          </p>
          </div>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayIpsum;
