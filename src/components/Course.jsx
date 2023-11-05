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
  
  const Courses = ({courses}) => {
    return (
    <div>
      {
        courses.map((course) => 
        <Course key = {course.id} course={course}/>
        )
      }
    </div>
      
    )
  }

  export default Courses