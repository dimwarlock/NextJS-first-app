'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className='btn btn-primary' onClick={()=> router.push('/users')}>Crear nuevo Usuario</button>
  )
}

export default NewUserPage