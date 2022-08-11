import { useState } from "react";
import useUser from "../../hooks/useUser";

export default function Todoform() {
  const context = useUser();
  const { todos } = context;
  const [todoList, setTodoList] = todos;
  const [newItem, setNewItem] = useState('');

  function addTodo(e) {
    e.preventDefault();
    setTodoList(newItem);
    setNewItem('');
  }

  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" placeholder="Ingresa todo" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}