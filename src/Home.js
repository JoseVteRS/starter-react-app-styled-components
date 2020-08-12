import React from "react";
import { Container } from "./Styled-Components/Container";
import { Input } from "./Styled-Components/Input";
import { Button } from "./Styled-Components/MainMenu";

import bg from "./assets/jbt-container.jpg";
import { Heading } from "./Styled-Components/Heading";

const sectionStyle = {
  backgroundImage:
    "linear-gradient(96deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url(" +
    bg +
    ")",
};

export const Home = () => {
  const title = "Únete a nuestra comunidad";

  return (
    <>
      <section id="Jumbotron">
        <div
          className="bg-gray-400 bg-center bg-cover py-32"
          style={sectionStyle}
        >
          <Container className="flex flex-col justify-center items-start py-8 h-screen-5">
            <h2 className="text-5xl font-bold text-white mb-5"> {title} </h2>

            <ul className="text-white text-2xl">
              <li>
                Crea tu biblioteca y ordénala con estantes personalizados.
              </li>
              <li>Accede a nuestro chat.</li>
              <li>Y participa en retos mensuales</li>
            </ul>

            <Button
              type={"button"}
              bgColor={"orange"}
              className="rounded-full inline-block mt-5 uppercase text-white p-3"
            >
              Registrarme a Nevook
            </Button>
          </Container>
        </div>
      </section>

      <section className="bg-orange-500 py-5">
        <Container ancho={"50%"} padding={"3em 1em"}>
          <Heading
            as={"h2"}
            className="w-full text-center mb-5"
            size={"4xl"}
            weight={"font-bold"}
            color={"white"}
          >
            Busca tu próxima lectura
          </Heading>

          <Input
            placeholder={"Buscar por: Título, Autor, Género"}
            name={"nombre"}
          ></Input>
        </Container>
      </section>

      <section className="bg-gray-200 py-12">
        <Heading
          as={"h2"}
          className="w-full text-center my-5"
          size={"4xl"}
          weight={"font-bold"}
          color={"blue-600"}
        >
          Últimos libros subidos a Nevook
        </Heading>



      </section>
    </>
  );
};
