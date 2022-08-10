import useUser from "../../hooks/useUser";

export default function Form() {
  const context = useUser();
  const { todos } = context;
  const [todoList, setTodoList] = todos;

  function addTodo() {
    setTodoList([...todoList, e.target.value]);
  }
  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" placeholder="Ingresa todo"></input>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}