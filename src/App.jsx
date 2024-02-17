import { useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import Filter from './components/Filter'
import AddPerson from './components/NewPerson'
import ShowPerson from './components/Person'
import axiosFunc from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [notesToShow, setNotestoShow] = useState(persons)
  const [word, setWord] = useState('')

  useEffect(() => {
    axiosFunc
      .getAll()
      .then(intialNotes => {
        setPersons(intialNotes)
        setNotestoShow(intialNotes)
      })
  }, [])

  const handleDelete = (id) => {
    const newUrl = 'http://localhost:3001/persons'+'/'+id

    axiosFunc
      .delt(newUrl)
      .then(deleteNote => {
        console.log(deleteNote)
        const updateNotes = notesToShow.filter((person) => person.id !==id)
        setNotestoShow(updateNotes)
      })
  }


  const handleNewPerson = (event) => {
    event.preventDefault()
    const chk = persons.some((person) => newName === person.name)
    if (chk) {
      alert(newName + ' name already exist')
      setNewName('');
      return
    }

    const newMan = {
      name: newName,
      number: newNum,
      id: uuidv4()
    }
    axiosFunc
    .create(newMan)
    .then(createdNote => {
      setPersons(persons.concat(createdNote))
      setNotestoShow(notesToShow.concat(createdNote))
      setNewName('')
      setNewNum('')
    })
  }

  const handleName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }
  const handleNum = (event) => {
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
      <Filter word={word} handleSearch={handleSearch} />
      <h2>Add new here </h2>
      <AddPerson handleNewPerson={handleNewPerson} newName={newName} newNum={newNum} handleName={handleName} handleNum={handleNum} />
      <h2>Numbers</h2>
      <ShowPerson notesToShow={notesToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App