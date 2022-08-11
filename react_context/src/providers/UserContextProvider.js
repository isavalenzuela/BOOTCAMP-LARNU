import { useState } from "react";
import UserContext from "../context/UserContext";
import useTodos from "../hooks/useTodos";

function UserContextProvider({children}) {

  const [user, setUser] = useState(null);
  const [todos, setTodos] = useTodos();

  const updateUser = (user) => {
    setUser(user);
  }

  const userData = {
    user: [user, setUser],
    todos: [todos, setTodos]
  }


  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  )

}

export default UserContextProvider;