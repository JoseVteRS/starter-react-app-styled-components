import React from 'react'
import styled from 'styled-components'


const StyledModal = styled.div`
	height: 100vh;
	width: 100%;
	background: rgba(255, 184, 56, .9);
	display: ${({ show }) => (show ? 'flex' : 'none')};
	position: fixed;
	top: 0;
	left:0;
	align-items:center;
	justify-content: center;
	overflow: hidden;
	z-index:1;
`

export const Modal = ({ children, show }) => {

	return (
		<StyledModal show={show}>
			{children}
		</StyledModal>
	)
}
