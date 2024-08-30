import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
      <h1 className = 'flex justify-center'>Usuarios</h1>
      <h2 className = 'flex justify-center'>Al hacer click en Nombre se ordenarán por nombre.</h2>
      <h2 className = 'flex justify-center'>Al hacer click en Especie se ordenarán por especie.</h2>

      <Link href="/users/new" className='btn bg-black'>Nuevo Usuario</Link>

      <Suspense fallback={<p>Cargando. . .</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage