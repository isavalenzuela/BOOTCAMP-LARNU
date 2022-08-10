import { useContext } from "react";
import UserContext from "../context/UserContext";
import useUser from "../hooks/useUser";

export default function Header() {

  const context = useContext(UserContext);
  const {user} = context;
  const [name, setName] = user;
  return (
    <div>
      <h1>Hola: {name} aquí está tu perfil</h1>
      <button onClick={() => setName('isa')}>Cambiar nombre</button>
    </div>
  );
}