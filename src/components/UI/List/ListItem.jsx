const ListItem = ({ state: { title, isDone, id }, index, deleteTodo }) => {
  console.log(deleteTodo);

  return (
    <li className="list bg-white my-2 p py-2 flex items-center justify-between">
      <span className="bg-orange-400 w-7 h-7 grid place-content-center text-xl rounded-full">
        {index + 1}
      </span>

      <strong>{title}</strong>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-500 px-3 py-2 rounded-lg text-white active:bg-green-700"
      >
        Delete task
      </button>
    </li>
  );
};

export default ListItem;
