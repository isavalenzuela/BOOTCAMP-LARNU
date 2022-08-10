import Form from './Form';
import useUser from '../../hooks/useUser';

export default function Todos() {

const context = useUser();
//preguntar
const {todos} = context;
const [todoList, setTodoList] = todos;

  return (
    <div>
      <h1>ToDos</h1>
      <Form/>
      {
        todoList.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })
      }
    </div>
  )
}