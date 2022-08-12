
import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  
  const updateTodos = (todo) => {
    setTodos([...todos, todo]);
  }

  return {
    todos,
    updateTodos
  }
}