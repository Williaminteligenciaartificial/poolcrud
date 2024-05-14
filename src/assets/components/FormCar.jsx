import {useForm} from "react-hook-form"
import React from 'react'

const FormCar = ({createCar1}) => {

 const {register, handleSubmit} =  useForm()

 const submit = data => {

    console.log(data)
 }
        

    return (
  
      <form onSubmit={handleSubmit(submit)}>

  
        <label>
  
          <span>Brand</span>
  
          <input {...register('brand')}  type="text" />
  
        </label>
  
        <label>
  
          <span>Model</span>
  
          <input {...register('model')}  type="text" />
  
        </label>
  
        <label>
  
          <span>Color</span>
  
          <input {...register('color')} type="text" />
  
        </label>
  
        <label>
  
          <span>Year</span>
  
          <input  {...register('year')} type="number" />
  
        </label>
  
        <label>
  
          <span>Price</span>
  
          <input {...register('price')} type="text" />
   
        </label>
  
        <button>Submit</button>
  
      </form>
  
    );
  
  };
  
   
  
  export default FormCar;