import { useState } from 'react'
import Filter from './components/Filter'
import AddPerson from './components/NewPerson'
import ShowPerson from './components/Person'



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
      <Filter word = {word} handleSearch={handleSearch}/>
      <h2>Add new here </h2>
      <AddPerson handleNewPerson={handleNewPerson} newName={newName} newNum={newNum} handleName={handleName} handleNum = {handleNum} />
      <h2>Numbers</h2>
      <ShowPerson notesToShow={notesToShow}/>
    </div>
  )
}

export default App