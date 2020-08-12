import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "container mx-auto px-2",
})`
  	width: 100%;
	padding: ${(props) => props.padding};
z-index: 1
	@media(min-width: 768px) {
		width: ${(props) => props.ancho};
	}
  `;
