import { useEffect, useState } from "react";
import './Box.css';

function Box(props) {

  // boxClicked es el callback

  const [count, updateCount] = useState(0);

  function click() {
    props.boxClicked();
    updateCount(count + 1);
    console.log('hola soy la caja1')
  }

  return (
    <div className="box1" onClick={() => click()}>
      <p>Soy la caja 1 {props.name}</p>
    </div>
  );

}

export default Box;