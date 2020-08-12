import styled from 'styled-components';


export const Heading = styled.div.attrs((props) => ({
	className: `text-${props.size} ${props.weight ? props.weight : ''} text-${props.color}`,
  }))``;
