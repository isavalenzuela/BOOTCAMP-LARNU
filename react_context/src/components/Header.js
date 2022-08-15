import useUser from "../hooks/useUser";


export default function Header() {

  const { todos, user } = useUser();

  return (
    <div>
      <h1>Hola: {user} todos: {todos.length}</h1>
    </div>
  );
}