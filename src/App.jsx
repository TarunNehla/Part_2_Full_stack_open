const Part = ({note}) =>{
  return (
    <p>{note.name} {note.exercises}</p>
  )
}

const Content = ({course}) =>{
  return (
    <div>
      {
        course.parts.map((note)=>
          <Part key = {note.id} note = {note}/> 
        )
      }
    </div>
  )
}

const Header = ({course}) =>{
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({course}) =>{
  const total_sum = course.parts.reduce((total,part)=> total + part.exercises,0)
  return (
    <p><b>Total of {total_sum} exercises</b></p>
  )
}

const Course = ({course}) =>{
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App