import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() 
{
  return (
    <main>
      <h1 className = 'mb-8 flex justify-center'>
        Primera App en NextJS
      </h1>

      <h1 className = 'flex justify-center'>El siguiente botón extrae una lista de Usuarios de una API pública."</h1>
      <div className='flex justify-center'>
        <Link className = 'mb-4 btn  btn-primary' href="/users">Lista de Usuarios</Link>
      </div>

      <h1 className = 'flex justify-center'>El siguiente botón genera un Console Log con "Producto añadido."</h1>
      <div className='flex justify-center'>
        <ProductCard />
      </div>
    </main>
  )
}