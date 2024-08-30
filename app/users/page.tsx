import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
      <h1 className = 'flex justify-center'>Usuarios</h1>
      <h2 className = 'flex justify-center'>Al hacer click en "Nombre" se ordenarán por nombre.</h2>
      <h2 className = 'flex justify-center'>Al hacer click en "Especie" se ordenarán por especie.</h2>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}

export default UsersPage