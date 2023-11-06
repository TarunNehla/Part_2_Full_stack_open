
const ShowP = ({person}) =>{
    return (
      <p>
        {person.name} {person.number}
      </p>
    )
  }

const ShowPerson = ({notesToShow}) =>{
    return (
        <div>
            {notesToShow.map(person => <ShowP key = {person.id} person = {person} />)}
        </div>
        
    )
}

export default ShowPerson