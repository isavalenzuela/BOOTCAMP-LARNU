import React from 'react'
import { useContext } from "react";
import { TodoContext } from '../context/UseTodoContext';

const TodoList = () => {
  const { items, deleteItem } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button> </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList