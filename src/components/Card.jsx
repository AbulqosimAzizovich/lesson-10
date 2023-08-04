import React from "react";
import Modal from "./Modal";
const Card = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="wrapper p-5 flex gap-x-[100px] items-center">
          <div>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Name:</strong></p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Surname:</strong></p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Tel number: </strong></p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Price:</strong></p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Room number: </strong></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
