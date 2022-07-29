import React from 'react';
import './App.css';
import Counter from './Counter';
import Card from './Card';
import { useEffect , useState } from 'react';

function App() {
  //api guardada en una variable
  const API_URL ='https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
  const [courses, updateCourses] = useState([]);

  //esta funcion hace request GET a la API
  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories);
      })
    })
  }

  //esta función async obtiene los cursos 
  async function getCourses() {
    const courses = await getCoursesApi();
    console.log(courses);
    updateCourses(courses);
  }

  useEffect(() => {
    console.log('consumir una API');
    getCourses();
  }, []);

  return (
    <div className="App">
      <a className='App-navbar' href='https://larnu.app'>Cursos Larnu 👽</a>

      <body className="App-body">
        {
          //map itera el listado
          courses.map(course => { 
            return <Card 
              name={course.name}
              icon={course.icon}
              users={course.users}
              background={course.background}
              totalQuizzes={course.totalQuizzes}
              key={course.id}
            />
          })
        }
      </body>
    </div>
  );
}

export default App;


