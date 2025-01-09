import React from "react";

interface DisplayIpsumProps {
  ipsum: string[];
}

const DisplayIpsum: React.FC<DisplayIpsumProps> = ({ ipsum }) => {
  return (
    <div>
      {ipsum.length > 0 ? (
        ipsum.map((paragraph, index) => (
          <p key={index} className="w-1/4 m-auto mb-6 text-center">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="text-center">Make your selection and click generate.</p>
      )}
    </div>
  );
};

export default DisplayIpsum;
