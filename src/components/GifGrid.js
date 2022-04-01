import React from 'react'
import { useFetchgifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categories }) => {

   const {data:images, loading } = useFetchgifs(categories);



  return (
    <>
         <h2 className='categorias animate__animated animate__slideInUp'> { categories } </h2>

        { loading && <h4 className='loading animate__animated animate__flash'>Cargando Gifs</h4> }

         <div className='card-grid'> 
    
         { 

            images.map(imagen =>(
                <GifGridItem 
                    key={ imagen.id } 
                    {...imagen} 
                 />
        )) 
        
        } 
    
    
    </div>
    
    </>
  )
}
