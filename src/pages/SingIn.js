import React from 'react'
import Close from '../icons/Close'
import styled from 'styled-components'
import { Input } from '../Styled-Components/Input'
import { Button } from '../uiComponents/Button'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { startLogin } from '../state/actions/auth'
import { Heading } from '../Styled-Components/Heading'



const StyledHeaderSingIn = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.2em;
	text-align: center;
  `
const buttonStyles = {
	cursor: 'pointer',
	float: 'right',
}

export const SingIn = ({ onClick }) => {

	const dispatch = useDispatch()

	const [formSignInValues, handleChange] = useForm({
		email: '',
		password: ''
	})

	const { email, password } = formSignInValues

	const isButtonDisabled = !email.length || !password.length

	const handleSignIn = (e) => {
		e.preventDefault()
		dispatch(startLogin(email, password))
	}

	return (
		<div className="bg-white rounded p-5 text-gray-800 w-full md:w-1/3 ">
			<div style={buttonStyles}>
				<Close onClick={onClick} width={24} height={24} fill='#333' />
			</div>
			<StyledHeaderSingIn>
				<Heading size='4xl' weight='font-bold' color='blue-500' as='h1'>
					Inicia sesión en Nevook
        		</Heading>
			</StyledHeaderSingIn>

			<Button
				type='button'
				bgColor='red'
				className='text-white py-4 px-2 mt-5 w-full'
			>
				GOOGLE
        	</Button>

			<p className='text-xl text-gray-300 font-bold text-center my-5'>
				- o -
       		</p>

			<form onSubmit={handleSignIn}>
				<label className='text-lg text-gray-700 font-bold' >
					Correo electrónico:
					<Input
						className='shadow'
						type='text'
						autoComplete='off'
						name='email'
						value={email}
						onChange={handleChange}
					/>
				</label>

				<label className='text-lg text-gray-700 font-bold' >
					Contraseña:
					<Input
						className='shadow'
						type='password'
						autoComplete='off'
						name='password'
						value={password}
						onChange={handleChange}
					/>
				</label>

				<Button
					type='submit'
					bgColor='orange'
					disabled={isButtonDisabled}
					className='text-white py-4 px-2 mt-5 w-full'
				>
					Iniciar sesión
          		</Button>
			</form>
		</div >
	)
}
