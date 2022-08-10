import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Todos from './components/todos/Todos';
import UserContext from './context/UserContext';

//userContext.Provider es como se inicializa

function App() {

  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const userData = {
    user: [user, setUser],
    todos: [todos, setTodos]
  }

  return (
    <div className="App">
      <UserContext.Provider value={userData}>
        <Header/>
        <Profile/>
        <Todos/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
