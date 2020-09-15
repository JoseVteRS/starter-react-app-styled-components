import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Modal } from './Modal'
import { SingIn } from '../pages/SingIn'
import { useDispatch, useSelector } from 'react-redux'
import User from '../icons/User'
import { showModalAction, hideModalAction } from '../state/actions/ui'

export const MenuContainer = styled.div.attrs({
	className: 'flex items-center',
})`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(28, 102, 122, 0.8);
    backdrop-filter: blur(8px);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    Menu {
      display: flex;
      flex-direction: row;
    }
    MenuItem {
      color: #fff;
    }
  }
`

export const Menu = styled.ul.attrs({
	className: 'md:flex md:mr-12 text-center',
})``

export const MenuItem = styled.li.attrs({
	className:
		'my-5 text-lg font-semibold md:mx-2 hover:text-gray-300 cursor-pointer',
})`
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

export const MainMenu = ({ open }) => {
	const { showModal } = useSelector(state => state.ui)
	const { username } = useSelector((state) => state.auth);
	const dispatch = useDispatch()

	const handleShowModal = () => {
		dispatch(showModalAction())
	}

	const handleCloseModal = () => {
		console.log('Cerrar modal')
		dispatch(hideModalAction())
	}
	return (
		<>
			<MenuContainer open={open}>
				<Menu>
					<MenuItem>
						<NavLink to='/'>Inicio</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink to='/books'>Libros</NavLink>
					</MenuItem>
				</Menu>

				{
					!username && (
						<>
							<button onClick={handleShowModal} >
								Inicar sesión
    						</button>
							<NavLink
								to='/register'
								className='bg-orange-500 hover:bg-orange-600 p-1 rounded ml-2'
							>
								Registrarse
    						</NavLink>
						</>
					)
				}

				{
					username &&
					<div className='flex items-center'>
						<User className='mr-2' width={20} height={20} fill='#fff' />
						{username}
					</div>
				}


			</MenuContainer>

			{showModal &&
				<Modal show={showModal}>
					<SingIn onClick={handleCloseModal} />
				</Modal>}


		</>


	)
}
