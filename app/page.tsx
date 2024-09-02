import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { AuthOptions } from './api/auth/[...nextauth]/route'

export default async function Home() 
{
  const session = await getServerSession(AuthOptions);

  return (
    <main>
      <h1 className = 'mb-8 flex justify-center'>
        Bienvenido {session && <span className='ml-2'>{session.user!.name}</span>}
      </h1>

      <h2 className = 'flex justify-center'>El siguiente botón extrae una lista de Usuarios de una API pública.</h2>
      <div className='flex justify-center'>
        <Link className = 'mb-4 btn  btn-primary' href="/users">Lista de Usuarios</Link>
      </div>

      <h2 className = 'flex justify-center'>El siguiente botón genera un Console Log con Producto añadido.</h2>
      <div className='flex justify-center'>
        <ProductCard />
      </div>
    </main>
  )
}