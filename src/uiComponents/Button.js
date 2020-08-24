import React from 'react'
import styled from 'styled-components'



const StyledButton = styled.button.attrs((props) => ({
	type: `${props.type}`,
	className: `
		bg-${props.bgColor}-500
		hover:bg-${props.bgColor}-600
		text-${props.sizeText}
		p-2 my-2 text-lg text-white font-semibold focus:outline-none w-full rounded`,
}))`
	cursor: pointer;
	&[disabled] {
		opacity: 0.2;
        pointer-events: none;
	}

`

export const Button = ({ children, bgColor, sizeText, disabled }) => {

	return (
		<StyledButton
			bgColor={bgColor}
			sizeText={sizeText}
			disabled={disabled}>
			{children}
		</StyledButton>
	)
}
