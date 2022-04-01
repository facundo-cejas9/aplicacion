import React from 'react'

export const GifGridItem = ({id, title, url}) => {

  console.log({id, title, url})

  return (
    <div className='tarjeta'>
      <img className='card animate__animated animate__fadeInUpBig' src={url} alt={title}></img>
      <p className='titulo animate__animated animate__slideInUp'> {title} </p>
    </div>
  )
}
