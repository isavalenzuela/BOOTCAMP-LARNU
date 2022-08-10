import { useContext } from "react";
import UserContext from "../context/UserContext";
import useUser from "../hooks/useUser";


export default function Header() {

  const context = useContext(UserContext);

  return (
    <div>
      <h1>Hola: {context.user[0]}</h1>
    </div>
  );
}