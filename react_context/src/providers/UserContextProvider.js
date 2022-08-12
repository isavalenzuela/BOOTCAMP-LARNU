import { useState } from "react";
import UserContext from "../context/UserContext";
import useTodos from "../hooks/useTodos";

function UserContextProvider({children}) {

  const [user, setUser] = useState(null);
  const { todos, updateTodos } = useTodos();

  const updateUser = (user) => {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      todos,
      updateTodos,
      updateUser
    }}
    >
      {children}
    </UserContext.Provider>
  )

}

export default UserContextProvider;