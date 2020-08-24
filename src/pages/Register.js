import React from 'react'
import { Heading } from '../Styled-Components/Heading'
import { Input } from '../Styled-Components/Input'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startRegister } from '../state/actions/auth'
import { Link } from 'react-router-dom'
import { Button } from '../uiComponents/Button'

export const Register = () => {
	const dispatch = useDispatch()

	const [formRegisterValues, handleChange, reset] = useForm({
		username: '',
		email: '',
		password: '',
		repeatPassword: '',
	})
	const { username, email, password, repeatPassword } = formRegisterValues

	const handleRegister = (e) => {
		e.preventDefault()
		dispatch(startRegister(username, email, password))

		reset()
	}

	return (
		<div className='w-screnn h-screen bg-orange-500 flex flex-wrap justify-center items-center'>
			<div className='bg-white  p-12 w-full  md:w-2/3 lg:w-1/3 xl:1/5 mx-auto rounded shadow'>
				<Heading size='4xl' weight='font-bold' color='blue-500' as='h1'>
					Registro
        		</Heading>

				<Button
					type='submit'
					bgColor='red'
					className='text-white py-4 px-2 mt-5 w-full shadow'
				>
					GOOGLE
        		</Button>

				<p className='text-xl text-gray-300 font-bold text-center my-5'>
					- o -
        		</p>

				<form className='mt-5' onSubmit={handleRegister}>
					<label className='text-lg text-gray-700 font-bold'>
						Nombre:
            			<Input
							className='shadow'
							type='text'
							autoComplete='off'
							onChange={handleChange}
							name='username'
							value={username}
						/>
					</label>
					<label className='text-lg text-gray-700 font-bold'>
						Correo electrónico
           				 <Input
							className='shadow'
							type='email'
							autoComplete='off'
							onChange={handleChange}
							name='email'
							value={email}
						/>
					</label>

					<label className='text-lg text-gray-700 font-bold'>
						Contraseña
            			<Input
							className='shadow'
							type='password'
							autoComplete='off'
							onChange={handleChange}
							name='password'
							value={password}
						/>
					</label>
					<label className='text-lg text-gray-700 font-bold'>
						Repetir contraseña
            		<Input
							className='shadow'
							type='password'
							onChange={handleChange}
							name='repeatPassword'
							value={repeatPassword}
						/>
					</label>

					<Button
						type='submit'
						bgColor='orange'
						className='text-white py-4 px-2 mt-5 w-full'
					>
						Registrarme
          			</Button>
				</form>

				<p className='text-md w-full text-center mt-5'>
					¿Ya tienes cuenta de usuario?
          			<Link
						to='/login'
						className='text-orange-500 font-semibold hover:text-orange-600'
					>
						{' '}
            Iniciar sesión
          </Link>
				</p>
				<p className='text-xs w-full text-center mt-3'>
					Al registrarte con nosotros, aceptas nuestros
          			<Link
						to='/legal/terms'
						className='text-orange-500 font-semibold hover:text-orange-600'
					>
						{' '}
            Términos de servicio{' '}
					</Link>
          y
          			<Link
						to='/legal/privacy'
						className='text-orange-500 font-semibold hover:text-orange-600'
					>
						{' '}
            Política de Privacidad{' '}
					</Link>
				</p>
			</div>
		</div>
	)
}
