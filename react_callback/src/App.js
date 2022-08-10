
import './App.css';
import Box from './Box';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);

  useEffect( () => {
    console.log('App');
  });

  const [count, updateCount] = useState(0);

  function boxClicked(brother) {
    console.log('boxClicked');
    updateCount(count + 1);
    if (brother === 1) {
      updateCount1(count1 + 1);
    } else {
      updateCount2(count2 + 1);
    }
  }



  return (
    <div className="App">
      <header className="App-header"> Callback en componentes hijos
      </header>
      <div className="boxes">
        <Box id={1} brotherCount={count2} boxClicked={boxClicked}/>
        <Box id={2} brotherCount={count1} boxClicked={boxClicked}/>
      </div>
      <div className="boxes-parent">
        <p>Contador padre: {count} </p>
      </div>
    </div>
  );
}

export default App;
