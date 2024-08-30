import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    species: string;
  }

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
  const res = await fetch('https://rickandmortyapi.com/api/character', {cache: 'no-store'});
  const data = await res.json();
  const users: User[] = data.results;
  //const usuariosOrdenados = sort(users).asc(u=> u.name);

  const UsuariosOrdenados = sort(users).asc(sortOrder === "species" ? user=> user.species : user=> user.name)

  return (
    <>
        <table className = 'table table-bordered'>
            <thead>
                <tr>
                    <th>
                        <Link href="/users?sortOrder=name">Nombre</Link>
                    </th>
                    <th>
                        <Link href="/users?sortOrder=species">Especie</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {UsuariosOrdenados.map(user=> 
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.species}</td>
                </tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UserTable