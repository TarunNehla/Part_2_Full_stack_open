import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = ()=>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const delt = (url) =>{
    const request = axios.delete(url)
    return request.then(response =>response.data)
}

const update = (url, newObject) => {
    const newUrl = baseUrl + '/'+ url
    const request = axios.put(newUrl,newObject)
    return request.then(response => response.data)
}

export default {getAll,create,delt,update}