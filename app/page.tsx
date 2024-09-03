'use client';
import Image from 'next/image'
import umbrella from '@/public/images/Logo.png'
import { Metadata } from 'next'
import { useState } from 'react';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  ()=> import('./components/HeavyComponent'),
  {
    ssr: false,
    loading: ()=> <p>Cargando. . .</p>
  }
)

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main className='relative h-screen'>
      <h1 className='flex justify-center'>Primera App en NextJS</h1>

      <button className='btn btn-primary mb-5' onClick={()=> setVisible(true)}>Importar dinámicamente HeavyComponent</button>

      <button className='btn btn-primary ml-5' onClick={async ()=> {
        const _ = (await import('lodash')).default;

        const elements = [
          {name: 'z'},
          {name: 'y'},
          {name: 'x'},
        ];

        const sorted = _.orderBy(elements, ['name']);
        console.log(sorted)
        }}
      >
        Ordenar array [z,y,x], resultado en Consola
      </button>

      {isVisible && <HeavyComponent />}

      <Image 
        src={umbrella} 
        alt='umbrella'
        className="object-cover" 
        sizes='100vw'
        quality={100}
        priority
      />

      {/* Ejemplo de inclusión de imágen con URL 
      <Image 
        src="https://bit.ly/react-cover" 
        alt='umbrella' fill 
        className="object-cover" 
        sizes='100vw'
        quality={100}
        priority
      />*/}
    </main>
  )
}

/* Ejemplo de Metadata personalizada para una página
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');

  return {
    title: 'product.title',
    description: 'product.description'
  }
}
*/