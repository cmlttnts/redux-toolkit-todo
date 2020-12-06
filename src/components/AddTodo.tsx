import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSlice } from "redux/slice";

const AddTodo = () => {
  console.log("AddTodo");

  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  return (
    <div className="AddTodo">
      <label>
        Title:
        <input
          onChange={(e) => setTodoTitle(e.target.value)}
          value={todoTitle}
          type="text"
          name="title"
          id="title"
        />
        <input
          onChange={(e) => setTodoContent(e.target.value)}
          value={todoContent}
          type="text"
          name="content"
          id="content"
        />
      </label>

      <button
        onClick={() =>
          dispatch(todoSlice.actions.create({ title: todoTitle, content: todoContent }))
        }>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
