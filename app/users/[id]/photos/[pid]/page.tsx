import React from 'react'

interface Props {
    params: {id: number, pid: number}
}

const UserPhotos = ({params: {id, pid}}: Props) => {
  return (
    <div>Fotografía N° {pid} del Usuario {id}</div>
  )
}

export default UserPhotos