import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {id: number}
}

const UserDetailPage = ({params: {id}}: Props) => {
  if (id > 20) notFound();
  return (
    <div>Detalles del Usuario {id}</div>
  )
}

export default UserDetailPage