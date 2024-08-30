'use client';
import React from 'react'

interface Props {
    error: Error
    reset: ()=> void
}

const ErrorPage = ({error, reset}: Props) => {
  return (
    <>
        <div>Ha ocurrido un ERROR inesperado.</div>
        <button className='btn' onClick={()=> reset()}>Reintentar</button>
    </>
  )
}

export default ErrorPage