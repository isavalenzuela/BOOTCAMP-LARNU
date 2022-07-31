import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    console.log(newItem);
    console.log(items);
    if (!newItem) {
      alert("Ingresa un elemento.")
      return; 
    }

    const item = {
      id: Math.floor(Math.random() *1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id != id);
    setItems(newArray);
  }

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

      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='delete-button' onClick={ () => deleteItem(item.id)}>❌</button> </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
