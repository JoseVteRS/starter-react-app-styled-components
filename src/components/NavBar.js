import React from 'react'
import { Header } from '../Styled-Components/Header'
import { Container } from '../Styled-Components/Container'
import Burger from '../Styled-Components/Burger'

export const NavBar = () => {
  return (
    <Header>
      <Container className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>Nevook</h1>
        <Burger />
      </Container>
    </Header>
  )
}
