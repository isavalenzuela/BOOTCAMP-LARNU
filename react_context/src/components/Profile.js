import useUser from "../hooks/useUser";

export default function Header() {

  const { user, setUser } = useUser();
  return (
    <div>
      <h1>Hola: {user} aquí está tu perfil</h1>
      <button onClick={() => setUser('isa')}>Cambiar nombre</button>
    </div>
  );
}