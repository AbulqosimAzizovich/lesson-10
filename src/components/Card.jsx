import React from "react";
import Modal from "./Modal";    
const Card = (dataMD) => {
  const {
    dataMD: { _Name, _Number, _Surname, _Price, _Room },
  } = dataMD;
  console.log(dataMD);

  return (
    <>
      <div className="container mx-auto ">
        <div className="wrapper p-5 flex gap-x-[100px] items-center">
          <div>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Name:</strong> {_Name}</p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Surname:</strong> {_Surname}</p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Tel number: </strong> {_Number}</p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Price:</strong> {_Price}</p>
            <p className="mb-10 text-lg font-medium text-[#23365e]"><strong>Room number: </strong> {_Room}</p>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Card;
// {state: {title, isDone, id}, index}