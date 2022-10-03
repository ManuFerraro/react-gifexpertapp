import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({setCategories, categories}) => {

  const [inputValue, setInputValue] =useState('');

  const handleInputChange = ( e ) => {
    // console.log(e.target.value); Captura todo lo que escribo!!!
    setInputValue( e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // Para que no me tipee en blanco con menos de 2 letras (IF)
        if (inputValue.trim().length > 2) {
            setCategories([inputValue, ...categories]);
            setInputValue('');
        }
        
      
  }
  return (
    
       <form onSubmit={ handleSubmit }>
          <input 
             type='text'
             value= { inputValue }
             onChange= { handleInputChange }
          />
        </form> 

  )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}