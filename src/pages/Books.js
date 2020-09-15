import React from 'react'
import { BooksGrid } from '../components/BooksGrid'
import { NavBar } from '../components/NavBar'
import { Container } from '../Styled-Components/Container'
import { Heading } from '../Styled-Components/Heading'

export const Books = () => {
	return (
		<>
			<NavBar />

			<Container>
				<Heading as='h1' size='3xl' weight='font-bold' className="pt-24"> Books Page </Heading>
				<BooksGrid />
			</Container>
		</>
	)
}
