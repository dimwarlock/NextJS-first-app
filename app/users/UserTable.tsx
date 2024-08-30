import React from 'react'

interface User {
    id: number;
    name: string;
  }

const UserTable = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character', {cache: 'no-store'});
  const data = await res.json();
  const users: User[] = data.results;

  return (
    <>
        <table className = 'table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=> 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UserTable