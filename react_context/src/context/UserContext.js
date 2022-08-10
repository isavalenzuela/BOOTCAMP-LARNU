import { createContext } from "react";

const UserContext = createContext({
  //este es el contexto por default
  user: [null, () => {}], // estamos haciendo esto: const user [user, setUser] = useState(null);
  todos: [ [], () => {}],
});

export default UserContext;