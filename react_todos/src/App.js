import React, { useState, useEffect, useContext} from 'react';
import './App.css';
import { TodoContext } from './context/UseTodoContext';
import TodoList from './components/TodoList';


function App() {
  //llamar lo que vamos a recibir desde el contexto
  const { newItem, setNewItem, addItem, items, deleteItem } = useContext(TodoContext);

  return (

    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder='Agrega un elemento'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Agregar</button>
      <TodoList/>
    </div>
  );
}

export default App;
