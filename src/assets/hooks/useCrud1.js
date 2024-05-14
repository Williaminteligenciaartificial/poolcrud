
import axios from "axios"
import { useState } from 'react'
const useCrud1 = (path) => {

    const [response, setResponse] = useState()

    const BASE_URL = 'http://cars-crud.academlo.tech'

      //get - read - obtener informacion
    const getapi = () => {

      const url = `${BASE_URL}${path}`
      axios.get(url)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err))

    }
     //POST _CREATE _Crear un registro en la bd
     const postApi = (data) => {
      const url = `${BASE_URL}${path}`
      axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setResponse([...response,result.data])
      })
      .catch(err => console.log(err))
    }
  return  [response, getapi, postApi]
}
 
export default useCrud1