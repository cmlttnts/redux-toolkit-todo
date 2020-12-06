import { useSelector } from "react-redux";
import { ITodo } from "redux/slice";

const Todos = () => {
  console.log("Todos");
  const todos = useSelector((state: { todos: ITodo[] }) => state.todos);

  return (
    <div className="Todos">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
