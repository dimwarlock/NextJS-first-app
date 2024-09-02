'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import Loading from './loading';

const Navbar = () => {
  const {status, data: session} = useSession();

  return (
    <div className='flex bg-black p-5'>
        <Link href='/' className='mr-5'>NextJS</Link>
        <Link href='/users' className='mr-5'>Usuarios</Link>
        {status === 'loading' && <div>Loading. . .</div>}        
        {status === 'authenticated' && 
          <div>
            {session.user!.name}
            <Link href='/api/auth/signout' className='ml-5'>Cerrar Sesión</Link>
            </div>
        }
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default Navbar