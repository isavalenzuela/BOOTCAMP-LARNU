import React, { useState } from 'react';

function Counter() {

  const [count, updateCount] = useState(0);
  
  function onClick() {
    updateCount(count + 1);
    console.log('hola soy el contador');
  }

  return (
    <div>
        <p>
          Nuestro contador es: {count}
        </p>
        <button onClick={onClick}>Apriétame</button>
    </div>
  );
}

export default Counter;