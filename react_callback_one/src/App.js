
import './App.css';
import Box from './Box';
import Counter from './Counter';
import { useEffect } from 'react';

function App() {

  useEffect( () => {
    console.log('App');
  });

  function boxClicked() {
    console.log('boxClicked');
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="boxes">
        <Box className="box" boxClicked={boxClicked}/>
      </div>
      <Counter/>
    </div>
  );
}

export default App;
