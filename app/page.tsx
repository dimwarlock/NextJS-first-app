import Image from 'next/image'
import umbrella from '@/public/images/Logo.png'

export default async function Home() {
  return (
    <main>
      <Image src={umbrella} alt='umbrella'/>
    </main>
  )
}