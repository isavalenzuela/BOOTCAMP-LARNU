
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Todos from './components/todos/Todos';
import UserContext from './context/UserContext';
import UserContextProvider from './providers/UserContextProvider';

//userContext.Provider es como se inicializa

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Header/>
        <Profile/>
        <Todos/>
      </UserContextProvider>
    </div>
  );
}

export default App;
