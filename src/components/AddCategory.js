import React, { useState } from 'react'
import  PropTypes  from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories(categoria =>[inputValue, ...categoria]);
            setInputValue("");
        }
        

    }

  return (
    <div className='formulario'>
  <form onSubmit={ handleSubmit }>
        <input className='input'
        type="text"
        placeholder='Busca tu gif'
        value={ inputValue }
        onChange={ handleInputChange}
        
        />

  </form>  
</div>
  )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
  
    
  
  }
