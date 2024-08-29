'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        {/*Botón genérico que hace un console log con "Producto añadido."*/}
        <button className='btn btn-primary' onClick={()=> console.log("Producto añadido.")}>Añadir al Carrito.</button> 
    </div>
  )
}

export default AddToCart