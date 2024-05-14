
import { useEffect } from 'react'
import './App.css'
import useCrud1 from './assets/hooks/useCrud1'
import FormCar from './assets/components/FormCar'
useCrud1
function App() {

  const[cars,getCars ,createCar1] = useCrud1('/cars/')

  useEffect(()=>{
    getCars()
    },[])

 //console.log(cars);

  return (
    <div>
      <FormCar
        createCar1={createCar1}
      />
      <h1>crud</h1>
    </div>
  )
}

export default App
