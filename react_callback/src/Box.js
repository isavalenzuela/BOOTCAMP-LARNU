import { useEffect, useState } from "react";
import './Box.css';

function Box(props) {

  // boxClicked es el callback

  const [count, updateCount] = useState(0);

  function click() {
    //para avisar al padre
    props.boxClicked(props.id);
    updateCount(count + 1);
    console.log('hola soy la caja1')
  }

  return (
    <div className="box1" onClick={() => click()}>
      <p>Caja: {props.id} </p>
      
      <p>Contador hijo: {count}</p>
      <p>Contador hermano: {props.brotherCount}</p>
      <p>Diferencia con mi hermano: {count - props.brotherCount}</p>
    </div>
  );

}

export default Box;