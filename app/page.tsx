import Image from 'next/image'
import umbrella from '@/public/images/Logo.png'
import { Metadata } from 'next'

export default async function Home() {
  return (
    <main className='relative h-screen'>
      <h1 className='flex justify-center'>Primera App en NextJS</h1>
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