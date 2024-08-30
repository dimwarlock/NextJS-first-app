import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-black p-5'>
        <Link href='/' className='mr-5'>NextJS</Link>
        <Link href='/users'>Usuarios</Link>
    </div>
  )
}

export default Navbar