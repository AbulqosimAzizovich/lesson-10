import React from "react";

const  Tugma = ({ setData }) => {
  return (
    <div>
      <div className="absolute -bottom-12 right-0">
        <button
          onClick={() => setData(true)}
          className="bg-blue-500 px-4 w-[170px] h-[40px] font-semibold text-white rounded-lg active:bg-blue-700"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Tugma;
