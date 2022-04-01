import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {



    const [categories, setCategories] = useState(["Dragon Ball Z"])
  
    //const handleAdd = () => {
      //  setCategories(categoria =>[...categoria, inputValue])
   
  
    return (
      <>
    <h1 className='gif'> Gifs<span className='span'>App</span> </h1>
    <AddCategory setCategories={ setCategories } />

    <hr />

    

        <ol>
            {
                categories.map((i) => 
                <GifGrid  
                key={i}
                categories={i} 
                
                />
                )
            }
           
        </ol>
    </>
  )
        }

