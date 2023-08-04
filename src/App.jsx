import { useState, useRef } from "react";
import ListItem from "./components/UI/List/ListItem";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import Btn from "./components/Tugma";
import Card from "./components/Card";
import { data } from './utils/data';

const App = () => {
  const [todo, setTodo] = useState([]);

  const inputRef = useRef("");

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: inputRef.current?.value,
      isDone: false,
    };

    if (newTask.title.trim().length) {
      setTodo([...todo, newTask]);
      inputRef.current.value = "";
      toast.success("added successfully", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      toast.error("please enter a task title", {
        position: "top-right",
        hideProgressBar: false,
        theme: "light",
        autoClose: 2000,
      });
    }
  };

  const deleteTask = (id) => {
    const filterdTodo = todo.filter((item) => item.id != id);
    setTodo(filterdTodo);
    toast.info("deleted successfully");
  };


  const [addData, setData] = useState(false);
  const [dataMD, setDataMd] = useState(data);
  return (
    <>
      {addData === true && (
        <Modal dataMD={dataMD} setDataMd={setDataMd} setData={setData} />
      )}
      <div className="container mx-auto">
        <ToastContainer />
        <div className="wrapper mx-auto mt-8 w-[800px] relative bg-green-200 p-2 rounded-lg">
          <div className="todo">
            <h2 className="text-center font-semibold text-green-600 my-3">
              MY TODO APP
            </h2>
            <div className="todo-header p-2 bg-cyan-100 flex gap-x-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter task name"
                className="py-2 grow ps-4 focus:outline-none focus:shadow-lg duration-100"
              />
              <button
                onClick={() => addTask()}
                className="bg-green-500 px-3 py-2 rounded-lg text-white active:bg-green-700"
              >
                Add new task
              </button>
            </div>

            <div className="todo-body p-2  bg-cyan-100 my-3">
              <ul>
                {" "}
                {todo.length ? (
                  todo.map((item, index) => {
                    return (
                      <ListItem
                        deleteTodo={deleteTask}
                        state={item}
                        index={index}
                        key={item.id}
                      />
                    );
                  })
                ) : (
                  <h1 className="text-center">TASK LIST EMPTY</h1>
                )}{" "}
              </ul>
            </div>
          </div>
        </div>
        <div className="card w-[800px] mx-auto mt-[100px] p-2 relative bg-slate-300 rounded-lg">
          <h1 className="font-semibold text-2xl text-center py-5 text-[#23365e] ">
            This card empty
          </h1>
          {dataMD?.map((e, index) => (
            <Card key={index} {...e} />
          ))}
          <Btn setData={setData} />
        </div>
      </div>
    </>
  );
};

export default App;
