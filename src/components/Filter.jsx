
const Filter = ({word,handleSearch}) =>{
    return (
        <div>
          filter the number: <input value = {word} onChange = {handleSearch} />
        </div>
    )
}

export default Filter