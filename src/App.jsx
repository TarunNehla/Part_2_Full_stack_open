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
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [notesToShow, setNotestoShow] = useState(persons)
  const [word , setWord] = useState('')
  const [ide,setIde] = useState(5)
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
      number : newNum,
      id : ide
    }
    setIde(ide+1)
    setPersons(persons.concat(newMan))
    setNotestoShow(persons)
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

  const handleSearch = (event) => {
    event.preventDefault()
    const newWord = event.target.value
    setWord(newWord)
    setNotestoShow(persons.filter(person => {
      return (
        person.name.toLowerCase().includes(newWord.toLowerCase())
      )
    }))
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter the number: <input value = {word} onChange = {handleSearch} />
        </div>
      </form>
      <h2>Add new here </h2>
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
      {notesToShow.map(person => <ShowP key = {person.id} person = {person} />)}
    </div>
  )
}

export default App