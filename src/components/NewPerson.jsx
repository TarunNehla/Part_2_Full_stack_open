

const AddPerson = ({handleNewPerson,newName,newNum,handleName,handleNum}) => {
    return (
        <form onSubmit={handleNewPerson}>
            <div>
                name: <input value={newName} onChange={handleName} />
                <br />
                number: <input value={newNum} onChange={handleNum} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPerson