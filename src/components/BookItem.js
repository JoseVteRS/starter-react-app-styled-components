import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBookActive } from '../state/actions/books'
import Plus from '../icons/Plus'
import styled from 'styled-components'
import { addBookToList } from '../state/actions/list'

const BookItemInfo = styled.div`
	background: linear-gradient(to top, rgba(0,0,0,.95) 30%, rgba(0,0,0,0.3) 70%);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: .2em;
	transition: all 2s;
	overflow: hidden;

	.bookItem__author-info__hover{
		font-size: .8rem;
		color: white;
		position: absolute;
		bottom: 75px;
		left:0;
		width: 100%;
		font-weight: bold;
	}

	.bookItem__genre-info__hover{
		font-size: .6rem;
		color: white;
		position: absolute;
		bottom: 60px;
		left:0;
		width: 100%;
	}
`

export const BookItem = ({ _id, title, coverUrl, author, genre }) => {
	const dispatch = useDispatch()
	const { username } = useSelector(state => state.auth)

	const [showButton, setShowButton] = useState(false)

	const handleBook = () => {
		dispatch(setBookActive({ _id, title, coverUrl, author, genre }))
	}
	const hoverBook = () => {
		setShowButton(true)
	}
	const outHoverBook = () => {
		setShowButton(false)
	}
	const handleAddMovie = () => {
		console.log('Añadir pelicul a favoritos', { title, author, genre, username })
		dispatch(addBookToList())
	}


	return (
		<>
			<div
				onMouseOver={hoverBook}
				onMouseLeave={outHoverBook}
				onClick={handleBook}
				key={_id}
				className='relative pointer overflow-hidden'
			>


				<img
					src={`${coverUrl}`}
					alt={title}
					className='rounded w-full h-full'
				/>

				{
					showButton &&
					<BookItemInfo>

						{
							<Plus width={34} height={34}
								className='bg-orange-500 hover:bg-orange-600 p-1 m-5 rounded-full absolute bottom-0 left-0'
								fill='#fff'
								onClick={handleAddMovie}
							/>

						}
						{
							author.map((a) => {
								return (
									<div className='bookItem__author-info__hover p-1 m-5' key={a._id}>
										{a.authorName}
									</div>

								)
							})
						}
						{
							genre.map((g) => {
								return (
									<div className='bookItem__genre-info__hover p-1 m-5' key={g._id}>
										{g.genreName}
									</div>
								)
							})
						}

					</BookItemInfo>
				}

			</div>
		</>
	)
}
