import { createContext } from "react";

const UserContext = createContext({
  //este es el contexto por default
  user: null,
  setUser: () => {},
  todos: [],
  updateTodos: () => {},
});

export default UserContext;