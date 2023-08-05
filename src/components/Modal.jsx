import React from "react";
import { useState, useRef } from "react";

const Modal = ({ setData, setDataMd, dataMD }) => {
  const See = (e) => {
    e.preventDefault();
    const [input_name, input_surname, input_roomnm, input_number, input_price] =
      e.target.querySelectorAll("input");

    const newData = {
      id: Date.now(),
      _Name: input_name.value,
      _Surname: input_surname.value,
      _Number: input_number.value,
      _Price: input_price.value,
      _Room: input_roomnm.value,
    };

    if (
      newData._Name.trim().length &&
      newData._Surname.trim().length &&
      newData._Number.trim().length &&
      newData._Price.trim().length &&
      newData._Room.trim().length
    ) {
      setDataMd(newData);
      input_name.value = "";
      input_surname.value = "";
      input_number.value = "";
      input_price.value = "";
      input_roomnm.value = "";
    } else {
      alert("Please enter a titles");
    }
  };

  return (
    <>
      <div className="w-full h-[130vh] fixed z-[99] bg-[rgb(0,0,0,0.6)]"></div>

      <div className="modal_window z-[999]">
        <div className="w-[800px] text-[#041830] bg-indigo-300 top-[20%] flex flex-col items-center justify-center gap-5 right-[29.1%] rounded-[15px] h-[600px] p-5 fixed z-[999]">
          <h1 className="mb-6 text-[30px] font-bold font-sans">Book a room</h1>
          <form onSubmit={(e) => See(e)} className="relative">
            <div className="flex gap-4">
              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Name
                </label>
                <input
                  id="input_name"
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Surname
                </label>
                <input
                  id="input_surname"
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Your Surname"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-2 mt-5">
              <label className="font-semibold text-center text-[15px]">
                Phone number
              </label>
              <input
                id="input_number"
                type="tel"
                className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                placeholder="Phone number"
              />
            </div>

            <div className="flex gap-4 mt-5">
              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Room
                </label>
                <input
                  id="input_roomnm"
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Room number"
                />
              </div>

              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Price
                </label>
                <input
                  id="input_price"
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Room price"
                />
              </div>
            </div>

            <button className="mt-5 w-full bg-blue-500 py-3 rounded-lg font-semibold text-white active:bg-blue-600">
              Send
            </button>

            <button
              onClick={() => setData(false)}
              className="mt-5 w-full bg-red-500 py-3 rounded-lg font-semibold text-white active:bg-red-600"
            >
              Cancel
            </button>

            <button
              onClick={() => setData(false)}
              className="absolute -top-[90px] -right-[120px] bg-red-500 w-[20px] h-[20px] flex items-center rounded-sm active:bg-red-600"
            >
              <i className="bx bx-x text-xl text-white font-semibold"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
