import React from 'react';
import './App.css';
import Counter from './Counter';
import Card from './Card';
import { useEffect , useState } from 'react';

function App() {

  const API_URL ='https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
  const [courses, updateCourses] = useState([]);
  //este useEffect ocurre cada vez que 
  //renderiza este componente

  useEffect(() => {
    console.log('holi');
  })

  //este useEffect ocurre la primera vez que 
  //renderiza este componente

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories);
      })
    })
  }

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
      <header className="App-header">
        {
          courses.map(course => { 
            return <Card 
              name={course.name}
              icon={course.icon}
              users={course.users}
              background={course.background}
              totalQuizzes={course.totalQuizzes}
            />
          })
        }
        <Counter/>
      </header>
    </div>
  );
}

export default App;
