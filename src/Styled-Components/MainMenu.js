import React from "react";
import styled from "styled-components";

export const MenuContainer = styled.div.attrs({
  className: "flex items-center",
})`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    ${"" /* background-color: #1C667A; */}
    background-color: rgba(28, 102, 122, .9);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
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
`;

export const Menu = styled.ul.attrs({
  className: "md:flex md:mr-12 text-center",
})``;

export const MenuItem = styled.li.attrs({
  className: "my-5 text-lg font-semibold md:mx-2 hover:text-gray-300 cursor-pointer",
})`
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: `${props.type}`,
  className: `bg-${props.bgColor}-500 hover:bg-${props.bgColor}-600  text-${
    props.sizeText
  } rounded ${props.marginright ? "mr-2" : ""} my-2 text-lg font-semibold focus:outline-none`,
}))``;

export const MainMenu = ({ open }) => {
  return (
    <MenuContainer open={open}>
      <Menu>
        <MenuItem> Inicio </MenuItem>
        <MenuItem> Libros </MenuItem>
        <MenuItem> Contacto </MenuItem>
      </Menu>

      <Button type={"button"} marginright>
        {" "}
        Inicar sesión{" "}
      </Button>
      <Button
        className="p-1"
        type={"button"}
        bgColor={"orange"}
        sizeText={"sm"}
      >
        {" "}
        Registrarse{" "}
      </Button>
    </MenuContainer>
  );
};
