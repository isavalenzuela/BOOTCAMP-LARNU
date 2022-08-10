import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import UserContext from './context/UserContext';

//userContext.Provider es como se inicializa

function App() {

  const [user, setUser] = useState(null);

  const userData = {
    user: [user, setUser]
  }

  return (
    <div className="App">
      <UserContext.Provider value={userData}>
        <Header/>
        <Profile/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
