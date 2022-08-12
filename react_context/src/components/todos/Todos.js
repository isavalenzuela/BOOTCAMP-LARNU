import Todoform from './Todoform';
import useUser from '../../hooks/useUser';

export default function Todos() {

const {todos} = useUser();

  return (
    <div>
      <h1>ToDos</h1>
      <Todoform/>
      {
        todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })
      }
    </div>
  )
}