
const ShowP = ({ person, handleDelete }) => {
  const handleDeleteClick = () => {
    const result = confirm('Delete '+person.name)
    if(result){
      handleDelete(person.id);
    }
  };

  return (
    <p>
      {person.name} {person.number}
      <button onClick={handleDeleteClick}>Delete</button>
    </p>
  );
};
                 
const ShowPerson = ({notesToShow, handleDelete}) =>{
    return (
        <div>
            {notesToShow.map(person => <ShowP key = {person.id} person = {person} handleDelete={handleDelete} />)}
        </div>
        
    )
}

export default ShowPerson