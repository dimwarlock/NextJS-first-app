import React, { CSSProperties } from 'react'
import {Html, Body, Container, Text, Link, Preview, Tailwind} from '@react-email/components'

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Bienvenido/a!</Preview>
        <Tailwind>
            <Body className='bg-white'>
                <Container>
                    <Text className='font-bold text-3xl'>Hola {name}</Text>
                    <Link>www.youtube.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
    background: '#fff',
}

const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate