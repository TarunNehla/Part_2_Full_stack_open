import { useState } from 'react'

const ShowP = ({person}) =>{
  return (
    <p>
      {person.name} {person.number}
    </p>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    {number : '44444'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const handleNewPerson = (event) =>{
    event.preventDefault()
    const chk = persons.some((person)=>newName === person.name)
    if(chk){
      alert(newName+' name already exist')
      setNewName('');
      return
    }
    const newMan = {
      name : newName,
      number : newNum
    }
    setPersons(persons.concat(newMan))
    setNewName('');
    setNewNum('');
  }

  const handleName = (event) =>{
    event.preventDefault()
    setNewName(event.target.value)
  }
  const handleNum = (event) =>{
    event.preventDefault()
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {handleNewPerson}>
        <div>
          name: <input value = {newName} onChange = {handleName} />
          <br />
          number: <input value = {newNum} onChange = {handleNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <ShowP key = {person.name} person = {person} />)}
    </div>
  )
}

export default App