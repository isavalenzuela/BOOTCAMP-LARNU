import { useState } from "react";
import useUser from "../../hooks/useUser";

export default function Todoform() {
  const { updateTodos } = useUser();
  const [newItem, setNewItem] = useState('');

  function addTodo(e) {
    e.preventDefault();
    updateTodos(newItem);
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