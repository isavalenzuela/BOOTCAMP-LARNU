import { useState, createContext } from "react";

export const TodoContext = createContext();

const UseTodoContext = ({children}) => {

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
    <TodoContext.Provider value={{newItem, setNewItem, addItem, items, deleteItem}}>
      {children}</TodoContext.Provider>
  )
}

export default UseTodoContext