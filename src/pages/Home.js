import React from 'react'
import { Container } from '../Styled-Components/Container'
import { Input } from '../Styled-Components/Input'

import bg from '../assets/jbt-container.jpg'
import { Heading } from '../Styled-Components/Heading'
import { BooksGrid } from '../components/BooksGrid'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BookItem } from '../components/BookItem'
import { searchStartBooksAll, searchClear } from '../state/actions/books'
import { useForm } from '../hooks/useForm'

const sectionStyle = {
	backgroundImage:
		'linear-gradient(90deg, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 100%), url(' +
		bg +
		')',
}
// const img = "https://picsum.photos/seed//350/600";

export const Home = () => {
	const title = 'Únete a nuestra comunidad'
	const lastBooksTitle = 'Novedades en Nevook'

	const dispatch = useDispatch()
	const { search } = useSelector((state) => state.library)
	const [formSearch, handleChange] = useForm({ query: '' })
	const { query } = formSearch

	const handleFormSearch = (e) => {
		e.preventDefault()

		if (!query) {
			dispatch(searchClear())
		} else {
			dispatch(searchStartBooksAll(query))
		}

	}


	return (
		<>
			<NavBar />
			<section id='Jumbotron'>
				<div
					className='bg-gray-400 bg-center bg-cover py-32'
					style={sectionStyle}
				>
					<Container className='flex flex-col justify-center items-start py-8 h-screen-5'>
						<h2 className='text-6xl font-bold text-gray-100 mb-5'> {title} </h2>
						<Heading as={'h2'} size={'4xl'} weight={'font-bold'} color='white'>
							Próximamente:
            			</Heading>
						<ul className='text-white text-2xl'>
							<li>
								Crea tu biblioteca y ordénala con estantes personalizados.
              				</li>
							<li>Accede a nuestro chat.</li>
							<li>Y participa en retos mensuales</li>
						</ul>

						<Link
							to='/register'
							className='bg-orange-500 hover:bg-orange-600 p-2 rounded-full inline-block mt-5 uppercase text-white'
						>
							Registrarme a Nevook
						</Link>


					</Container>
				</div>
			</section>

			<section className='bg-orange-500 py-5'>
				<Container ancho={'50%'} padding={'3em 1em'}>
					<Heading
						as={'h2'}
						className='w-full text-center mb-5'
						size={'4xl'}
						weight={'font-bold'}
						color={'white'}
					>
						Busca tu próxima lectura
          			</Heading>

					<form onSubmit={handleFormSearch}>
						<Input
							className='shadow-md h-16 text-sm'
							placeholder={'Buscar por: Título de libro'}
							name={'query'}
							value={query}
							onChange={handleChange}
						></Input>
					</form>

					{
						query && <div className='grid gap-1 grid-cols-2 md:grid-cols-5'>
							{search.map((book) => (
								<BookItem
									key={book._id}
									{...book}
									className='rounded overflow-hidden'
								/>
							))}
						</div>
					}


				</Container>
			</section>

			<section className='bg-gray-200 py-12'>
				<Heading
					as={'h2'}
					className='w-full text-center my-5'
					size={'4xl'}
					weight={'font-bold'}
					color={'blue-600'}
				>
					{lastBooksTitle}
				</Heading>

				<div className='flex flex-wrap container-full justify-center'>
					<BooksGrid />
				</div>
			</section>
		</>
	)
}
